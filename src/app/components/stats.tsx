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
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-purple-100 text-purple-700 mb-8">
            <span>Performance Metrics</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Thousands
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Real-time statistics from our global network of enterprise systems.
            Updated every 60 seconds.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                {/* Icon */}
                <div className="text-4xl mb-4">
                  {stat.icon}
                </div>
                
                {/* Value */}
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Name */}
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.name}
                </div>
                
                {/* Description */}
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Metrics */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Compliance & Certifications
            </h3>
            <p className="text-xl opacity-90">
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
              <div key={index} className="text-center">
                <div className="text-3xl mb-4">{cert.icon}</div>
                <div className="text-lg font-bold mb-1">
                  {cert.name}
                </div>
                <div className="text-sm opacity-80">
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