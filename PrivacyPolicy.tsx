import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicyView: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold uppercase tracking-widest text-[11px] mb-12 hover:translate-x-[-4px] transition-all"
        >
          <ArrowLeft size={16} /> Back to AuraBase
        </button>

        <h1 className="text-4xl md:text-6xl font-bold font-display mb-4 tracking-tight">Privacy Policy & Terms</h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium mb-16">Last Updated: January 2026</p>

        <div className="space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
          <section>
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4">1. Introduction</h2>
            <p>
              Welcome to AuraBase ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. Your health data is deeply personal, and we've built our entire platform around keeping it secure and private.
            </p>
            <p className="mt-4">
              If you have any questions or concerns about this privacy notice or our practices, please contact us at <span className="text-brand-600 dark:text-brand-400 font-bold">ng.nicolas.social@gmail.com</span>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4">2. What Data We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Account Information:</strong> Name, Email, Age, Gender (for authentication and personalization)</li>
              <li><strong className="text-slate-900 dark:text-white">Body Metrics:</strong> Weight, Height, Activity Logs, Workout Data, Nutrition Logs</li>
              <li><strong className="text-slate-900 dark:text-white">Sensitive Health Data (Encrypted):</strong> Women's Health/Cycle Tracking, Vice Management, Mindset/Mental Wellness, Advanced Health/Lab Results</li>
              <li><strong className="text-slate-900 dark:text-white">Technical Data:</strong> IP Address, Browser/Device info (for security and debugging only)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4">3. How We Store Your Health Data (Zero-Knowledge Architecture)</h2>
            <p className="mb-6">We use a two-tier storage system to balance convenience with maximum privacy:</p>
            
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                <h3 className="font-bold text-lg mb-2 text-brand-600">A. Standard Health Data (Cloud Synced)</h3>
                <p><strong className="dark:text-white">What's stored:</strong> Body metrics, nutrition logs, workout data, profile settings, preferences</p>
                <p><strong className="dark:text-white">How it's protected:</strong> Stored in Supabase with Row-Level Security (RLS). Only you can access your data rows. Encrypted in transit (TLS/SSL) and at rest.</p>
                <p><strong className="dark:text-white">Why cloud:</strong> Allows seamless sync across devices and prevents data loss.</p>
              </div>

              <div className="p-6 rounded-3xl bg-brand-50/30 dark:bg-brand-900/10 border border-brand-100 dark:border-brand-900/20">
                <h3 className="font-bold text-lg mb-2 text-brand-600">B. Highly Sensitive Data (PrivateVault™ - Zero-Knowledge)</h3>
                <p><strong className="dark:text-white">What's stored:</strong> Women's Health/Cycle Tracking, Vice Management, Mindset/Mental Wellness, Advanced Health/Lab Results</p>
                <div className="mt-4 space-y-2">
                  <p><strong className="dark:text-white">AES-256-GCM Encryption:</strong> Military-grade encryption applied on your device before any storage or transmission.</p>
                  <p><strong className="dark:text-white">Device-Specific Keys:</strong> Encryption keys are derived from your device fingerprint and user ID using PBKDF2 with 100,000 iterations.</p>
                  <p><strong className="dark:text-white">Encrypted Cloud Backup:</strong> Data is backed up to the cloud every 24 hours in encrypted form. Even if our servers are compromised, your data remains unreadable.</p>
                  <p><strong className="dark:text-white">Zero-Knowledge:</strong> We cannot read, access, or decrypt your PrivateVault data. Only you have the keys.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4">4. Do We Share Your Data?</h2>
            <p className="text-xl font-bold text-brand-600 mb-4">NO. We do not sell, rent, or share your personal health data with third parties.</p>
            <p>
              The only exception: We use Supabase (our database provider) to store cloud-synced data. Supabase is SOC 2 Type II certified and GDPR compliant. Your PrivateVault data is encrypted before reaching Supabase, so even they cannot read it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4">5. Your Rights (GDPR & CCPA)</h2>
            <ul className="space-y-4">
              <li><strong className="text-slate-900 dark:text-white">Right to Export:</strong> You can download a complete copy of all your data (including encrypted PrivateVault data in plain text) via Settings → Your Data & Privacy → Export My Data.</li>
              <li><strong className="text-slate-900 dark:text-white">Right to Delete:</strong> You can permanently delete your account and all associated data at any time. This action is irreversible and wipes all data from our servers and your encrypted backups.</li>
              <li><strong className="text-slate-900 dark:text-white">Right to Access:</strong> You can request a detailed report of what data we store about you and how it's used.</li>
              <li><strong className="text-slate-900 dark:text-white">Right to Portability:</strong> Your exported data is in JSON format, making it easy to import into other applications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4">6. How Long We Keep Your Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Active Accounts:</strong> We retain your data as long as your account is active.</li>
              <li><strong className="text-slate-900 dark:text-white">Deleted Accounts:</strong> All data is permanently deleted within 30 days of account deletion.</li>
              <li><strong className="text-slate-900 dark:text-white">Encrypted Backups:</strong> Deleted immediately when you delete your account.</li>
              <li><strong className="text-slate-900 dark:text-white">Logs/Analytics:</strong> Anonymized technical logs are retained for 90 days for security purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4">7. Security Measures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "✅ TLS/SSL Encryption for all data in transit",
                "✅ AES-256-GCM for PrivateVault data",
                "✅ Row-Level Security (RLS) in database",
                "✅ PBKDF2 Key Derivation (100,000 iterations)",
                "✅ Zero-Knowledge Architecture for sensitive data",
                "✅ Regular Security Audits and updates"
              ].map((measure, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-sm font-bold">
                  {measure}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4">8. Where Is Your Data Stored?</h2>
            <p>
              Your data is securely stored using a hybrid approach. Sensitive data resides encrypted on your local device, while synced data is hosted on secure Supabase servers located in Canada, ensuring compliance with Canadian data sovereignty and privacy laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by updating the "Last Updated" date at the top of this policy. Significant changes will be communicated via email or in-app notification.
            </p>
          </section>

          <section className="p-8 rounded-[3rem] bg-slate-950 text-white border border-white/10">
            <h2 className="text-3xl font-bold font-display mb-6">10. Contact Us</h2>
            <p className="mb-6">
              If you have questions about this policy or want to exercise your rights, please contact our Data Protection Officer at:
            </p>
            <p className="text-2xl font-bold text-brand-400 mb-8 select-all">ng.nicolas.social@gmail.com</p>
            <div className="pt-6 border-t border-white/10">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px]">AuraBase Data Protection Officer</p>
              <p className="text-sm font-medium mt-1">Response time: Within 48 hours</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyView;
