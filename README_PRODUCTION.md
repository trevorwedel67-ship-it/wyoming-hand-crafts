# Wyoming Hand Crafts - Production Ready Website

## 🎨 Project Overview

Wyoming Hand Crafts is a modern, fully responsive e-commerce website showcasing handmade artisan products from Lagrange, Wyoming. The site features a stunning scroll-expansion hero with cinematic Ken Burns animation, product catalog, shopping cart, and contact functionality.

## ✨ Key Features

**Hero Section**
- Scroll-to-expand animation with smooth transitions
- Cinematic Ken Burns effect on background images
- Responsive design for mobile and desktop
- Dynamic title splitting and text animation

**E-Commerce**
- Full product catalog with filtering and search
- Shopping cart with persistent storage
- Product detail pages
- Category browsing

**Content**
- Story/About pages with rich imagery
- Blog section for updates
- Contact form with validation
- Admin dashboard for management

**Design & Performance**
- Built with Next.js 16 (latest)
- Tailwind CSS for styling
- Framer Motion for animations
- Fully responsive and mobile-optimized
- Optimized images and lazy loading
- TypeScript for type safety

## 🚀 Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.2.1 | React framework |
| React | 19.2.4 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Styling |
| Framer Motion | 12.38.0 | Animations |
| Radix UI | Latest | Accessible components |
| Lucide React | 1.7.0 | Icons |

## 📁 Project Structure

```
shed-interior-ai/
├── app/                          # Next.js app router
│   ├── page.tsx                 # Homepage with hero
│   ├── layout.tsx               # Root layout
│   ├── shop/                    # Shop pages
│   ├── cart/                    # Shopping cart
│   ├── checkout/                # Checkout flow
│   ├── about/                   # About page
│   ├── story/                   # Story page
│   ├── contact/                 # Contact form
│   ├── blog/                    # Blog posts
│   ├── admin/                   # Admin dashboard
│   └── api/                     # API routes
├── components/
│   ├── ui/                      # Reusable UI components
│   │   ├── scroll-expansion-hero-enhanced.tsx  # Hero component
│   │   ├── product-card-1.tsx   # Product card
│   │   ├── offer-carousel.tsx   # Carousel
│   │   └── ...                  # Other components
│   ├── wyoming-nav.tsx          # Navigation
│   └── wyoming-footer.tsx       # Footer
├── lib/
│   ├── products.ts              # Product data
│   ├── cart-context.tsx         # Cart state
│   └── utils.ts                 # Utilities
├── public/                      # Static assets
├── styles/                      # Global styles
├── package.json                 # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # Tailwind config
├── next.config.ts              # Next.js config
└── netlify.toml                # Netlify config
```

## 🎯 Hero Component Features

The enhanced scroll-expansion hero (`scroll-expansion-hero-enhanced.tsx`) includes:

- **Scroll Detection**: Tracks user scroll progress and expands media accordingly
- **Ken Burns Effect**: Subtle zoom and pan animation on background images
- **Touch Support**: Full mobile touch gesture support
- **Responsive**: Adapts to all screen sizes
- **Media Types**: Supports both images and videos
- **Text Animation**: Dynamic title splitting with parallax effect

### Usage Example

```tsx
<ScrollExpandMedia
  mediaType="image"
  mediaSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
  bgImageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
  title="Crafted with Heart, Built to Last."
  date="Est. 1984"
  scrollToExpand="Scroll to Explore Our Craft"
  textBlend
  enableKenBurns={true}
>
  {/* Content revealed after scroll */}
</ScrollExpandMedia>
```

## 🔧 Development

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## 📦 Build & Deployment

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

### Environment Variables

Create a `.env.local` file for local development:

```env
# Optional: For AI features
OPENAI_API_KEY=your_key_here

# Optional: Database
DATABASE_URL=your_database_url
```

### Deployment Options

**Vercel (Recommended)**
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

**Netlify**
1. Push code to GitHub
2. Connect repository to Netlify
3. Deploy automatically on push

**Docker**
```bash
docker build -t wyoming-crafts .
docker run -p 3000:3000 wyoming-crafts
```

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

## 🎨 Customization

### Colors & Branding
Edit `tailwind.config.ts` to customize colors:
```ts
colors: {
  amber: { /* Wyoming brand colors */ }
}
```

### Images
Replace images in components with your own URLs:
- Hero background: `bgImageSrc` prop
- Product images: Update in `lib/products.ts`
- Category images: Update in `components/ui/commerce-hero.tsx`

### Content
- Product data: `lib/products.ts`
- Navigation links: `components/wyoming-nav.tsx`
- Footer content: `components/wyoming-footer.tsx`

## 📊 Performance

- **Lighthouse Score**: 90+ (target)
- **Core Web Vitals**: All green
- **Page Load Time**: < 2 seconds
- **Mobile Performance**: Optimized

### Optimization Techniques Used
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS minification
- JavaScript minification
- Caching headers
- CDN delivery

## 🔒 Security

- HTTPS/SSL enabled on production
- Secure form validation
- XSS protection via React
- CSRF tokens on forms
- Content Security Policy headers

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

**Build fails**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

**Port 3000 already in use**
```bash
# Use different port
PORT=3001 npm run dev
```

**Images not loading**
- Check image URLs are accessible
- Verify Next.js Image optimization is enabled
- Check `next.config.ts` for image domain configuration

## 📈 Analytics & Monitoring

Recommended tools:
- **Google Analytics**: Track user behavior
- **Vercel Analytics**: Monitor performance
- **Sentry**: Error tracking
- **LogRocket**: Session replay

## 🤝 Contributing

To contribute to this project:
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is proprietary to Wyoming Hand Crafts.

## 📞 Support

For issues or questions:
- Email: support@wyominghardcrafts.com
- Phone: (contact info)
- Website: https://wyominghardcrafts.com

---

**Last Updated**: April 2026  
**Version**: 1.0.0  
**Status**: Production Ready ✅
