React Portfolio - Abdullah Asim
A modern, responsive portfolio website built with React, Vite, React Router, Material-UI (MUI), and Yup for form validation. This project showcases my skills, education, projects, and provides a contact form for visitors.
Features

Dynamic Pages: Home, Education, Projects, and Contact pages with consistent styling and animations.
Theme Toggle: Switch between dark and light modes with a smooth transition.
Responsive Design: Mobile-first approach with breakpoints for tablets and desktops.
Context API: Manages page titles and theme state across components.
Lazy Loading: Optimizes performance by lazy-loading page components.
Form Validation: Contact form with Yup for client-side validation.
Animations: Fade-in effects for headings, hover effects on cards, buttons, and navigation.
Error Handling: ErrorBoundary component to catch rendering errors gracefully.
MUI Components: Uses AppBar, Drawer, Grid, Card, and more for a polished UI.
Skills Section: Displays technical skills with animated tags in the Education page.
Project Cards: Showcases projects with images, descriptions, and links, inspired by Assignment #1.

Tech Stack

React: Frontend framework for building dynamic UI.
Vite: Fast build tool for development and production.
React Router: Handles client-side routing.
Material-UI (MUI): Component library for responsive UI elements.
Yup & Formik: Form validation and management for the Contact page.
CSS Modules: Scoped styling with modular CSS.
Git/GitHub: Version control and repository hosting.

Setup Instructions

Clone the Repository:git clone https://github.com/sadbrownladd/react-portfolio-2025.git


Navigate to the Project Directory:cd react-portfolio-2025


Install Dependencies:npm install


Run the Development Server:npm run dev


Open in Browser:
Visit http://localhost:5173 to view the portfolio.



Project Structure
src/
├── assets/              # Static assets (e.g., profile.png, project images)
├── components/          # Reusable components (e.g., CustomTable, ErrorBoundary)
├── context/             # React Context for page title and theme
├── layouts/             # Header, SideNav, Footer components
├── pages/               # Page components (Home, Education, Projects, Contact)
├── index.css            # Global styles and theme variables
├── App.jsx              # Main app component with routing
├── main.jsx             # Entry point with ReactDOM

Screenshots

Note: To add a screenshot, capture the Home page at http://localhost:5173, save it as screenshot.png in the project root, and update this README.
Assignment Details
This project fulfills the requirements of Assignment #2, building on Assignment #1 by:

Implementing a React SPA with Vite.
Using MUI components for UI.
Adding lazy loading and context for state management.
Enhancing with animations (fade-in, hover effects).
Ensuring responsiveness across devices.
Including form validation with Yup and Formik.

Credits

Developed by Abdullah Asim (BSCS23064).
Built for Web Development Assignment #2 at ITU.

