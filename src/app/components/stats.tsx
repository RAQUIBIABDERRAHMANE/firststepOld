'use client'
import { useEffect, useState } from 'react'

interface Stat {
  id: number;
  name: string;
  value: number;
  suffix: string;
  description: string;
  icon: string;
}

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const stats: Stat[] = [
  { 
    id: 1, 
    name: 'Active Systems', 
    value: 15503, 
    suffix: '+', 
    description: 'Deployed worldwide',
    icon: '🚀'
  },
  { 
    id: 2, 
    name: 'Daily Operations', 
    value: 2400000, 
    suffix: '', 
    description: 'Transactions processed',
    icon: '⚡'
  },
  { 
    id: 3, 
    name: 'System Uptime', 
    value: 99.9, 
    suffix: '%', 
    description: 'Guaranteed availability',
    icon: '🛡️'
  },
  { 
    id: 4, 
    name: 'Cost Reduction', 
    value: 67, 
    suffix: '%', 
    description: 'Average operational savings',
    icon: '💰'
  },
]

function AnimatedCounter({ value, suffix = '', duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * value))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration, mounted])

  return (
    <span >
      {suffix === '$' && suffix}
      {mounted ? count.toLocaleString() : value.toLocaleString()}
      {suffix !== '$' && suffix}
    </span>
  )
}

const Stats: React.FC = () => {
  return (
    <section className="bg-black py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-blue-500/10 rotate-45" />
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-purple-500/10 rotate-12" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-white/5 text-gray-400 border border-white/10 mb-8">
            <span className="uppercase tracking-wider">Performance Metrics</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Trusted Globally
          </h2>
          
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            Real-time statistics from our global network of enterprise systems.
            Updated every 60 seconds.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Corner decoration */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="text-center">
                {/* Icon */}
                <div className="text-4xl mb-4">
                  {stat.icon}
                </div>
                
                {/* Value */}
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Name */}
                <div className="text-lg font-semibold text-white mb-2">
                  {stat.name}
                </div>
                
                {/* Description */}
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Metrics */}
        <div className="mt-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Compliance & Certifications
            </h3>
            <p className="text-xl text-gray-400 font-light">
              Certified and compliant with global standards
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "SOC 2", status: "Certified", icon: "🔒" },
              { name: "GDPR", status: "Compliant", icon: "🛡️" },
              { name: "HIPAA", status: "Ready", icon: "🏥" },
              { name: "ISO 27001", status: "Verified", icon: "✅" }
            ].map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{cert.icon}</div>
                <div className="text-lg font-bold mb-1 text-white">
                  {cert.name}
                </div>
                <div className="text-sm text-gray-400">
                  {cert.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats;