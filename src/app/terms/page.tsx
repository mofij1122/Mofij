import Link from 'next/link';
import { portfolioConfig } from '@/config/portfolio.config';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-24">
      <div className="container-custom">
        <div className="glass rounded-3xl p-10 border border-border shadow-xl">
          <h1 className="text-4xl font-bold font-heading mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-4">
            Welcome to {portfolioConfig.personal.name}&apos;s portfolio. These terms are a placeholder and outline general conditions for using the site.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li>The site is provided for informational purposes only.</li>
            <li>Content may change without prior notice.</li>
            <li>All branding and materials remain the property of the site owner.</li>
          </ul>
          <Link href="#hero" className="btn-primary px-6 py-3">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
