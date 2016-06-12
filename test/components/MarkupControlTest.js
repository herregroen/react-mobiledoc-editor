import React from 'react';
import MarkupControl from '../../src/components/MarkupControl';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow } from 'enzyme';

describe('<MarkupControl />', () => {
  const button = <button>A</button>;

  it('should render a button by default', () => {
    const wrapper = shallow(<MarkupControl tag="A" />);
    expect(wrapper.containsMatchingElement(button)).to.be.true;
  });

  it('should render children', () => {
    const wrapper = shallow(<MarkupControl>{button}</MarkupControl>);
    expect(wrapper.containsMatchingElement(button)).to.be.true;
  });

  it('should toggle markup on click', () => {
    const editor = { toggleMarkup: spy() };
    const wrapper = shallow(<MarkupControl editor={editor} tag='A'><button /></MarkupControl>);
    wrapper.find('button').simulate('click');
    expect(editor.toggleMarkup).calledWith('A');
  });

  it('should set active class', () => {
    const context = {activeMarkupTags: ['a']};
    const wrapper = shallow(<MarkupControl tag='A'><button className="keep" /></MarkupControl>, {context});
    expect(wrapper).to.have.className('keep');
    expect(wrapper).to.have.className('active');
  });
});