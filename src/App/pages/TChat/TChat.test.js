import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Chat from './TChat';

describe('<TChat />', () => {
  test('it should mount', () => {
    render(<Chat />);
    
    const chat = screen.getByTestId('TChat');

    expect(chat).toBeInTheDocument();
  });
});