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
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    name: 'Enterprise Security',
    description: 'Military-grade encryption, zero-trust architecture, and compliance with GDPR, HIPAA, and SOC 2 standards ensure your data remains secure.',
    icon: ShieldCheckIcon,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    name: 'Cloud Infrastructure',
    description: 'Globally distributed cloud architecture with 99.9% uptime guarantee, auto-scaling, and edge computing for lightning-fast performance.',
    icon: CloudIcon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    name: 'Real-time Processing',
    description: 'Process millions of transactions per second with our high-performance computing infrastructure and real-time data synchronization.',
    icon: BoltIcon,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
  {
    name: 'Advanced Analytics',
    description: 'Comprehensive dashboards with customizable KPIs, real-time monitoring, and automated reporting for data-driven decision making.',
    icon: ChartBarIcon,
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
  },
  {
    name: 'Smart Automation',
    description: 'Intelligent workflow automation with AI-driven process optimization, reducing manual tasks by up to 80% and increasing efficiency.',
    icon: CogIcon,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-purple-100 text-purple-700 mb-8">
            <span>Core Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for Modern Business
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Experience next-generation technology designed to transform your business operations.
            Every feature engineered for excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {feature.name}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                {/* Learn More Link */}
                <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors duration-300">
                  <span className="text-sm">Learn more</span>
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
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of forward-thinking businesses that have already transformed their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300">
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