# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Simple, static landing page for Howard Photography business. Deployed via GitHub Pages.

## Technology Stack

- Plain HTML/CSS (no build process or dependencies)
- Static site hosted on GitHub Pages
- No framework or build tools required

## Project Structure

```
.
├── index.html       # Main landing page
├── services.html    # Detailed services page
├── style.css        # All styling
├── header.html      # Shared header/navigation (loaded via JavaScript)
├── header.js        # JavaScript to load shared header on all pages
├── CNAME           # Custom domain configuration (created by GitHub Pages)
├── README.md       # Setup and deployment instructions
└── CLAUDE.md       # This file
```

## Deployment

This site is deployed to GitHub Pages. See README.md for complete setup instructions.

To deploy changes:
```bash
git add .
git commit -m "Description of changes"
git push origin master
```

Changes will be live within a few minutes.

## Shared Header/Navigation

The site uses a shared header that appears on all pages:

- **header.html**: Contains the navigation menu markup
- **header.js**: JavaScript that loads header.html into each page and sets the active page indicator
- To add new pages to the navigation: Edit `header.html` only (changes apply to all pages)
- Each page includes `<script src="header.js"></script>` in the `<head>` section

## Customization Points

When making updates, common changes include:

- **Navigation Menu**: Edit `header.html` to add/remove pages or change menu items
- **Gallery Link**: Update the Google Drive link in `index.html` (line with "View Photo Gallery")
- **Contact Info**: Email and phone in the contact section
- **About Text**: Business description in the about section
- **Styling**: All visual customization in `style.css`

## No Build Process

This is a static site with no build step. Edit HTML/CSS directly and push to deploy.
