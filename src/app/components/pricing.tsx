"use client"
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const plans = {
  monthly: [
    {
      name: "Starter",
      price: 29,
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 5 users",
        "Basic reporting",
        "Email support",
        "Mobile app access",
        "1 industry module",
        "5GB storage"
      ],
      popular: false,
      cta: "Start Free Trial"
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
        "Advanced security"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: 199,
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Custom reporting",
        "24/7 phone support",
        "Dedicated account manager",
        "All industry modules",
        "Unlimited storage",
        "White-label options",
        "SLA guarantee",
        "Custom development"
      ],
      popular: false,
      cta: "Contact Sales"
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
        "Basic reporting",
        "Email support",
        "Mobile app access",
        "1 industry module",
        "5GB storage"
      ],
      popular: false,
      cta: "Start Free Trial"
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
        "Advanced security"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: 1990,
      originalPrice: 2388,
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Custom reporting",
        "24/7 phone support",
        "Dedicated account manager",
        "All industry modules",
        "Unlimited storage",
        "White-label options",
        "SLA guarantee",
        "Custom development"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ]
};

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);
  const currentPlans = isYearly ? plans.yearly : plans.monthly;

  return (
    <section className="py-24 bg-gray-50" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 mb-4">Pricing</h2>
          <h3 className="text-section-title text-gray-900 mb-6">
            Choose the perfect plan for your business
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Start with a 15-day free trial. No credit card required. Cancel anytime.
          </p>

          {/* Pricing Toggle */}
          <div className="flex justify-center items-center bg-white rounded-full p-1.5 max-w-sm mx-auto shadow-lg">
            <button
              onClick={() => setIsYearly(false)}
              className={`inline-block w-1/2 text-center transition-all duration-300 rounded-full font-semibold py-3 px-6 ${
                !isYearly ? "bg-indigo-600 text-white shadow-lg" : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`inline-block w-1/2 text-center transition-all duration-300 rounded-full font-semibold py-3 px-6 relative ${
                isYearly ? "bg-indigo-600 text-white shadow-lg" : "text-gray-600 hover:text-indigo-600"
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {currentPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl scale-105 lg:scale-110"
                  : "bg-white text-gray-900 shadow-lg hover:shadow-xl"
              } transition-all duration-300 hover:-translate-y-2`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? "text-indigo-100" : "text-gray-600"}`}>
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                      ${plan.price}
                    </span>
                    <span className={`text-lg ml-1 ${plan.popular ? "text-indigo-100" : "text-gray-600"}`}>
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  {isYearly && plan.originalPrice && (
                    <div className="mt-2">
                      <span className={`text-sm line-through ${plan.popular ? "text-indigo-200" : "text-gray-500"}`}>
                        ${plan.originalPrice}/year
                      </span>
                      <span className="ml-2 text-sm font-semibold text-green-500">
                        Save ${plan.originalPrice - plan.price}
                      </span>
                    </div>
                  )}
                </div>

                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-white text-indigo-600 hover:bg-gray-100 shadow-lg"
                      : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl"
                  } hover:scale-105 active:scale-95`}
                >
                  {plan.cta}
                </button>
              </div>

              <div className="space-y-4">
                <h4 className={`font-semibold mb-4 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  Everything included:
                </h4>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <CheckIcon className={`h-5 w-5 mr-3 ${plan.popular ? "text-green-300" : "text-green-500"}`} />
                    <span className={`text-sm ${plan.popular ? "text-indigo-100" : "text-gray-600"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600 text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Is there a setup fee?</h4>
              <p className="text-gray-600 text-sm">No setup fees. Start your free trial today and begin using the platform immediately.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600 text-sm">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer refunds?</h4>
              <p className="text-gray-600 text-sm">Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}