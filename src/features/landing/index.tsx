import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import {
  BookOpen,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Globe,
  Zap,
  Menu,
} from 'lucide-react'
import { Logo } from '@/assets/logo'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function Landing() {
  useEffect(() => {
    // SEO: Set document title and meta description
    document.title = 'LearningCenter – Empowering Education for Indonesia'

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Join LearningCenter to connect with expert teachers, access quality educational resources, and accelerate your learning journey in Indonesia.'
      )
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content =
        'Join LearningCenter to connect with expert teachers, access quality educational resources, and accelerate your learning journey in Indonesia.'
      document.head.appendChild(meta)
    }

    // SEO: Add structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'LearningCenter',
      description: 'Empowering education for Indonesia. Connecting students and teachers.',
      url: window.location.origin,
      sameAs: [
        'https://facebook.com/learningcenter',
        'https://twitter.com/learningcenter',
        'https://instagram.com/learningcenter',
      ],
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      {/* Header */}
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4'>
          <div className='flex items-center gap-2'>
            <Logo className='h-8 w-8 text-primary' />
            <span className='text-xl font-bold tracking-tight'>
              LearningCenter
            </span>
          </div>
          <nav className='flex items-center gap-4'>
            {/* Desktop Nav */}
            <div className='hidden items-center gap-4 md:flex'>
              <Link to='/sign-in'>
                <Button variant='ghost'>Sign in</Button>
              </Link>
              <Link to='/sign-up'>
                <Button>Get Started</Button>
              </Link>
            </div>

            {/* Mobile Nav */}
            <div className='md:hidden'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='ghost' size='icon' aria-label='Open menu'>
                    <Menu className='h-6 w-6' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-48'>
                  <DropdownMenuItem asChild>
                    <Link to='/sign-in' className='w-full cursor-pointer'>
                      Sign in
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to='/sign-up'
                      className='w-full cursor-pointer font-semibold'
                    >
                      Get Started
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </div>
      </header>

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='container mx-auto grid gap-8 px-4 py-16 md:grid-cols-2 md:gap-12 md:py-24 lg:py-32'>
          <div className='flex flex-col justify-center space-y-6'>
            <div className='inline-flex w-fit items-center rounded-full border bg-muted px-3 py-1 text-sm font-medium'>
              <span className='mr-2 flex h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-green-400 rotate-45'></span>
              Now available for all students
            </div>
            <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl'>
              Unlock Your Potential with{' '}
              <span className='text-primary'>LearningCenter</span>
            </h1>
            <p className='max-w-[600px] text-lg text-muted-foreground md:text-xl'>
              Connect with expert mentors, access world-class resources, and join
              a community dedicated to empowering education across Indonesia.
            </p>
            <div className='flex flex-col gap-3 sm:flex-row'>
              <Link to='/sign-up'>
                <Button size='lg' className='h-12 w-full px-8 text-lg sm:w-auto'>
                  Start Learning Now
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </Link>
              <Link to='/sign-in'>
                <Button
                  variant='outline'
                  size='lg'
                  className='h-12 w-full text-lg sm:w-auto'
                >
                  View Courses
                </Button>
              </Link>
            </div>
            <div className='flex items-center gap-4 text-sm text-muted-foreground'>
              <div className='flex -space-x-2'>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className='flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted font-bold'
                  >
                    <Users className='h-4 w-4' />
                  </div>
                ))}
              </div>
              <p>Trusted by 10,000+ students</p>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            {/* 
              Image container:
              - Removed aspect-square to prevent cropping of the 2:1 aspect ratio image.
              - Uses natural image height (h-auto) to maintain aspect ratio.
            */}
            <div className='relative w-full max-w-[500px] overflow-hidden rounded-xl border bg-muted/50 shadow-2xl'>
              <img
                src='/images/shadcn-admin.png'
                alt='LearningCenter Dashboard Preview'
                className='h-auto w-full'
                loading='eager'
                width={2560}
                height={1280}
              />
              <div className='absolute inset-0 bg-gradient-to-t from-background/20 to-transparent' />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='bg-muted/50 py-16 md:py-24'>
          <div className='container mx-auto px-4'>
            <div className='mb-12 text-center'>
              <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                Why Choose LearningCenter?
              </h2>
              <p className='mt-4 text-lg text-muted-foreground'>
                Everything you need to excel in your educational journey.
              </p>
            </div>
            <div className='grid gap-8 md:grid-cols-3'>
              <Card>
                <CardHeader>
                  <BookOpen className='mb-2 h-10 w-10 text-primary' />
                  <CardTitle>Comprehensive Resources</CardTitle>
                  <CardDescription>
                    Access a vast library of study materials, interactive
                    lessons, and practice tests.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm text-muted-foreground'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      Curated content
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      Video tutorials
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      Downloadable PDFs
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className='mb-2 h-10 w-10 text-primary' />
                  <CardTitle>Expert Mentorship</CardTitle>
                  <CardDescription>
                    Connect with qualified teachers and mentors who can guide you
                    to success.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm text-muted-foreground'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      1-on-1 sessions
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      Q&A forums
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      Progress tracking
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Award className='mb-2 h-10 w-10 text-primary' />
                  <CardTitle>Certified Learning</CardTitle>
                  <CardDescription>
                    Earn certificates upon completion to showcase your
                    achievements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm text-muted-foreground'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      Verified certificates
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      Skill assessments
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                      Portfolio building
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='container mx-auto px-4 py-16 md:py-24'>
          <div className='grid gap-12 md:grid-cols-2 md:items-center'>
            <div>
              <div className='grid gap-6 sm:grid-cols-2'>
                <div className='flex flex-col gap-2 rounded-lg border p-6 shadow-sm'>
                  <GraduationCap className='h-8 w-8 text-primary' />
                  <h3 className='font-bold'>Student-First</h3>
                  <p className='text-sm text-muted-foreground'>
                    Designed with the student experience in mind.
                  </p>
                </div>
                <div className='flex flex-col gap-2 rounded-lg border p-6 shadow-sm'>
                  <Globe className='h-8 w-8 text-primary' />
                  <h3 className='font-bold'>Accessible</h3>
                  <p className='text-sm text-muted-foreground'>
                    Learn from anywhere, anytime, on any device.
                  </p>
                </div>
                <div className='flex flex-col gap-2 rounded-lg border p-6 shadow-sm'>
                  <Zap className='h-8 w-8 text-primary' />
                  <h3 className='font-bold'>Fast & Modern</h3>
                  <p className='text-sm text-muted-foreground'>
                    Built with the latest technology for speed.
                  </p>
                </div>
                <div className='flex flex-col gap-2 rounded-lg border p-6 shadow-sm'>
                  <Users className='h-8 w-8 text-primary' />
                  <h3 className='font-bold'>Collaborative</h3>
                  <p className='text-sm text-muted-foreground'>
                    Learn together with peers and mentors.
                  </p>
                </div>
              </div>
            </div>
            <div className='space-y-6'>
              <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                Empowering the Next Generation of Learners
              </h2>
              <p className='text-lg text-muted-foreground'>
                LearningCenter is more than just a platform; it's a movement to
                democratize education in Indonesia. We believe that every student
                deserves access to high-quality learning resources and mentorship.
              </p>
              <p className='text-lg text-muted-foreground'>
                Whether you are preparing for exams, learning a new skill, or
                looking for guidance, we are here to support your journey.
              </p>
              <Link to='/sign-up'>
                <Button size='lg'>Join the Community</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='border-t bg-muted/30 py-16 md:py-24'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
              Ready to Accelerate Your Learning?
            </h2>
            <p className='mx-auto mt-4 max-w-[600px] text-lg text-muted-foreground'>
              Join thousands of students and teachers who are already using
              LearningCenter to make a difference.
            </p>
            <div className='mt-8 flex justify-center gap-4'>
              <Link to='/sign-up'>
                <Button size='lg' className='px-8'>
                  Get Started for Free
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className='border-t bg-background py-12'>
        <div className='container mx-auto grid gap-8 px-4 md:grid-cols-4'>
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <Logo className='h-6 w-6 text-primary' />
              <span className='font-bold'>LearningCenter</span>
            </div>
            <p className='text-sm text-muted-foreground'>
              Empowering education for Indonesia. Connecting students and
              teachers for a better future.
            </p>
          </div>
          <div>
            <h3 className='mb-4 font-semibold'>Platform</h3>
            <ul className='space-y-3 text-sm text-muted-foreground'>
              <li>
                <Link to='/' className='hover:text-foreground py-1 block'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/sign-in' className='hover:text-foreground py-1 block'>
                  Courses
                </Link>
              </li>
              <li>
                <Link to='/sign-in' className='hover:text-foreground py-1 block'>
                  Mentors
                </Link>
              </li>
              <li>
                <Link to='/sign-in' className='hover:text-foreground py-1 block'>
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='mb-4 font-semibold'>Company</h3>
            <ul className='space-y-3 text-sm text-muted-foreground'>
              <li>
                <Link to='/' className='hover:text-foreground py-1 block'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='/' className='hover:text-foreground py-1 block'>
                  Careers
                </Link>
              </li>
              <li>
                <Link to='/' className='hover:text-foreground py-1 block'>
                  Blog
                </Link>
              </li>
              <li>
                <Link to='/' className='hover:text-foreground py-1 block'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='mb-4 font-semibold'>Legal</h3>
            <ul className='space-y-3 text-sm text-muted-foreground'>
              <li>
                <Link to='/privacy' className='hover:text-foreground py-1 block'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to='/terms' className='hover:text-foreground py-1 block'>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to='/cookie' className='hover:text-foreground py-1 block'>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='container mx-auto mt-12 px-4 text-center text-sm text-muted-foreground'>
          <p>
            © {new Date().getFullYear()} LearningCenter. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
