'use client'
import { useEffect, useState } from 'react'

interface Stat {
  id: number;
  name: string;
  value: number;
  suffix: string;
  description: string;
  gradient: string;
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
    gradient: 'from-cyan-400 to-blue-600'
  },
  { 
    id: 2, 
    name: 'Daily Operations', 
    value: 2400000, 
    suffix: '', 
    description: 'Transactions processed',
    gradient: 'from-purple-400 to-pink-600'
  },
  { 
    id: 3, 
    name: 'System Uptime', 
    value: 99.9, 
    suffix: '%', 
    description: 'Guaranteed availability',
    gradient: 'from-green-400 to-emerald-600'
  },
  { 
    id: 4, 
    name: 'Cost Reduction', 
    value: 67, 
    suffix: '%', 
    description: 'Average operational savings',
    gradient: 'from-orange-400 to-red-600'
  },
]

function AnimatedCounter({ value, suffix = '', duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
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
  }, [value, duration])

  return (
    <span>
      {suffix === '$' && suffix}
      {count.toLocaleString()}
      {suffix !== '$' && suffix}
    </span>
  )
}

const Stats: React.FC = () => {
  return (
    <section className="bg-black py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="inline-flex items-center rounded-full px-6 py-2 text-sm font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 mb-8">
            <span className="text-mono">SYSTEM.METRICS</span>
          </div>
          
          <h2 className="text-section-title mb-8">
            Global Performance Data
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Real-time statistics from our distributed network of enterprise systems
            <br />
            <span className="text-cyan-400 font-medium">Updated every 60 seconds</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className="group relative glass-card p-8 rounded-2xl card-hover"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl`} />
              
              <div className="relative text-center">
                {/* Icon/Indicator */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.gradient} p-0.5 mb-4`}>
                  <div className="flex items-center justify-center w-full h-full bg-black rounded-xl">
                    <div className="w-6 h-6 bg-white rounded-full animate-pulse-slow" />
                  </div>
                </div>
                
                {/* Value */}
                <div className="text-4xl font-bold text-white mb-2 text-mono group-hover:text-cyan-400 transition-colors duration-300">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Name */}
                <div className="text-sm font-medium text-gray-300 mb-2 text-mono">
                  {stat.name.toUpperCase()}
                </div>
                
                {/* Description */}
                <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                  {stat.description}
                </div>
              </div>
              
              {/* Status Indicator */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse-slow shadow-lg shadow-green-400/50" />
            </div>
          ))}
        </div>

        {/* Additional Metrics */}
        <div className="mt-20 glass-card p-12 rounded-3xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4 text-mono">
              COMPLIANCE.STATUS
            </h3>
            <p className="text-gray-400">
              Certified and compliant with global standards
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "SOC 2", status: "CERTIFIED", color: "text-green-400" },
              { name: "GDPR", status: "COMPLIANT", color: "text-blue-400" },
              { name: "HIPAA", status: "READY", color: "text-purple-400" },
              { name: "ISO 27001", status: "VERIFIED", color: "text-orange-400" }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <div className={`w-8 h-8 rounded-full ${cert.color.replace('text-', 'bg-')} animate-pulse-slow`} />
                </div>
                <div className="text-sm font-bold text-white text-mono mb-1">
                  {cert.name}
                </div>
                <div className={`text-xs ${cert.color} text-mono`}>
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