# PPT Bar - Digital Kiosk SystemPPT Shop — Static GitHub Pages Demo



An elegant touchscreen ordering system for a real-world PPT shop where experts ("PPT Chefs") create custom PowerPoint presentations while customers wait.Overview

- This is a simple static demo of a PPT templates shop meant for hosting on GitHub Pages.

🔗 [Live Demo](https://your-username.github.io/pptbar/)- It has two panels: "Shop" (product listing + client-side cart) and "Submit" (a form for sellers to submit templates).

- No server-side code is included (because GitHub Pages is static). The project shows how to wire forms and provide secure recommendations.

## Features

Files

- 📱 Customer Kiosk - Touch-friendly order form- `index.html` — main static page with Shop and Submit panels.

- 👩‍🍳 Chef Dashboard - Real-time order management- `styles.css` — basic styles.

- 📺 Waiting Room Display - Ad rotation & order status- `app.js` — client-side logic: products, cart, and form submission to Formspree.

- 🎫 Ticket Printing - Physical order tickets

- 💾 Local Storage - No backend requiredHow to host on GitHub Pages

1. Create a new repository (or use an existing one) and push this folder as the repository root.

## Quick Start2. In GitHub, go to Settings → Pages and choose the `main` branch and `/` (root) or `/docs` as the source.

3. After a minute, your site will be available at `https://<username>.github.io/<repo>/`.

1. Fork this repository

2. Enable GitHub Pages:Secure form submissions

   - Go to repository Settings- GitHub Pages cannot receive file uploads or handle form submissions server-side.

   - Scroll to "GitHub Pages" section- Use a trusted third-party form service to accept submissions without exposing secrets. Options:

   - Select `main` branch and `/` (root) folder  - Formspree (https://formspree.io) — simple email forwarding for form submissions. Replace the `action` in the form with your Formspree endpoint.

   - Click Save  - Netlify Forms — if you host on Netlify instead of GitHub Pages, built-in form handling is available.

3. Your site will be live at `https://your-username.github.io/pptbar/`  - Use a serverless function (AWS Lambda / Cloud Functions / Azure Functions) to accept uploads securely and store files in S3 or another storage.



## Hardware Setup GuideHoneypot and client-side validation

- The demo includes a hidden honeypot field (`_hp`) to reduce spam; keep it and check server-side as well.

### Recommended Hardware- Never rely solely on client-side validation — validate on the server or through the form provider.



1. Customer KioskPayments

   - Tablet/Touch Display (iPad/Surface)- Do NOT embed secret API keys in client-side code.

   - Mount: Wall mount or standing kiosk enclosure- For payments, use a hosted flow:

   - Browser: Chrome/Edge in kiosk mode  - Stripe Checkout: create Checkout sessions on a server or serverless function. The client redirects users to Stripe Checkout; no secret key is exposed to the browser.

  - PayPal hosted buttons are another option.

2. Chef's Workstation- If you need a reference implementation, add a small server (Node/Express) or serverless function that creates Stripe Checkout sessions. Deploy that server somewhere secure and call it from the client.

   - PC/Laptop with good specs for PowerPoint

   - Secondary monitor for order dashboardDownloads and hosting assets

   - USB receipt printer (optional)- Place PPTX files in a public storage bucket (S3, Google Drive public file, or in the repo under a `downloads/` folder). If you put assets in the repo, they will be public if hosted on GitHub Pages.



3. Waiting Room DisplayNext steps / Recommendations

   - TV/Large Monitor (42"+ recommended)- Add a backend for payments and to securely handle seller submissions and file storage.

   - Small PC (Intel NUC/Raspberry Pi)- Add authentication for seller dashboard (so sellers can add/edit products securely).

   - HDMI cable- Replace the demo Formspree endpoint with your configured endpoint.



### Setting Up Kiosk ModeSecurity checklist before going live

- Do not include any API keys in these files.

#### Windows (Edge)- Use HTTPS endpoints for forms and payment webhooks.

```powershell- Validate all input server-side and scan uploads for malware.

# Create a shortcut with this command:

"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --kiosk "https://your-username.github.io/pptbar/?mode=kiosk"If you want, I can:

```- Add an example serverless function (Azure Functions / Netlify / AWS Lambda) to accept form uploads and store them in S3.

- Add an example Stripe Checkout server snippet and wiring.

#### iPad

1. Settings -> Guided Access
2. Enable Guided Access
3. Open browser to kiosk page
4. Triple-click home/power to start

## PPT Chef Guide

### Template Cookbook

Prepare these base templates for quick customization:

1. Corporate Pack
   - Company Overview (10-15 slides)
   - Product Launch (8-12 slides)
   - Business Proposal (12-15 slides)

2. Academic Pack
   - Research Presentation (15-20 slides)
   - Lecture Template (20-25 slides)
   - Thesis Defense (25-30 slides)

3. Creative Pack
   - Portfolio Showcase (8-10 slides)
   - Pitch Deck (10-12 slides)
   - Marketing Campaign (12-15 slides)

### Color Schemes

Pre-made color palettes to match common requests:

```css
/* Professional Blue */
--primary: #2b6cb0;
--accent: #4299e1;
--text: #2d3748;

/* Nature Green */
--primary: #2f855a;
--accent: #48bb78;
--text: #2d3748;

/* Energy Red */
--primary: #c53030;
--accent: #f56565;
--text: #2d3748;

/* Creative Purple */
--primary: #6b46c1;
--accent: #9f7aea;
--text: #2d3748;
```

## Customization

### Updating Ad Content

Edit the `ads` array in `index.html`:

```javascript
const ads = [
    {
        type: 'html',
        content: `<div>Your Ad HTML</div>`,
        duration: 5 // seconds
    },
    {
        type: 'image',
        content: 'path/to/image.jpg',
        duration: 4
    }
];
```

### Printer Setup

If using a USB receipt printer:

1. Install printer drivers
2. Test print formatting in `printTicket()` function
3. Adjust CSS in print template

## Suggested Pricing Model

1. Basic Package
   - 10-15 slides
   - 30-minute turnaround
   - Basic animations
   - Price: $XX

2. Premium Package
   - 15-25 slides
   - 15-minute turnaround
   - Advanced animations
   - Custom graphics
   - Price: $XX

3. Add-ons
   - USB Drive: $XX
   - Express Service (10 min): +$XX
   - Extra Animations: +$XX/slide

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - See [LICENSE](LICENSE) for details