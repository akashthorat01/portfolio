# Vercel Deployment Guide

This portfolio is optimized and ready to be deployed on Vercel.

## Steps to Deploy

1. Initialize a Git repository if you haven't already:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Push your code to a GitHub repository.

3. Go to [Vercel](https://vercel.com/) and sign in with your GitHub account.

4. Click **Add New** -> **Project**.

5. Import the GitHub repository you just created.

6. Configure the Project:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

7. Click **Deploy**.

Vercel will automatically build and deploy your site. Any future pushes to your main branch will automatically trigger a new deployment.
