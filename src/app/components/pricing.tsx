"use client"
import { useState } from "react";
import { CheckIcon, StarIcon, SparklesIcon } from "@heroicons/react/24/outline";

interface Plan {
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
  gradient: string;
}

interface Plans {
  monthly: Plan[];
  yearly: Plan[];
}

const plans: Plans = {
  monthly: [
    {
      name: "Starter",
      price: 29,
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 5 users",
        "Basic analytics",
        "Email support",
        "Mobile app access",
        "1 industry module",
        "5GB storage",
        "Standard encryption"
      ],
      popular: false,
      cta: "Start Free Trial",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Professional",
      price: 79,
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 users",
        "Advanced analytics",
        "Priority support",
        "API access",
        "3 industry modules",
        "50GB storage",
        "Custom integrations",
        "Enhanced security",
        "Real-time analytics"
      ],
      popular: true,
      cta: "Start Free Trial",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      name: "Enterprise",
      price: 199,
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Custom analytics",
        "24/7 dedicated support",
        "Account manager",
        "All industry modules",
        "Unlimited storage",
        "White-label options",
        "SLA guarantee",
        "Custom development",
        "Advanced compliance"
      ],
      popular: false,
      cta: "Contact Sales",
      gradient: "from-green-400 to-emerald-500",
    }
  ],
  yearly: [
    {
      name: "Starter",
      price: 290,
      originalPrice: 348,
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 5 users",
        "Basic analytics",
        "Email support",
        "Mobile app access",
        "1 industry module",
        "5GB storage",
        "Standard encryption"
      ],
      popular: false,
      cta: "Start Free Trial",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Professional",
      price: 790,
      originalPrice: 948,
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 users",
        "Advanced analytics",
        "Priority support",
        "API access",
        "3 industry modules",
        "50GB storage",
        "Custom integrations",
        "Enhanced security",
        "Real-time analytics"
      ],
      popular: true,
      cta: "Start Free Trial",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      name: "Enterprise",
      price: 1990,
      originalPrice: 2388,
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Custom analytics",
        "24/7 dedicated support",
        "Account manager",
        "All industry modules",
        "Unlimited storage",
        "White-label options",
        "SLA guarantee",
        "Custom development",
        "Advanced compliance"
      ],
      popular: false,
      cta: "Contact Sales",
      gradient: "from-green-400 to-emerald-500",
    }
  ]
};

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState<boolean>(true);
  const currentPlans = isYearly ? plans.yearly : plans.monthly;

  return (
    <section className="py-32 bg-black relative overflow-hidden" id="pricing">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-20" />
        <div className="gradient-mesh animate-morphing" />
        
        {/* Quantum Decorations */}
        <div className="absolute top-32 left-10 w-20 h-20 border border-cyan-500/20 rotate-45 animate-float neural-border" />
        <div className="absolute bottom-32 right-10 w-16 h-16 border border-purple-500/20 rounded-full animate-pulse-slow" />
        
        {/* Data Streams */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent data-stream"
            style={{
              top: `${25 + i * 20}%`,
              width: '100%',
              animationDelay: `${i * 0.7}s`
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-white/5 text-gray-400 border border-white/10 mb-8">
            <SparklesIcon className="w-4 h-4 mr-2 text-blue-400" />
            <span className="uppercase tracking-wider">Pricing Plans</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Plan
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Start with a{' '}
            <span className="text-blue-400">14-day free trial</span>. 
            No credit card required. Scale as your{' '}
            <span className="text-purple-400">business</span> grows.
          </p>

          {/* Enhanced Pricing Toggle */}
          <div className="flex justify-center items-center bg-white/5 backdrop-blur-sm p-1 rounded-xl max-w-sm mx-auto mb-16 border border-white/10">
            <button
              onClick={() => setIsYearly(false)}
              className={`flex-1 text-center transition-all duration-300 rounded-lg font-medium py-3 px-6 ${
                !isYearly 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`flex-1 text-center transition-all duration-300 rounded-lg font-medium py-3 px-6 relative ${
                isYearly 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Enhanced Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {currentPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-blue-500/50 shadow-lg shadow-blue-500/20 scale-105"
                  : "border-white/10 hover:border-blue-400/30"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg flex items-center">
                    <StarIcon className="w-4 h-4 mr-1" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}


              <div>
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 mb-6 font-light">
                    {plan.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white neon-text">
                        ${plan.price}
                      </span>
                      <span className="text-lg ml-1 text-gray-400">
                        /{isYearly ? "year" : "month"}
                      </span>
                    </div>
                    {isYearly && plan.originalPrice && (
                      <div className="mt-2">
                        <span className="text-sm line-through text-gray-500">
                          ${plan.originalPrice}/year
                        </span>
                        <span className="ml-2 text-sm font-semibold text-green-400">
                          Save ${plan.originalPrice - plan.price}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                        : "border border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-white mb-4">
                    Features:
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-3">
                          <CheckIcon className="h-3 w-3 text-green-400" />
                        </div>
                        <span className="text-gray-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced FAQ Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-white mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Can I upgrade my plan anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes are applied immediately to your account."
              },
              {
                question: "Are there any setup fees?",
                answer: "No setup fees. Start your free trial today and begin using the platform immediately."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and enterprise wire transfers."
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee if our platform doesn't meet your needs."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-left border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                <h4 className="font-semibold text-white mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-400 leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="relative mt-24 flex justify-center items-center min-h-[600px]">
          {/* Animated/Gradient Background for the form */}
          <div  className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-blue-600/40 via-purple-600/30 to-cyan-400/30 blur-3xl animate-float" />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-500/30 via-pink-400/20 to-blue-400/20 blur-2xl animate-pulse-slow" />
            <div className="cyber-grid opacity-10 absolute inset-0" />
          </div>
          <div id="signup" className="relative z-10 w-full max-w-xl">
            <div className="bg-white/10 glass-card border border-cyan-400/20 shadow-2xl shadow-cyan-400/10 rounded-2xl p-10 backdrop-blur-strong animate-fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-6 text-center text-gradient-cyber">Request a Service</h3>
              <form
                className="space-y-6"
                action="https://n8n.raquibi.space/webhook-test/b3e90396-5a45-4761-812d-923e0afb5f7a"
                method="POST"
                target="_blank"
              >
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="username">User Name</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-cyan-400/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:bg-white/30 transition-all duration-300 placeholder-gray-400"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-cyan-400/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:bg-white/30 transition-all duration-300 placeholder-gray-400"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-cyan-400/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:bg-white/30 transition-all duration-300 placeholder-gray-400"
                    placeholder="e.g. +1234567890"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-cyan-400/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:bg-white/30 transition-all duration-300 placeholder-gray-400"
                    placeholder="Create a password"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="service">Service</label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-cyan-400/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:bg-white/30 transition-all duration-300"
                  >
                    <option value="" className="bg-black text-white rounded-lg" >Select a service</option>
                    <option value="Stock Management" className="bg-black text-white rounded-lg" >Stock Management</option>
                    <option value="Car Rental" className="bg-black text-white rounded-lg" >Car Rental</option>
                    <option value="Restaurant" className="bg-black text-white rounded-lg" >Restaurant</option>
                    <option value="Hospital" className="bg-black text-white rounded-lg" >Hospital</option>
                    <option value="Hotel" className="bg-black text-white rounded-lg" >Hotel</option>
                    <option value="Custom Web App" className="bg-black text-white rounded-lg" >Custom Web App</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:from-cyan-400 hover:to-purple-700 transition-all duration-300 focus:ring-4 focus:ring-cyan-400/40 focus:outline-none quantum-btn"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;