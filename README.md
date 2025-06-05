# Recovery on the Harbor Website

## Getting Started
1. Place your logo file as \`public/logo.png\` (preferably a transparent or white‐background version).
2. Place your background video as \`public/hero.mp4\`.
3. Run:
   \`\`\`
   npm install
   npm run dev
   \`\`\`
4. Open \`http://localhost:3000\` in your browser.

## Folder Structure
- \`/pages\`: Contains Next.js pages (home, contact, about, services, gallery)
- \`/components\`: Reusable Header/Footer components
- \`/public\`: Place \`logo.png\`, \`hero.mp4\`, and any other static assets here
- \`/styles\`: Global CSS (Tailwind)

## Deployment
We plan to host on Cloudflare. Once everything looks good:
1. Commit your changes to git:
   \`\`\`
   git init
   git add .
   git commit -m "Initial Next.js + Tailwind setup for ROH site"
   \`\`\`
2. Push to your remote repository and connect to Cloudflare Pages.

## Notes
- Header includes a hamburger menu that slides in from the left on mobile.
- “About” has nested submenu links for Overview, Blog, and FAQ.
- Replace placeholder text/images with real content.
- Tailwind colors are set in \`tailwind.config.js\` (adjust \`--primary-blue\` and \`--secondary-gold\` to match your logo exactly).
