'use client'
import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  SparklesIcon,
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [signInModalOpen, setSignInModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [signInData, setSignInData] = useState({
    email: '',
    password: ''
  })

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

  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign in logic here
    console.log('Sign in data:', signInData)
    setSignInModalOpen(false)
    // Reset form
    setSignInData({ email: '', password: '' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSignInData(prev => ({ ...prev, [name]: value }))
  }

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
          <button
            onClick={() => setSignInModalOpen(true)}
            className="px-6 py-2 text-sm font-semibold text-cyan-400 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
          >
            Sign In
          </button>

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
                href="#signup"
                className="block w-full py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>

              <button
                onClick={() => {
                  setSignInModalOpen(true)
                  setMobileMenuOpen(false)
                }}
                className="block w-full py-3 text-center text-sm font-semibold text-cyan-400 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
              >
                Sign In
              </button>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      {/* Sign In Modal */}
      <Dialog open={signInModalOpen} onClose={setSignInModalOpen} className="relative z-50">
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="mx-auto max-w-md w-full bg-black/90 backdrop-blur-md rounded-2xl border border-cyan-400/20 shadow-2xl">
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <DialogTitle className="text-2xl font-bold text-white">
                  Sign In
                </DialogTitle>
                <button
                  onClick={() => setSignInModalOpen(false)}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSignInSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <EnvelopeIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={signInData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-gray-600 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <LockClosedIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={signInData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-gray-600 bg-white/5 py-3 pl-10 pr-12 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? (
                        <EyeSlashIcon className="h-5 w-5" />
                      ) : (
                        <EyeIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-600 bg-white/5 text-cyan-400 focus:ring-cyan-400 focus:ring-offset-0"
                    />
                    <span className="ml-2 text-sm text-gray-300">Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Sign In
                </button>
              </form>

              {/* Footer */}
              {/* <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  Don't have an account?{' '}
                  <button
                    onClick={() => {
                      setSignInModalOpen(false)
                      // You can add logic here to open a sign-up modal or redirect
                    }}
                    className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Sign up
                  </button>
                </p>
              </div> */}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  )
}