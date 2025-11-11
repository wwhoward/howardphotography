# Jekyll Migration Notes

## What is Jekyll?

Jekyll is a static site generator that's built into GitHub Pages. It converts templates + content → static HTML files.

Instead of writing plain HTML, you write:
- Content in Markdown files
- Reusable templates (layouts, includes)
- Configuration in YAML

Jekyll processes everything and generates the final HTML.

## Key Features

### 1. Templating & Layouts

```liquid
<!-- _layouts/default.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>{{ page.title }}</title>
  </head>
  <body>
    {% include header.html %}
    {{ content }}
  </body>
</html>
```

### 2. Clean URLs

```yaml
# _config.yml
permalink: pretty
```

- Automatically converts `services.html` → `services/index.html`
- URL becomes `howard-photography.com/services` (no .html extension)

### 3. Markdown Support

```markdown
---
layout: default
title: Services
---

# Photography Services
Content here...
```

### 4. Variables & Data

- Store data in YAML files
- Reference throughout your site
- No hardcoding repeated info

## Pros for Howard Photography

✅ **GitHub Pages native** - No build setup, works automatically
✅ **Clean URLs** - Built-in support (no .html extensions)
✅ **Reusable components** - Header/footer would be cleaner (no JavaScript loading needed)
✅ **Blog support** - Perfect when adding blog posts/galleries
✅ **Active ecosystem** - Tons of themes and plugins
✅ **Scalability** - Easy to add many pages without repetition
✅ **Data-driven** - Store service info, portfolio items in YAML files

## Cons

❌ **Learning curve** - New syntax (Liquid templating)
❌ **More complex structure** - Specific folder conventions
❌ **Build time** - Pages need to regenerate (usually fast though)
❌ **Overkill for simple sites** - Current 2-page site doesn't need it yet
❌ **Ruby dependency** - Need Ruby installed for local development

## What the Site Structure Would Look Like

```
howardphotography/
├── _config.yml              # Site configuration
├── _layouts/
│   └── default.html         # Your main layout template
├── _includes/
│   ├── header.html          # Header component
│   └── footer.html          # Footer component
├── _posts/                  # Blog posts (if you add a blog)
│   └── 2025-11-11-my-post.md
├── _data/
│   └── services.yml         # Service data
├── index.md                 # Home page (Markdown)
├── services.md              # Services page (Markdown)
├── css/
│   └── style.css
└── assets/
    └── favicon.svg
```

## Configuration Example

**_config.yml:**
```yaml
title: Howard Photography
description: Professional photography services specializing in canine, equine, and family photography
email: willandrileyhoward@gmail.com
instagram: howardphotographyco
url: https://howard-photography.com

# Build settings
permalink: pretty
markdown: kramdown

# Collections (for galleries, if needed)
collections:
  galleries:
    output: true
    permalink: /gallery/:name/
```

## Page Example

**index.md:**
```markdown
---
layout: default
title: Home
description: Capturing moments that matter
---

# Howard Photography

Capturing moments that matter

[View Services](/services/)
```

## Layout Example

**_layouts/default.html:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ page.title }} | {{ site.title }}</title>
  <meta name="description" content="{{ page.description | default: site.description }}">

  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  {% include header.html %}

  <main id="main-content">
    {{ content }}
  </main>

  {% include footer.html %}
</body>
</html>
```

## Data-Driven Services Example

**_data/services.yml:**
```yaml
- name: Canine Photography
  description: Celebrate the unique personality and energy of your canine companion
  features:
    - Individual dog portraits
    - Action and play sessions
    - Family portraits with dogs

- name: Equine Photography
  description: Capture the elegance, power, and grace of your equine partner
  features:
    - Individual horse portraits
    - Rider and horse partnerships
    - Competition photography
```

**services.md:**
```markdown
---
layout: default
title: Services
---

# Photography Services

{% for service in site.data.services %}
## {{ service.name }}

{{ service.description }}

**What's included:**
{% for feature in service.features %}
- {{ feature }}
{% endfor %}
{% endfor %}
```

## Local Development Setup

### Requirements

```bash
# Install Ruby (Jekyll is Ruby-based)
# On Mac with Homebrew:
brew install ruby

# Install Jekyll and Bundler
gem install jekyll bundler

# In your project:
bundle init
bundle add jekyll
```

### Development Server

**Option 1: Jekyll's built-in server** (recommended)
```bash
jekyll serve
# or
bundle exec jekyll serve
```
- Runs on `localhost:4000` by default
- **Auto-rebuilds** when you change files
- **Live reload** - page refreshes automatically
- Processes templates/Markdown in real-time

**Option 2: Build then serve with Python**
```bash
jekyll build
python3 -m http.server -d _site
```
- Jekyll outputs to `_site/` folder
- You can serve that with Python
- But you'd need to manually rebuild after each change

### Workflow

1. Run `bundle exec jekyll serve`
2. Edit files (Markdown, layouts, CSS)
3. Jekyll auto-rebuilds on save
4. Browser auto-refreshes
5. See changes instantly

## Enabling Jekyll on GitHub Pages

Simply add a `_config.yml` file to your repository. GitHub Pages will automatically detect it and start using Jekyll.

**Minimal _config.yml:**
```yaml
title: Howard Photography
permalink: pretty
```

That's it! GitHub handles the build automatically.

## Migration Strategy

### Phase 1: Minimal Setup (keep current HTML)
1. Add `_config.yml` with basic config
2. Keep existing HTML files
3. Add `permalink: pretty` for clean URLs
4. Test that site still works

### Phase 2: Extract Components
1. Create `_layouts/default.html` with main template
2. Create `_includes/header.html` and `_includes/footer.html`
3. Convert `index.html` to use layout
4. Convert `services.html` to use layout
5. Remove header.js (no longer needed!)

### Phase 3: Convert to Markdown
1. Convert `index.html` → `index.md`
2. Convert `services.html` → `services.md`
3. Move content to Markdown format
4. Keep complex sections as HTML (Jekyll supports HTML in Markdown)

### Phase 4: Add Data-Driven Features (optional)
1. Move services to `_data/services.yml`
2. Loop through data in templates
3. Add collections for galleries
4. Set up blog if desired

## When to Migrate?

**Now:** If you want clean URLs and plan to add 5+ pages soon

**Later (recommended):** When you:
- Add a blog
- Have 5+ pages
- Build out multiple galleries
- Find yourself copying code between pages
- Want portfolio project collections

## Current Status

- **Current approach:** Plain HTML with JavaScript-loaded header works great for 2 pages
- **Recommendation:** Wait until adding more pages/galleries/blog
- **Benefit of waiting:** Simpler codebase until you actually need the features
- **Cost of waiting:** None - easy to migrate anytime

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages + Jekyll Guide](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll)
- [Jekyll Themes](https://jekyllrb.com/docs/themes/)
- [Liquid Templating](https://shopify.github.io/liquid/)

## Notes

- Jekyll is worth it when you have content repetition or many pages
- The clean URL feature alone might not justify the added complexity
- GitHub Pages handles Jekyll builds automatically - no CI/CD needed
- Your current setup is perfectly valid for a small business site
