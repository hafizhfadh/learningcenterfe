import { createFileRoute } from '@tanstack/react-router'
import { CookiePolicy } from '@/features/legal/cookie'

export const Route = createFileRoute('/cookie')({
  component: CookiePolicy,
})
