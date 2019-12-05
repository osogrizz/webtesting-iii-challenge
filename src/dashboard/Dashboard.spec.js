// Test away
import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Controls from '../controls/Controls'


test('cannot be closed or opened if it is locked', () => {
  const wrapper = rtl.render(<Controls />)
  const closeBtn = wrapper.getByText(/Close Gate/i);
  const lockBtn = wrapper.getByText(/Lock Gate/i);


  
  rtl.act(() => {
    rtl.fireEvent.click(closeBtn);
    rtl.fireEvent.click(lockBtn);
  })
  


  expect(wrapper.queryByText(/Unlock Gate/i));
})

