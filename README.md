# RTN Global Next.js Frontend

This is the Next.js frontend for RTN Global, a web development and digital marketing agency. Built with Next.js, TypeScript, and shadcn/ui components.

## Features

- Modern and responsive UI with shadcn/ui components
- Light/Dark mode support using next-themes
- TypeScript for type safety
- Authentication system with protected routes
- SEO-friendly with metadata support
- Proper routing using Next.js App Router
- Responsive design for all device sizes
- Reusable section components for consistent UI
- Blog with dynamic content and categories

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- [React Hook Form](https://react-hook-form.com/) - Form validation
- [Axios](https://axios-http.com/) - Promise based HTTP client
- [Zod](https://zod.dev/) - TypeScript-first schema validation

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Installation

1. Clone the repository:

```bash
git clone https://github.com/rtnglobal/rtn-global-next-frontend.git
cd rtn-global-next-frontend
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add the following environment variables:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
rtn-global-next-frontend/
├── src/
│   ├── app/                  # App directory (App Router)
│   │   ├── api/              # API routes
│   │   ├── about/            # About page
│   │   ├── blog/             # Blog pages
│   │   ├── contact/          # Contact page
│   │   ├── services/         # Services pages
│   │   ├── pricing/          # Pricing page
│   │   ├── careers/          # Careers page
│   │   ├── faq/              # FAQ page
│   │   └── ...               # Other page routes
│   ├── components/           # UI components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── layout/           # Layout components (header, footer, etc.)
│   │   ├── sections/         # Reusable section components
│   │   │   ├── hero-section.tsx     # Hero section
│   │   │   ├── features-section.tsx # Features showcase
│   │   │   ├── cta-section.tsx      # Call to action section
│   │   │   ├── stats-section.tsx    # Statistics section
│   │   │   ├── testimonials-section.tsx # Testimonials section
│   │   │   ├── pricing-section.tsx  # Pricing plans section
│   │   │   ├── faq-section.tsx      # FAQ section
│   │   │   └── ...                  # Other section components
│   │   └── ...               # Other components
│   ├── lib/                  # Utilities and contexts
│   │   ├── contexts/         # Context providers
│   │   └── utils.ts          # Utility functions
│   └── ...
├── public/                   # Static files
├── .env.local                # Local environment variables
├── next.config.ts            # Next.js configuration
├── package.json              # Project dependencies
├── tailwind.config.js        # Tailwind CSS configuration
└── README.md                 # Project documentation
```

## Component Architecture

We use a modular approach with reusable section components to maintain consistency across pages:

### Layout Components
- `Layout` - Main layout wrapper with header and footer
- `Header` - Site navigation and brand identity
- `Footer` - Site links, contact info, and copyright

### Section Components
Reusable content sections that can be composed to create pages:

- `HeroSection` - Page headers with titles and descriptions
- `FeaturesSection` - Display features in a grid with icons
- `CTASection` - Call-to-action areas with buttons
- `StatsSection` - Display statistics and metrics
- `TestimonialsSection` - Client testimonials in cards
- `PricingSection` - Display pricing plans
- `FAQSection` - Frequently asked questions

This approach allows for:
1. Consistent UI patterns across the site
2. Easier maintenance and updates
3. Faster page creation with pre-built sections
4. Better organization of page content

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Deployment

This project can be deployed to Vercel with zero configuration:

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Add the required environment variables
4. Deploy

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries, please contact us at info@rtnglobal.site
