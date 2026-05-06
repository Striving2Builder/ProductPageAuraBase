import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsOfUseProps {
  onBack: () => void;
}

const APPLE_STANDARD_EULA_URL = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';

const TermsOfUseView: React.FC<TermsOfUseProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold uppercase tracking-widest text-[11px] mb-12 hover:translate-x-[-4px] transition-all"
        >
          <ArrowLeft size={16} /> Back to AuraBase
        </button>

        <h1 className="text-4xl md:text-6xl font-bold font-display mb-4 tracking-tight">Terms of Use</h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium mb-16">Last Updated: May 2026</p>

        <div className="space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
          <section>
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms of Use govern your access to and use of AuraBase on iOS, Android, and web experiences operated by Nappy Dog Studios Ltd. By using AuraBase, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4">2. Subscriptions and Billing</h2>
            <p>
              AuraBase offers optional auto-renewable subscriptions that unlock premium wellness features. Pricing, subscription duration, and trial availability are shown before purchase inside the app.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Payment is charged to your Apple ID account at confirmation of purchase.</li>
              <li>Subscriptions renew automatically unless auto-renew is turned off at least 24 hours before the current period ends.</li>
              <li>Your account is charged for renewal within 24 hours prior to the end of the current period.</li>
              <li>You can manage subscriptions and turn off auto-renew in App Store account settings after purchase.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4">3. App Store downloads</h2>
            <p>
              Apps distributed through the Apple App Store are also subject to Apple&apos;s standard license agreement for licensed applications.
            </p>
            <p className="mt-4">
              View Apple&apos;s standard terms:{' '}
              <a
                href={APPLE_STANDARD_EULA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 dark:text-brand-400 font-bold underline underline-offset-4"
              >
                {APPLE_STANDARD_EULA_URL}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4">4. Acceptable Use</h2>
            <p>
              You agree not to misuse the service, attempt unauthorized access, disrupt platform operations, or use AuraBase for unlawful activity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4">5. Medical Disclaimer</h2>
            <p>
              AuraBase provides wellness and educational information. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek guidance from a qualified healthcare professional for medical concerns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4">6. Contact</h2>
            <p>
              Questions about these Terms of Use can be sent to{' '}
              <span className="text-brand-600 dark:text-brand-400 font-bold">nick@ndstudios.dev</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUseView;
