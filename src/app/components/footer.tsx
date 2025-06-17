import Link from 'next/link';
import Image from 'next/image';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  ServerIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const navigation = {
  solutions: [
    { name: 'Healthcare Systems', href: '/services/hospital' },
    { name: 'Hotel Management', href: '/services/hotel' },
    { name: 'Fleet Operations', href: '/services/car' },
    { name: 'Restaurant Tech', href: '/services/restaurant' },
    { name: 'Inventory Control', href: '/services/stock' },
    { name: 'Custom Solutions', href: '/services/CustomWebApp' },
  ],
  support: [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Help Center', href: '/FAQ' },
    { name: 'System Status', href: '#' },
    { name: 'Contact Support', href: '#contact' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '#' },
    { name: 'Press Kit', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'GDPR Compliance', href: '#' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/firststep.uno/',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.017 0C8.396 0 7.929.01 6.71.048 5.493.087 4.73.222 4.058.42a5.916 5.916 0 0 0-2.134 1.388A5.916 5.916 0 0 0 .536 4.042C.333 4.715.198 5.478.159 6.695.122 7.913.11 8.38.11 12.017c0 3.637.011 4.104.048 5.323.039 1.217.174 1.98.372 2.652a5.916 5.916 0 0 0 1.388 2.134 5.916 5.916 0 0 0 2.134 1.388c.672.198 1.435.333 2.652.372 1.219.037 1.686.048 5.323.048 3.637 0 4.104-.011 5.323-.048 1.217-.039 1.98-.174 2.652-.372a5.916 5.916 0 0 0 2.134-1.388 5.916 5.916 0 0 0 1.388-2.134c.198-.672.333-1.435.372-2.652.037-1.219.048-1.686.048-5.323 0-3.637-.011-4.104-.048-5.323-.039-1.217-.174-1.98-.372-2.652a5.916 5.916 0 0 0-1.388-2.134A5.916 5.916 0 0 0 19.676.42c-.672-.198-1.435-.333-2.652-.372C15.805.01 15.338 0 11.701 0h.316z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M12.017 5.838a6.179 6.179 0 1 0 0 12.358 6.179 6.179 0 0 0 0-12.358zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
            clipRule="evenodd"
          />
          <path d="M18.4 5.6a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UC1jjsmOac2Ivw831NtHJmag/',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8">
            <div>
              <Link href="/" className="flex items-center group">
                <div className="relative">
                  <Image
                    alt="First Step"
                    src="/FIRSTSTEPBLACK.png"
                    width={48}
                    height={48}
                    className="h-12 w-auto filter invert group-hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.8)] transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                </div>
                <span className="ml-3 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 text-mono">
                  FIRST_STEP
                </span>
              </Link>
            </div>
            
            <p className="text-sm leading-6 text-gray-400 max-w-md">
              Next-generation enterprise management systems powered by AI and built for the future.
              <br />
              <span className="text-cyan-400 font-medium">Transforming businesses worldwide.</span>
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </a>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white text-mono">POWERED_BY:</h4>
              <div className="flex flex-wrap gap-2">
                {["NEXT.JS", "AI/ML", "CLOUD", "BLOCKCHAIN"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/5 text-xs text-gray-300 rounded border border-white/10 text-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white text-mono">SOLUTIONS</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white text-mono">SUPPORT</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white text-mono">COMPANY</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white text-mono">LEGAL</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 border-t border-white/10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center">
                  <PhoneIcon className="h-5 w-5 text-black" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white text-mono">PHONE</p>
                  <Link 
                    href="tel:+212665830816" 
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    +212 665 830 816
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center">
                  <EnvelopeIcon className="h-5 w-5 text-black" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white text-mono">EMAIL</p>
                  <Link 
                    href="mailto:support@firststep.uno" 
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    support@firststep.uno
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-400 to-emerald-600 flex items-center justify-center">
                  <MapPinIcon className="h-5 w-5 text-black" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white text-mono">LOCATION</p>
                  <p className="text-sm text-gray-400">Morocco</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-16 glass-card p-8 rounded-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-slow" />
                <span className="text-sm text-green-400 text-mono">ALL_SYSTEMS_OPERATIONAL</span>
              </div>
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <div className="flex items-center space-x-1">
                  <ServerIcon className="w-4 h-4" />
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center space-x-1">
                  <ShieldCheckIcon className="w-4 h-4" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CodeBracketIcon className="w-4 h-4" />
                  <span>API Active</span>
                </div>
              </div>
            </div>
            
            <Link 
              href="https://firststep.uno" 
              target="_blank"
              className="text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center text-mono"
            >
              VISIT_MAIN_SITE
              <ArrowTopRightOnSquareIcon className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs leading-5 text-gray-400 text-mono">
              © 2024 FIRST_STEP™. ALL_RIGHTS_RESERVED.
            </p>
            <div className="mt-4 md:mt-0 text-xs text-gray-400 text-mono">
              BUILT_WITH_❤️_FOR_THE_FUTURE
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}