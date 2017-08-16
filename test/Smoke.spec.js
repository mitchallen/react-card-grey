import React from 'react';
import CardGrey from '../src/index';

describe('CardGrey', () => {
  const wrapper = shallow(<CardGrey />);

  it('root element should be a div', () => {
    expect(wrapper.type()).to.eql('div');
  });
});