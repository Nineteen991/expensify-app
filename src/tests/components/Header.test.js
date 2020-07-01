import React from 'react'
import { shallow } from 'enzyme'
// yarn add enzyme-to-json
// import toJSON from 'enzyme-to-json'
//  yarn add react-test-renderer
// import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header'

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper).toMatchSnapshot()

  // expect(wrapper.find('h1').text()).toBe('Expensify')
  // const renderer = new ReactShallowRenderer()
  // renderer.render(<Header />)
  // expect(renderer.getRenderOutput()).toMatchSnapshot()
})
