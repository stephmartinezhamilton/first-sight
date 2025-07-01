# Personal Portfolio Website

A sleek, modern, and fully functional personal portfolio website built with React and TypeScript. Features a responsive design, dark mode toggle, smooth animations, and a contact form with validation.

## ✨ Features

- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **Features Section** - Showcase your key offerings with animated cards
- **Testimonials** - Display client feedback and testimonials
- **Contact Form** - Fully functional contact form with validation
- **Fixed Navigation** - Smooth scroll navigation with mobile menu
- **Dark Mode Toggle** - Switch between light and dark themes
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Hover effects, fade-ins, and transitions
- **Modern UI/UX** - Clean typography, professional colors, and whitespace

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal-portfolio-backup
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change "Your Name" to your actual name
   - Update the subtitle and description
   - Modify the call-to-action buttons

2. **Features Section** (`src/components/Features.tsx`):
   - Update the features array with your services/skills
   - Change icons, titles, and descriptions

3. **Testimonials** (`src/components/Testimonials.tsx`):
   - Replace with real client testimonials
   - Update names, positions, and companies

4. **Contact Section** (`src/components/Contact.tsx`):
   - Update email, phone, and location
   - Modify the contact form description

### Styling

The website uses CSS custom properties for easy theming:

- **Primary Colors**: Update `--primary-color` and `--primary-hover` in `src/App.css`
- **Dark Mode**: Colors automatically adjust for dark mode
- **Typography**: Uses Inter font family (can be changed in `src/index.css`)

### Adding New Sections

1. Create a new component in `src/components/`
2. Add corresponding CSS file
3. Import and add to `src/App.tsx`
4. Update navigation if needed

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎯 Features in Detail

### Navigation
- Fixed positioning with backdrop blur
- Smooth scroll to sections
- Mobile hamburger menu
- Dark mode toggle

### Hero Section
- Gradient background
- Animated content
- Call-to-action buttons
- Responsive layout

### Features Cards
- Hover animations
- Staggered entrance animations
- Icon-based design
- Grid layout

### Testimonials
- Quote styling
- Author information
- Card hover effects
- Responsive grid

### Contact Form
- Form validation
- Error handling
- Success/error messages
- Responsive layout

### Dark Mode
- Persistent preference storage
- Smooth transitions
- Automatic color adjustments

## 🛠️ Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **CSS3** - Styling and animations
- **CSS Custom Properties** - Theming
- **CSS Grid & Flexbox** - Layout
- **Local Storage** - Dark mode persistence

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx
│   ├── Navigation.css
│   ├── Hero.tsx
│   ├── Hero.css
│   ├── Features.tsx
│   ├── Features.css
│   ├── Testimonials.tsx
│   ├── Testimonials.css
│   ├── Contact.tsx
│   └── Contact.css
├── App.tsx
├── App.css
├── index.tsx
└── index.css
```

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Import your GitHub repository
2. Vercel will auto-detect React settings
3. Deploy with default settings

### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/repository-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to package.json
4. Run `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inter font family by Google Fonts
- React and TypeScript communities
- CSS Grid and Flexbox for modern layouts

---

**Happy coding! 🎉** 