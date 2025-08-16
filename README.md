# Julian Mangual's Portfolio Website

## Overview
This is a modern, responsive, and interactive personal portfolio website designed to showcase my skills, projects, and educational background as a Software Engineer. Built with React, it features a clean, polished UI/UX with smooth animations and a unique iMessage-inspired "About" section.

## Features

### Dynamic & Responsive Design
-   **Smooth Scrolling:** Seamless navigation between sections with smooth scroll effects.
-   **Responsive Layout:** Adapts gracefully to various screen sizes (desktop, tablet, mobile).
-   **Themed Components:** Consistent styling across the application using a centralized theme.

### About Section
-   **Personalized Greeting:** Features a "👋 Hi, I'm" greeting with a custom font weight.
-   **iMessage-Inspired Bubble:** The main text content is presented within a unique iMessage-style speech bubble with a custom blue background (`#1CA4ED`), rounded corners, and a precisely positioned SVG tail.
-   **Profile Picture:** Displays a profile image within a custom-sized (360px width, 400px height) placeholder with a subtle drop shadow.
-   **Resume Button:** A transparent, rounded button with a blue border and white text, linking directly to the resume. The button's background turns blue on hover for visual feedback.
-   **Scroll Indicator:** A bouncing `⬇️` emoji at the bottom of the section guides users to scroll down.

### Projects Section
-   **Dynamic Project Display:** Showcases projects with images, titles, and descriptions.
-   **Styled Hyperlinks:** "Live Demo" and "GitHub" links are styled as rounded buttons with a blue background (`#1CA4ED`) and white text, similar to the resume button.
-   **Description Overflow:** Project descriptions are limited in height with a scrollbar for longer content, maintaining card uniformity.

### Education Section (New!)
-   **Detailed Education List:** Presents educational background in a clear, structured list format.
-   **Sorted Entries:** Education entries are sorted by date (most recent first).
-   **Tech Stack Bubbles:** Technologies learned are displayed as rounded, blue (`#1CA4ED`) bubbles with white text, providing a quick overview of skills.
-   **Uniform Padding:** The section's content padding aligns with the Projects section for a consistent look.

### Navigation Bar
-   **Clean & Thin Design:** A sleek, thinner navigation bar with smaller, normal-weight text elements.
-   **Blur Effect on Scroll:** When scrolled, the navigation bar becomes semi-transparent with a "stain white" background and a subtle blur effect on the content underneath, enhancing the modern aesthetic.
-   **Hover Effects:** Navigation links change color on hover for improved interactivity.

## Technologies Used
-   **React:** A JavaScript library for building user interfaces.
-   **HTML5:** Standard markup language for creating web pages.
-   **CSS3:** Styling language for web content.
-   **JavaScript (ES6+):** Programming language for interactive web pages.
-   **React Scroll:** For smooth scrolling navigation.
-   **Bootstrap:** For responsive design utilities.
-   **Google Fonts (Inter):** For a clean, Apple-like typography.

## Getting Started

### Prerequisites
-   Node.js (LTS version recommended)
-   npm (Node Package Manager)

### Installation
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/JacketJulian/Portfolio-Website-Julian-.git
    cd Portfolio-Website-Julian-
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running Locally
To start the development server:
```bash
npm start
```
The application will typically open in your browser at `http://localhost:3000`.

## Customization
-   **`src/data.js`:** Update your personal information, projects, education details, and contact links.
-   **`src/theme.js`:** Modify color schemes to match your personal branding.
-   **CSS Files:** Adjust styling in individual component CSS files for fine-grained control.

## Deployment
This project is configured for deployment using `gh-pages`.

To deploy to GitHub Pages:
```bash
npm run deploy
```

## Contact
-   **Julian Mangual** - [julianjmangual@gmail.com](mailto:julianjmangual@gmail.com)
-   **LinkedIn:** [Julian Mangual](https://www.linkedin.com/in/julian-mangual-949a0622b/)
-   **GitHub:** [JacketJulian](https://github.com/JacketJulian/)

---
