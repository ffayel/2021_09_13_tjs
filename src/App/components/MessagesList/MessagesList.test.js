import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MessageList from './MessagesList';

describe('<MessagesList />', () => {
  test('it should mount', () => {
    render(<MessageList />);
    
    const MessageList = screen.getByTestId('MessagesList');

    expect(MessageList).toBeInTheDocument();
  });
});