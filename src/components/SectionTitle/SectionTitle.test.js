import React from 'react';
import { render, screen } from '@testing-library/react';
import SectionTitle from './SectionTitle';

describe('SectionTitle Component', () => {
  test('renders default heading', () => {
    render(<SectionTitle>Heading Text</SectionTitle>);
    const heading = screen.getByText('Heading Text');
    expect(heading.tagName).toBe('H1');
  });

  test('renders level 2 heading', () => {
    render(<SectionTitle level={2}>Level 2 Heading</SectionTitle>);
    const heading = screen.getByText('Level 2 Heading');
    expect(heading.tagName).toBe('H2');
  });

  test('renders level 3 heading', () => {
    render(<SectionTitle level={3}>Level 3 Heading</SectionTitle>);
    const heading = screen.getByText('Level 3 Heading');
    expect(heading.tagName).toBe('H3');
  });

  test('renders level 4 heading', () => {
    render(<SectionTitle level={4}>Level 4 Heading</SectionTitle>);
    const heading = screen.getByText('Level 4 Heading');
    expect(heading.tagName).toBe('H4');
  });

  test('renders bold title by default', () => {
    render(<SectionTitle>Bold Title</SectionTitle>);
    const heading = screen.getByText('Bold Title');
    expect(heading).toHaveClass('ui-title-bold');
  });

  test('renders non-bold title when bold is false', () => {
    render(<SectionTitle bold={false}>Not Bold</SectionTitle>);
    const heading = screen.getByText('Not Bold');
    expect(heading).not.toHaveClass('ui-title-bold');
  });

  test('renders title with custom color', () => {
    render(<SectionTitle color="#ff0000">Red Title</SectionTitle>);
    const heading = screen.getByText('Red Title');
    expect(heading).toHaveStyle('color: #ff0000');
  });

  test('renders title with custom className', () => {
    render(<SectionTitle className="custom-title">Custom</SectionTitle>);
    const heading = screen.getByText('Custom');
    expect(heading).toHaveClass('custom-title');
  });

  test('renders with custom data-testid', () => {
    render(<SectionTitle data-testid="test-title">Test Title</SectionTitle>);
    expect(screen.getByTestId('test-title')).toBeInTheDocument();
  });
});