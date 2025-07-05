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
      name: "Neural Starter",
      price: 29,
      description: "Perfect for emerging quantum businesses",
      features: [
        "Up to 5 neural users",
        "Basic AI analytics",
        "Quantum email support",
        "Mobile neural app access",
        "1 industry module",
        "5GB quantum storage",
        "Standard encryption"
      ],
      popular: false,
      cta: "Initialize Trial",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      name: "Quantum Professional",
      price: 79,
      description: "Ideal for scaling neural operations",
      features: [
        "Up to 25 neural users",
        "Advanced quantum insights",
        "Priority neural support",
        "Quantum API access",
        "3 industry modules",
        "50GB quantum storage",
        "Custom neural integrations",
        "Enhanced quantum security",
        "Real-time neural analytics"
      ],
      popular: true,
      cta: "Initialize Trial",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      name: "Neural Enterprise",
      price: 199,
      description: "For mission-critical quantum operations",
      features: [
        "Unlimited neural users",
        "Custom quantum AI models",
        "24/7 dedicated neural support",
        "Quantum account manager",
        "All industry modules",
        "Unlimited quantum storage",
        "White-label neural options",
        "Quantum SLA guarantee",
        "Custom neural development",
        "Advanced quantum compliance"
      ],
      popular: false,
      cta: "Contact Neural Sales",
      gradient: "from-green-400 to-emerald-500",
    }
  ],
  yearly: [
    {
      name: "Neural Starter",
      price: 290,
      originalPrice: 348,
      description: "Perfect for emerging quantum businesses",
      features: [
        "Up to 5 neural users",
        "Basic AI analytics",
        "Quantum email support",
        "Mobile neural app access",
        "1 industry module",
        "5GB quantum storage",
        "Standard encryption"
      ],
      popular: false,
      cta: "Initialize Trial",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      name: "Quantum Professional",
      price: 790,
      originalPrice: 948,
      description: "Ideal for scaling neural operations",
      features: [
        "Up to 25 neural users",
        "Advanced quantum insights",
        "Priority neural support",
        "Quantum API access",
        "3 industry modules",
        "50GB quantum storage",
        "Custom neural integrations",
        "Enhanced quantum security",
        "Real-time neural analytics"
      ],
      popular: true,
      cta: "Initialize Trial",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      name: "Neural Enterprise",
      price: 1990,
      originalPrice: 2388,
      description: "For mission-critical quantum operations",
      features: [
        "Unlimited neural users",
        "Custom quantum AI models",
        "24/7 dedicated neural support",
        "Quantum account manager",
        "All industry modules",
        "Unlimited quantum storage",
        "White-label neural options",
        "Quantum SLA guarantee",
        "Custom neural development",
        "Advanced quantum compliance"
      ],
      popular: false,
      cta: "Contact Neural Sales",
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
          <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium glass-card text-gray-400 border border-cyan-400/20 mb-8 neural-border">
            <SparklesIcon className="w-4 h-4 mr-2 text-cyan-400 animate-neon-flicker" />
            <span className="uppercase tracking-wider text-mono">QUANTUM.PRICING</span>
          </div>
          
          <h2 className="text-section-title mb-6 plasma-text">
            Choose Your Neural Plan
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Start with a{' '}
            <span className="neon-text">15-day quantum trial</span>. 
            No credit card required. Scale as your{' '}
            <span className="text-gradient-cyber">neural network</span> grows.
          </p>

          {/* Enhanced Pricing Toggle */}
          <div className="flex justify-center items-center glass-card p-1 rounded-xl max-w-sm mx-auto mb-16 border border-cyan-400/20 neural-border">
            <button
              onClick={() => setIsYearly(false)}
              className={`flex-1 text-center transition-all duration-300 rounded-lg font-medium py-3 px-6 text-mono ${
                !isYearly 
                  ? "quantum-btn" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`flex-1 text-center transition-all duration-300 rounded-lg font-medium py-3 px-6 relative text-mono ${
                isYearly 
                  ? "quantum-btn" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              YEARLY
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Enhanced Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {currentPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative glass-card rounded-2xl p-8 border transition-all duration-500 card-hover neural-border ${
                plan.popular
                  ? "border-cyan-500/50 shadow-lg shadow-cyan-500/20 scale-105"
                  : "border-white/10 hover:border-cyan-400/30"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="quantum-btn text-sm font-semibold shadow-lg flex items-center">
                    <StarIcon className="w-4 h-4 mr-1 animate-neon-flicker" />
                    <span className="text-mono">MOST_POPULAR</span>
                  </div>
                </div>
              )}

              {/* Quantum corner decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/30 opacity-0 hover:opacity-100 transition-opacity duration-300" />

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
                      <span className="text-lg ml-1 text-gray-400 text-mono">
                        /{isYearly ? "year" : "month"}
                      </span>
                    </div>
                    {isYearly && plan.originalPrice && (
                      <div className="mt-2">
                        <span className="text-sm line-through text-gray-500">
                          ${plan.originalPrice}/year
                        </span>
                        <span className="ml-2 text-sm font-semibold text-green-400 animate-neon-flicker">
                          Save ${plan.originalPrice - plan.price}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 text-mono ${
                      plan.popular
                        ? "quantum-btn"
                        : "btn-secondary"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-white mb-4 text-mono">
                    NEURAL_FEATURES:
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-3 neural-border">
                          <CheckIcon className="h-3 w-3 text-green-400 animate-neon-flicker" />
                        </div>
                        <span className="text-gray-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Data Flow Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 animate-data-flow" />
            </div>
          ))}
        </div>

        {/* Enhanced FAQ Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-white mb-12 plasma-text">
            Quantum FAQ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Can I upgrade my neural plan anytime?",
                answer: "Yes, you can upgrade or downgrade your quantum plan at any time. Changes are applied through neural synchronization."
              },
              {
                question: "Are there quantum setup fees?",
                answer: "No setup fees. Start your neural trial today and begin using the quantum platform immediately."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and enterprise quantum wire transfers."
              },
              {
                question: "Do you offer neural refunds?",
                answer: "Yes, we offer a 30-day quantum money-back guarantee if our neural platform doesn't meet your needs."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-card p-6 rounded-xl text-left border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 card-hover neural-border">
                <h4 className="font-semibold text-white mb-3 text-mono">
                  {faq.question}
                </h4>
                <p className="text-gray-400 leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;