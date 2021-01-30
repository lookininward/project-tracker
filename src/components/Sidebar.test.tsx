import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('sidebar', () => {
  test('renders inactive sidebar when set to inactive', () => {
    render(<Sidebar isOpenSideBar={false} />);
    const sidebar = screen.getByTestId("sidebar");
    const sidebarContent = screen.queryByTestId("sidebar-content");
    expect(sidebar.classList.contains('active')).toBe(false);
    expect(sidebarContent).not.toBeInTheDocument();
  });

  test('renders active sidebar when set to active', () => {
    render(<Sidebar isOpenSideBar={true} />);
    const sidebar = screen.getByTestId("sidebar");
    const sidebarContent = screen.getByTestId("sidebar-content");
    expect(sidebar.classList.contains('active')).toBe(true);
    expect(sidebarContent).toBeInTheDocument();
  });
});
