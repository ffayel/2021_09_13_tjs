import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UIMessage from './UIMessage';

describe('<UIMessage />', () => {
  test('it should mount', () => {
    render(<UIMessage />);
    
    const uiMessage = screen.getByTestId('UIMessage');

    expect(uiMessage).toBeInTheDocument();
  });
});