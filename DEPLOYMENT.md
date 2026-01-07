# GitHub Pages Deployment Guide

## Current Status

The repository has a working GitHub Actions workflow for deployment, but GitHub Pages is not yet enabled in the repository settings.

## Issue

When visiting the GitHub Pages URL, nothing appears because:
- GitHub Pages is **not enabled** in the repository settings
- The deployment workflow fails at the "Setup Pages" step with error: `Get Pages site failed`

## Solution

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/Brieden/Lilly-s-hundebetreuung`
2. Click on **Settings** tab
3. In the left sidebar, click on **Pages**
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (NOT "Deploy from a branch")
5. Click **Save** if prompted

### Step 2: Trigger Deployment

Once GitHub Pages is enabled, the deployment will automatically trigger:

- **Automatic**: Any push to the `main` branch will trigger deployment
- **Manual**: Go to Actions tab → "Deploy to GitHub Pages" workflow → Click "Run workflow"

### Step 3: Access Your Site

After successful deployment, your site will be available at:
```
https://brieden.github.io/Lilly-s-hundebetreuung/
```

## Technical Details

### Build Configuration

- **Build Tool**: Vite
- **Base Path**: `/Lilly-s-hundebetreuung/` (configured in `vite.config.ts`)
- **Output Directory**: `dist/`
- **Build Command**: `npm run build`

### Workflow Overview

The `.github/workflows/deploy.yml` file contains two jobs:

1. **Build Job**:
   - Checks out code
   - Sets up Node.js 20
   - Installs dependencies with `npm ci`
   - Builds the project with `npm run build`
   - Uploads the `dist/` folder as an artifact

2. **Deploy Job**:
   - Downloads the build artifact
   - Deploys to GitHub Pages

### Files Added

- **`.nojekyll`**: Tells GitHub Pages not to process the site with Jekyll, which is important for Single Page Applications (SPAs) and ensures files starting with underscores are served correctly.

## Troubleshooting

### If the page shows a 404 after deployment:

1. Check that the base path in `vite.config.ts` matches your repository name
2. Verify the workflow completed successfully in the Actions tab
3. Check browser console for errors

### If the workflow fails:

1. Check the Actions tab for error details
2. Ensure GitHub Pages is set to use "GitHub Actions" as source
3. Verify all dependencies are listed in `package.json`

## Local Development

To test the production build locally:

```bash
# Install dependencies
npm ci

# Build for production
npm run build

# Preview the production build
npm run preview
```

The preview will be available at `http://localhost:4173/Lilly-s-hundebetreuung/`

## Next Steps

After enabling GitHub Pages as described above:
1. Wait for the workflow to complete (2-3 minutes)
2. Visit your GitHub Pages URL
3. The site should load with Lilly's dog care service content
