import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, ChartBarIcon, CogIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Real-time Analytics',
    description: 'Get instant insights into your business performance with comprehensive dashboards and real-time data visualization.',
    icon: ChartBarIcon,
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-level security with end-to-end encryption, compliance with GDPR, HIPAA, and other industry standards.',
    icon: LockClosedIcon,
  },
  {
    name: 'Cloud Infrastructure',
    description: 'Scalable cloud-based architecture that grows with your business, ensuring 99.9% uptime and global accessibility.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Smart Automation',
    description: 'Intelligent automation workflows that reduce manual tasks and optimize your business processes.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced Compliance',
    description: 'Built-in compliance tools for healthcare, finance, and hospitality industries with automated reporting.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Custom Integration',
    description: 'Seamlessly integrate with your existing tools and systems through our robust API and webhook support.',
    icon: CogIcon,
  },
]

export default function Features() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 mb-4">Powerful Features</h2>
          <p className="text-section-title text-gray-900 mb-6">
            Everything you need to manage your business
          </p>
          <p className="text-lg leading-8 text-gray-600">
            Our comprehensive platform provides all the tools and features you need to streamline operations, 
            increase efficiency, and drive growth across multiple industries.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col card-hover bg-gray-50 p-8 rounded-2xl">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Additional feature showcase */}
        <div className="mt-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to transform your business?
          </h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have already streamlined their operations with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}