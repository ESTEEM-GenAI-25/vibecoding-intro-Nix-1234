# 🚀 GitHub Pages Deployment Guide

This guide will walk you through deploying your website to GitHub Pages in just a few simple steps!

## 📋 Prerequisites

- A GitHub account (free)
- Git installed on your computer
- Your website files ready

## 🎯 Step-by-Step Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** button in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `your-username.github.io` (replace `your-username` with your GitHub username)
   - **Description**: "My personal website"
   - **Visibility**: Public (required for free GitHub Pages)
   - **Initialize**: Check "Add a README file"
5. Click **"Create repository"**

### Step 2: Upload Your Files

#### Option A: Using GitHub Web Interface (Easiest)

1. In your new repository, click **"uploading an existing file"**
2. Drag and drop all your files (`index.html`, `404.html`, `config.js`, `.github` folder)
3. Add a commit message: "Initial website upload"
4. Click **"Commit changes"**

#### Option B: Using Git Command Line

1. Open terminal/command prompt in your project folder
2. Run these commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git push -u origin main
   ```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** section in the left sidebar
4. Under **"Source"**, select **"GitHub Actions"**
5. The page will automatically detect your workflow file

### Step 4: Wait for Deployment

1. Go to the **"Actions"** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 1-2 minutes)
4. Once complete, you'll see a green checkmark

### Step 5: Access Your Website

1. Go back to **"Settings"** → **"Pages"**
2. You'll see a green checkmark with your website URL
3. Your site will be available at: `https://your-username.github.io`

## 🔄 Making Updates

### To update your website:

1. **Edit `config.js`** with your new content
2. **Commit and push** your changes:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```
3. **Wait for automatic deployment** (check Actions tab)
4. **Refresh your website** to see changes

## 🛠️ Customizing Your Domain (Optional)

If you want to use a custom domain:

1. In your repository **Settings** → **Pages**
2. Under **"Custom domain"**, enter your domain (e.g., `www.yoursite.com`)
3. Add a `CNAME` file to your repository with your domain name
4. Update your DNS settings with your domain provider

## 📁 File Structure

Your repository should look like this:
```
your-username.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .gitignore
├── 404.html
├── config.js
├── index.html
├── README.md
└── DEPLOYMENT.md
```

## 🎨 Customizing Your Site

1. **Edit `config.js`** to change all text content
2. **Modify CSS** in the `<style>` sections of HTML files
3. **Add new pages** by creating new HTML files
4. **Update navigation** in both HTML files

## 🐛 Troubleshooting

### Site not loading?
- Check the Actions tab for deployment errors
- Ensure all files are in the root directory
- Verify your repository is public

### Changes not appearing?
- Wait 1-2 minutes for deployment
- Clear your browser cache
- Check the Actions tab for successful deployment

### 404 errors?
- Make sure your `index.html` is in the root directory
- Check that file names match exactly (case-sensitive)

## 🎉 Success!

Once deployed, your website will be:
- ✅ **Live** at `https://your-username.github.io`
- ✅ **Automatically updated** when you push changes
- ✅ **Free** hosting forever
- ✅ **HTTPS** enabled by default
- ✅ **Mobile-friendly** and fast

## 📞 Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- Check the Actions tab in your repository for detailed logs

---

**Happy deploying! 🚀**
