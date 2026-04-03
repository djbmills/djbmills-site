# Static Website Deployment Guide

## Overview
This is now a fully static website with no Base44 platform dependencies. It uses HashRouter for reliable routing on static hosting.

## What Changed
- **Removed Base44 dependencies**: Auth wrappers, QueryClient, platform-specific checks
- **Switched to HashRouter**: Uses URL hashes (#/) to work on static hosting without server configuration
- **Configurable base path**: Single environment variable controls subfolder vs root deployment
- **Added web.config**: IIS rewrite rules for proper routing and caching headers

## Remaining External Dependencies
All images are hosted on Base44 CDN (media.base44.com). These are external URLs that will continue to work as long as Base44 CDN remains accessible. No functional dependency—just external image hosting.

## Build Instructions

### 1. Build the static site
```bash
npm run build
```

This creates a `dist/` folder with all static files ready for deployment.

### 2. For root deployment (e.g., example.com/)
```bash
VITE_BASE_PATH=/ npm run build
```

### 3. For subfolder deployment (e.g., example.com/landing/)
```bash
VITE_BASE_PATH=/landing/ npm run build
```

## Deployment to IIS Host

### Via FTP/File Manager
1. Build the site (see above)
2. Upload all contents of `dist/` folder to your hosting account
3. If deploying to a subfolder, upload to `/landing/` (or your chosen subfolder)
4. Copy `web.config` to the same folder as `index.html`
5. Test the site in browser

### Site Structure After Upload
```
Your Hosting Root/
├── index.html
├── web.config
├── assets/
│   ├── css/
│   ├── js/
│   └── (other static files)
└── (if subfolder) landing/
    ├── index.html
    ├── web.config
    ├── assets/
    └── ...
```

## URL Routing
Since HashRouter is used, all routes use the hash format:
- Root: `https://example.com/#/`
- Corporate Events: `https://example.com/#/corporate-events`
- Brand Experiences: `https://example.com/#/brand-experiences`

**OR if using subfolder:**
- Root: `https://example.com/landing/#/`
- Corporate Events: `https://example.com/landing/#/corporate-events`
- Brand Experiences: `https://example.com/landing/#/brand-experiences`

## Inquiry Form
The inquiry form uses `mailto:` links and opens the user's email client. No backend processing required.

## Image Hosting
All images are externally hosted on Base44 CDN:
- Domain: `media.base44.com`
- URLs are embedded in component files
- No configuration needed—they load automatically

If you want to self-host images:
1. Download all images from the URLs in the components
2. Upload to your hosting account
3. Replace URLs in component files (e.g., `components/PhotoGallery.jsx`, `components/InquiryFooter.jsx`, etc.)

## Changing the Base Path Later
To switch from root to subfolder deployment (or vice versa):
1. Edit the `BASE_PATH` variable in `vite.config.js`
2. Rebuild: `npm run build`
3. Re-upload `dist/` folder

## Troubleshooting

### Routes not working after upload
- Confirm `web.config` is in the same directory as `index.html`
- Check that IIS URL Rewrite module is enabled on your host
- If not available, ensure HashRouter is being used (it is by default)

### Images not loading
- Check that external URLs are not blocked by your host firewall
- If needed, download and self-host images (see "Image Hosting" section above)

### Cache-busting
The `web.config` sets aggressive caching for static assets. If you make updates:
- Update asset file names (Vite does this automatically)
- Or clear browser cache manually after deployment

## No Further Configuration Needed
- No database
- No server-side code
- No API configuration
- No authentication setup
- Drop-and-run deployment

Upload and done!