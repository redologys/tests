# M. Alam General Construction Website

A modern, premium construction company website built with React, TypeScript, and Vite.

## Features

- 🏗️ **Process Timeline** - Interactive 5-stage project journey visualization
- 🚨 **24/7 Emergency Services** - Dedicated emergency contact section with pulsing CTAs
- 🛡️ **Safety Certifications** - OSHA compliance and insurance credentials display
- 💬 **AI Chat Assistant** - Smart chatbot with estimate calculator, emergency routing, and bilingual support (English/Spanish)
- 📱 **Fully Responsive** - Mobile-first design with sticky bottom navigation
- ⚡ **Performance Optimized** - Fast loading with modern React patterns

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Animations**: CSS transitions and keyframes

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Vercel auto-detects Vite and deploys

### Manual Build

```bash
npm run build
```

The `dist/` folder contains the production-ready files.

## Project Structure

```
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with CTAs
│   ├── Stats.tsx           # Statistics counter
│   ├── About.tsx           # About section
│   ├── Services.tsx        # Services grid
│   ├── ProcessTimeline.tsx # Project journey timeline
│   ├── EmergencyServices.tsx # 24/7 emergency section
│   ├── SafetyCertifications.tsx # OSHA/Insurance badges
│   ├── Gallery.tsx         # Portfolio gallery
│   ├── Testimonials.tsx    # Client reviews
│   ├── FAQ.tsx             # FAQ accordion
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Site footer
│   ├── LiveChat.tsx        # AI chat widget
│   └── ...
├── public/
│   └── assets/             # Images and static files
├── App.tsx                 # Main app component
├── constants.ts            # Business info and data
└── index.html              # HTML entry point
```

## Contact

**M. Alam General Construction**
- 📍 146-20 107th Ave, Jamaica, NY 11435
- 📞 (347) 986-4284
- 🌐 [Website](https://malamconstruction.com)

## License

© 2025 M. Alam General Construction. All rights reserved.
