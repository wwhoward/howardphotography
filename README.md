# Howard Photography

A simple, elegant landing page for Howard Photography built with HTML and CSS.

## Quick Customization

Before deploying, update the following in `index.html`:

1. **Gallery Link**: Replace the `#` in the gallery link with your Google Drive folder URL
2. **Contact Email**: Update `info@howardphotography.com` to your actual email
3. **Phone Number**: Update `(555) 555-1234` to your actual phone number
4. **About Text**: Customize the about section description as needed

## GitHub Pages Setup

### Step 1: Push Your Code to GitHub

```bash
# Stage all files
git add .

# Commit the changes
git commit -m "Initial commit: Howard Photography landing page"

# Push to GitHub (assuming you've already set up the remote)
git push origin master
```

If you haven't connected this repository to GitHub yet:

```bash
# Create a new repository on GitHub (via github.com), then:
git remote add origin https://github.com/YOUR-USERNAME/howardphotography.git
git branch -M master
git push -u origin master
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR-USERNAME/howardphotography`
2. Click on **Settings** (top menu)
3. Scroll down and click on **Pages** in the left sidebar
4. Under "Source", select the branch you want to deploy (typically `master` or `main`)
5. Keep the folder as `/ (root)`
6. Click **Save**

Your site will be published at: `https://YOUR-USERNAME.github.io/howardphotography/`

It may take a few minutes for the site to go live.

## Custom Domain Setup

### Step 1: Configure DNS Settings

Log in to your domain registrar (where you bought your domain) and add the following DNS records:

#### Option A: Using an Apex Domain (e.g., howardphotography.com)

Add these **A Records**:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

Also add a **CNAME Record** for www:

```
Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

#### Option B: Using a Subdomain (e.g., www.howardphotography.com)

Add a **CNAME Record**:

```
Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

### Step 2: Configure GitHub Pages for Custom Domain

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Custom domain", enter your domain name (e.g., `howardphotography.com` or `www.howardphotography.com`)
4. Click **Save**
5. Wait for DNS check to complete (this can take up to 24 hours, but usually happens within an hour)
6. Once DNS is verified, check the box for **Enforce HTTPS** (recommended)

### Step 3: Commit the CNAME File

GitHub Pages will automatically create a `CNAME` file in your repository. Pull this change:

```bash
git pull origin master
```

Alternatively, you can manually create the CNAME file:

```bash
echo "your-domain.com" > CNAME
git add CNAME
git commit -m "Add CNAME for custom domain"
git push origin master
```

### DNS Propagation

DNS changes can take anywhere from a few minutes to 48 hours to propagate worldwide. You can check your DNS status at:
- https://www.whatsmydns.net/
- https://dnschecker.org/

## Testing Your Site

Once deployed, test your site:

1. Visit your GitHub Pages URL: `https://YOUR-USERNAME.github.io/howardphotography/`
2. If using a custom domain, visit: `https://your-domain.com`
3. Test on mobile devices to ensure responsiveness
4. Verify all links work (especially the Google Drive gallery link)

## Making Updates

To update your site:

```bash
# Make your changes to index.html or style.css
git add .
git commit -m "Description of your changes"
git push origin master
```

Changes will appear on your live site within a few minutes.

## Troubleshooting

**Site not loading after setup:**
- Wait 5-10 minutes for GitHub Pages to build
- Check Settings → Pages to see if there are any errors

**Custom domain not working:**
- Verify DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Make sure CNAME file exists in your repository

**HTTPS not available:**
- Wait for DNS to fully propagate
- Ensure "Enforce HTTPS" is checked in GitHub Pages settings
