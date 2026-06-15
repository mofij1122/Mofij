'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { portfolioConfig } from '@/config/portfolio.config';
import { Github, Linkedin, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="#hero" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center">
                <span className="text-lg font-bold text-white font-heading">
                  {portfolioConfig.personal.firstName[0]}
                  {portfolioConfig.personal.lastName[0]}
                </span>
              </div>
              <span className="font-heading font-semibold text-lg">
                {portfolioConfig.personal.name}
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              {portfolioConfig.personal.title}. Passionate about transforming raw data
              into actionable insights that drive business success.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={portfolioConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-emerald-500/20 hover:text-emerald-400 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={portfolioConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-emerald-500/20 hover:text-emerald-400 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${portfolioConfig.personal.email}`}
                className="p-2 rounded-lg bg-muted hover:bg-emerald-500/20 hover:text-emerald-400 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {portfolioConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-emerald-400 transition-colors animated-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-emerald-400" />
                <a
                  href={`mailto:${portfolioConfig.personal.email}`}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {portfolioConfig.personal.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{portfolioConfig.personal.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-sm flex items-center gap-1"
            >
              © {currentYear} {portfolioConfig.personal.name}. {portfolioConfig.footer.tagline}
            </motion.p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              {portfolioConfig.footer.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-purple-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}