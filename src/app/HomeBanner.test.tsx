import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { HomeBanner } from './HomeBanner';

test('home', () => {
  render(<HomeBanner />);
  expect(screen.getByText('Welcome to our site!')).toBeTruthy();
});
