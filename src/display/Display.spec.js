// Test away!
import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Display from './Display'

// defaults to unlocked and open

test('defaults to unlocked', () => {
  const wrapper = rtl.render(<Display />);
  const element = wrapper.getByText(/unlocked/i);
  expect(element).toBeVisible();
})

test('defaults to open', () => {
  const wrapper = rtl.render(<Display />);
  const element = wrapper.getByText(/open/i);
  expect(element).toBeVisible();
})