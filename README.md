# 🌟 Portfolio - Robby Runge

**Modern Angular Portfolio Website**

A responsive, multilingual portfolio website built with Angular 19, showcasing my skills as a Fullstack Developer. Features a sleek design with custom cursor interactions, smooth animations, and a cookie consent management system.

![Angular](https://img.shields.io/badge/Angular-19.2.0-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue?style=flat-square&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-58%25-hotpink?style=flat-square&logo=sass)
![HTML5](https://img.shields.io/badge/HTML5-21.3%25-orange?style=flat-square&logo=html5)

## 🚀 Live Demo

https://robby-runge.de/

## ✨ Features

### 🎨 Design & UX
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Custom Cursor** - Interactive cursor with hover effects
- **Smooth Animations** - AOS (Animate On Scroll) for engaging scroll animations
- **Modern UI/UX** - Clean and professional design

### 🌍 Internationalization
- **Multilingual Support** - German (DE) and English (EN)
- **Dynamic Language Switching** - Seamless language transitions
- **Localized Content** - Fully translated interface

### 🔒 Privacy & Compliance
- **Cookie Banner** - GDPR-compliant cookie consent management
- **Cookie Consent Service** - Persistent user preference storage
- **Imprint & Data Protection** - Dedicated legal pages

### 📱 Sections
- **Landing Page** - Eye-catching hero section with call-to-action
- **About Me** - Personal introduction and background
- **Skills** - Frontend and backend technical expertise with certificate showcase
- **Featured Projects** - Showcase of 6 projects:
  - **Join** - Kanban task management application (HTML/CSS/JS/Firebase)
  - **Sharkie** - 2D underwater adventure game (HTML/CSS/JS)
  - **DA Bubble** - Slack-inspired team communication app (Angular/Firebase)
  - **Coderr** - Freelance platform connecting businesses and clients (Python/Django)
  - **Quizly** - AI-powered YouTube-to-quiz generator (Python/Django) *(in progress)*
  - **Videoflix** - Netflix-style video streaming platform (Python/Django/Linux)
- **Colleagues** - Testimonials and recommendations
- **Contact** - Professional contact form
- **Footer** - Links to imprint and data protection

## 🛠️ Tech Stack

### Frontend Framework
- **Angular 19.2.0** - Latest Angular with standalone components
- **TypeScript 5.7.2** - Type-safe JavaScript development
- **RxJS 7.8.0** - Reactive programming with observables
- **SCSS** - Advanced CSS preprocessing
- **AOS** - Animate On Scroll library

### Backend Skills (showcased in projects)
- **Python** - Primary backend language
- **Django & Django REST Framework** - Web framework and REST API development
- **PostgreSQL / SQL** - Relational database management
- **Docker** - Containerization
- **Redis** - Caching and message brokering
- **Linux** - Server administration
- **Flask** - Lightweight Python web framework
- **Heroku** - Cloud deployment

### Internationalization
- **@ngx-translate/core** - Angular internationalization
- **@ngx-translate/http-loader** - Dynamic translation loading

### Development Tools
- **Angular CLI 19.2.13** - Project scaffolding and build tools
- **Jasmine & Karma** - Unit testing framework
- **TypeScript Compiler** - Static type checking

## 🏗️ Project Structure

```
src/
├── app/
│   ├── main-content/
│   │   ├── about-me/               # About section component
│   │   ├── colleagues/             # Testimonials section component
│   │   ├── contact-me/             # Contact form section component
│   │   ├── featured-projects/      # Projects showcase (6 projects)
│   │   ├── landing-page/           # Hero section component
│   │   └── skills/                 # Skills & certificates section
│   ├── shared/
│   │   ├── cookie-banner/          # GDPR cookie consent banner
│   │   ├── cookie-consent.service.ts # Cookie preference management
│   │   ├── data-protection/        # Data protection page
│   │   ├── footer/                 # Footer component
│   │   ├── header/                 # Navigation header component
│   │   ├── imprint/                # Imprint page
│   │   └── translation.service.ts  # i18n service
│   └── sendMail.php                # Handles contact form
├── assets/
│   ├── certificates/               # Developer Academy certificates
│   ├── fonts/                      # Fonts
│   ├── i18n/                       # Translation files
│   │  ├── de.json                  # German translations
│   │  └── en.json                  # English translations
│   └── imgs/                       # Images for the Portfolio
└── styles/                         # Global SCSS styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm
- Angular CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RobbyRunge/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   ```
   http://localhost:4200
   ```

### Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm run watch      # Build with file watching
npm test           # Run unit tests
npm run ng         # Angular CLI commands
```

## 🌍 Internationalization

The portfolio supports multiple languages:

- **German (DE)** - Default language
- **English (EN)** - Secondary language

Translation files are located in `src/assets/i18n/` and are loaded dynamically based on user preference.

## 🗺️ Routing

| Path               | Component            |
|--------------------|----------------------|
| `/`                | Main content         |
| `/imprint`         | Imprint              |
| `/data-protection` | Data Protection      |

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 **Mobile** (320px - 768px)
- 📱 **Tablet** (768px - 1024px)
- 💻 **Desktop** (1024px+)
- 🖥️ **Large Screens** (1440px+)

## 🤝 Connect With Me

- **Location**: Eilenburg, Germany
- **Work**: Available for remote work
- **Status**: Open for new opportunities

> 💡 **Growth Mindset**: I have a special interest in learning new technologies and constantly expanding my skillset through practice, projects, and continuous education.

## 📄 License

This project is a personal portfolio website. All rights reserved.

---

**Built with ❤️ by Robby Runge**

*Fullstack Developer based in Eilenburg, Germany*
