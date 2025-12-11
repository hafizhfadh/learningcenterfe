import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuthStore } from '@/stores/auth-store'
import { Landing } from '@/features/landing'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    const { auth } = useAuthStore.getState()
    if (auth.accessToken) {
      throw redirect({ to: '/dashboard' })
    }
  },
  component: Landing,
})

