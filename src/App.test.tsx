import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders portfolio hero section', () => {
    render(<App />);
    // Check if the hero section exists
    expect(document.querySelector('#hero')).toBeInTheDocument();
    // Check if the hero title is rendered (more specific selector)
    expect(screen.getByText(/Shingo Watanabe \| 渡邉真悟/i)).toBeInTheDocument();
  });

  test('renders navigation menu items', () => {
    render(<App />);
    // Check if main navigation items exist in navbar
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();

    // Use more specific queries for navbar items
    expect(screen.getByRole('button', { name: /AboutMe/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Products/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Contact/i })).toBeInTheDocument();
  });

  test('renders main sections', () => {
    render(<App />);
    // Check if main sections are present
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(document.querySelector('#hero')).toBeInTheDocument();
    expect(document.querySelector('#about')).toBeInTheDocument();
    expect(document.querySelector('#skills')).toBeInTheDocument();
    expect(document.querySelector('#contact')).toBeInTheDocument();
  });

  test('renders app container', () => {
    render(<App />);
    // Check if the main app container exists
    const appContainer = document.querySelector('#app');
    expect(appContainer).toBeInTheDocument();
  });

  test('renders location and status information', () => {
    render(<App />);
    // Check if location and status are displayed
    expect(screen.getByText(/Shibuya Tokyo, Japan/i)).toBeInTheDocument();
    expect(screen.getByText(/業務委託募集中/i)).toBeInTheDocument();
  });
});
