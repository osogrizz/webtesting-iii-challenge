// Test away!
import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Display from './Display'

// displays if gate is open/closed and if it is locked/unlocked
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



// displays 'Closed' if the closed prop is true and 'Open' if otherwise

test(`displays 'Closed' if the prop is true`, () => {
  const { getByText } = rtl.render(<Display closed={true} />);

  expect(getByText(/Closed/i)).toBeVisible()
})
test(`displays'Open if the closed prop is false'`, () => {
  const { getByText } = rtl.render(<Display closed={false} />);

  expect(getByText(/Open/i)).toBeVisible()
})

// displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
test(`displays 'Locked' if the locked prop is true`, () => {
  const { getByText } = rtl.render(<Display locked={true} />);

  expect(getByText(/Locked/i)).toBeVisible()
})
test(`displays 'Unocked' if the locked prop is false`, () => {
  const { getByText } = rtl.render(<Display locked={false} />);

  expect(getByText(/Unlocked/i)).toBeVisible()
})
// when locked or closed use the red-led class

test('when closed or locked use the red-led class', () => {
  const { getByText } = rtl.render(<Display closed={true} locked={true} />);

  expect(getByText(/Closed/i)).toHaveClass('red-led');
  expect(getByText(/Locked/i)).toHaveClass('red-led');
})

// when unlocked or open use the green-led class

test('when closed or locked use the red-led class', () => {
  const { getByText } = rtl.render(<Display closed={false} locked={false} />);

  expect(getByText(/Open/i)).toHaveClass('green-led');
  expect(getByText(/Unlocked/i)).toHaveClass('green-led');
})
