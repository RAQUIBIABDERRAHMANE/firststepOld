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
      cta: "Start Free Trial",
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
      cta: "Start Free Trial",
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
      cta: "Contact Sales",
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
      cta: "Start Free Trial",
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
      cta: "Start Free Trial",
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
      cta: "Contact Sales",
    }
  ]
};

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState<boolean>(true);
  const currentPlans = isYearly ? plans.yearly : plans.monthly;

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="pricing">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        {/* Geometric decorations */}
        <div className="absolute top-32 left-10 w-20 h-20 border border-cyan-500/20 rotate-45" />
        <div className="absolute bottom-32 right-10 w-16 h-16 border border-purple-500/20 rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-white/5 text-gray-400 border border-white/10 mb-8">
            <span className="uppercase tracking-wider">Pricing Plans</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Choose Your Plan
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Start with a 15-day free trial. No credit card required.
            Scale as you grow.
          </p>

          {/* Pricing Toggle */}
          <div className="flex justify-center items-center bg-white/5 backdrop-blur-sm p-1 rounded-xl max-w-sm mx-auto mb-16 border border-white/10">
            <button
              onClick={() => setIsYearly(false)}
              className={`flex-1 text-center transition-all duration-300 rounded-lg font-medium py-3 px-6 ${
                !isYearly 
                  ? "bg-white text-black shadow-sm" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`flex-1 text-center transition-all duration-300 rounded-lg font-medium py-3 px-6 relative ${
                isYearly 
                  ? "bg-white text-black shadow-sm" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {currentPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-cyan-500/50 shadow-lg shadow-cyan-500/20 scale-105"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center">
                    <StarIcon className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Corner decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />

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
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-white text-black hover:bg-gray-100 shadow-lg"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-white mb-4">
                    What's included:
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

        {/* FAQ Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-white mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Can I upgrade my plan anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes are applied immediately."
              },
              {
                question: "Are there setup fees?",
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
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-left border border-white/10 hover:bg-white/10 transition-colors duration-300">
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
      </div>
    </section>
  );
};

export default Pricing;