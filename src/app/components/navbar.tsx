'use client'
import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image';
import Link from 'next/link';

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

  const navigationLinks = [
    { name: 'HOME', href: '/' },
    { name: 'SERVICES', href: '/services' },
    { name: 'FAQ', href: '/FAQ' },
    { name: 'PRICING', href: '/#pricing' },
    { name: 'CONTACT', href: '#contact' }
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      mounted && scrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-cyan-400/20 shadow-lg shadow-cyan-400/10' 
        : 'bg-transparent'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="group -m-1.5 p-1.5 transition-all duration-300">
            <span className="sr-only">First Step</span>
            <div className="flex items-center space-x-3">
              <div className="relative p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-400/50 transition-all duration-300">
                <Image
                  alt="First Step Logo"
                  width={32}
                  height={32}
                  src="/FIRSTSTEPBLACK.png"
                  className="h-8 w-auto filter invert transition-all duration-300 group-hover:scale-110"
                />
                <SparklesIcon className="absolute -top-1 -right-1 w-4 h-4 text-cyan-400 animate-pulse" />
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
            className="p-3 rounded-lg text-white hover:text-cyan-400 bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-white hover:text-cyan-400 transition-all duration-300 rounded-lg hover:bg-white/5 group"
            >
              <span className="relative z-10">{link.name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
                    <Link 
            href="#signup"
            className="px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
          <Link 
            href=""
            className="px-6 py-2 text-sm font-semibold text-cyan-400 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
          >
            Sign In
          </Link>

        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/90 backdrop-blur-md px-6 py-6 sm:max-w-sm border-l border-cyan-400/20">
          {/* Mobile Header */}
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">First Step</span>
              <div className="flex items-center space-x-2">
                <div className="p-1 rounded-lg bg-white/5 border border-white/10">
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
              className="p-2 rounded-lg text-white hover:text-cyan-400 bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          
          {/* Mobile Navigation */}
          <div className="mt-8 flow-root">
            <div className="space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-white hover:bg-white/10 hover:text-cyan-400 transition-all duration-300 border border-transparent hover:border-cyan-400/30"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile CTA Buttons */}
            <div className="mt-8 space-y-3">
              <Link
                href="#pricing"
                className="block w-full py-3 text-center text-sm font-semibold text-cyan-400 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                View Pricing
              </Link>
              <Link
                href="#signup"
                className="block w-full py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}