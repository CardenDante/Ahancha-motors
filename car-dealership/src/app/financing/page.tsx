import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import FinanceForm from '@/components/financing/FinanceForm';
import FinanceOptions from '@/components/financing/FinanceOptions';

export const metadata: Metadata = {
  title: 'Auto Financing | Premium Auto Dealership',
  description: 'Explore flexible financing options for your next vehicle. Apply online, calculate payments, and learn about our financing process.',
};

export default function FinancingPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
        <div className="relative bg-gray-900 text-white">
                <div className="absolute inset-0 z-0 opacity-30">
                  <Image 
                    src="/images/cars/cx51.png" 
                    alt="Premium Auto Dealership" 
                    fill 
                    className="object-cover xl:object-left"
                    priority
                  />
                </div>
                <div className="relative z-10 container mx-auto px-4 py-20">
                  <div className="max-w-3xl">
                    <div className="inline-block px-4 py-1.5 bg-red-600 text-white text-sm font-medium rounded-full mb-4">
                      Financing
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Motor Vehicle Financing Made Simple</h1>
                    <p className="text-lg text-gray-300">
                    Flexible financing solutions tailored to your needs.
                    </p>
                  </div>
                </div>
              </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Introduction Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Finance Your Next Vehicle with Confidence</h2>
            <p className="text-gray-700 mb-4">
              At Premium Auto Dealership, we understand that purchasing a vehicle is a significant investment. 
              Our dedicated finance team works with you to find the perfect financing solution that fits your 
              budget and lifestyle. Whether you're looking for a low-interest loan, flexible lease terms, or 
              special financing programs, we've got you covered.
            </p>
            <p className="text-gray-700">
              Apply online today to get pre-approved and streamline your car-buying experience. Our finance 
              experts will guide you through the entire process, ensuring transparency and peace of mind.
            </p>
          </div>

          {/* Two Column Layout: Form and Options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Finance Application Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Pre-Approved</h2>
              <p className="text-gray-700 mb-6">
                Fill out our secure online application to get started with your financing approval.
              </p>
              <FinanceForm />
            </div>

            {/* Financing Options */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Financing Options</h2>
              <p className="text-gray-700 mb-6">
                We offer a variety of financing solutions to fit different needs and situations.
              </p>
              <FinanceOptions />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">What documents do I need for financing?</h3>
                <p className="text-gray-700">
                  To process your financing application, you'll typically need a valid driver's license, proof of income 
                  (pay stubs or tax returns), proof of residence, and insurance information. Additional documents may be 
                  required based on your specific situation.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I get financing with less-than-perfect credit?</h3>
                <p className="text-gray-700">
                  Yes! We work with multiple lenders to provide options for a wide range of credit profiles. Our finance 
                  team specializes in finding solutions for customers with varying credit histories.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">How long does the approval process take?</h3>
                <p className="text-gray-700">
                  In many cases, we can provide preliminary approval within hours. The final approval process typically 
                  takes 24-48 hours, depending on the lender and verification requirements.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Is there a difference between leasing and financing?</h3>
                <p className="text-gray-700">
                  Yes, financing means you'll eventually own the vehicle after completing the loan payments. Leasing is 
                  essentially a long-term rental with lower monthly payments, but you return the vehicle at the end of 
                  the lease term (typically 2-3 years) unless you choose to purchase it.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I pay off my loan early?</h3>
                <p className="text-gray-700">
                  Most of our financing options allow for early payoff without penalties. However, specific terms depend 
                  on the lender. Our finance team will ensure you understand all terms before finalizing your agreement.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-900 text-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our financing experts are ready to help you find the perfect solution for your budget and needs.
              Apply online or contact us today to discuss your options.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#finance-form" 
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md transition-colors"
              >
                Apply Now
              </a>
              <a 
                href="/contact" 
                className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-lg shadow-md transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}