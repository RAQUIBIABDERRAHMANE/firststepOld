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
    name: 'Neural Analytics',
    description: 'Advanced machine learning algorithms with quantum-enhanced processing capabilities, providing predictive insights and autonomous decision-making systems.',
    icon: CpuChipIcon,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Quantum Security',
    description: 'Military-grade quantum encryption, zero-trust architecture, and compliance with GDPR, HIPAA, and SOC 2 standards with blockchain verification.',
    icon: ShieldCheckIcon,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    name: 'Cloud Matrix',
    description: 'Globally distributed quantum cloud architecture with 99.99% uptime guarantee, auto-scaling, and edge computing for instantaneous performance.',
    icon: CloudIcon,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    name: 'Plasma Processing',
    description: 'Process billions of transactions per second with our quantum computing infrastructure and real-time neural synchronization protocols.',
    icon: BoltIcon,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    name: 'Holographic Analytics',
    description: 'Immersive 3D dashboards with AI-powered KPIs, real-time monitoring, and predictive modeling for data-driven decision making.',
    icon: ChartBarIcon,
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20',
    gradient: 'from-indigo-400 to-purple-500',
  },
  {
    name: 'Neural Automation',
    description: 'Intelligent workflow automation with quantum AI-driven process optimization, reducing manual tasks by up to 95% and increasing efficiency.',
    icon: CogIcon,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/20',
    gradient: 'from-pink-400 to-red-500',
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
          <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium glass-card text-gray-400 border border-cyan-400/20 mb-8 neural-border">
            <span className="uppercase tracking-wider text-mono">CORE.CAPABILITIES</span>
          </div>
          
          <h2 className="text-section-title mb-6 animate-hologram">
            Built for Scale
          </h2>
          
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            Enterprise-grade features designed to transform your business operations.
            Every component engineered for{' '}
            <span className="neon-text">quantum performance</span> and{' '}
            <span className="text-gradient-cyber">neural reliability</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="group relative glass-card rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 card-hover neural-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Holographic Corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl glass-card border border-white/10 group-hover:border-cyan-400/30 group-hover:scale-110 transition-all duration-300 bg-gradient-to-r ${feature.gradient} bg-opacity-10`}>
                  <feature.icon className={`h-8 w-8 ${feature.color} group-hover:animate-neon-flicker`} />
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
                
                {/* Neural Link */}
                <div className="flex items-center text-gray-500 font-medium group-hover:text-cyan-400 transition-colors duration-300">
                  <span className="text-sm uppercase tracking-wider text-mono">NEURAL_LINK</span>
                  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Data Flow Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-data-flow" />
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-24 text-center">
          <div className="glass-card rounded-3xl p-12 border border-cyan-400/20 neural-border relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 animate-morphing" />
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6 text-white plasma-text">
                Ready to Transform Your Operations?
              </h3>
              <p className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto font-light">
                Join thousands of forward-thinking enterprises that have already transformed their operations with{' '}
                <span className="neon-text">quantum-powered systems</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="quantum-btn micro-bounce">
                  <span className="text-mono">START_NEURAL_TRIAL</span>
                </button>
                <button className="btn-secondary micro-glow">
                  <span className="text-mono">SCHEDULE_QUANTUM_DEMO</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}