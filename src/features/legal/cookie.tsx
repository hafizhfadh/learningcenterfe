import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Logo } from '@/assets/logo'
import { Button } from '@/components/ui/button'
import { useCookieStore } from '@/stores/cookie-store'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'

export function CookiePolicy() {
  const { consent, setConsent } = useCookieStore()
  const [preferences, setPreferences] = useState(consent)

  useEffect(() => {
    document.title = 'Cookie Policy - LearningCenter'
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    setPreferences(consent)
  }, [consent])

  const handleSavePreferences = () => {
    setConsent(preferences)
  }

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
            Cookie Policy
          </h1>
          <p className='mb-8 text-lg text-muted-foreground'>
            Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className='prose prose-slate dark:prose-invert max-w-none space-y-8'>
            <section>
              <h2 className='text-2xl font-bold'>1. What Are Cookies?</h2>
              <p className='mt-4 text-muted-foreground'>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold'>2. How We Use Cookies</h2>
              <p className='mt-4 text-muted-foreground'>
                We use cookies to understand how you use our website, to remember your preferences, and to improve your user experience. We categorize our cookies into the following types:
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold'>3. Manage Your Cookie Preferences</h2>
              <p className='mt-4 mb-6 text-muted-foreground'>
                You can manage your cookie preferences below. Essential cookies cannot be disabled as they are required for the website to function properly.
              </p>

              <div className='grid gap-6'>
                <Card>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <div className='space-y-1'>
                      <CardTitle className='text-base'>Essential Cookies</CardTitle>
                      <CardDescription>
                        Necessary for the website to function. Cannot be disabled.
                      </CardDescription>
                    </div>
                    <Switch checked={true} disabled={true} />
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <div className='space-y-1'>
                      <CardTitle className='text-base'>Functional Cookies</CardTitle>
                      <CardDescription>
                        Allow the website to remember choices you make (such as your user name, language or the region you are in).
                      </CardDescription>
                    </div>
                    <Switch
                      checked={preferences.functional}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, functional: checked })
                      }
                    />
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <div className='space-y-1'>
                      <CardTitle className='text-base'>Analytics Cookies</CardTitle>
                      <CardDescription>
                        Help us understand how visitors interact with the website by collecting and reporting information anonymously.
                      </CardDescription>
                    </div>
                    <Switch
                      checked={preferences.analytics}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, analytics: checked })
                      }
                    />
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <div className='space-y-1'>
                      <CardTitle className='text-base'>Marketing Cookies</CardTitle>
                      <CardDescription>
                        Used to track visitors across websites to display ads that are relevant and engaging for the individual user.
                      </CardDescription>
                    </div>
                    <Switch
                      checked={preferences.marketing}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, marketing: checked })
                      }
                    />
                  </CardHeader>
                </Card>

                <div className='flex justify-end'>
                  <Button onClick={handleSavePreferences}>Save Preferences</Button>
                </div>
              </div>
            </section>

            <section>
              <h2 className='text-2xl font-bold'>4. Third-Party Cookies</h2>
              <p className='mt-4 text-muted-foreground'>
                In some special cases, we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site:
              </p>
              <ul className='list-disc pl-6 mt-2 space-y-2 text-muted-foreground'>
                <li><strong>Google Analytics:</strong> One of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience.</li>
                <li><strong>Authentication Services:</strong> Third-party authentication services may use cookies to manage your session.</li>
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-bold'>5. Contact Us</h2>
              <p className='mt-4 text-muted-foreground'>
                If you have any questions about our Cookie Policy, please contact us at:
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
