# Static Build Verification Guide

This guide helps you verify that your articles routes are being built as static pages instead of Vercel Functions.

## Changes Made

### 1. Force Static Generation

- Added `export const dynamic = 'force-static'` to `/app/articles/page.tsx`
- Added `export const revalidate = false` to `/app/articles/page.tsx`
- Created `/app/articles/layout.tsx` with the same static configuration for all nested article routes

### 2. Optimized Next.js Config

- Added `experimental.staticGenerationRetryCount` to `next.config.ts` for better reliability

### 3. Added Cache Headers

- Updated `public/_headers` with proper caching for article routes:
  - 1 hour browser cache (max-age=3600)
  - 1 hour CDN cache (s-maxage=3600)
  - 24 hour stale-while-revalidate for better performance

## Verification Steps

### Local Verification

1. **Build your project:**

   ```bash
   npm run build
   ```

2. **Check the build output:**
   Look for these indicators in the terminal output:
   - Routes marked with `●` (Static) instead of `λ` (Server/Function)
   - You should see:
     ```
     ●  /articles                    [build time]
     ●  /articles/[article-slug]     [build time]
     ```

3. **Inspect the `.next` folder:**

   ```bash
   ls -la .next/server/app/articles
   ```

   - Static pages will have `.html` files
   - Dynamic/function pages will have `.js` or `.rsc` files without `.html`

### Vercel Deployment Verification

1. **Deploy to Vercel:**

   ```bash
   vercel --prod
   ```

2. **Check Vercel Dashboard:**
   - Go to your project → Functions tab
   - Articles routes should NOT appear as serverless functions
   - They should be listed under "Static" or not listed at all (which means static)

3. **Verify Response Headers:**

   ```bash
   curl -I https://your-domain.vercel.app/articles
   ```

   - Look for `Cache-Control` header
   - Should see: `public,max-age=3600,s-maxage=3600,stale-while-revalidate=86400`

4. **Check Build Logs on Vercel:**
   - In your deployment logs, look for "Prerendering (Static)" messages
   - Articles should be in the "Prerendered Routes" section

## Expected Behavior

✅ **Static (Good):**

- Fast page loads
- Served from CDN edge locations
- No function invocation costs
- Better SEO (pre-rendered HTML)

❌ **Dynamic/Function (Bad):**

- Slower initial load
- Function invocation on each request
- Additional costs for function usage
- Generated on-demand

## Troubleshooting

If articles are still showing as functions:

1. **Check for dynamic data sources:**
   - Ensure no cookies/headers are being read
   - No searchParams or dynamic segments without `generateStaticParams`

2. **Verify environment variables:**
   - Make sure all env vars used at build time are available
   - Use `NEXT_PUBLIC_*` prefix for client-side vars

3. **Clear cache and rebuild:**

   ```bash
   rm -rf .next
   npm run build
   ```

4. **Check Next.js version:**
   - Make sure you're on Next.js 13.4+ (you're on 15.5.3, which is good)

## Additional Optimization (Optional)

If you want even more aggressive caching, you can set revalidate to a specific time:

```typescript
// In app/articles/layout.tsx or page.tsx
export const revalidate = 3600; // Revalidate every hour (ISR)
```

This uses Incremental Static Regeneration (ISR) which rebuilds the page in the background.
