import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Switch } from '@/components/ui/switch'
import { useCookieStore } from '@/stores/cookie-store'
import { cn } from '@/lib/utils'

export function CookieBanner() {
  const {
    hasInteracted,
    acceptAll,
    rejectAll,
    setIsOpen,
    isOpen,
    consent,
    setConsent,
  } = useCookieStore()
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState(consent)

  useEffect(() => {
    // Small delay to prevent hydration mismatch and for smoother entrance
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowBanner(true)
      }
    }, 1000)
    return () => clearTimeout(timer)
  }, [hasInteracted])

  useEffect(() => {
    if (hasInteracted) {
      setShowBanner(false)
    }
  }, [hasInteracted])

  useEffect(() => {
    setPreferences(consent)
  }, [consent])

  useEffect(() => {
    if (isOpen) {
        setShowPreferences(true)
    }
  }, [isOpen])

  const handleSavePreferences = () => {
    setConsent(preferences)
    setShowPreferences(false)
    setIsOpen(false)
  }

  if (!showBanner && !showPreferences && !isOpen) return null

  return (
    <>
      {/* Cookie Banner */}
      <div
        className={cn(
          'fixed bottom-0 left-0 right-0 z-50 flex flex-col gap-4 border-t bg-background p-4 shadow-lg transition-transform duration-500 md:flex-row md:items-center md:justify-between md:px-8',
          showBanner && !showPreferences ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        <div className='flex-1 space-y-2'>
          <h3 className='text-lg font-semibold'>We use cookies</h3>
          <p className='text-sm text-muted-foreground'>
            We use cookies to enhance your browsing experience, serve personalized
            ads or content, and analyze our traffic. By clicking "Accept All",
            you consent to our use of cookies. Read our{' '}
            <Link to='/cookie' className='text-primary hover:underline'>
              Cookie Policy
            </Link>
            .
          </p>
        </div>
        <div className='flex flex-col gap-2 sm:flex-row'>
          <Button
            variant='outline'
            onClick={() => {
              setShowPreferences(true)
              setShowBanner(false)
            }}
          >
            Customize
          </Button>
          <Button variant='secondary' onClick={rejectAll}>
            Reject All
          </Button>
          <Button onClick={acceptAll}>Accept All</Button>
        </div>
      </div>

      {/* Preferences Dialog */}
      <Dialog open={showPreferences} onOpenChange={(open) => {
        setShowPreferences(open)
        if (!open) setIsOpen(false)
      }}>
        <DialogContent className='sm:max-w-[500px]'>
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
            <DialogDescription>
              Manage your cookie settings. You can enable or disable different
              types of cookies below.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-6 py-4'>
            <div className='flex items-center justify-between space-x-2'>
              <div className='flex flex-col space-y-1'>
                <span className='font-medium'>Essential</span>
                <span className='text-xs text-muted-foreground'>
                  Required for the website to function.
                </span>
              </div>
              <Switch checked={true} disabled={true} />
            </div>
            <div className='flex items-center justify-between space-x-2'>
              <div className='flex flex-col space-y-1'>
                <span className='font-medium'>Functional</span>
                <span className='text-xs text-muted-foreground'>
                  Remember choices you make.
                </span>
              </div>
              <Switch
                checked={preferences.functional}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, functional: checked })
                }
              />
            </div>
            <div className='flex items-center justify-between space-x-2'>
              <div className='flex flex-col space-y-1'>
                <span className='font-medium'>Analytics</span>
                <span className='text-xs text-muted-foreground'>
                  Help us understand how you use the site.
                </span>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, analytics: checked })
                }
              />
            </div>
            <div className='flex items-center justify-between space-x-2'>
              <div className='flex flex-col space-y-1'>
                <span className='font-medium'>Marketing</span>
                <span className='text-xs text-muted-foreground'>
                  Used to display relevant ads.
                </span>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, marketing: checked })
                }
              />
            </div>
          </div>
          <div className='flex justify-end gap-2'>
            <Button
              variant='outline'
              onClick={() => {
                rejectAll()
                setShowPreferences(false)
                setIsOpen(false)
              }}
            >
              Reject All
            </Button>
            <Button onClick={handleSavePreferences}>Save Preferences</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
