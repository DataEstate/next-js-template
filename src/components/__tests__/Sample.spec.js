import React from 'react';
import { render, screen } from '@testing-library/react';
import Sample from '../Sample';

describe('components/Sample', () => {
  it('can display a heading and content', () => {
    render(<Sample />);
    expect(screen.getByRole('heading', { name: 'Sample' })).toBeInTheDocument();
    expect(screen.getByText('This is a sample component')).toBeInTheDocument();
  });
});
