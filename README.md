<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Li6oU62sohG8b8uv7MhQRve6LomxuP0h

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

This repository is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

**📖 For detailed deployment instructions and troubleshooting, see [DEPLOYMENT.md](DEPLOYMENT.md)**

### Enable GitHub Pages

To enable GitHub Pages for this repository:

1. Go to your repository settings on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Once you merge this PR to the `main` branch, the GitHub Actions workflow will automatically build and deploy your site
5. Your site will be available at: `https://brieden.github.io/Lilly-s-hundebetreuung/`

### Manual Deployment

You can also manually trigger a deployment:

1. Go to the **Actions** tab in your repository
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

### Build Locally

To build the site locally:

```bash
npm run build
```

The built files will be in the `dist` directory.
