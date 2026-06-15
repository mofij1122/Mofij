'use client';

import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio.config';
import { useInView } from '@/hooks/useInView';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const { contact, personal, social } = portfolioConfig;
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    await emailjs.send(
      'service_k45pxdr',
      'template_goqf1yk',
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'KGQ8MuGU2A9-1pGWd'
    );

    setSubmitStatus('success');

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => setSubmitStatus('idle'), 5000);

  } catch (error) {
    console.error(error);
    setSubmitStatus('error');
    setTimeout(() => setSubmitStatus('idle'), 5000);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-950/5 to-background" />
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
            <span className="gradient-text">{contact.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold font-heading mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8">
                Whether you have a project in mind, need data analysis services,
                or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 p-4 rounded-xl glass hover:border-emerald-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground group-hover:text-emerald-400 transition-colors">
                    {personal.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl glass">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">
                    {personal.location}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold font-heading mb-4">
                Connect on Social
              </h4>
              <div className="flex gap-3">
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-muted hover:bg-emerald-500/20 transition-all hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-muted hover:bg-emerald-500/20 transition-all hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-muted hover:bg-emerald-500/20 transition-all hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="p-3 rounded-xl bg-muted hover:bg-emerald-500/20 transition-all hover:-translate-y-1"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Input
                  label={contact.formFields.name.label}
                  name="name"
                  placeholder={contact.formFields.name.placeholder}
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <Input
                  label={contact.formFields.email.label}
                  name="email"
                  type="email"
                  placeholder={contact.formFields.email.placeholder}
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>

              <Input
                label={contact.formFields.subject.label}
                name="subject"
                placeholder={contact.formFields.subject.placeholder}
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  {contact.formFields.message.label}
                </label>
                <textarea
                  name="message"
                  placeholder={contact.formFields.message.placeholder}
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg bg-muted border transition-all duration-300 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 hover:border-emerald-500/50 text-foreground placeholder:text-muted-foreground ${
                    errors.message ? 'border-red-500' : 'border-border'
                  }`}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400"
                >
                  <CheckCircle className="w-5 h-5" />
                  {contact.successMessage}
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400"
                >
                  <AlertCircle className="w-5 h-5" />
                  Something went wrong. Please try again.
                </motion.div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isSubmitting}
                className="w-full"
              >
                <Send className="w-5 h-5" />
                {contact.submitButton}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}