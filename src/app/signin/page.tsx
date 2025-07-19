'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SparklesIcon } from '@heroicons/react/24/outline';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      if (isAuthenticated !== 'true') {
        router.replace('/signin');
      }
    }
  }, [router]);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mounted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      email === 'abderrahmaneraquibi@gmail.com' &&
      password === '@@12raquibi12@@'
    ) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('isAuthenticated', 'true');
      }
      router.push('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-mesh animate-morphing" />
        <div className="absolute inset-0 cyber-grid opacity-30" />
        {/* Floating Particles */}
        {mounted && (
          <div className="particles">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${6 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        )}
        {/* Interactive Light Effect */}
        {mounted && (
          <div
            className="absolute w-96 h-96 rounded-full opacity-20 pointer-events-none transition-all duration-300 ease-out"
            style={{
              background: `radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)`,
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
            }}
          />
        )}
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rotate-45 animate-float neural-border" />
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-purple-400/30 rotate-12 animate-float delay-1000" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rotate-45 animate-morphing" />
        <div className="absolute bottom-20 left-1/3 w-20 h-20 border border-green-400/30 rounded-full animate-pulse-slow delay-500" />
      </div>
      <div className="relative z-10 w-full max-w-md mx-auto px-6 animate-fade-in-up">
        <form
          onSubmit={handleSubmit}
          className="glass-card border neural-border shadow-2xl rounded-2xl p-10 backdrop-blur-strong"
        >
          <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium glass-card mb-8 neural-border mx-auto">
            <span className="text-gray-300 text-mono">SIGN IN</span>
            <SparklesIcon className="w-4 h-4 ml-2 text-cyan-400 animate-neon-flicker" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center text-gradient-cyber">Welcome Back</h2>
          {error && <div className="mb-4 text-red-500 text-center font-semibold">{error}</div>}
          <div className="mb-6">
            <label className="block mb-2 text-gray-300 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-black/60 border border-cyan-400/20 text-white focus:outline-none focus:ring-2 focus:ring-cyber focus:border-cyan-400 transition"
              required
              autoComplete="username"
            />
          </div>
          <div className="mb-8">
            <label className="block mb-2 text-gray-300 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-black/60 border border-cyan-400/20 text-white focus:outline-none focus:ring-2 focus:ring-cyber focus:border-cyan-400 transition"
              required
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
} 