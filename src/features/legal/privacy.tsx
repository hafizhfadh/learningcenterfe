import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Logo } from '@/assets/logo'
import { Button } from '@/components/ui/button'

export function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy - LearningCenter'
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
            Privacy Policy
          </h1>
          <p className='mb-8 text-lg text-muted-foreground'>
            Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className='prose prose-slate dark:prose-invert max-w-none space-y-8'>
            <section>
              <h2 className='text-2xl font-bold'>1. Introduction</h2>
              <p className='mt-4 text-muted-foreground'>
                LearningCenter ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold'>2. Information We Collect</h2>
              <p className='mt-4 text-muted-foreground'>
                We collect information that you provide directly to us, such as when you create an account, update your profile, or communicate with us. This may include:
              </p>
              <ul className='list-disc pl-6 mt-2 space-y-2 text-muted-foreground'>
                <li><strong>Personal Identification Information:</strong> Name, email address, phone number.</li>
                <li><strong>Account Information:</strong> Username, password, and profile details.</li>
                <li><strong>Payment Information:</strong> If applicable, we may collect payment details to process transactions (processed securely by third-party payment processors).</li>
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-bold'>3. How We Use Your Information</h2>
              <p className='mt-4 text-muted-foreground'>
                We use the collected information for various purposes, including:
              </p>
              <ul className='list-disc pl-6 mt-2 space-y-2 text-muted-foreground'>
                <li>To provide, operate, and maintain our Service.</li>
                <li>To improve, personalize, and expand our Service.</li>
                <li>To communicate with you, including for customer service, updates, and marketing.</li>
                <li>To process your transactions and manage your orders.</li>
                <li>To detect and prevent fraud.</li>
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-bold'>4. Cookies and Tracking Technologies</h2>
              <p className='mt-4 text-muted-foreground'>
                We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold'>5. Third-Party Data Sharing</h2>
              <p className='mt-4 text-muted-foreground'>
                We do not sell your personal data. We may share your information with third-party service providers to perform services on our behalf, such as:
              </p>
              <ul className='list-disc pl-6 mt-2 space-y-2 text-muted-foreground'>
                <li>Payment processing.</li>
                <li>Data analysis.</li>
                <li>Email delivery.</li>
                <li>Hosting services.</li>
              </ul>
              <p className='mt-2 text-muted-foreground'>
                These third parties are obligated to protect your data and only use it for the purposes we specify.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold'>6. Data Security</h2>
              <p className='mt-4 text-muted-foreground'>
                We implement appropriate technical and organizational security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold'>7. Your Data Rights (GDPR & CCPA)</h2>
              <p className='mt-4 text-muted-foreground'>
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className='list-disc pl-6 mt-2 space-y-2 text-muted-foreground'>
                <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
                <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
                <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
                <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data.</li>
                <li><strong>The right to data portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you.</li>
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-bold'>8. Contact Us</h2>
              <p className='mt-4 text-muted-foreground'>
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
                <br />
                <a href='mailto:privacy@learningcenter.id' className='text-primary hover:underline'>
                  privacy@learningcenter.id
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
