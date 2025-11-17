import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Description from './Description';

describe('Description Component', () => {
  test('renders paragraph with children text', () => {
    render(<Description>Test description text</Description>);
    expect(screen.getByText('Test description text')).toBeInTheDocument();
  });

  test('applies bubble variant by default', () => {
    render(<Description>Bubble description</Description>);
    const description = screen.getByText('Bubble description');
    expect(description).toHaveClass('ui-description-bubble');
  });

  test('applies plain variant when specified', () => {
    render(<Description variant="plain">Plain description</Description>);
    const description = screen.getByText('Plain description');
    expect(description).toHaveClass('ui-description-plain');
  });

  test('applies default background color for bubble variant', () => {
    render(<Description>Bubble text</Description>);
    const description = screen.getByText('Bubble text');
    expect(description).toHaveStyle({ backgroundColor: '#2294fb' });
  });

  test('applies custom background color for bubble variant', () => {
    render(<Description backgroundColor="#ff0000">Custom color</Description>);
    const description = screen.getByText('Custom color');
    expect(description).toHaveStyle({ backgroundColor: '#ff0000' });
  });

  test('does not apply background color for plain variant', () => {
    render(<Description variant="plain">Plain text</Description>);
    const description = screen.getByText('Plain text');
    expect(description).toHaveStyle({ backgroundColor: 'transparent' });
  });

  test('applies custom text color', () => {
    render(<Description color="#00ff00">Green text</Description>);
    const description = screen.getByText('Green text');
    expect(description).toHaveStyle({ color: '#00ff00' });
  });

  test('applies custom className', () => {
    render(<Description className="custom-desc">Custom</Description>);
    const description = screen.getByText('Custom');
    expect(description).toHaveClass('custom-desc');
  });

  test('passes through additional props', () => {
    render(<Description data-testid="test-description">Test</Description>);
    expect(screen.getByTestId('test-description')).toBeInTheDocument();
  });

  test('renders as paragraph element', () => {
    const { container } = render(<Description>Paragraph test</Description>);
    const paragraph = container.querySelector('p');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent('Paragraph test');
  });
});
