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
    name: 'Advanced Analytics',
    description: 'Comprehensive data analytics and reporting tools that provide actionable insights to help you make informed business decisions.',
    icon: CpuChipIcon,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-level security with encryption, multi-factor authentication, and compliance with GDPR, HIPAA, and SOC 2 standards.',
    icon: ShieldCheckIcon,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    name: 'Cloud Infrastructure',
    description: 'Scalable cloud architecture with 99.9% uptime guarantee, automatic backups, and global content delivery network.',
    icon: CloudIcon,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    name: 'High Performance',
    description: 'Optimized for speed and efficiency, handling thousands of concurrent users with real-time data processing.',
    icon: BoltIcon,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    name: 'Business Intelligence',
    description: 'Interactive dashboards with real-time KPIs, customizable reports, and predictive analytics for strategic planning.',
    icon: ChartBarIcon,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'Process Automation',
    description: 'Streamline workflows with intelligent automation, reducing manual tasks and increasing operational efficiency.',
    icon: CogIcon,
    color: 'text-gray-400',
    bgColor: 'bg-gray-500/10',
    borderColor: 'border-gray-500/20',
    gradient: 'from-gray-400 to-gray-600',
  },
]

export default function Features() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-20" />
        <div className="gradient-mesh animate-morphing" />
        
        {/* Floating Elements */}
        <div className="absolute top-32 left-10 w-20 h-20 border border-cyan-400/30 rotate-45 animate-float neural-border" />
        <div className="absolute bottom-32 right-10 w-16 h-16 border border-purple-400/30 rounded-full animate-pulse-slow" />
        
        {/* Data Streams */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent data-stream"
            style={{
              top: `${30 + i * 25}%`,
              width: '100%',
              animationDelay: `${i * 1}s`
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-white/5 text-gray-400 border border-white/10 mb-8">
            <span className="uppercase tracking-wider">Core Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise-Grade Features
          </h2>
          
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            Comprehensive features designed to streamline your business operations and drive growth.
            Built with modern technology for{' '}
            <span className="text-blue-400">reliability</span> and{' '}
            <span className="text-purple-400">scalability</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 group-hover:border-blue-400/30 group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.name}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Learn More Link */}
                <div className="flex items-center text-gray-500 font-medium group-hover:text-blue-400 transition-colors duration-300">
                  <span className="text-sm">Learn More</span>
                  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6 text-white">
                Ready to Get Started?
              </h3>
              <p className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto font-light">
                Join thousands of businesses that have streamlined their operations with our professional management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-200">
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