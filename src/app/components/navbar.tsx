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
  BoltIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image';
import Link from 'next/link';

const features = [
  { name: 'AI-Powered Analytics', description: 'Advanced machine learning insights', href: '#', icon: CpuChipIcon },
  { name: 'Enterprise Security', description: 'Military-grade encryption & compliance', href: '#', icon: ShieldCheckIcon },
  { name: 'Cloud Infrastructure', description: 'Scalable, global deployment', href: '#', icon: CloudIcon },
  { name: 'Real-time Processing', description: 'Lightning-fast data processing', href: '#', icon: BoltIcon },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="group -m-1.5 p-1.5 transition-all duration-300">
            <span className="sr-only">First Step</span>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  alt="First Step Logo"
                  width={40}
                  height={40}
                  src="/FIRSTSTEPBLACK.png"
                  className={`h-10 w-auto transition-all duration-300 ${
                    scrolled ? 'filter-none' : 'filter invert'
                  }`}
                />
              </div>
              <span className={`text-xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
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
            className={`p-3 rounded-lg transition-colors duration-300 ${
              scrolled 
                ? 'text-gray-700 hover:text-purple-600 hover:bg-gray-100' 
                : 'text-white hover:text-purple-300 hover:bg-white/10'
            }`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          <Link href="/" className={`nav-link ${scrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-300'}`}>
            <span>Home</span>
          </Link>
          
          <Link href="/FAQ" className={`nav-link ${scrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-300'}`}>
            <span>FAQ</span>
          </Link>
          
          <Link href="/services" className={`nav-link ${scrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-300'}`}>
            <span>Services</span>
          </Link>

          <Popover className="relative">
            <PopoverButton className={`nav-link group ${scrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-300'}`}>
              <span>Solutions</span>
              <ChevronDownIcon aria-hidden="true" className="size-4 ml-1 transition-transform duration-300 group-data-[open]:rotate-180" />
            </PopoverButton>

            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-xl transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150">
              <div className="p-4">
                {features.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-xl p-4 text-sm hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-purple-100 transition-colors duration-300">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600 text-xs">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link href="/#pricing" className={`nav-link ${scrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-300'}`}>
            <span>Pricing</span>
          </Link>
          
          <a href="#contact" className={`nav-link ${scrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-300'}`}>
            <span>Contact</span>
          </a>
        </PopoverGroup>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#pricing" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm border-l border-gray-200">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">First Step</span>
              <div className="flex items-center space-x-2">
                <Image
                  alt="First Step Logo"
                  width={32}
                  height={32}
                  src="/FIRSTSTEPBLACK.png"
                  className="h-8 w-auto"
                />
                <span className="text-lg font-bold text-gray-900">First Step</span>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-gray-100 transition-colors duration-300"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-2 py-6">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'FAQ', href: '/FAQ' },
                  { name: 'Services', href: '/services' },
                  { name: 'Pricing', href: '/#pricing' },
                  { name: 'Contact', href: '#contact' }
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-300">
                    Solutions
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180 transition-transform duration-300" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {features.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-300"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
              
              <div className="py-6">
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      <style jsx>{`
        .nav-link {
          @apply relative text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg flex items-center;
        }
      `}</style>
    </header>
  )
}