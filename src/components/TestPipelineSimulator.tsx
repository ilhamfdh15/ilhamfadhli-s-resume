import React, { useState, useEffect, useRef } from 'react';
import { SIMULATOR_SUITES, SimulatorSuite } from '../data/resumeData';
import { Play, RotateCcw, CheckCircle2, Loader2, Terminal, ShieldCheck, Check, Server } from 'lucide-react';

export const TestPipelineSimulator: React.FC = () => {
  const [selectedSuiteId, setSelectedSuiteId] = useState<string>(SIMULATOR_SUITES[0].id);
  const [status, setStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  const [activeStepIndex, setActiveStepIndex] = useState<number>(-1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [totalElapsedTime, setTotalElapsedTime] = useState<number>(0);
  const [logs, setLogs] = useState<string[]>([]);
  const logsEndRef = useRef<HTMLDivElement>(null);

  const currentSuite =
    SIMULATOR_SUITES.find((s) => s.id === selectedSuiteId) || SIMULATOR_SUITES[0];

  const resetRunner = () => {
    setStatus('idle');
    setActiveStepIndex(-1);
    setCompletedSteps([]);
    setTotalElapsedTime(0);
    setLogs([]);
  };

  const handleSelectSuite = (id: string) => {
    if (status === 'running') return;
    setSelectedSuiteId(id);
    resetRunner();
  };

  useEffect(() => {
    if (status !== 'running') return;

    let isMounted = true;

    const runSteps = async () => {
      const suite = currentSuite;
      setLogs((prev) => [
        `[INIT] Initializing automated test suite: ${suite.name}`,
        `[TARGET] Target System: ${suite.targetSystem}`,
        `[DISPATCH] Spawning runner environment via GitHub Actions runner...`,
      ]);

      let elapsed = 0;

      for (let i = 0; i < suite.steps.length; i++) {
        if (!isMounted) break;
        const step = suite.steps[i];
        setActiveStepIndex(i);

        setLogs((prev) => [
          ...prev,
          `\n>>> [STEP ${i + 1}/${suite.steps.length}] ${step.title}`,
          `    ACTION: ${step.action}`,
        ]);

        await new Promise((resolve) => setTimeout(resolve, step.durationMs));

        if (!isMounted) break;

        elapsed += step.durationMs;
        setTotalElapsedTime(elapsed);
        setCompletedSteps((prev) => [...prev, i]);

        setLogs((prev) => [
          ...prev,
          `    ASSERTION: ${step.assertion}`,
          `    STATUS: PASS (+${step.durationMs}ms)`,
        ]);
      }

      if (isMounted) {
        setActiveStepIndex(-1);
        setStatus('completed');
        setLogs((prev) => [
          ...prev,
          `\n======================================================`,
          `[SUCCESS] Suite execution finished with ZERO DEFECTS.`,
          `[REPORT] TestRail Test Run updated. JIRA sprint release passed gate.`,
          `[RESULT] 100% Assertions Satisfied. Total Run Duration: ${(elapsed / 1000).toFixed(2)}s`,
        ]);
      }
    };

    runSteps();

    return () => {
      isMounted = false;
    };
  }, [status]);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <section id="simulator" className="pt-16 pb-20 border-b border-slate-800/80 bg-[#080d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Interactive Test Automation Sandbox
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
              Live QA Pipeline & Smoke Test Runner
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
              Experience the automated test pipelines engineered by Ilham Fadhli. Select an industry test suite below to simulate live smoke test execution and defect assertions.
            </p>
          </div>

          {/* Quick Run Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {status === 'idle' && (
              <button
                onClick={() => setStatus('running')}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <Play className="w-4 h-4 fill-slate-900" />
                <span>Run Smoke Test Suite</span>
              </button>
            )}

            {status === 'running' && (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-cyan-300 bg-cyan-950/80 border border-cyan-800/60 rounded-lg">
                <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                <span>Executing Assertions...</span>
              </div>
            )}

            {status === 'completed' && (
              <button
                onClick={resetRunner}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                <RotateCcw className="w-4 h-4 text-emerald-400" />
                <span>Reset Test Environment</span>
              </button>
            )}
          </div>
        </div>

        {/* Test Suite Selector Segment */}
        <div className="flex flex-wrap items-center gap-2">
          {SIMULATOR_SUITES.map((suite) => {
            const isSelected = suite.id === selectedSuiteId;
            return (
              <button
                key={suite.id}
                onClick={() => handleSelectSuite(suite.id)}
                disabled={status === 'running'}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all text-left ${
                  isSelected
                    ? 'bg-[#131f38] text-slate-100 border border-cyan-500/50 shadow-sm ring-1 ring-cyan-500/20'
                    : 'bg-[#0f172a] text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                } ${status === 'running' ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                <div className="font-semibold text-slate-200">{suite.name}</div>
                <div className="text-[11px] font-mono text-slate-400">
                  {suite.industry} · {suite.steps.length} Assertions
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Runner Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Test Steps Progress (7 cols) */}
          <div className="lg:col-span-7 bg-[#0d1424] border border-slate-800 rounded-xl p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold text-slate-200">
                  Test Execution Plan: {currentSuite.targetSystem}
                </span>
              </div>
              <div className="font-mono text-xs tabular-nums text-slate-400">
                Duration: {(totalElapsedTime / 1000).toFixed(2)}s
              </div>
            </div>

            <div className="space-y-3">
              {currentSuite.steps.map((step, idx) => {
                const isPassed = completedSteps.includes(idx);
                const isCurrent = activeStepIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-lg border transition-all ${
                      isPassed
                        ? 'bg-emerald-950/20 border-emerald-500/40'
                        : isCurrent
                        ? 'bg-cyan-950/30 border-cyan-500/60 ring-1 ring-cyan-500/30'
                        : 'bg-[#111a2e] border-slate-800/80 opacity-70'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-slate-400 font-semibold">
                            STEP 0{idx + 1}
                          </span>
                          <span className="text-xs font-bold text-slate-200">
                            {step.title}
                          </span>
                        </div>
                        <div className="text-xs font-mono text-slate-400">
                          {step.action}
                        </div>
                        {isPassed && (
                          <div className="text-xs font-mono text-emerald-400 pt-1 flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5" />
                            <span>{step.assertion}</span>
                          </div>
                        )}
                      </div>

                      <div className="shrink-0 text-right font-mono text-xs">
                        {isPassed && (
                          <span className="text-emerald-400 font-bold">PASS</span>
                        )}
                        {isCurrent && (
                          <span className="text-cyan-400 font-bold flex items-center gap-1">
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            RUNNING
                          </span>
                        )}
                        {!isPassed && !isCurrent && (
                          <span className="text-slate-600">PENDING</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {status === 'completed' && (
              <div className="p-4 bg-emerald-950/30 border border-emerald-500/40 rounded-lg flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-emerald-300">
                      Suite Passed — Zero Regression Blockers
                    </div>
                    <div className="text-xs text-slate-300">
                      GitHub Actions check passed · TestRail release suite updated
                    </div>
                  </div>
                </div>
                <button
                  onClick={resetRunner}
                  className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded border border-slate-700"
                >
                  Run Again
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Live Terminal Output (5 cols) */}
          <div className="lg:col-span-5 bg-[#050911] border border-slate-800 rounded-xl overflow-hidden flex flex-col h-[460px]">
            {/* Terminal Header */}
            <div className="px-4 py-2.5 bg-[#0b101c] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs font-mono text-slate-300">
                  runner-session.log
                </span>
              </div>
              <div className="text-[11px] font-mono text-slate-500">
                bash / pytest / newman
              </div>
            </div>

            {/* Terminal Stream */}
            <div className="p-4 font-mono text-xs text-slate-300 space-y-1.5 overflow-y-auto flex-1 select-text">
              {logs.length === 0 ? (
                <div className="text-slate-600 py-12 text-center space-y-2">
                  <div>[Console ready. Click "Run Smoke Test Suite" to stream live assertions.]</div>
                  <div className="text-[11px] text-slate-700">Demonstrating real-time API assertion checks and test reporting.</div>
                </div>
              ) : (
                logs.map((log, i) => (
                  <div
                    key={i}
                    className={
                      log.includes('PASS')
                        ? 'text-emerald-400'
                        : log.includes('STEP')
                        ? 'text-cyan-400 font-semibold'
                        : log.includes('SUCCESS')
                        ? 'text-emerald-300 font-bold'
                        : log.includes('ACTION')
                        ? 'text-slate-400'
                        : 'text-slate-300'
                    }
                  >
                    {log}
                  </div>
                ))
              )}
              <div ref={logsEndRef} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
