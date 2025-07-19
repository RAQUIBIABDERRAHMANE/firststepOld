'use client'
import { useState, useEffect } from "react";
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
    if (!mounted) return
    
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length, mounted]);

  useEffect(() => {
    if (!mounted) return
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mounted]);

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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="block text-white mb-4">Enterprise Management</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {texts[currentText]}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional enterprise management solutions for healthcare, hospitality, logistics, and more. 
            Streamline your operations with our comprehensive platform designed for modern businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a 
              href="#signup"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center"
            >
              Get Started
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <button className="group px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-200 flex items-center">
              <PlayIcon className="mr-2 h-5 w-5" />
              Watch Demo
            </button>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { value: "99.9%", label: "Uptime", sublabel: "Guaranteed", icon: "🛡️" },
              { value: "5K+", label: "Companies", sublabel: "Trust Us", icon: "🌐" },
              { value: "24/7", label: "Support", sublabel: "Available", icon: "⚡" },
              { value: "50+", label: "Countries", sublabel: "Worldwide", icon: "🌍" }
            ].map((stat, index) => (
              <div key={index} className="text-center group bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-300 mb-1">
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
            <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider">Powered By</p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-80">
              {[
                { name: "React", color: "from-blue-400 to-blue-600" },
                { name: "Next.js", color: "from-gray-400 to-gray-600" },
                { name: "TypeScript", color: "from-blue-500 to-blue-700" },
                { name: "Node.js", color: "from-green-400 to-green-600" },
                { name: "PostgreSQL", color: "from-blue-600 to-indigo-600" }
              ].map((tech, index) => (
                <div 
                  key={index} 
                  className={`px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-sm text-gray-300 hover:text-white transition-all duration-300`}
                >
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
}