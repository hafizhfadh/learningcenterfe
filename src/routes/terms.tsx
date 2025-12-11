import { createFileRoute } from '@tanstack/react-router'
import { TermsOfService } from '@/features/legal/terms'

export const Route = createFileRoute('/terms')({
  component: TermsOfService,
})
