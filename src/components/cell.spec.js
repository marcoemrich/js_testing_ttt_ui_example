import * as R from 'ramda'
import React from 'react'
import { shallow, mount } from 'enzyme';

import {Cell} from './cell';

describe('Cell', () => {
  it('should render with a button with owner', () => {
    const wrapper = shallow(<Cell owner="X"/>);

    expect(wrapper.find('button').text()).toEqual('X');
  });

  it('should render with a button the given cellNr', () => {
    const wrapper = mount(<Cell cellNr={5} />);

    expect(wrapper.find('button').prop('data-cell-nr')).toEqual(5);
  });

  it('should call onClick handler', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Cell onClick={handler}/>);
    wrapper.find('button').simulate('click');
    expect(handler).toBeCalled();
  })
});

