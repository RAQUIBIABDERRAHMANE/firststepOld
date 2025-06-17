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
    gradient: 'from-cyan-400 to-blue-600',
    delay: '0s'
  },
  {
    name: 'Enterprise Security',
    description: 'Military-grade encryption, zero-trust architecture, and compliance with GDPR, HIPAA, and SOC 2 standards ensure your data remains secure.',
    icon: ShieldCheckIcon,
    gradient: 'from-green-400 to-emerald-600',
    delay: '0.2s'
  },
  {
    name: 'Cloud Infrastructure',
    description: 'Globally distributed cloud architecture with 99.9% uptime guarantee, auto-scaling, and edge computing for lightning-fast performance.',
    icon: CloudIcon,
    gradient: 'from-purple-400 to-indigo-600',
    delay: '0.4s'
  },
  {
    name: 'Real-time Processing',
    description: 'Process millions of transactions per second with our high-performance computing infrastructure and real-time data synchronization.',
    icon: BoltIcon,
    gradient: 'from-yellow-400 to-orange-600',
    delay: '0.6s'
  },
  {
    name: 'Advanced Analytics',
    description: 'Comprehensive dashboards with customizable KPIs, real-time monitoring, and automated reporting for data-driven decision making.',
    icon: ChartBarIcon,
    gradient: 'from-pink-400 to-red-600',
    delay: '0.8s'
  },
  {
    name: 'Smart Automation',
    description: 'Intelligent workflow automation with AI-driven process optimization, reducing manual tasks by up to 80% and increasing efficiency.',
    icon: CogIcon,
    gradient: 'from-teal-400 to-cyan-600',
    delay: '1s'
  },
]

export default function Features() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="inline-flex items-center rounded-full px-6 py-2 text-sm font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 mb-8">
            <span className="text-mono">CORE.FEATURES</span>
          </div>
          
          <h2 className="text-section-title mb-8">
            Built for the Future
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Experience next-generation technology designed to transform your business operations.
            <br />
            <span className="text-cyan-400 font-medium">Every feature engineered for excellence.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="group relative glass-card p-8 rounded-2xl card-hover"
              style={{ animationDelay: feature.delay }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-0.5`}>
                  <div className="flex items-center justify-center w-full h-full bg-black rounded-2xl">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-card-title mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.name}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Learn More Link */}
                <div className="flex items-center text-cyan-400 font-semibold group-hover:text-white transition-colors duration-300">
                  <span className="text-mono text-sm">EXPLORE_MORE</span>
                  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Corner Decorations */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="glass-card p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10" />
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Experience the Future?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of forward-thinking businesses that have already transformed their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Start Free Trial
                </button>
                <button className="btn-secondary">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}