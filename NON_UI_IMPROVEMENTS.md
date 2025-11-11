# Non-UI Improvements Checklist

This document tracks technical improvements that don't change the site's appearance.

## Performance & Technical

- [ ] Add favicon and Apple touch icons (prevents 404 errors, improves mobile bookmarking)
- [ ] Add performance hints: preconnect/dns-prefetch for photos.app.goo.gl domain
- [ ] Add theme-color meta tag for better mobile browser integration

## SEO & Discoverability

- [ ] Create sitemap.xml (referenced in robots.txt but missing)
- [ ] Add Open Graph and Twitter Card images (meta tags exist but no images specified)
- [ ] Add Schema.org structured data for LocalBusiness/ProfessionalService (improves SEO and search result appearance)

## Code Quality

- [ ] Remove commented-out code from index.html

## Accessibility

- [ ] Improve accessibility: add skip-to-content link and better ARIA labels
- [ ] Use semantic HTML: replace contact-info div with `<address>` element

## Analytics & Documentation

- [ ] Add web analytics setup documentation or implementation (Google Analytics, Plausible, etc.)

## Notes

- All improvements should be applied to the `dev` branch, not master
- The dev branch has additional features (header menu, promo banner, services section) that must be preserved
