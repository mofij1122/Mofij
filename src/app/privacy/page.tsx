import Link from 'next/link';
import { portfolioConfig } from '@/config/portfolio.config';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-24">
      <div className="container-custom">
        <div className="glass rounded-3xl p-10 border border-border shadow-xl">
          <h1 className="text-4xl font-bold font-heading mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-4">
            {portfolioConfig.personal.name} is committed to protecting your privacy. This page contains a placeholder privacy policy for the portfolio website.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li>Information is collected only when submitted through contact forms.</li>
            <li>Personal data is used solely to respond to inquiries.</li>
            <li>External links are not controlled by this site.</li>
          </ul>
          <Link href="#hero" className="btn-primary px-6 py-3">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
