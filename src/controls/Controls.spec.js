// Test away!
import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Controls from './Controls'
// import Dashboard from '../dashboard/Dashboard';




// provide buttons to toggle the closed and locked states.

test('button to toggle closed states', () => {
  const toggleClosedMock = jest.fn();
  const { getByText } =  rtl.render(<Controls toggleClosed={toggleClosedMock} />);

  const toggleBtn = getByText(/Close Gate/i);
  rtl.fireEvent.click(toggleBtn);

  expect(toggleClosedMock).toHaveBeenCalled();
})

test('button to toggle locked states', () => {
  const toggleLockedMock = jest.fn();
  const { getByText } = rtl.render(<Controls closed={true} toggleLocked={toggleLockedMock} />);

  const toggleBtn = getByText(/Lock Gate/i);
  rtl.fireEvent.click(toggleBtn);

  expect(toggleLockedMock).toHaveBeenCalled()
})

// buttons' text changes to reflect the state the door will be in if clicked
test('button text changes to reflect state when closed is clicked (true)', () => {
  // const closeBtnMock = jest.fn();
  const { getByText } = rtl.render(<Controls closed={true}/>)

  expect(getByText(/Open Gate/i)).toBeVisible();
  expect(getByText(/Lock Gate/i)).toBeVisible();
})

test('button text changes to reflect state when closed and locked are clicked (true)', () => {
  const { getByText } = rtl.render(<Controls closed={true} locked={true}  />)

  expect(getByText(/Unlock Gate/i)).toBeVisible();
  expect(getByText(/Open Gate/i)).toBeVisible();
})

// the closed toggle button is disabled if the gate is locked

test('closed toggle button is disabled if the gate is locked', () => {
  const { getByText } = rtl.render(<Controls closed={true} locked={true} />)

  expect(getByText(/Open Gate/i)).toHaveProperty('disabled');
})

// the locked toggle button is disabled if the gate is open

test('the locked toggle button is disabled if the gate is open', () => {
  const { getByText } = rtl.render(<Controls closed={false} />);

  expect(getByText(/Lock Gate/i)).toHaveProperty('disabled');
})

// cannot be closed or opened if it is locked

test('cannot be closed or open if locked',  () => {
  const { getByText } = rtl.render(<Controls closed={true} locked={true} />)

  expect(getByText(/Open Gate/i)).toHaveProperty('disabled');

})