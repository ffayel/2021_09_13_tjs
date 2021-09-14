import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UIUser from './UIUser';

describe('<UIUser />', () => {
  test('it should mount', () => {
    render(<UIUser />);
    
    const uiUser = screen.getByTestId('UIUser');

    expect(uiUser).toBeInTheDocument();
  });
});