import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders all sections of the portfolio', () => {
  render(<App />);
  
  // Check for Navbar
  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByTestId('navbar-logo-link')).toBeInTheDocument();

  // Check for Home section
  const homeSection = screen.getByTestId('home-section');
  expect(within(homeSection).getByRole('heading', { level: 1, name: /julian mangual/i })).toBeInTheDocument();
  expect(within(homeSection).getByText(/Software Engineer | Full-Stack Developer/i)).toBeInTheDocument();

  // Check for About section
  const aboutSection = screen.getByTestId('about-section');
  expect(within(aboutSection).getByRole('heading', { level: 2, name: /about me/i })).toBeInTheDocument();

  // Check for Projects section
  const projectsSection = screen.getByTestId('projects-section');
  expect(within(projectsSection).getByRole('heading', { level: 2, name: /my projects/i })).toBeInTheDocument();

  // Check for Resume section
  const resumeSection = screen.getByTestId('resume-section');
  expect(within(resumeSection).getByRole('heading', { level: 2, name: /my resume/i })).toBeInTheDocument();

  // Check for Contact section
  const contactSection = screen.getByTestId('contact-section');
  expect(within(contactSection).getByRole('heading', { level: 2, name: /contact me/i })).toBeInTheDocument();
});