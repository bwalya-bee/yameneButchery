# Yamene Meat Products - Website

Professional e-commerce website for Yamene Meat Products, showcasing premium quality meat products with an intuitive filtering system and customer testimonials.

**Website:** [yamenemeats.co.za](https://yamenemeats.co.za)  
**Location:** Lusaka, Zambia

---

## 📋 Overview

Static HTML/CSS/JavaScript website built with modern web standards and production-grade security.

**Tech Stack:** HTML5 • CSS3 • Vanilla JavaScript • Apache (.htaccess)

---

## 🗂️ Project Structure

```
/
├── index.html           # Main page
├── style.css            # Styling & responsive design
├── script.js            # Interactive functionality
├── .htaccess            # Server configuration & security
├── pictures/            # Image assets
├── README.md            # This file
└── MAINTENANCE.md       # Operations & deployment guide
```

---

## ✨ Key Features

**Product Showcase**
- Category filtering (Beef, Polony, Chicken, Sausages)
- Responsive product grid
- Lazy-loaded images

**Navigation**
- Sticky responsive header
- Mobile hamburger menu
- Smooth scroll navigation

**Customer Testimonials**
- Auto-rotating carousel
- 5-second rotation interval

**Contact & Social**
- Business information
- Phone, email, WhatsApp links
- Multiple store locations

---

## 🔒 Security

Production-grade security implemented:
- ✅ HTTPS enforcement
- ✅ Content Security Policy (CSP)
- ✅ XSS protection
- ✅ Clickjacking prevention
- ✅ HSTS header (1 year)
- ✅ Safe DOM rendering

See [MAINTENANCE.md](MAINTENANCE.md) for details.

---

## 📱 Responsive Design

Fully responsive across all devices:
- Desktop (1024px+)
- Tablet (768px - 1024px)
- Mobile (< 768px)

---

## 🛠️ Customization

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary-blue: #004a99;
    --primary-green: #008f4c;
    --accent-gold: #D4AF37;
}
```

### Add Products
Add cards to the product-grid in `index.html`:
```html
<div class="product-card" data-category="beef">
    <div class="image-container">
        <img src="pictures/product.jpg" alt="Product" loading="lazy">
    </div>
    <h3>Product Name</h3>
    <p>Description</p>
</div>
```

### Update Testimonials
Edit `customerFeedback` array in `script.js`:
```javascript
const customerFeedback = [
    { name: "Customer", feedback: "Feedback text" }
];
```

---

## 📞 Contact

**Yamene Meat Products**
- 📍 Farm No. 10367, Palabana Area, Lusaka, Zambia
- 📱 +260 97 3958146 | +260 97 7863803
- 📧 info@yamenemeats.co.za | sales@yamenemeats.co.za
- 💬 WhatsApp: +260 97 3958146

---

## 📖 Documentation

- **[MAINTENANCE.md](MAINTENANCE.md)** - Deployment, operations, and maintenance guide

---

## 🌐 Browser Support

✅ Chrome 90+ | Firefox 88+ | Safari 14+ | Edge 90+ | Mobile Browsers

---

## 📊 Performance

- Lazy image loading
- Gzip compression
- Browser caching (30 days)
- Vanilla JS (no framework overhead)
- Target load time: < 2 seconds

---

## 📄 License

© Yamene Meat Products. All rights reserved.  
Member of Selhurst Investments Group.

---

**Status:** Production Ready  
**Last Updated:** June 7, 2026

### 3. **Product Showcase**
- **Filter System:** Browse products by category
  - All
  - Meat (beef cuts)
  - Polony
  - Chicken
  - Sausages
- **Product Cards:** Display product image, name, and description
- **Categories:**
  - **Meat Products:** Steak on Bone, Mince, Oxtail, Meat Bones, Mixed Cut
  - **Sausages:** Classic Meat Sausage, Chakalak Sausage, Hungarian Sausage
  - **Polony:** Full Polony, Polony Slices
  - **Chicken:** Full Chicken, Chicken Feet, Chicken Pieces

### 4. **Customer Feedback Section**
- Rotating testimonials carousel
- Displays customer reviews and ratings

### 5. **Footer**
- **About Section:** Company description and values
- **Contact Information:**
  - Address: Chifundo Road, Lusaka, 11969
  - Phone: +260 97 3958146, +260 97 7863803
  - WhatsApp integration
- **Location Map:** Interactive map display
- **Social Media Links:** WhatsApp contact option

---

## File Descriptions

### index.html
Main HTML file containing:
- Page structure and semantic markup
- Navigation and header
- Product grid with filtering capabilities
- Testimonial carousel
- Footer with contact information
- Links to CSS and JavaScript files

**Key Elements:**
- Product cards with `data-category` attributes for filtering
- Filter buttons with `onclick` events
- Responsive meta viewport tag

### style.css
Styling file containing:
- CSS variables for consistent theming (colors, fonts)
- Responsive design breakpoints
- Navigation styling
- Hero section with background image
- Product grid layout
- Button and card styling
- Mobile responsiveness (media queries)

**Color Scheme:**
- Primary Blue: #004a99
- Primary Green: #008f4c
- Accent Gold: #D4AF37
- Fonts: Poppins (body), Roboto Slab (headers)

### script.js
JavaScript file providing:
- Product filtering functionality
- Mobile menu toggle
- Navigation interactions
- Testimonial carousel rotation
- Smooth scrolling

**Key Functions:**
- `filterMeat(category)` - Filters products by category
- `toggleMenu()` - Mobile hamburger menu toggle
- Testimonial rotation logic

---

## How to Use

### Viewing the Website
1. Open `index.html` in any web browser
2. The site will display with all sections and features

### Filtering Products
1. Navigate to the "Our Premium Quality Cuts" section
2. Click filter buttons: All, Meat, Polony, Chicken, or Sausages
3. Product cards will update to show selected category

### Navigation
- Click navigation links to jump to different sections
- Click "View Our Range" button to go to products
- Use footer links for contact and location information

---

## Customization Guide

### Changing Colors
Edit the CSS variables in `style.css` (lines 1-10):
```css
--primary-blue: #004a99;
--primary-green: #008f4c;
--accent-gold: #D4AF37;
```

### Adding New Products
1. Add a new product card in `index.html`:
```html
<div class="product-card" data-category="meat">
    <div class="image-container">
        <img src="pictures/your-image.jpg" alt="Product Name" loading="lazy">
    </div>
    <h3>Product Name</h3>
    <p>Product description.</p>
</div>
```
2. Use categories: meat, sausage, polony, or chicken

### Changing Images
Replace image files in the `pictures/` folder with the same filename, or update the `src` path in product cards or hero section.

### Updating Contact Information
Edit the contact details in the footer section of `index.html`:
- Address (line ~160)
- Phone numbers (line ~167)
- WhatsApp link (line ~173)

### Modifying Hero Background
Edit `style.css` line ~132:
```css
background: linear-gradient(rgba(0, 74, 153, 0.7), rgba(0, 143, 76, 0.7)), 
            url('pictures/meats.png');
```

---

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Responsive Design

The website is fully responsive with breakpoints for:
- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px

---

## Performance Features

- Lazy loading for product images
- Optimized CSS and JavaScript
- Smooth scrolling behavior
- Efficient product filtering without page reload

---

## Contact & Support

**Yamene Meat Products**
- Address: Chifundo Road, Lusaka, 11969, Zambia
- Phone: +260 97 3958146 | +260 97 7863803
- WhatsApp: Available via links on the website
- Member of Selhurst Investments Group

---

## Version History

- **v1.0** (Current) - Initial website launch with product showcase, filtering system, and customer feedback section

---

## Notes

- All images should be placed in the `pictures/` folder
- Ensure proper file naming conventions for references
- The website uses Google Fonts for typography (requires internet connection)
- JavaScript must be enabled for full functionality

