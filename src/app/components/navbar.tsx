'use client'
import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  BoltIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image';
import Link from 'next/link';

const features = [
  { 
    name: 'Neural Analytics', 
    description: 'Advanced AI-powered insights', 
    href: '#', 
    icon: CpuChipIcon,
    gradient: 'from-cyan-400 to-blue-500'
  },
  { 
    name: 'Quantum Security', 
    description: 'Military-grade encryption', 
    href: '#', 
    icon: ShieldCheckIcon,
    gradient: 'from-green-400 to-emerald-500'
  },
  { 
    name: 'Cloud Matrix', 
    description: 'Scalable infrastructure', 
    href: '#', 
    icon: CloudIcon,
    gradient: 'from-purple-400 to-pink-500'
  },
  { 
    name: 'Plasma Processing', 
    description: 'Lightning-fast operations', 
    href: '#', 
    icon: BoltIcon,
    gradient: 'from-orange-400 to-red-500'
  },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      mounted && scrolled 
        ? 'glass-card border-b border-cyan-400/20 shadow-lg shadow-cyan-400/10' 
        : 'bg-transparent'
    }`}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="group -m-1.5 p-1.5 transition-all duration-300">
            <span className="sr-only">First Step</span>
            <div className="flex items-center space-x-3">
              <div className="relative neural-border p-2 rounded-xl">
                <Image
                  alt="First Step Logo"
                  width={32}
                  height={32}
                  src="/FIRSTSTEPBLACK.png"
                  className="h-8 w-auto filter invert transition-all duration-300 group-hover:animate-quantum"
                />
                <SparklesIcon className="absolute -top-1 -right-1 w-4 h-4 text-cyan-400 animate-neon-flicker" />
              </div>
              <span className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                First Step
              </span>
            </div>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-3 rounded-lg text-white hover:text-cyan-400 glass-card transition-all duration-300 micro-glow"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          <Link href="/" className="nav-link text-white hover:text-cyan-400 micro-bounce">
            <span className="text-mono">HOME</span>
          </Link>
          
          <Link href="/FAQ" className="nav-link text-white hover:text-cyan-400 micro-bounce">
            <span className="text-mono">FAQ</span>
          </Link>
          
          <Link href="/services" className="nav-link text-white hover:text-cyan-400 micro-bounce">
            <span className="text-mono">SERVICES</span>
          </Link>

          <Popover className="relative">
            <PopoverButton className="nav-link group text-white hover:text-cyan-400 micro-bounce">
              <span className="text-mono">SOLUTIONS</span>
              <ChevronDownIcon aria-hidden="true" className="size-4 ml-1 transition-transform duration-300 group-data-[open]:rotate-180" />
            </PopoverButton>

            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-2xl glass-card border border-cyan-400/20 shadow-xl shadow-cyan-400/10 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150">
              <div className="p-4">
                {features.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-xl p-4 text-sm hover:bg-white/5 transition-all duration-300 card-hover"
                  >
                    <div className={`flex size-11 flex-none items-center justify-center rounded-lg glass-card border border-white/10 group-hover:border-cyan-400/30 transition-all duration-300 bg-gradient-to-r ${item.gradient} bg-opacity-10`}>
                      <item.icon aria-hidden="true" className="size-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-400 text-xs">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link href="/#pricing" className="nav-link text-white hover:text-cyan-400 micro-bounce">
            <span className="text-mono">PRICING</span>
          </Link>
          
          <a href="#contact" className="nav-link text-white hover:text-cyan-400 micro-bounce">
            <span className="text-mono">CONTACT</span>
          </a>
        </PopoverGroup>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="flex items-center space-x-4">
            <a 
              href="#signup"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 inline-block"
            >
              Sign Up
            </a>
            <Link href="#pricing" className="px-6 py-2 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200">
              Pricing
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-black/80 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto glass-card px-6 py-6 sm:max-w-sm border-l border-cyan-400/20">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">First Step</span>
              <div className="flex items-center space-x-2">
                <div className="neural-border p-1 rounded-lg">
                  <Image
                    alt="First Step Logo"
                    width={24}
                    height={24}
                    src="/FIRSTSTEPBLACK.png"
                    className="h-6 w-auto filter invert"
                  />
                </div>
                <span className="text-lg font-bold text-white">First Step</span>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-white hover:text-cyan-400 glass-card transition-colors duration-300"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {[
                  { name: 'HOME', href: '/' },
                  { name: 'FAQ', href: '/FAQ' },
                  { name: 'SERVICES', href: '/services' },
                  { name: 'PRICING', href: '/#pricing' },
                  { name: 'CONTACT', href: '#contact' }
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/10 hover:text-cyan-400 transition-colors duration-300 text-mono"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-white hover:bg-white/10 hover:text-cyan-400 transition-colors duration-300 text-mono">
                    SOLUTIONS
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180 transition-transform duration-300" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {features.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-400 hover:bg-white/10 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
              
              <div className="py-6">
                <div className="space-y-3">
                  <a
                    href="#signup"
                    className="block w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </a>
                  <Link
                    href="#pricing"
                    className="block w-full py-3 text-center border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      <style jsx>{`
        .nav-link {
          @apply relative text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg flex items-center;
        }
        .nav-link:hover {
          @apply bg-white/5;
        }
      `}</style>
    </header>
  )
}