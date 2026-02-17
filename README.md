# Support Raunak - GBS Treatment Fundraiser

A quiet, dignified space to share Raunak's story and gather support for his recovery from Guillain-Barré Syndrome.

## Design Philosophy

This website was designed with trauma-informed principles:

- **Deeply human** - Opens with who Raunak is, not what we need
- **Calm and respectful** - Soft colors, generous spacing, gentle animations
- **Trustworthy** - Transparent updates, clear payment details
- **Hopeful without pressure** - No urgency banners, countdowns, or aggressive CTAs

## Quick Start

Open `index.html` in any web browser to preview locally. No build tools or server required.

## File Structure

```
site/
âââ index.html      # Main page with all content
âââ styles.css      # Compassionate, calming styles
âââ script.js       # Gentle animations, progress updates
âââ qr-code.png     # Add your UPI QR code image here
âââ README.md       # This file
```

---

## How to Update

### Updating the Amount Raised

**This is the only thing the family needs to edit regularly.**

1. Open `script.js` in any text editor
2. Find this section near the top:

```javascript
/**
 * AMOUNT RAISED (in Indian Rupees)
 */
let amountRaised = 250000;
```

3. Change the number to the new total (without commas)
4. Save and upload to GitHub

**Examples:**
- â¹3,00,000 raised: `let amountRaised = 300000;`
- â¹5,50,000 raised: `let amountRaised = 550000;`

The progress bar updates automatically.

### Updating the Date

In `script.js`, update:

```javascript
let updateDate = 'February 2024';
```

### Updating Medical Status

In `index.html`, find the "Current Status" section and edit the text between the `<p>` tags.

### Adding the QR Code

1. Save your UPI QR code as `qr-code.png`
2. Place it in the same folder as `index.html`
3. Upload to GitHub

### Updating Contact Information

In `index.html`, find the footer section and replace `[Family contact information]` with actual contact details.

---

## Deploying to GitHub Pages

### Step 1: Create Repository

1. Go to [github.com](https://github.com)
2. Click "+" > "New repository"
3. Name it (e.g., `support-raunak`)
4. Make it **Public**
5. Click "Create repository"

### Step 2: Upload Files

1. Click "uploading an existing file"
2. Drag and drop all files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `qr-code.png`
   - `README.md`
3. Click "Commit changes"

### Step 3: Enable GitHub Pages

1. Go to **Settings** > **Pages** (left sidebar)
2. Source: **Deploy from a branch**
3. Branch: **main**
4. Folder: **/ (root)**
5. Click **Save**

### Step 4: Access Your Site

Wait 1-2 minutes, then visit:

```
https://[your-username].github.io/[repository-name]/
```

---

## Making Updates After Deployment

### Easiest Method: Edit on GitHub

1. Go to your repository
2. Click the file to edit
3. Click the pencil icon
4. Make changes
5. Click "Commit changes"
6. Wait 1-2 minutes for update

---

## Design Decisions

### Color System

- **Background**: Warm white `#FDFCFA` - feels human, not clinical
- **Accent**: Soft blue `#6B9BD1` - calming, trustworthy
- **Secondary**: Muted teal `#7BA3A8` - gentle contrast
- **Text**: Dark gray `#3D3D3D` - never harsh black

### Typography

- **Headings**: Crimson Pro (serif) - warm, elegant
- **Body**: Inter (sans-serif) - highly legible
- **Base size**: 18px - accessible for all readers
- **Line height**: 1.75 - generous breathing room

### Layout

- **Content width**: ~65 characters - optimal readability
- **Spacing**: Generous white space throughout
- **Cards**: Soft rounded corners (12-20px), gentle shadows
- **Animations**: Slow (500-800ms), subtle fade-ins

### Accessibility

- WCAG AA contrast compliance
- Large, readable text (18px base)
- Reduced motion support
- Semantic HTML structure
- Mobile-first responsive design

---

## Browser Support

- Chrome, Firefox, Safari, Edge (current versions)
- Mobile browsers (iOS Safari, Android Chrome)
- Graceful degradation for older browsers

---

## Need Help?

For technical assistance:
- GitHub Pages documentation: [docs.github.com/en/pages](https://docs.github.com/en/pages)
- Ask someone with basic web development experience

---

**Every share helps. Thank you for supporting Raunak's recovery.**