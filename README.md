# Next.js 15 App Router - Dynamic Route with Trailing Slash Error

This repository demonstrates a bug in Next.js 15's App Router when using dynamic routes with trailing slashes.  The error occurs when navigating to a route with a trailing slash that is not explicitly defined in the route definition. 

## Bug Description

The bug manifests as a 404 error when accessing a route with a trailing slash, even if a route without a trailing slash exists and works correctly. This inconsistency can lead to unexpected behavior and hinder user experience.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/product/1`. This should work fine.
5. Navigate to `/product/1/`. This will result in a 404 error.

## Expected Behavior

The application should handle both `/product/1` and `/product/1/` gracefully and route them to the same page.

## Workaround

The workaround involves configuring the App Router to explicitly handle routes with trailing slashes or using redirects.