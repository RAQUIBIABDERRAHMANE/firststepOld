"use client"
import { useState } from "react";
import { CheckIcon, StarIcon } from "@heroicons/react/24/outline";

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
      description: "Perfect for emerging businesses",
      features: [
        "Up to 5 users",
        "Basic AI analytics",
        "Email support",
        "Mobile app access",
        "1 industry module",
        "5GB cloud storage",
        "Standard security"
      ],
      popular: false,
      cta: "Initialize Trial",
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      name: "Professional",
      price: 79,
      description: "Ideal for scaling operations",
      features: [
        "Up to 25 users",
        "Advanced AI insights",
        "Priority support",
        "API access",
        "3 industry modules",
        "50GB cloud storage",
        "Custom integrations",
        "Enhanced security",
        "Real-time analytics"
      ],
      popular: true,
      cta: "Deploy System",
      gradient: "from-purple-400 to-pink-600"
    },
    {
      name: "Enterprise",
      price: 199,
      description: "For mission-critical operations",
      features: [
        "Unlimited users",
        "Custom AI models",
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
      cta: "Contact Specialists",
      gradient: "from-orange-400 to-red-600"
    }
  ],
  yearly: [
    {
      name: "Starter",
      price: 290,
      originalPrice: 348,
      description: "Perfect for emerging businesses",
      features: [
        "Up to 5 users",
        "Basic AI analytics",
        "Email support",
        "Mobile app access",
        "1 industry module",
        "5GB cloud storage",
        "Standard security"
      ],
      popular: false,
      cta: "Initialize Trial",
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      name: "Professional",
      price: 790,
      originalPrice: 948,
      description: "Ideal for scaling operations",
      features: [
        "Up to 25 users",
        "Advanced AI insights",
        "Priority support",
        "API access",
        "3 industry modules",
        "50GB cloud storage",
        "Custom integrations",
        "Enhanced security",
        "Real-time analytics"
      ],
      popular: true,
      cta: "Deploy System",
      gradient: "from-purple-400 to-pink-600"
    },
    {
      name: "Enterprise",
      price: 1990,
      originalPrice: 2388,
      description: "For mission-critical operations",
      features: [
        "Unlimited users",
        "Custom AI models",
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
      cta: "Contact Specialists",
      gradient: "from-orange-400 to-red-600"
    }
  ]
};

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState<boolean>(true);
  const currentPlans = isYearly ? plans.yearly : plans.monthly;

  return (
    <section className="py-32 bg-black relative overflow-hidden" id="pricing">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full px-6 py-2 text-sm font-medium bg-green-400/10 text-green-400 border border-green-400/30 mb-8">
            <span className="text-mono">PRICING.MATRIX</span>
          </div>
          
          <h2 className="text-section-title mb-8">
            Choose Your Configuration
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Start with a 15-day free trial. No credit card required.
            <br />
            <span className="text-cyan-400 font-medium">Scale as you grow.</span>
          </p>

          {/* Pricing Toggle */}
          <div className="flex justify-center items-center glass p-2 rounded-2xl max-w-sm mx-auto mb-16">
            <button
              onClick={() => setIsYearly(false)}
              className={`flex-1 text-center transition-all duration-300 rounded-xl font-semibold py-3 px-6 text-mono ${
                !isYearly 
                  ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-black shadow-lg" 
                  : "text-gray-400 hover:text-cyan-400"
              }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`flex-1 text-center transition-all duration-300 rounded-xl font-semibold py-3 px-6 relative text-mono ${
                isYearly 
                  ? "bg-gradient-to-r from-purple-400 to-pink-600 text-black shadow-lg" 
                  : "text-gray-400 hover:text-purple-400"
              }`}
            >
              YEARLY
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {currentPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative glass-card rounded-3xl p-8 ${
                plan.popular
                  ? "scale-105 lg:scale-110 border-2 border-purple-400/50"
                  : ""
              } card-hover`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-600 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center">
                    <StarIcon className="w-4 h-4 mr-1" />
                    MOST_POPULAR
                  </div>
                </div>
              )}

              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-0 hover:opacity-10 transition-opacity duration-500 rounded-3xl blur-xl`} />

              <div className="relative">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2 text-mono">
                    {plan.name.toUpperCase()}
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">
                    {plan.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">
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
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 text-mono ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-400 to-pink-600 text-black hover:scale-105 shadow-lg"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                    }`}
                  >
                    {plan.cta.toUpperCase()}
                  </button>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-white mb-4 text-mono">
                    SYSTEM.FEATURES:
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 flex items-center justify-center mr-3">
                          <CheckIcon className="h-3 w-3 text-black" />
                        </div>
                        <span className="text-sm text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/30" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/30" />
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-white mb-12 text-mono">
            SYSTEM.FAQ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Can I upgrade my configuration?",
                answer: "Yes, you can upgrade or modify your system configuration at any time. Changes are applied instantly."
              },
              {
                question: "Are there setup fees?",
                answer: "No setup fees. Initialize your trial today and begin system deployment immediately."
              },
              {
                question: "What payment methods are accepted?",
                answer: "We accept all major credit cards, PayPal, and enterprise wire transfers for large deployments."
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee if our system doesn't meet your requirements."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-card p-6 rounded-xl text-left">
                <h4 className="font-semibold text-white mb-3 text-mono">
                  {faq.question}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
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