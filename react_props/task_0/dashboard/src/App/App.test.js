import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component Tests', () => {

  beforeEach(() => {
    render(<App />);
  });

  it('renders without crashing', () => {
    expect(screen.getByTestId('app-container')).toBeInTheDocument();
  });

  it('should contain the Notifications component', () => {
    expect(screen.getByTestId('notifications')).toBeInTheDocument();
  });

  it('should contain the Header component', () => {
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('should contain the Login component', () => {
    expect(screen.getByTestId('login')).toBeInTheDocument();
  });

  it('should contain the Footer component', () => {
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
