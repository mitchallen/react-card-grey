import React from 'react';
import Test3 from '../src/index';
import ShallowRenderer from 'react-test-renderer/shallow';
// import chai from 'chai';
import Chai from 'chai';

var expect = Chai.expect;

describe('Test3', () => {
  // const wrapper = shallow(<Test3 />);

  const renderer = new ShallowRenderer();
  renderer.render(<Test3 />);
  const result = renderer.getRenderOutput();


  it('root element should be a div', () => {
    // expect(wrapper.type()).to.eql('div');
    expect(result.type).to.eql('div');
  });
});