import { createFileRoute, redirect } from '@tanstack/react-router'
import { AuthenticatedLayout } from '@/components/layout/authenticated-layout'
import { useAuthStore } from '@/stores/auth-store'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: ({ location }) => {
    const { auth } = useAuthStore.getState()
    const isAuthed = !!auth.accessToken
    if (!isAuthed) {
      throw redirect({ to: '/', search: { redirect: location.href } })
    }
  },
  component: AuthenticatedLayout,
})
