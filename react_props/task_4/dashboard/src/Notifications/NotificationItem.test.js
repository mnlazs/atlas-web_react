import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('renders without crashing', () => {
    render(<NotificationItem type="default" value="test" />);
    // O shallow(<NotificationItem type="default" value="test" />); para Enzyme
  });

  it('renders correct html with type and value', () => {
    const { getByText } = render(<NotificationItem type="default" value="test" />);
    const item = getByText('test');
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute('data-notification-type', 'default');
  });

  it('renders correct html with dangerouslySetInnerHTML', () => {
    const html = { __html: '<u>test</u>' };
    const { container } = render(<NotificationItem html={html} />);
    expect(container.querySelector('u')).toBeInTheDocument();
  });
});
