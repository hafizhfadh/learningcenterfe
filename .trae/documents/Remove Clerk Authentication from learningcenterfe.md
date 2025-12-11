## Scope Discovery
- Clerk SDK in use: `@clerk/clerk-react` (not `@clerk/nextjs`) declared in `package.json`.
- Primary integration lives under `src/routes/clerk/**` with `ClerkProvider`, `SignIn`, `SignUp`, `useAuth`, `SignedIn`, and `UserButton`.
- Navigation to Clerk pages in `src/components/layout/data/sidebar-data.ts`.
- Env var placeholder `VITE_CLERK_PUBLISHABLE_KEY` in `.env.example` and read in `src/routes/clerk/route.tsx`.
- Assets: `src/assets/clerk-logo.tsx`, `src/assets/clerk-full-logo.tsx`.
- No Clerk middleware found; no server-side API routes tied to Clerk.

## Removal Plan
### 1) Uninstall Clerk Dependencies
- Remove `@clerk/clerk-react` from `package.json` and lockfile.
- Cleanup node modules and reinstall:
  - npm: `npm uninstall @clerk/clerk-react && rm -rf node_modules && npm i`
  - pnpm: `pnpm remove @clerk/clerk-react && pnpm install`

### 2) Delete Clerk-Specific Code
- Delete the entire Clerk route folder:
  - `src/routes/clerk/route.tsx`
  - `src/routes/clerk/(auth)/sign-in.tsx`
  - `src/routes/clerk/(auth)/sign-up.tsx`
  - `src/routes/clerk/_authenticated/user-management.tsx`
  - `src/routes/clerk/(auth)/route.tsx` (if present)
- Remove Clerk assets:
  - `src/assets/clerk-logo.tsx`
  - `src/assets/clerk-full-logo.tsx`
- Remove Clerk navigation group from `src/components/layout/data/sidebar-data.ts` (links to `/clerk/*`).

### 3) Clean Up Auth Code and Env
- Remove usages/imports of Clerk hooks/components (`ClerkProvider`, `SignedIn`, `useAuth`, `UserButton`, `SignIn`, `SignUp`) outside the Clerk folder, if any.
- Remove `VITE_CLERK_PUBLISHABLE_KEY` from `.env.example` and any `.env*` files.
- Delete any remaining references to Clerk copy in UI files.

### 4) Update Layout System
- Since Clerk is route-local via `ClerkProvider` under `/clerk`, removing the folder detaches Clerk from layout.
- Ensure pages render with standard app layout; if the Clerk routes were part of top-level navigation, confirm layout still computes without the removed group.
- Remove any Clerk-specific styling/theming references (logo imports, text mentioning Clerk) in shared UI.

### 5) Verification
- Global search ensures zero references:
  - `grep -R "@clerk" src/` and `grep -R "Clerk" src/` should return nothing.
- Build and run:
  - `npm run build` succeeds without Clerk.
  - `npm run dev` loads and all non-Clerk routes render.
- Router confirmation:
  - `src/routeTree.gen.ts` should regenerate without `/clerk` routes when the files are removed.

### 6) Alternative Authentication (Optional)
- If authentication is still required, integrate a replacement suitable for a Vite + TanStack Router stack:
  - Lightweight custom `AuthContext` with email/password and token persisted in `localStorage`.
  - Or third-party: Firebase Auth, Auth0 SPA SDK, Supabase Auth, or Lucia for client-side flows.
- Replace any guarded pages (e.g., `user-management`) with:
  - Either public pages, or guards using the new `AuthContext` (e.g., `RequireAuth` wrapper).
- Update docs:
  - README: note removal of Clerk, new auth instructions, env vars, and developer workflow.
  - Notify team in CHANGELOG/Docs about architectural change.

## Files to Touch
- Remove: `src/routes/clerk/**`, `src/assets/clerk-logo.tsx`, `src/assets/clerk-full-logo.tsx`.
- Edit: `package.json` (dependency removal), `.env.example` (delete `VITE_CLERK_PUBLISHABLE_KEY`), any `.env*` files, `src/components/layout/data/sidebar-data.ts` (navigation group removal).

## Rollback Plan
- If needed, reinstall `@clerk/clerk-react`, restore deleted files from VCS, re-add env var, and navigation entries.

## Acceptance Criteria
- No Clerk dependencies in `package.json`.
- No `@clerk` imports or `Clerk*` identifiers in the codebase.
- No `/clerk` routes present in the router.
- App builds and runs; existing non-Clerk pages and layout work normally.
- Documentation updated; team notified of change.
