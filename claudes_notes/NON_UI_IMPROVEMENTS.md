# Non-UI Improvements Checklist

This document tracks technical improvements that don't change the site's appearance.

## Performance & Technical

- [x] Add favicon and Apple touch icons (prevents 404 errors, improves mobile bookmarking)
- [x] Add performance hints: preconnect/dns-prefetch for photos.app.goo.gl domain
- [x] Add theme-color meta tag for better mobile browser integration

## SEO & Discoverability

- [x] Create sitemap.xml (referenced in robots.txt but missing)
- [x] Add Open Graph and Twitter Card images (meta tags exist but no images specified)
- [x] Add Schema.org structured data for LocalBusiness/ProfessionalService (improves SEO and search result appearance)

## Code Quality

- [x] Remove commented-out code from index.html

## Accessibility

- [x] Improve accessibility: add skip-to-content link and better ARIA labels
- [x] Use semantic HTML: replace contact-info div with `<address>` element

## Analytics & Documentation

- [x] Add web analytics setup documentation or implementation (Google Analytics, Plausible, etc.)

## Status

✅ All improvements completed!

## Notes

- All improvements were applied to the `dev` branch via `claude/dev-improvements-011CV1CvbCj5m5oeZADjoiGc`
- The dev branch features (header menu, promo banner, services section) were preserved
