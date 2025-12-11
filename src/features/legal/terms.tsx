import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Logo } from '@/assets/logo'
import { Button } from '@/components/ui/button'

export function TermsOfService() {
  useEffect(() => {
    document.title = 'Terms of Service - LearningCenter'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      {/* Header */}
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4'>
          <div className='flex items-center gap-2'>
            <Logo className='h-8 w-8 text-primary' />
            <Link to='/' className='text-xl font-bold tracking-tight'>
              LearningCenter
            </Link>
          </div>
          <nav className='flex items-center gap-4'>
            <Link to='/sign-in'>
              <Button variant='ghost' size='sm'>
                Sign in
              </Button>
            </Link>
            <Link to='/sign-up'>
              <Button size='sm'>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className='flex-1 py-12'>
        <div className='container mx-auto max-w-4xl px-4'>
          <h1 className='mb-8 text-4xl font-extrabold tracking-tight'>
            Terms of Service
          </h1>
          <p className='mb-8 text-lg text-muted-foreground'>
            Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className='prose prose-slate dark:prose-invert max-w-none space-y-8'>
            <section>
              <h2 className='text-2xl font-bold'>1. Acceptance of Terms</h2>
              <p className='mt-4 text-muted-foreground'>
                By accessing and using LearningCenter ("the Service"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold'>2. Description of Service</h2>
              <p className='mt-4 text-muted-foreground'>
                LearningCenter provides an educational platform connecting students and teachers. We reserve the right to modify, suspend, or discontinue any part of the Service at any time without notice.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold'>3. User Accounts</h2>
              <p className='mt-4 text-muted-foreground'>
                To access certain features, you must create an account. You agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold'>4. User Obligations & Prohibited Activities</h2>
              <p className='mt-4 text-muted-foreground'>
                You agree not to use the Service for any unlawful purpose or in any way that interrupts, damages, or impairs the Service. Prohibited activities include, but are not limited to:
              </p>
              <ul className='list-disc pl-6 mt-2 space-y-2 text-muted-foreground'>
                <li>Harassing, abusing, or harming another person or group.</li>
                <li>Impersonating any person or entity.</li>
                <li>Uploading viruses or malicious code.</li>
                <li>Violating any applicable laws or regulations.</li>
                <li>Attempting to interfere with the proper working of the Service.</li>
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-bold'>5. Intellectual Property Rights</h2>
              <p className='mt-4 text-muted-foreground'>
                The Service and its original content, features, and functionality are owned by LearningCenter and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold'>6. Termination</h2>
              <p className='mt-4 text-muted-foreground'>
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold'>7. Limitation of Liability</h2>
              <p className='mt-4 text-muted-foreground'>
                In no event shall LearningCenter, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold'>8. Changes to Terms</h2>
              <p className='mt-4 text-muted-foreground'>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold'>9. Contact Us</h2>
              <p className='mt-4 text-muted-foreground'>
                If you have any questions about these Terms, please contact us at:
                <br />
                <a href='mailto:legal@learningcenter.id' className='text-primary hover:underline'>
                  legal@learningcenter.id
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className='border-t bg-background py-12'>
        <div className='container mx-auto grid gap-8 px-4 md:grid-cols-4'>
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <Logo className='h-6 w-6 text-primary' />
              <span className='font-bold'>LearningCenter</span>
            </div>
            <p className='text-sm text-muted-foreground'>
              Empowering education for Indonesia. Connecting students and teachers for a better future.
            </p>
          </div>
          <div>
            <h3 className='mb-4 font-semibold'>Platform</h3>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li><Link to='/' className='hover:text-foreground'>Home</Link></li>
              <li><Link to='/sign-in' className='hover:text-foreground'>Courses</Link></li>
              <li><Link to='/sign-in' className='hover:text-foreground'>Mentors</Link></li>
              <li><Link to='/sign-in' className='hover:text-foreground'>Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='mb-4 font-semibold'>Company</h3>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li><Link to='/' className='hover:text-foreground'>About Us</Link></li>
              <li><Link to='/' className='hover:text-foreground'>Careers</Link></li>
              <li><Link to='/' className='hover:text-foreground'>Blog</Link></li>
              <li><Link to='/' className='hover:text-foreground'>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='mb-4 font-semibold'>Legal</h3>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li><Link to='/privacy' className='hover:text-foreground'>Privacy Policy</Link></li>
              <li><Link to='/terms' className='hover:text-foreground'>Terms of Service</Link></li>
              <li><Link to='/cookie' className='hover:text-foreground'>Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className='container mx-auto mt-12 px-4 text-center text-sm text-muted-foreground'>
          <p>© {new Date().getFullYear()} LearningCenter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
