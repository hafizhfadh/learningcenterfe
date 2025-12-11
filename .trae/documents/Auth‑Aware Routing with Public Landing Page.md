## Goals
- Enforce authentication across internal routes (students/teachers pages).
- Redirect all unauthenticated users to a new public landing page.
- Let authenticated users bypass landing and reach dashboards normally.
- Keep SEO-friendly, responsive onboarding with clear CTAs.

## Architecture Changes
- Routing: Move the dashboard off `/` and introduce a public landing page at `/`.
- Guards: Add router-level (preload) and layout-level (component) guards for `_authenticated/**`.
- Navigation: Update “Dashboard” link to `/dashboard` and ensure internal links live under `_authenticated`.

## Implementation Steps
### 1) Create Public Landing Page
- Add `src/features/landing/index.tsx`:
  - Semantic structure: `header`, `main`, `section`, `h1/h2`, copy focused on LearningCenter’s mission (connecting students/teachers, accelerating learning, building a stronger Indonesia).
  - CTAs: buttons/links to `/(auth)/sign-in` and `/(auth)/sign-up`.
  - Responsive Tailwind layout.
  - Set page title (`document.title = 'LearningCenter – Empowering Education'`).
- Add route `src/routes/index.tsx` mapping `/` → Landing component.
  - `createFileRoute('/')({ component: Landing })`.
  - `beforeLoad`: if authenticated, redirect to `/dashboard`.

### 2) Move Dashboard off `/`
- Replace `src/routes/_authenticated/index.tsx` with `src/routes/_authenticated/dashboard.tsx`.
  - Path `/dashboard` → `Dashboard` component.
- Update `src/components/layout/data/sidebar-data.ts`: change “Dashboard” `url` from `/` to `/dashboard`.

### 3) Router-Level Guard (Preload)
- In `src/routes/_authenticated/route.tsx` add `beforeLoad`:
  - Read token/user from `useAuthStore.getState().auth`.
  - If missing/expired, return a redirect to `/` with `search: { redirect: currentPath }`.
  - This protects all children: `/apps`, `/chats`, `/tasks`, `/users`, `/settings/**`, etc.
- In `src/routes/_authenticated/settings/route.tsx` keep as child route; parent guard covers it (no extra changes needed).

### 4) Layout-Level Guard (Component)
- In `AuthenticatedLayout`, add a client-side check:
  - On mount, if no valid session, navigate to `/` (landing) preserving intent via `redirect`.
  - This provides immediate protection even if a direct render occurs during HMR or preload edge cases.

### 5) Auth Page Behavior
- Sign-in / Sign-up routes remain public.
- In `/(auth)/sign-in` and `/(auth)/sign-up` components, after successful auth, navigate to:
  - `redirect` (if present) or `/dashboard`.
- Add a small guard to these routes:
  - If already authenticated, redirect to `/dashboard` to bypass the auth pages.

### 6) Remove/Refactor Unauthenticated Exposure
- Ensure no internal pages render outside `_authenticated`.
- Verify and refactor any stray routes under root that expose internal features to live under `_authenticated` (apps, chats, tasks, users, settings) — current structure already conforms.

### 7) SEO & Accessibility
- Landing page:
  - Clear `h1` and supporting `h2` with mission/value proposition.
  - Meta title via `document.title` and descriptive content; optional: add canonical link in `index.html` if desired.
  - Accessible CTAs with clear labels and focus styles.
  - Alt text for any images.

### 8) Verification
- Update route tree and run dev/build.
- Manual tests:
  - Unauth to `/` → sees landing.
  - Unauth to any `_authenticated/*` (e.g., `/users`) → redirected to landing.
  - Auth to `/` → redirected to `/dashboard`.
  - Auth access to internal pages works normally.
  - Sign-in with `redirect` returns to intended internal route.
- Global search ensures no remaining public exposures of internal features.

## Files to Add/Update
- Add: `src/features/landing/index.tsx`, `src/routes/index.tsx`, `src/routes/_authenticated/dashboard.tsx`.
- Update: `src/routes/_authenticated/route.tsx` (add `beforeLoad`), `src/components/layout/authenticated-layout.tsx` (client guard), `src/components/layout/data/sidebar-data.ts` (update Dashboard link), `src/features/auth/sign-in/index.tsx` (optional guard for authenticated users).

## Acceptance Criteria
- Unauthenticated users always land on `/` with mission-focused landing page.
- Internal pages fully protected by guards; redirects preserve intent.
- Authenticated users go straight to `/dashboard` (or intended target).
- Build passes; dev server runs; navigation behaves as specified.

## Rollback Plan
- Restore `_authenticated/index.tsx` under `/`.
- Remove landing route/index file.
- Remove guards from `_authenticated/route.tsx` and `AuthenticatedLayout`.
- Revert sidebar “Dashboard” URL to `/`.