import React from 'react';
import { Shield, Globe, Users, FileText } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-primary text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="icon-container mx-auto mb-6">
              <Shield className="w-12 h-12" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-accent-purple to-accent-gold bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg">
              Your privacy is our priority. We're committed to protecting your data across all jurisdictions.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-accent-purple" />
                <h2 className="text-2xl font-bold text-white">Data Collection & Usage</h2>
              </div>
              <div className="text-gray-300 space-y-3">
                <p>
                  FridayStag collects personal information that you provide to us, including your name, 
                  email address, phone number, and location data to provide our services effectively.
                </p>
                <p>
                  We use this information to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Process your waitlist registration</li>
                  <li>Send you updates about our service launch</li>
                  <li>Provide customer support</li>
                  <li>Improve our services and user experience</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-6 h-6 text-accent-gold" />
                <h2 className="text-2xl font-bold text-white">International Compliance</h2>
              </div>
              <div className="text-gray-300 space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-accent-purple mb-2">India - DPDP Act</h3>
                  <p>
                    We comply with India's Digital Personal Data Protection Act (DPDP) 2023, ensuring 
                    lawful processing of your personal data with appropriate consent mechanisms.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-purple mb-2">United States - CCPA</h3>
                  <p>
                    For California residents, we provide rights under the California Consumer Privacy Act (CCPA), 
                    including the right to know, delete, and opt-out of the sale of personal information.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-purple mb-2">Japan - APPI</h3>
                  <p>
                    We adhere to Japan's Act on Protection of Personal Information (APPI), ensuring 
                    proper handling and protection of personal data for Japanese users.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-accent-gold" />
                <h2 className="text-2xl font-bold text-white">Your Rights</h2>
              </div>
              <div className="text-gray-300 space-y-3">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your data (right to be forgotten)</li>
                  <li>Withdraw consent at any time</li>
                  <li>Data portability</li>
                  <li>Object to processing</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us at{' '}
                  <a href="mailto:privacy@fridaystag.com" className="text-accent-purple hover:text-accent-gold underline">
                    privacy@fridaystag.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <div className="text-gray-300 space-y-3">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  data against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <div className="text-gray-300 space-y-2">
                <p>For privacy-related inquiries, contact:</p>
                <p>
                  Email: <a href="mailto:privacy@fridaystag.com" className="text-accent-purple hover:text-accent-gold underline">privacy@fridaystag.com</a>
                </p>
                <p>
                  Data Protection Officer: <a href="mailto:dpo@fridaystag.com" className="text-accent-purple hover:text-accent-gold underline">dpo@fridaystag.com</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Updates</h2>
              <div className="text-gray-300">
                <p>
                  This Privacy Policy may be updated from time to time. We will notify you of any 
                  significant changes via email or through our service.
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}