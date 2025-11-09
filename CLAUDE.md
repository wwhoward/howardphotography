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
├── style.css        # All styling
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

## Customization Points

When making updates, common changes include:

- **Gallery Link**: Update the Google Drive link in `index.html` (line with "View Photo Gallery")
- **Contact Info**: Email and phone in the contact section
- **About Text**: Business description in the about section
- **Styling**: All visual customization in `style.css`

## No Build Process

This is a static site with no build step. Edit HTML/CSS directly and push to deploy.
