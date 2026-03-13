/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Video, 
  Crown, 
  BookOpen, 
  TrendingUp, 
  ShieldCheck, 
  Box, 
  Check, 
  X, 
  Play,
  User,
  LayoutGrid,
  ChevronRight,
  Zap,
  Target
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-32">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 sticky top-0 bg-[#050505]/80 backdrop-blur-md z-50">
        <div className="w-10" />
        <h1 className="text-lg font-medium">会员权益</h1>
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-white rounded-full opacity-50" />
            <div className="w-1 h-1 bg-white rounded-full" />
            <div className="w-1 h-1 bg-white rounded-full opacity-50" />
          </div>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border-2 border-white/60" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 pt-12 pb-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial-gradient from-blue-600/20 to-transparent opacity-50 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
        >
          <span className="text-xl">🦞</span>
          <span className="text-xs font-black tracking-[0.2em] bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">PolarClaw</span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-xs font-medium tracking-[0.3em] mb-4 uppercase opacity-80"
        >
          托管运营 · 躺着挣钱
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-black mb-6 tracking-tighter leading-[1.1]"
        >
          一键成片<br />
          <span className="bg-gradient-to-b from-white to-white/30 bg-clip-text text-transparent">发布海外</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-[10px] max-w-[240px] mx-auto leading-relaxed font-medium tracking-wide"
        >
          由顶级AI算力驱动<br />
          打磨24小时不间断监督管理
        </motion.p>

        {/* Video Placeholder */}
       
      </section>

      {/* Feature Grid */}
      <section className="px-4 grid grid-cols-3 gap-y-8 mb-12">
        {[
          { icon: Video, label: "短剧成片", sub: "制作轻松，分佣拿到手软" },
          { icon: Crown, label: "终身使用", sub: "一次购买，用到天荒地老" },
          { icon: BookOpen, label: "热门小说", sub: "潮流爆款，算法自动推荐" },
          { icon: TrendingUp, label: "解锁更高分佣", sub: "0风险，千百倍回报率" },
          { icon: ShieldCheck, label: "账号代管", sub: "注册起号，一次行全处理" },
          { icon: Box, label: "龙虾加持", sub: "智能任务，跟剪辑说再见" },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex flex-col items-center text-center px-1"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 text-xl">
              {item.label.includes("龙虾") ? "🦞" : <item.icon size={20} className="text-blue-400" />}
            </div>
            <h3 className="text-[10px] font-medium mb-1 whitespace-nowrap">{item.label}</h3>
            <p className="text-[8px] text-gray-500 leading-tight line-clamp-2">{item.sub}</p>
          </motion.div>
        ))}
      </section>

      {/* Pricing Cards */}
      <section className="px-4 space-y-4 mb-12">
        <div className="grid grid-cols-12 gap-4">
          {/* Left Card: Practical Course */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-5 bg-[#12121A] rounded-3xl p-5 border border-white/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LayoutGrid size={16} className="text-blue-400" />
                <h3 className="text-sm font-bold">专属实战课</h3>
              </div>
              <p className="text-[10px] text-blue-400 mb-6">有难度，但收益最高</p>
              
              <ul className="space-y-3">
                {[
                  "0-1实战暴力起号",
                  "独家高收益剧池",
                  "爆款视频黄金剪辑",
                  "全套风控避坑指南",
                  "助教1对1陪跑指导"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-2 text-[10px] text-gray-400">
                    <div className="w-3 h-3 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                      <Check size={8} />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-12">
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold">¥ 699</span>
              </div>
              <p className="text-[10px] text-gray-600 line-through">原价 ¥ 999</p>
            </div>
          </motion.div>

          {/* Right Cards: VIP & Experience */}
          <div className="col-span-7 space-y-4">
            {/* VIP Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#4D38F0] to-[#2D1BA3] rounded-3xl p-5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-white/20 backdrop-blur-md px-3 py-1 rounded-bl-xl flex items-center gap-1">
                <TrendingUp size={10} />
                <span className="text-[10px] font-bold">性价比最高</span>
              </div>
              
              <h3 className="text-lg font-bold mb-1">PolarClaw 🦞 终身会员</h3>
              <p className="text-[10px] text-white/70 mb-1">AI全自动矩阵托管</p>
              <p className="text-[10px] text-white/70 mb-4">收益权重永久加成</p>
              
              <div className="bg-white/10 rounded-lg px-2 py-1 inline-block mb-6">
                <span className="text-[10px]">无限次小龙虾任务 🦞</span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">¥ 298</span>
                <span className="text-[10px] text-white/50 line-through">原价 ¥ 698</span>
              </div>
              <p className="text-[10px] text-white/60 mt-1">✦ 权重极高 回报最快</p>
            </motion.div>

            {/* Experience Pack */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#1A1A24] rounded-3xl p-5 border border-white/5 relative"
            >
              <div className="flex items-start justify-between mb-4 gap-2">
                <div className="flex items-center gap-2">
                  <Box size={16} className="text-gray-400 shrink-0" />
                  <h3 className="text-sm font-bold leading-tight">PolarClaw 🦞 体验礼包</h3>
                </div>
                <div className="bg-[#6B46FF] px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                  <span className="text-[10px] font-bold">限时秒杀</span>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-[10px] text-gray-400">
                  <Check size={10} className="text-gray-600" />
                  先拿收益，再付费
                </li>
                <li className="flex items-center gap-2 text-[10px] text-gray-400">
                  <Check size={10} className="text-gray-600" />
                  试用3天小龙虾任务 🦞·满意即留
                </li>
              </ul>

              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">¥ 1.99</span>
                <span className="text-[10px] text-gray-600 line-through">原价 ¥ 29.9</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 mb-12">
        <h2 className="text-center text-xl font-bold mb-6 tracking-widest">权益对比</h2>
        
        <div className="bg-[#0D0D14] rounded-2xl overflow-hidden border border-white/5">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="text-[11px] text-gray-400 border-bottom border-white/5">
                <th className="py-4 font-medium">权益</th>
                <th className="py-4 font-medium bg-[#1A1A2E] text-purple-400">终身</th>
                <th className="py-4 font-medium">体验</th>
                <th className="py-4 font-medium">自学</th>
              </tr>
            </thead>
            <tbody className="text-[11px]">
              {[
                { label: "小龙虾任务", v1: "无限", v2: "3天", v3: false },
                { label: "一键剪辑", v1: true, v2: true, v3: false },
                { label: "一键发布", v1: true, v2: true, v3: false },
                { label: "账号注册", v1: "自动", v2: "自动", v3: "手动" },
                { label: "分佣比例", v1: "60%", v2: "40%", v3: "65%" },
                { label: "账号稳定", v1: "极佳", v2: "极佳", v3: "手动" },
                { label: "脚本生成", v1: true, v2: true, v3: false },
                { label: "助教指导", v1: true, v2: false, v3: true },
                { label: "智能改号", v1: true, v2: true, v3: false },
                { label: "内容去重", v1: true, v2: true, v3: true },
                
              ].map((row, i) => (
                <tr key={i} className="border-t border-white/5">
                  <td className="py-4 text-gray-400">{row.label}</td>
                  <td className="py-4 bg-[#1A1A2E]/50 text-purple-300">
                    {typeof row.v1 === 'boolean' ? (row.v1 ? <Check size={14} className="mx-auto" /> : <X size={14} className="mx-auto opacity-20" />) : row.v1}
                  </td>
                  <td className="py-4 text-gray-300">
                    {typeof row.v2 === 'boolean' ? (row.v2 ? <Check size={14} className="mx-auto" /> : <X size={14} className="mx-auto opacity-20" />) : row.v2}
                  </td>
                  <td className="py-4 text-gray-600">
                    {typeof row.v3 === 'boolean' ? (row.v3 ? <Check size={14} className="mx-auto" /> : <X size={14} className="mx-auto opacity-20" />) : row.v3}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-20 left-0 w-full px-4 z-40">
        <div className="bg-[#0D0D14]/90 backdrop-blur-xl border border-white/10 rounded-full p-2 flex items-center justify-between shadow-2xl">
          <div className="pl-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-blue-400 font-bold tracking-wider"> 🦞 限时特惠·终身特权</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">¥ 298</span>
              <span className="text-xs text-gray-600 line-through">¥ 698</span>
            </div>
          </div>
          <button className="bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] hover:from-[#9D3FF2] hover:to-[#5B11F1] px-10 py-3.5 rounded-full text-sm font-bold transition-all active:scale-95 shadow-lg shadow-purple-500/20 flex items-center gap-2">
            <span>立即开通</span>
            <span className="text-lg">🦞</span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#050505] border-t border-white/5 px-6 py-3 flex justify-between items-center z-50">
        <button className="flex flex-col items-center gap-1 text-gray-500">
          <Video size={20} />
          <span className="text-[10px]">选剧中心</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-blue-500">
          <Crown size={20} />
          <span className="text-[10px]">会员权益</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-500">
          <User size={20} />
          <span className="text-[10px]">个人中心</span>
        </button>
      </nav>
    </div>
  );
}
