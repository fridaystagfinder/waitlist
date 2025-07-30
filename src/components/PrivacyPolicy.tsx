import React from 'react';
import { Shield, Mail, Phone, User } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-primary text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="icon-container mx-auto mb-6">
              <Shield className="w-12 h-12 text-accent-purple" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">
              Privacy Policy for FridayStag
            </h1>
            <p className="text-gray-300 text-lg">
              Your privacy is our priority. We're committed to protecting your data across all jurisdictions.
            </p>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div className="text-center mb-6">
              <p><strong>Effective Date:</strong> July 2025</p>
              <p><strong>Last Updated:</strong> July 2025</p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-accent-purple" />
                1. Introduction
              </h2>
              <div className="space-y-3">
                <p>Welcome to FridayStag ("we," "us," "our"). We are committed to protecting your privacy and ensuring transparency regarding the collection, use, and disclosure of your personal information. This Privacy Policy describes our practices concerning the data we collect through our website (including the waitlist signup at fridaystagfinder.com), mobile application (FridayStag app), and related services (collectively, the "Service").</p>
                <p>By using the Service, you agree to the collection and use of information in accordance with this policy. If you disagree with any part of this policy, please do not use the Service.</p>
                <p>This policy is designed to comply with applicable data protection laws, including but not limited to India's Digital Personal Data Protection Act, 2023 (DPDP Act), California's California Consumer Privacy Act (CCPA), and Japan's Act on Protection of Personal Information (APPI), to the extent applicable to our processing activities.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <div className="space-y-3">
                <p>We collect information to provide and improve the Service for you. The types of information we collect include:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Personal Information You Provide:</strong> This includes information you knowingly and actively provide to us, such as:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Name</li>
                      <li>Email Address</li>
                      <li>Phone Number (Optional)</li>
                      <li>City</li>
                      <li>Comments or Feedback</li>
                    </ul>
                  </li>
                  <li><strong>Information Collected Automatically:</strong> When you interact with the Service, we may collect certain information automatically, such as:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Device Information (e.g., device type, operating system, browser type)</li>
                      <li>IP Address</li>
                      <li>Usage Data (e.g., pages visited, time spent, features used)</li>
                      <li>Log Data</li>
                    </ul>
                  </li>
                  <li><strong>Location Information:</strong> We may collect approximate location information (e.g., city level) based on your IP address for general service functionality. Precise location data (e.g., GPS) is only accessed if explicitly required for specific features (like SOS) and with your explicit consent.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <div className="space-y-3">
                <p>We use the collected information for various purposes, including:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>To provide, maintain, and improve the Service (e.g., waitlist management, app functionality).</li>
                  <li>To notify you about updates, changes, or important information related to the Service.</li>
                  <li>To personalize your experience (e.g., suggesting relevant venues).</li>
                  <li>To respond to your comments, questions, and requests.</li>
                  <li>To conduct research and analysis to understand user needs and improve our offerings.</li>
                  <li>To detect, prevent, and address technical issues or security threats.</li>
                  <li>To comply with legal obligations.</li>
                </ul>
                <p className="bg-accent-purple/10 border border-accent-purple/30 rounded-lg p-4 mt-4">
                  <strong>Important:</strong> We do not sell your personal information to third parties. We do not share your personal information with venues or other users without your explicit consent or as required for core Service functionality (e.g., check-ins).
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing and Disclosure</h2>
              <div className="space-y-3">
                <p>Your data is private and stays with FridayStag. We may share information in the following limited circumstances:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>With Service Providers:</strong> We may employ third-party companies and individuals to facilitate our Service, provide the Service on our behalf, perform Service-related services, or assist us in analyzing how our Service is used. These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose. Examples include cloud hosting providers (e.g., AWS), analytics services, and potentially the WhatsApp Business API for SOS functionality.</li>
                  <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
                  <li><strong>Business Transfers:</strong> If FridayStag is involved in a merger, acquisition, or asset sale, your Personal Information may be transferred. We will provide notice before your Personal Information is transferred and becomes subject to a different Privacy Policy.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <div className="space-y-3">
                <p>We value your trust in providing us your Personal Information, thus we strive to use commercially acceptable means of protecting it. However, please remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security. We implement appropriate technical and organizational measures (e.g., encryption, access controls) to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Data Protection Rights (Subject to Applicable Law)</h2>
              <div className="space-y-3">
                <p>Depending on your jurisdiction and the applicable laws (like the DPDP Act, CCPA, APPI), you may have certain rights regarding your personal information:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Right to Access:</strong> The right to obtain confirmation as to whether or not personal information concerning you is being processed, and access to the information.</li>
                  <li><strong>Right to Rectification:</strong> The right to obtain rectification of inaccurate personal information.</li>
                  <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> The right to obtain the erasure of personal information concerning you, under certain conditions (e.g., data no longer necessary, consent withdrawn, data processed unlawfully).</li>
                  <li><strong>Right to Data Portability:</strong> The right to receive the personal information concerning you, which you have provided to us, in a structured, commonly used, and machine-readable format, and the right to transmit that data to another controller.</li>
                  <li><strong>Right to Object:</strong> The right to object, on grounds relating to your particular situation, at any time, to processing of personal information concerning you.</li>
                  <li><strong>Rights under CCPA:</strong> California residents may have additional rights, including the right to know what personal information is collected, whether it's sold or disclosed, the right to say no to the sale of personal information, the right to access specific pieces of personal information, and the right to non-discrimination for exercising privacy rights.</li>
                </ul>
                <p><strong>Exercising Your Rights:</strong> If you wish to exercise any of these rights, please contact us using the contact information provided below. We may request specific information from you to verify your identity before fulfilling your request. We will respond to your request within the timeframes required by applicable law.</p>
                <p><strong>Opt-Out:</strong> You have the right to opt-out of certain data processing activities, particularly marketing communications. You can usually do this by following the unsubscribe link in emails or changing your communication preferences in the app (if/when launched).</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
              <div className="space-y-3">
                <p>We will retain your Personal Information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Information to the extent necessary to comply with our legal obligations (e.g., tax, accounting, or other legal requirements), resolve disputes, and enforce our agreements.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
              <div className="space-y-3">
                <p>Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from anyone under the age of 18 without verification of parental consent, we take steps to remove that information from our servers.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. International Data Transfers</h2>
              <div className="space-y-3">
                <p>Your information, including Personal Information, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. If you are located outside India and choose to provide information to us, please note that we transfer the data, including Personal Information, to India and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
              <div className="space-y-3">
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-accent-orange" />
                11. Contact Us
              </h2>
              <div className="space-y-3">
                <p>If you have any questions about this Privacy Policy, or if you wish to exercise your data protection rights, please contact us:</p>
                <div className="bg-accent-purple/10 border border-accent-purple/30 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-accent-purple" />
                    <span><strong>Founder:</strong> Sai Bharadwaj</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-accent-purple" />
                    <span><strong>Email:</strong> <a href="mailto:hello@fridaystag.com" className="text-accent-purple hover:text-accent-orange underline">hello@fridaystag.com</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent-purple" />
                    <span><strong>Phone:</strong> +91-9985386015</span>
                  </div>
                </div>

                <p className="text-sm text-gray-400">© 2025 FridayStag. All rights reserved.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}