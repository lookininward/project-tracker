import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Topbar } from './Topbar';

describe('topbar', () => {
  test('renders sidebar toggle and header', () => {
    render(
      <MemoryRouter>
        <Topbar />
      </MemoryRouter>
    );
    const sidebarToggle = screen.getByTestId("SVGSideBar");
    const topbarHeader = screen.getByTestId("topbar-header");
    expect(sidebarToggle).toBeInTheDocument();
    expect(topbarHeader).toBeInTheDocument();
  });
});
