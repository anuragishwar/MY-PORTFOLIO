"use client";

import React from 'react';
import { Terminal, Cpu, Code2, Mail, ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-[#030014] text-gray-100 font-sans overflow-x-hidden">

            {/* BACKGROUND NEON GLOW EFFECTS */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[150px] opacity-30 animate-pulse-slow pointer-events-none"></div>
            <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500 rounded-full mix-blend-screen filter blur-[180px] opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-pink-500 rounded-full mix-blend-screen filter blur-[130px] opacity-25 animate-pulse-slow pointer-events-none"></div>

            {/* NAVBAR */}
            <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#030014]/70 border-b border-purple-500/10 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
                <div className="text-xl font-mono font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
                    &lt;Anurag.AI /&gt;
                </div>
                <div className="flex gap-6 text-sm font-mono text-gray-400">
                    <a href="#about" className="hover:text-cyan-400 transition-colors">_about</a>
                    <a href="#skills" className="hover:text-fuchsia-400 transition-colors">_skills</a>
                    <a href="#projects" className="hover:text-pink-400 transition-colors">_projects</a>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section id="about" className="max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">

                {/* Left Content */}
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-6">
                        <Cpu size={14} className="animate-spin-slow" /> Available for Full-Stack & AI Roles
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                        ANURAG KUMAR<br />
                        <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.3)]">
                            ISHWAR
                        </span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl font-mono">
                        &gt; CSE AI Student & Software Developer. Building core applications with intelligent AI integrations.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
                        <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.7)] transition-all duration-300 transform hover:-translate-y-1">
                            Explore Projects
                        </a>
                        <a href="mailto:anuragkumarishwar@gmail.com" className="px-8 py-4 bg-white/5 border border-white/10 hover:border-cyan-500/50 text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
                            Contact Me <Mail size={18} />
                        </a>
                    </div>
                </div>

                {/* Right Photo Area */}
                <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-indigo-500 rounded-3xl blur-xl opacity-40 animate-pulse-slow"></div>
                    <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 rounded-3xl animate-spin-slow opacity-70"></div>
                    <div className="relative p-1 bg-[#030014] rounded-3xl overflow-hidden">

                        {/* 🔴 YAHAN .jpg KI JAGAH .png KARIYE */}
                        <img
                            src="/profile.png"
                            alt="Anurag Kumar Ishwar"
                            className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl block relative z-10"
                            onError={(e) => {
                                e.currentTarget.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80";
                            }}
                        />

                        <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-xl font-mono text-xs flex items-center justify-between z-20">
                            <span className="text-green-400">● LIVE_SYSTEM_OK</span>
                            <span className="text-gray-400">SYS_DEV_AI</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SKILLS SECTION */}
            <section id="skills" className="max-w-7xl mx-auto px-6 py-24 border-t border-purple-500/10 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold font-mono tracking-wider bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            // TECH_STACK
                    </h2>
                    <p className="text-gray-500 font-mono mt-2">Tools I use to build smart architectures</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 p-8 rounded-2xl backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                        <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 w-fit mb-6"><Cpu size={24} /></div>
                        <h3 className="text-xl font-bold font-mono mb-4 text-cyan-400">Artificial Intelligence</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Python', 'Machine Learning', 'Deep Learning', 'Neural Networks', 'NLP'].map((s) => (
                                <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-gray-300">{s}</span>
                            ))}
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/[0.02] border border-white/5 hover:border-fuchsia-500/30 p-8 rounded-2xl backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,70,239,0.1)]">
                        <div className="p-3 bg-fuchsia-500/10 rounded-xl text-fuchsia-400 w-fit mb-6"><Code2 size={24} /></div>
                        <h3 className="text-xl font-bold font-mono mb-4 text-fuchsia-400">Software Development</h3>
                        <div className="flex flex-wrap gap-2">
                            {['JavaScript', 'React.js', 'Next.js', 'Node.js', 'Tailwind CSS'].map((s) => (
                                <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-gray-300">{s}</span>
                            ))}
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/[0.02] border border-white/5 hover:border-pink-500/30 p-8 rounded-2xl backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,63,94,0.1)]">
                        <div className="p-3 bg-pink-500/10 rounded-xl text-pink-400 w-fit mb-6"><Terminal size={24} /></div>
                        <h3 className="text-xl font-bold font-mono mb-4 text-pink-400">Databases & DevOps</h3>
                        <div className="flex flex-wrap gap-2">
                            {['MongoDB', 'PostgreSQL', 'SQL', 'Git / GitHub', 'Docker'].map((s) => (
                                <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-gray-300">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="max-w-7xl mx-auto px-6 py-24 border-t border-purple-500/10 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold font-mono tracking-wider bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            // SELECTED_PROJECTS
                    </h2>
                    <p className="text-gray-500 font-mono mt-2">Where Code meets Artificial Intelligence</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Project 1 */}
                    <div className="group relative bg-white/[0.01] border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-mono px-2.5 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30 rounded-md">
                                    AI + Full Stack
                                </span>
                                <div className="flex gap-3 text-gray-400">
                                    <span className="text-xs font-mono">Code</span>
                                    <span className="text-xs font-mono">Live</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold font-mono group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                                Intelligent Analytics Platform <ArrowUpRight size={20} className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
                            </h3>
                            <p className="mt-4 text-gray-400 font-mono text-sm leading-relaxed">
                                An advanced web software integrated with machine learning models to predict user churn rates and behavior analytics with high precision graphics.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {['Next.js', 'Python', 'FastAPI', 'Tailwind', 'MongoDB'].map((t) => (
                                    <span key={t} className="text-xs font-mono px-2 py-0.5 bg-white/5 rounded text-gray-400">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="group relative bg-white/[0.01] border border-white/5 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-all duration-300">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-mono px-2.5 py-1 bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20 text-pink-400 border border-pink-500/30 rounded-md">
                                    Computer Vision Software
                                </span>
                                <div className="flex gap-3 text-gray-400">
                                    <span className="text-xs font-mono">Code</span>
                                    <span className="text-xs font-mono">Live</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold font-mono group-hover:text-pink-400 transition-colors flex items-center gap-2">
                                Smart Vision Automation <ArrowUpRight size={20} className="text-gray-500 group-hover:text-pink-400 transition-colors" />
                            </h3>
                            <p className="mt-4 text-gray-400 font-mono text-sm leading-relaxed">
                                Real-time object detection and classification software system deployed using highly compressed computer vision pipelines.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {['Python', 'OpenCV', 'PyTorch', 'Docker', 'React'].map((t) => (
                                    <span key={t} className="text-xs font-mono px-2 py-0.5 bg-white/5 rounded text-gray-400">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-white/5 bg-black/40 py-12 px-6 relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="font-mono text-sm text-gray-500">
                        &copy; 2026 Anurag Kumar Ishwar. Built with bold neon passion.
                    </p>
                    <div className="flex gap-6 text-gray-400 font-mono text-sm">
                        <span className="cursor-pointer hover:text-white transition-colors">GitHub</span>
                        <span className="cursor-pointer hover:text-white transition-colors">LinkedIn</span>
                        <a href="mailto:anuragkumarishwar@gmail.com" className="hover:text-white transition-colors">Email</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}