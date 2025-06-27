'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRightIcon, PlayIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  
  const texts = [
    "Enterprise Management",
    "Digital Transformation", 
    "Business Automation",
    "Smart Solutions",
    "Future-Ready Systems"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Animated Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-500/20 rotate-45 animate-pulse" />
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-purple-500/20 rotate-12 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rotate-45" />
        <div className="absolute bottom-20 left-1/3 w-20 h-20 border border-cyan-500/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Status Badge */}
          <div className="inline-flex items-center rounded-full px-6 py-2 text-sm font-medium bg-white/5 text-white border border-white/10 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            <span className="text-gray-300">System Status: Operational</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-8">
            <span className="block text-white mb-4">Transform</span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {texts[currentText]}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Next-generation enterprise platform powered by AI. Streamline operations 
            across healthcare, hospitality, logistics, and beyond.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="#pricing" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              <span>Start Building</span>
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/5 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <PlayIcon className="mr-2 h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { value: "99.9%", label: "Uptime", sublabel: "SLA Guaranteed" },
              { value: "15K+", label: "Enterprises", sublabel: "Worldwide" },
              { value: "<50ms", label: "Response", sublabel: "Average Latency" },
              { value: "24/7", label: "Support", sublabel: "Global Coverage" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
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
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["AI/ML", "Cloud Native", "Microservices", "Real-time", "Blockchain"].map((tech, index) => (
                <div key={index} className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-300 hover:text-white hover:border-white/20 transition-all duration-300">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
}