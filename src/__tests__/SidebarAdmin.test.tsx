import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import SidebarAdmin from '../widgets/Sidebar/SidebarAdmin/SidebarAdmin';
import { MemoryRouter } from 'react-router-dom';

describe('SidebarAdmin', () => {
  it('renders the dashboard title', () => {
    render(
    <MemoryRouter>
        <SidebarAdmin />
    </MemoryRouter>
    );

    const dashboardTitle = screen.getByText('Dashboard');
    expect(dashboardTitle).toBeInTheDocument();
  });

  it('renders sidebar links', () => {
    render(
    <MemoryRouter>
        <SidebarAdmin />
    </MemoryRouter>
    );
    
    const homeLink = screen.getByText('Home');
    const usersLink = screen.getByText('Users');
    const notificationLink = screen.getByText('Notification');
    const historyLink = screen.getByText('History');
    const topicLink = screen.getByText('Topic');
    const commentsLink = screen.getByText('Comments');
    const settingsLink = screen.getByText('Setting');
    const supportLink = screen.getByText('Support');
    const privacyLink = screen.getByText('Privacy');

    expect(homeLink).toBeInTheDocument();
    expect(usersLink).toBeInTheDocument();
    expect(notificationLink).toBeInTheDocument();
    expect(historyLink).toBeInTheDocument();
    expect(topicLink).toBeInTheDocument();
    expect(commentsLink).toBeInTheDocument();
    expect(settingsLink).toBeInTheDocument();
    expect(supportLink).toBeInTheDocument();
    expect(privacyLink).toBeInTheDocument();
  });
});