import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UISelectUser from './UISelectUser';

describe('<UISelectUser />', () => {
  test('it should mount', () => {
    render(<UISelectUser />);
    
    const uiSelectUser = screen.getByTestId('UISelectUser');

    expect(uiSelectUser).toBeInTheDocument();
  });
});