import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import SVGSideBar from './Sidebar';

describe('SVGSideBar', () => {
  test('renders icon with additional classes when provided', () => {
    render(<SVGSideBar classNames="monkey" />);
    const sidebarSVG = screen.getByTestId("SVGSideBar");
    expect(sidebarSVG.classList.length).toBe(3);
    expect(sidebarSVG.classList.contains('monkey')).toBe(true);    
  });

  test('calls passed function onClick', () => {
    const passedFunction = jest.fn();
    render(<SVGSideBar onClick={passedFunction} />);
    const sidebarSVG = screen.getByTestId("SVGSideBar");

    act(() => {
      sidebarSVG.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(passedFunction).toBeCalledTimes(1);
  });
});
