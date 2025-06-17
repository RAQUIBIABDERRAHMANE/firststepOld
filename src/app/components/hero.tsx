'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRightIcon, PlayIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const texts = [
    "AI-Powered Analytics",
    "Cloud Infrastructure", 
    "Real-time Monitoring",
    "Smart Automation",
    "Enterprise Security"
  ];

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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black grid-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 animate-float"
          style={{
            background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)',
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-15 animate-float"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-10 animate-float"
          style={{
            background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
            left: '20%',
            top: '20%',
            animationDelay: '4s'
          }}
        />
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-cyan-400/30 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-purple-400/30 animate-pulse-slow" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Status Badge */}
          <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-white/5 text-cyan-400 border border-cyan-400/30 backdrop-blur-sm mb-12 status-online">
            <SparklesIcon className="w-4 h-4 mr-2" />
            <span className="text-mono">SYSTEM.STATUS: ONLINE</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-hero mb-8">
            Next-Generation
            <br />
            <span className="relative inline-block">
              <span className="neon-text">
                {texts[currentText]}
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-20 animate-pulse-slow" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Revolutionize your business operations with our cutting-edge management platform.
            <br />
            <span className="text-cyan-400 font-medium">Built for the future. Deployed today.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="#pricing" className="btn-primary group">
              <span className="relative z-10 flex items-center">
                Initialize System
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>

            <button className="btn-secondary group">
              <PlayIcon className="mr-2 h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { value: "99.9%", label: "Uptime", color: "text-green-400" },
              { value: "15K+", label: "Active Users", color: "text-cyan-400" },
              { value: "50ms", label: "Response Time", color: "text-purple-400" },
              { value: "24/7", label: "Support", color: "text-orange-400" }
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <div className={`text-3xl font-bold ${stat.color} mb-2 text-mono`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
            <div className="text-sm text-gray-400 font-mono">POWERED BY:</div>
            {["NEXT.JS", "TYPESCRIPT", "AI/ML", "CLOUD", "BLOCKCHAIN"].map((tech, index) => (
              <div key={index} className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-gray-300 font-mono">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-400/30" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-cyan-400/30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-cyan-400/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyan-400/30" />
    </div>
  );
}