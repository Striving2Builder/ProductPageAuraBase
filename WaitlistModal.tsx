import React, { useState } from 'react';
import { X, Check, Loader2, Mail } from 'lucide-react';

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        // SIMULATION: In a real "no-backend" scenario, you would send a POST request here.
        // Recommended: Use Formspree.io or a Google Sheets Webhook.
        // Example:
        // fetch('https://formspree.io/f/your_form_id', { method: 'POST', body: JSON.stringify({ email }) })

        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-fade-in">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative w-full max-w-md bg-white dark:bg-slate-950 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 shadow-2xl scale-100 animate-scale-up">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-slate-500"
                >
                    <X size={20} />
                </button>

                <div className="text-center mb-8 mt-4">
                    <h3 className="text-3xl font-bold font-display mb-2">Join the Evolution</h3>
                    <p className="text-slate-500 dark:text-slate-400">Be the first to access AuraBase when we launch.</p>
                </div>

                {status === 'success' ? (
                    <div className="flex flex-col items-center py-8 text-center animate-fade-in">
                        <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4">
                            <Check size={32} />
                        </div>
                        <h4 className="text-2xl font-bold mb-2">You're on the list!</h4>
                        <p className="text-slate-500 mb-6">We'll notify you as soon as early access opens.</p>
                        <button
                            onClick={() => { setStatus('idle'); onClose(); }}
                            className="px-8 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold"
                        >
                            Done
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-500 transition-all font-medium"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full py-4 rounded-2xl bg-brand-500 text-white font-bold text-lg hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 size={20} className="animate-spin" /> Joining...
                                </>
                            ) : (
                                'Reserve My Spot'
                            )}
                        </button>
                        <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest mt-4">
                            Zero Spam. 100% Privacy.
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};
