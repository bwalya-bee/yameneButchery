# MAINTENANCE & OPERATIONS GUIDE

Yamene Meat Products - Website Operations Manual

---

## 📋 Table of Contents

1. [Deployment](#deployment)
2. [Server Configuration](#server-configuration)
3. [Maintenance Tasks](#maintenance-tasks)
4. [Troubleshooting](#troubleshooting)
5. [Monitoring](#monitoring)
6. [Security](#security)

---

## 🚀 Deployment

### Prerequisites

- Web hosting with Apache, Nginx, or IIS
- HTTPS/SSL certificate (recommended: Let's Encrypt)
- Domain name configured

### Step 1: Upload Files

Via FTP/SFTP, upload to web root:
```
index.html
style.css
script.js
.htaccess
pictures/
```

### Step 2: Set Permissions

```bash
chmod 644 index.html style.css script.js .htaccess
chmod 755 pictures/
```

### Step 3: Verify HTTPS

Test HTTP redirect:
```bash
curl -I http://yamenemeats.com/
# Expected: HTTP/1.1 301 Moved Permanently
```

Test HTTPS headers:
```bash
curl -I https://yamenemeats.com/ | grep -i Strict-Transport
# Expected: Strict-Transport-Security: max-age=31536000
```

---

## 🔧 Server Configuration

### Apache (.htaccess)

The `.htaccess` file handles:
- HTTP → HTTPS redirect
- Security headers
- Gzip compression
- Browser caching
- Directory protection

**Requirements:**
- mod_rewrite enabled
- mod_headers enabled

**Enable modules:**
```bash
a2enmod rewrite
a2enmod headers
systemctl restart apache2
```

### Nginx

Create `/etc/nginx/security-headers.conf`:
```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "no-referrer" always;
add_header Content-Security-Policy "default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self'; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:;" always;
```

Include in server block:
```nginx
server {
    include /etc/nginx/security-headers.conf;
}
```

### HTTPS/SSL Setup

**Let's Encrypt (FREE):**
```bash
sudo apt-get install certbot
sudo certbot certonly --standalone -d yamenemeats.com
# Or with Apache plugin:
sudo certbot --apache -d yamenemeats.com
```

**Auto-renewal:**
```bash
sudo systemctl enable certbot.timer
```

---

## 🛠️ Maintenance Tasks

### Adding Products

Edit `index.html` in products section:

```html
<div class="product-card" data-category="beef">
    <div class="image-container">
        <img src="pictures/product-name-100kb.jpg" alt="Product Name" loading="lazy">
    </div>
    <h3>Product Name</h3>
    <p>Product description.</p>
</div>
```

**Notes:**
- Use data-category: beef, chicken, sausage, polony
- Optimize images to ~100KB
- Use loading="lazy" for performance

### Updating Testimonials

Edit `script.js` `customerFeedback` array:

```javascript
const customerFeedback = [
    {
        name: "Customer Name",
        feedback: "Their feedback message here."
    }
];
```

### Changing Contact Information

Edit `index.html` footer section:
- Phone numbers (search for +260)
- Email addresses
- Address
- Store locations

### Updating Colors

Edit `style.css` CSS variables:

```css
:root {
    --primary-blue: #004a99;
    --primary-green: #008f4c;
    --accent-gold: #D4AF37;
}
```

---

## 🔍 Troubleshooting

### Site Not Loading HTTPS

**Check:**
```bash
# Test certificate
openssl s_client -connect yamenemeats.com:443 -noout -dates

# Check if certificate expired
certbot certificates

# Renew if needed
certbot renew
```

### Mixed Content Warning

**Issue:** Some resources loading over HTTP

**Fix:** Ensure all URLs use relative paths or HTTPS:
```html
<!-- ❌ Wrong -->
<img src="http://example.com/image.jpg">

<!-- ✅ Correct -->
<img src="https://example.com/image.jpg">
<!-- or -->
<img src="/pictures/image.jpg">
```

### .htaccess Errors

**Test syntax:**
```bash
apachectl configtest
```

**Check modules:**
```bash
apache2ctl -M | grep rewrite
apache2ctl -M | grep headers
```

**If not found:**
```bash
a2enmod rewrite
a2enmod headers
systemctl restart apache2
```

### Images Not Displaying

**Check:**
1. File names match exactly (case-sensitive on Linux)
2. Files in /pictures/ directory
3. Permissions: chmod 644 for files, chmod 755 for directory

### Testimonials Not Rotating

**Check:**
1. JavaScript console for errors (F12 → Console)
2. Testimonial array syntax in script.js
3. Browser allows JavaScript

---

## 📊 Monitoring

### Daily Checks

- [ ] Site loads over HTTPS
- [ ] Product filtering works
- [ ] Testimonials display

### Weekly Checks

- [ ] Review access logs for errors
- [ ] Monitor for unusual traffic
- [ ] Test on different browsers

### Monthly Checks

- [ ] Run security scanner
- [ ] Verify security headers present
- [ ] Check SSL certificate expiry (>30 days)

### Quarterly Checks

- [ ] Full backup
- [ ] Security audit
- [ ] Performance review

---

## 🔒 Security

### Security Headers

Site implements:
- **HSTS** - Forces HTTPS
- **CSP** - Blocks XSS
- **X-Frame-Options** - Prevents clickjacking
- **X-Content-Type-Options** - Prevents MIME sniffing
- **Referrer-Policy** - Protects privacy

### Best Practices

1. **Never** commit sensitive data to version control
2. **Always** use HTTPS
3. **Regularly** update SSL certificates
4. **Monitor** error logs for attacks
5. **Backup** files regularly

### SSL Certificate Renewal

Let's Encrypt certificates expire after 90 days. Auto-renewal is configured but verify:

```bash
# Check auto-renewal status
sudo systemctl status certbot.timer

# Manual renewal
certbot renew --dry-run
certbot renew
```

---

## 📞 Support

### Emergency Procedures

**Site Down:**
```bash
# Check service status
systemctl status apache2  # or nginx

# Check logs
tail -f /var/log/apache2/error.log

# Restart service
systemctl restart apache2
```

**SSL Certificate Expired:**
```bash
# Renew immediately
certbot renew --force-renewal

# Or purchase new certificate
```

**Corrupted .htaccess:**
```bash
# Disable temporarily
mv .htaccess .htaccess.backup

# Test if site works
# Fix and re-enable
mv .htaccess.backup .htaccess
```

---

## 📝 Checklist for Going Live

Before production deployment:

- [ ] HTTPS/SSL certificate installed
- [ ] .htaccess uploaded and Apache modules enabled
- [ ] Domain DNS configured
- [ ] Email configured (info@, sales@)
- [ ] WhatsApp business link updated
- [ ] All product images optimized
- [ ] Contact information verified
- [ ] Security headers tested
- [ ] Mobile responsiveness verified
- [ ] Browser compatibility tested
- [ ] Page load time < 2 seconds
- [ ] Backup system configured
- [ ] Monitoring setup complete

---

## 📖 Resources

- [Apache Documentation](https://httpd.apache.org/docs/)
- [Let's Encrypt](https://letsencrypt.org/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Nginx Documentation](https://nginx.org/en/docs/)

---

**Last Updated:** June 7, 2026  
**Status:** Production Ready
