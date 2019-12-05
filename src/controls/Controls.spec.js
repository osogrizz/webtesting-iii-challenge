// Test away!
import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Controls from './Controls'

// describe('<Controls />', () => {
//   it('defaults to unlocked and open', () => {
//     const wrapper = 

//   })
//   it('cannot be closed or opened if it is locked', () => {

//   })
// })

// provide buttons to toggle the closed and locked states.
// buttons' text changes to reflect the state the door will be in if clicked
// the closed toggle button is disabled if the gate is locked
// the locked toggle button is disabled if the gate is open

test('<Controls />', () => {
  const wrapper = rtl.render(<Controls />);
  expect(wrapper).toMatchSnapshot();
})