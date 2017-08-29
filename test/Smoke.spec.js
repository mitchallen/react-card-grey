import React from 'react';
import CardGrey from '../src/index';
import ShallowRenderer from 'react-test-renderer/shallow';
// import chai from 'chai';
import Chai from 'chai';

var expect = Chai.expect;

describe('CardGrey', () => {
  // const wrapper = shallow(<Test3 />);

  const renderer = new ShallowRenderer();
  renderer.render(<CardGrey />);
  const result = renderer.getRenderOutput();


  it('root element should be a div', () => {
    // expect(wrapper.type()).to.eql('div');
    expect(result.type).to.eql('div');
  });
});