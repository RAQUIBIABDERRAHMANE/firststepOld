'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRightIcon, PlayIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  
  const texts = [
    "Neural Networks",
    "Quantum Computing", 
    "AI Automation",
    "Blockchain Systems",
    "Metaverse Ready"
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 gradient-mesh animate-morphing" />
        
        {/* Cyber Grid */}
        <div className="absolute inset-0 cyber-grid opacity-30" />
        
        {/* Floating Particles - Only render client-side */}
        {mounted && (
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${6 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        )}
        
        {/* Interactive Light Effect - Only render client-side */}
        {mounted && (
          <div 
            className="absolute w-96 h-96 rounded-full opacity-20 pointer-events-none transition-all duration-300 ease-out"
            style={{
              background: `radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)`,
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
            }}
          />
        )}
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rotate-45 animate-float neural-border" />
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-purple-400/30 rotate-12 animate-float delay-1000" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rotate-45 animate-morphing" />
        <div className="absolute bottom-20 left-1/3 w-20 h-20 border border-green-400/30 rounded-full animate-pulse-slow delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Status Badge */}
          <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium glass-card mb-8 neural-border">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse status-online" />
            <span className="text-gray-300 text-mono">SYSTEM.STATUS: OPERATIONAL</span>
            <SparklesIcon className="w-4 h-4 ml-2 text-cyan-400 animate-neon-flicker" />
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-8">
            <span className="block text-white mb-4 animate-hologram">Transform</span>
            <span className="block plasma-text animate-data-flow">
              {texts[currentText]}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Next-generation enterprise platform powered by{' '}
            <span className="neon-text">Artificial Intelligence</span>. 
            Streamline operations across healthcare, hospitality, logistics, and beyond with{' '}
            <span className="text-gradient-cyber">quantum-ready architecture</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="#pricing" className="group quantum-btn micro-bounce">
              <span className="relative z-10 flex items-center">
                Initialize System
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>

            <button className="group btn-secondary micro-glow">
              <PlayIcon className="mr-2 h-5 w-5" />
              <span>Neural Demo</span>
            </button>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { value: "99.9%", label: "Uptime", sublabel: "SLA Guaranteed", icon: "🛡️" },
              { value: "15K+", label: "Enterprises", sublabel: "Worldwide", icon: "🌐" },
              { value: "<10ms", label: "Response", sublabel: "Neural Speed", icon: "⚡" },
              { value: "24/7", label: "AI Support", sublabel: "Global Coverage", icon: "🤖" }
            ].map((stat, index) => (
              <div key={index} className="text-center group glass-card p-6 rounded-2xl card-hover delay-100" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl mb-3 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 neon-text">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-300 mb-1 text-mono">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>

          {/* Technology Stack */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider text-mono">POWERED_BY</p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-80">
              {[
                { name: "AI/ML", color: "from-cyan-400 to-blue-500" },
                { name: "Quantum", color: "from-purple-400 to-pink-500" },
                { name: "Blockchain", color: "from-green-400 to-emerald-500" },
                { name: "Neural", color: "from-orange-400 to-red-500" },
                { name: "Metaverse", color: "from-indigo-400 to-purple-500" }
              ].map((tech, index) => (
                <div 
                  key={index} 
                  className={`px-6 py-3 glass-card rounded-xl border border-white/20 text-sm text-gray-300 hover:text-white transition-all duration-300 micro-bounce neural-border bg-gradient-to-r ${tech.color} bg-opacity-10`}
                >
                  <span className="text-mono">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce" />
          <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Data Streams */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent data-stream"
            style={{
              top: `${20 + i * 20}%`,
              width: '100%',
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}