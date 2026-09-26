import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Database, Cpu, CheckCircle2, ShieldCheck, Zap, Layers, Server } from 'lucide-react';

const TABS = [
  { id: 'engineer', label: 'engineer.ts' },
  { id: 'architecture', label: 'architecture.config' },
  { id: 'system', label: 'health_check.json' },
];

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState('engineer');

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Background Dim Off-Light Ambient Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-white/[0.04] via-slate-500/[0.06] to-white/[0.02] blur-3xl opacity-50 pointer-events-none" />

      {/* Orbiting Tech Floating Chips with Liquid Glass Effect */}
      <motion.div
        animate={{
          y: [-5, 5, -5],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-5 -right-2 sm:-right-5 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] backdrop-blur-xl border border-dashed border-white/20 text-[#E0E3E8] text-xs font-mono shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:border-white/40 transition-all cursor-default"
      >
        <Server className="w-3.5 h-3.5 text-zinc-300" />
        <span className="text-[#ECEFF2] font-semibold">Node.js + TypeScript</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
      </motion.div>

      <motion.div
        animate={{
          y: [5, -5, 5],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-5 -left-2 sm:-left-5 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] backdrop-blur-xl border border-dashed border-white/20 text-[#E0E3E8] text-xs font-mono shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:border-white/40 transition-all cursor-default"
      >
        <Database className="w-3.5 h-3.5 text-zinc-300" />
        <span className="text-[#ECEFF2] font-semibold">MongoDB Mongoose</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
      </motion.div>

      {/* Main Glass IDE Terminal Container */}
      <div className="relative rounded-2xl bg-[#090b12]/85 backdrop-blur-2xl border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Specular top sheen */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-dashed border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-600/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-600/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-600/80" />
            <span className="ml-2 text-xs font-mono text-[#9CA3AF] flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-zinc-400" />
              soham@production-node:~/backend
            </span>
          </div>

          {/* Code Tabs */}
          <div className="flex items-center gap-1 bg-black/40 p-0.5 rounded-lg border border-white/5">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                  activeTab === tab.id
                    ? 'bg-white/[0.08] text-[#ECEFF2] border border-white/15 shadow-sm font-semibold'
                    : 'text-[#8C93A0] hover:text-[#ECEFF2]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Code Content Area */}
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[300px] text-[#D8DCE2]">
          {activeTab === 'engineer' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-1"
            >
              <div>
                <span className="text-[#9CA3AF]">const</span>{' '}
                <span className="text-[#ECEFF2] font-semibold">seniorEngineer</span> = {'{'}
              </div>
              <div className="pl-4">
                <span className="text-[#7D8593]">name:</span>{' '}
                <span className="text-[#D1D5DB]">"Soham Rathod"</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#7D8593]">role:</span>{' '}
                <span className="text-[#D1D5DB]">"Senior Software Engineer"</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#7D8593]">experience:</span>{' '}
                <span className="text-[#D1D5DB]">"5+ years professional"</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#7D8593]">mainTechStack:</span> [
              </div>
              <div className="pl-8 text-[#E2E8F0] font-medium">
                "Node.js", "TypeScript", "Express.js", "MongoDB", "REST APIs"
              </div>
              <div className="pl-4">],</div>
              <div className="pl-4">
                <span className="text-[#7D8593]">frontendKnowledge:</span> [
              </div>
              <div className="pl-8 text-[#CBD5E1]">
                "Next.js", "React", "TypeScript", "Tailwind CSS"
              </div>
              <div className="pl-4">],</div>
              <div className="pl-4">
                <span className="text-[#7D8593]">integrations:</span> [
              </div>
              <div className="pl-8 text-[#94A3B8]">
                "Payment Gateways", "Webhooks", "OAuth 2.0", "Third-Party APIs"
              </div>
              <div className="pl-4">],</div>
              <div className="pl-4">
                <span className="text-[#7D8593]">mindset:</span>{' '}
                <span className="text-[#E2E8F0]">"Understand. Architect. Build. Scale."</span>
              </div>
              <div>{'};'}</div>
            </motion.div>
          )}

          {activeTab === 'architecture' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-3 text-xs"
            >
              <div className="text-[#8C93A0] font-mono">// Modular Micro-Architecture Pipeline</div>
              <div className="p-3 rounded-lg bg-white/[0.015] border border-dashed border-white/10 space-y-2">
                <div className="flex items-center justify-between text-[#D1D5DB]">
                  <span className="text-[#9CA3AF]">1. Client Tier:</span>
                  <span className="text-[#ECEFF2]">Next.js / React (SSR + Hydration)</span>
                </div>
                <div className="flex items-center justify-between text-[#D1D5DB]">
                  <span className="text-[#9CA3AF]">2. Ingress & Auth:</span>
                  <span className="text-[#ECEFF2]">JWT Token Rotation + Rate Limiting</span>
                </div>
                <div className="flex items-center justify-between text-[#D1D5DB]">
                  <span className="text-[#9CA3AF]">3. Business Service:</span>
                  <span className="text-[#ECEFF2]">Node.js Express / Nest Controllers</span>
                </div>
                <div className="flex items-center justify-between text-[#D1D5DB]">
                  <span className="text-[#9CA3AF]">4. Persistence:</span>
                  <span className="text-[#ECEFF2]">MongoDB ReplicaSet (ACID Sessions)</span>
                </div>
              </div>
              <div className="text-[#7A8394] text-[11px]">
                Status: Verified idempotent webhook listeners & compound index clusters.
              </div>
            </motion.div>
          )}

          {activeTab === 'system' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-2.5 text-xs font-mono"
            >
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-dashed border-white/10 text-[#D1D5DB]">
                <span className="flex items-center gap-2 text-[#ECEFF2]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/90" /> API Gateway Health
                </span>
                <span className="text-[#ECEFF2] font-semibold">200 OK (14ms)</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-dashed border-white/10 text-[#D1D5DB]">
                <span className="flex items-center gap-2 text-[#ECEFF2]">
                  <Database className="w-3.5 h-3.5 text-[#CBD5E1]" /> MongoDB Atlas Cluster
                </span>
                <span className="text-[#8C93A0]">Connected (Primary)</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-dashed border-white/10 text-[#D1D5DB]">
                <span className="flex items-center gap-2 text-[#ECEFF2]">
                  <Zap className="w-3.5 h-3.5 text-[#CBD5E1]" /> Webhook Ingestion Pipe
                </span>
                <span className="text-[#8C93A0]">Active (0 Duplicates)</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-dashed border-white/10 text-[#D1D5DB]">
                <span className="flex items-center gap-2 text-[#ECEFF2]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#CBD5E1]" /> Security Middleware
                </span>
                <span className="text-[#8C93A0]">CORS & HMAC Ready</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Terminal Footer Status Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-black/50 border-t border-dashed border-white/10 text-[11px] font-mono text-[#8C93A0]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[#D8DCE2]">Runtime: Node v20.x ESM</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#64748B]">UTF-8</span>
            <span className="text-[#CBD5E1]">TypeScript Strict</span>
          </div>
        </div>
      </div>
    </div>
  );
};
