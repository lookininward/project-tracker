import each from 'jest-each';
import { render, screen } from '@testing-library/react';
import ChevronCompact from './ChevronCompact';

beforeEach(() => {
  document.body.innerHTML = "";
});

describe('ChevronCompact', () => {
  test('renders icon with additional classes when provided', () => {
    render(<ChevronCompact direction='up' classNames="kitty-cat" />);
    const chevronSVG = screen.getByTestId("SVGchevron");
    expect(chevronSVG.classList.length).toBe(3);
    expect(chevronSVG.classList.contains('kitty-cat')).toBe(true);
  });

  describe('renders icon in specified direction', () => {
    each([
      ['up', 'SVGchevron-up'],
      ['down', 'SVGchevron-down'],
    ]).test('renders %s', (direction, expectedId) => {
      render(<ChevronCompact direction={direction} />);
      const chevronSVG = screen.getByTestId(expectedId);
      expect(chevronSVG).toBeInTheDocument();
    });
  });
});
