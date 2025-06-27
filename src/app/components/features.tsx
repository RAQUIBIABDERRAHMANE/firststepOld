import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  BoltIcon, 
  ChartBarIcon, 
  CogIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'AI-Powered Analytics',
    description: 'Advanced machine learning algorithms provide deep insights into your business operations with predictive analytics and automated decision-making capabilities.',
    icon: CpuChipIcon,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
  },
  {
    name: 'Enterprise Security',
    description: 'Military-grade encryption, zero-trust architecture, and compliance with GDPR, HIPAA, and SOC 2 standards ensure your data remains secure.',
    icon: ShieldCheckIcon,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
  },
  {
    name: 'Cloud Infrastructure',
    description: 'Globally distributed cloud architecture with 99.9% uptime guarantee, auto-scaling, and edge computing for lightning-fast performance.',
    icon: CloudIcon,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
  },
  {
    name: 'Real-time Processing',
    description: 'Process millions of transactions per second with our high-performance computing infrastructure and real-time data synchronization.',
    icon: BoltIcon,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
  },
  {
    name: 'Advanced Analytics',
    description: 'Comprehensive dashboards with customizable KPIs, real-time monitoring, and automated reporting for data-driven decision making.',
    icon: ChartBarIcon,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
  },
  {
    name: 'Smart Automation',
    description: 'Intelligent workflow automation with AI-driven process optimization, reducing manual tasks by up to 80% and increasing efficiency.',
    icon: CogIcon,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/20',
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-white/5 text-gray-400 border border-white/10 mb-8">
            <span className="uppercase tracking-wider">Core Capabilities</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Built for Scale
          </h2>
          
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            Enterprise-grade features designed to transform your business operations.
            Every component engineered for performance and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ${feature.borderColor} hover:bg-white/10 transition-all duration-500 hover:-translate-y-2`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Geometric Corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.bgColor} border ${feature.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.name}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Learn More Link */}
                <div className="flex items-center text-gray-500 font-medium group-hover:text-white transition-colors duration-300">
                  <span className="text-sm uppercase tracking-wider">Explore</span>
                  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto font-light">
              Join thousands of forward-thinking enterprises that have already transformed their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}