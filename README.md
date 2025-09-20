# Website Configuration System

This project uses a centralized configuration system that allows you to easily customize all text content from a single file.

## How to Customize

1. **Edit the `config.js` file** - This is where all your customizable text is stored
2. **The changes will automatically appear** on your website when you refresh the page

## Configuration File Structure

The `config.js` file contains several sections:

### Site Information
- `site.title` - Your website title
- `site.description` - Meta description for SEO
- `site.author` - Your name
- `site.email` - Contact email
- `site.phone` - Contact phone number

### Navigation
- `navigation.*` - All navigation menu items

### Homepage Content
- `homepage.hero.*` - Hero section content
- `homepage.about.*` - About section
- `homepage.services.*` - Services section with items array
- `homepage.portfolio.*` - Portfolio section
- `homepage.contact.*` - Contact form labels and content

### Error Pages
- `error404.*` - 404 error page content

### Footer
- `footer.*` - Footer links and copyright text

### Common Messages
- `messages.*` - Reusable messages like success/error states

## Adding New Content

To add new customizable text:

1. Add it to the appropriate section in `config.js`
2. Add an element with an ID in your HTML
3. Update the JavaScript to populate that element

Example:
```javascript
// In config.js
newSection: {
  title: "My New Section",
  content: "This is my new content"
}
```

```html
<!-- In your HTML -->
<h2 id="new-section-title"></h2>
<p id="new-section-content"></p>
```

```javascript
// In the populateContent() function
document.getElementById('new-section-title').textContent = CONFIG.newSection.title;
document.getElementById('new-section-content').textContent = CONFIG.newSection.content;
```

## Benefits

- ✅ All text in one place
- ✅ Easy to maintain and update
- ✅ Consistent across all pages
- ✅ No need to edit HTML files for content changes
- ✅ Supports multiple languages (just change the config)
- ✅ Version control friendly

## Files

- `config.js` - Main configuration file (edit this)
- `index.html` - Homepage template
- `404.html` - Error page template
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow
- `DEPLOYMENT.md` - Step-by-step deployment guide
- `README.md` - This documentation

## 🚀 Quick Deploy to GitHub Pages

1. Create a new repository on GitHub named `your-username.github.io`
2. Upload all files to the repository
3. Go to Settings → Pages → Source: GitHub Actions
4. Your site will be live at `https://your-username.github.io`

See `DEPLOYMENT.md` for detailed instructions!
