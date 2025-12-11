import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CookieConsent {
  essential: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
}

interface CookieState {
  consent: CookieConsent
  hasInteracted: boolean
  isOpen: boolean
  setConsent: (consent: Partial<CookieConsent>) => void
  acceptAll: () => void
  rejectAll: () => void
  setHasInteracted: (hasInteracted: boolean) => void
  setIsOpen: (isOpen: boolean) => void
  resetConsent: () => void
}

export const useCookieStore = create<CookieState>()(
  persist(
    (set) => ({
      consent: {
        essential: true, // Always true
        functional: false,
        analytics: false,
        marketing: false,
      },
      hasInteracted: false,
      isOpen: false,
      setConsent: (consent) =>
        set((state) => ({
          consent: { ...state.consent, ...consent },
          hasInteracted: true,
          isOpen: false,
        })),
      acceptAll: () =>
        set({
          consent: {
            essential: true,
            functional: true,
            analytics: true,
            marketing: true,
          },
          hasInteracted: true,
          isOpen: false,
        }),
      rejectAll: () =>
        set({
          consent: {
            essential: true,
            functional: false,
            analytics: false,
            marketing: false,
          },
          hasInteracted: true,
          isOpen: false,
        }),
      setHasInteracted: (hasInteracted) => set({ hasInteracted }),
      setIsOpen: (isOpen) => set({ isOpen }),
      resetConsent: () =>
        set({
          hasInteracted: false,
          isOpen: true,
          consent: {
            essential: true,
            functional: false,
            analytics: false,
            marketing: false,
          },
        }),
    }),
    {
      name: 'cookie-consent-storage',
      partialize: (state) => ({
        consent: state.consent,
        hasInteracted: state.hasInteracted,
      }),
    }
  )
)
