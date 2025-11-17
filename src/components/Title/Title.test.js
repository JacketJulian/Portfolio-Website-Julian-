import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from './Title';

describe('Title Component', () => {
  test('renders h1 by default', () => {
    render(<Title>Heading Text</Title>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Heading Text');
  });

  test('renders specified heading level', () => {
    render(<Title level={2}>Level 2 Heading</Title>);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  test('renders h3 when level is 3', () => {
    render(<Title level={3}>Level 3 Heading</Title>);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toBeInTheDocument();
  });

  test('renders h4 when level is 4', () => {
    render(<Title level={4}>Level 4 Heading</Title>);
    const heading = screen.getByRole('heading', { level: 4 });
    expect(heading).toBeInTheDocument();
  });

  test('applies bold class by default', () => {
    render(<Title>Bold Title</Title>);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('ui-title-bold');
  });

  test('does not apply bold class when bold is false', () => {
    render(<Title bold={false}>Not Bold</Title>);
    const heading = screen.getByRole('heading');
    expect(heading).not.toHaveClass('ui-title-bold');
  });

  test('applies custom color via style', () => {
    render(<Title color="#ff0000">Red Title</Title>);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveStyle({ color: '#ff0000' });
  });

  test('applies level-specific class', () => {
    render(<Title level={2}>Level 2</Title>);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('ui-title-2');
  });

  test('applies custom className', () => {
    render(<Title className="custom-title">Custom</Title>);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('custom-title');
  });

  test('passes through additional props', () => {
    render(<Title data-testid="test-title">Test Title</Title>);
    expect(screen.getByTestId('test-title')).toBeInTheDocument();
  });
});
