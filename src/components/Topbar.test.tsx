import { render, screen } from '@testing-library/react';
import Topbar from './Topbar';

describe('topbar', () => {
  test('renders sidebar toggle and header', () => {
    render(<Topbar toggleSidebar={jest.fn()} />);
    const sidebarToggle = screen.getByTestId("SVGSideBar");
    const topbarHeader = screen.getByTestId("topbar-header");
    expect(sidebarToggle).toBeInTheDocument();
    expect(topbarHeader).toBeInTheDocument();
  });
});
