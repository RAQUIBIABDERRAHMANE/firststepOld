'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRightIcon, PlayIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full px-6 py-2 text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            <span>Next-Generation Business Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            <span className="block text-white">Transform Your</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {texts[currentText]}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Streamline operations across healthcare, hospitality, logistics, and more with our 
            comprehensive management platform designed for the modern enterprise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="#pricing" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <span>Get Started Free</span>
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <PlayIcon className="mr-2 h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { value: "99.9%", label: "Uptime", icon: "🚀" },
              { value: "15K+", label: "Companies", icon: "🏢" },
              { value: "50ms", label: "Response", icon: "⚡" },
              { value: "24/7", label: "Support", icon: "🛡️" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trusted By */}
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-6">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["Healthcare", "Hospitality", "Logistics", "Retail", "Manufacturing"].map((industry, index) => (
                <div key={index} className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-300">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon className="w-6 h-6 text-white/60" />
      </div>
    </div>
  );
}