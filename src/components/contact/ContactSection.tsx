import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Check, 
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Copy,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { MagneticButton } from '../ui/MagneticButton';
import { SectionWrapper } from '../ui/SectionWrapper';

const PROJECT_TYPES = [
  'Node.js / Express Backend',
  'REST API Architecture',
  'Payment & Webhooks',
  'Full-Stack Next.js App',
  'MongoDB Optimization',
  'Technical Consultation'
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: PROJECT_TYPES[0],
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setErrorMessage('');
    setFormStatus('submitting');

    try {
      // Direct form submission dispatch to rsoham00@gmail.com using standard AJAX FormSubmit gateway
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Portfolio Inquiry from ${formData.name} [${formData.projectType}]`,
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone || 'Not provided',
          ProjectType: formData.projectType,
          Message: formData.message,
          _template: 'table'
        })
      });

      if (response.ok) {
        setFormStatus('success');
        confetti({
          particleCount: 80,
          spread: 65,
          origin: { y: 0.8 },
          colors: ['#8b5cf6', '#06b6d4', '#3b82f6', '#ffffff']
        });
      } else {
        // Fallback: mailto trigger if endpoint has network restrictions in preview
        const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Portfolio Inquiry: ${formData.projectType}`)}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nFocus: ${formData.projectType}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setFormStatus('success');
      }
    } catch {
      // Graceful mailto fallback
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Portfolio Inquiry: ${formData.projectType}`)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nFocus: ${formData.projectType}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setFormStatus('success');
    }
  };

  return (
    <SectionWrapper id="contact" theme="radar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Get in Touch"
          badgeIcon={MessageSquare}
          title="Have an idea"
          gradientWord="worth building?"
          subtitle="Let's turn it into a reliable, scalable product. I'm currently available for senior engineering opportunities, contract projects, and architecture consultations."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Quick Direct Contact Pills / Details Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Full Name & Location */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="p-4 rounded-2xl bg-[#090b14]/80 border border-white/[0.08] flex items-center gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ECEFF2] shrink-0">
                <MapPin className="w-4 h-4 text-zinc-400" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8C93A0] block">Developer</span>
                <p className="text-xs sm:text-sm font-semibold text-[#ECEFF2] truncate">{PERSONAL_INFO.name}</p>
              </div>
            </motion.div>

            {/* Email with copy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="p-4 rounded-2xl bg-[#090b14]/80 border border-white/[0.08] flex items-center justify-between gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ECEFF2] shrink-0">
                  <Mail className="w-4 h-4 text-zinc-400" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8C93A0] block">Direct Email</span>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`} 
                    className="text-xs sm:text-sm font-mono text-[#ECEFF2] hover:underline truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors shrink-0 cursor-pointer"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </motion.div>

            {/* Phone Number with call & copy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.19 }}
              className="p-4 rounded-2xl bg-[#090b14]/80 border border-white/[0.08] flex items-center justify-between gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ECEFF2] shrink-0">
                  <Phone className="w-4 h-4 text-zinc-400" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8C93A0] block">Phone / WhatsApp</span>
                  <a 
                    href={`tel:${PERSONAL_INFO.phone}`} 
                    className="text-xs sm:text-sm font-mono text-[#ECEFF2] hover:underline truncate block"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors shrink-0 cursor-pointer"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </motion.div>
          </div>

          {/* Polished Contact Form */}
          <div>
            <GlassCard className="p-6 sm:p-10 relative overflow-hidden bg-[#090b14]/90 border-white/[0.08]">
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-2 shadow-[0_0_24px_rgba(16,185,129,0.3)]">
                      <Check className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-[#ECEFF2] font-display">
                      Inquiry Sent to {PERSONAL_INFO.email}!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8C93A0] max-w-md">
                      Thank you for reaching out, <strong className="text-[#ECEFF2]">{formData.name}</strong>. Soham Rathod has received your message and will follow up with you directly at <span className="text-[#ECEFF2] font-mono">{formData.email}</span>.
                    </p>

                    <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                      <MagneticButton
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          setFormData({ name: '', email: '', phone: '', projectType: PROJECT_TYPES[0], message: '' });
                          setFormStatus('idle');
                        }}
                      >
                        <span>Send Another Message</span>
                      </MagneticButton>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}?subject=Follow-up%20Inquiry%20-%20${encodeURIComponent(formData.name)}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-[#ECEFF2] transition-colors"
                      >
                        <span>Open Direct Email</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-[#ECEFF2] mb-1 font-display">
                        Send a Direct Message
                      </h3>
                      <p className="text-xs text-[#8C93A0]">
                        Submissions are routed directly to <span className="font-mono text-[#ECEFF2]">{PERSONAL_INFO.email}</span>.
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
                        {errorMessage}
                      </div>
                    )}

                    {/* Name & Email inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-[#8C93A0] mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Miller"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-white/30 focus:bg-white/[0.05] text-sm text-[#ECEFF2] placeholder:text-zinc-600 focus:outline-none transition-all font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[#8C93A0] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-white/30 focus:bg-white/[0.05] text-sm text-[#ECEFF2] placeholder:text-zinc-600 focus:outline-none transition-all font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[#8C93A0] mb-1.5">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 9265243821"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-white/30 focus:bg-white/[0.05] text-sm text-[#ECEFF2] placeholder:text-zinc-600 focus:outline-none transition-all font-mono"
                        />
                      </div>
                    </div>

                    {/* Project Type selector pills */}
                    <div>
                      <label className="block text-xs font-mono text-[#8C93A0] mb-2">
                        Primary Engineering Focus
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {PROJECT_TYPES.map((type) => {
                          const isSelected = formData.projectType === type;
                          return (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setFormData({ ...formData, projectType: type })}
                              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-white/[0.12] text-[#ECEFF2] border border-white/30 font-semibold shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]'
                                  : 'bg-white/[0.02] text-[#8C93A0] border border-white/[0.05] hover:text-[#ECEFF2] hover:bg-white/[0.05]'
                              }`}
                            >
                              {type}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message textarea */}
                    <div>
                      <label className="block text-xs font-mono text-[#8C93A0] mb-1.5">
                        Project Overview or Goals *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe what you're building, key technical challenges, or what role you're looking to fill..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-white/30 focus:bg-white/[0.05] text-sm text-[#ECEFF2] placeholder:text-zinc-600 focus:outline-none transition-all resize-none font-mono"
                      />
                    </div>

                    {/* Submit button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full py-3 px-6 rounded-xl bg-white text-zinc-950 hover:bg-[#ECEFF2] font-semibold text-xs uppercase tracking-wider font-mono shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <div className="w-4 h-4 rounded-full border-2 border-zinc-950 border-t-transparent animate-spin" />
                            <span>Transmitting to {PERSONAL_INFO.email}...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message to {PERSONAL_INFO.email}</span>
                          </>
                        )}
                      </button>
                    </div>

                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>

        </div>

      </div>
    </SectionWrapper>
  );
};
