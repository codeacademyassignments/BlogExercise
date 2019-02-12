import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Section from './Section.component';
import TestData from '../../RawData/RawData';

const blog = TestData[0];
describe('Section', () => {
  it('snapshot should match', () => {
    const tree = renderer.create(<Section blog={blog} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('onClapClick', () => {
  const wrapper = shallow(<Section blog={blog} />);
  it('should increment claps in state by 1 when called', () => {
    const prevClaps = wrapper.instance().state.claps;
    wrapper.instance().onClapClick();
    expect(wrapper.instance().state.claps).toEqual(prevClaps + 1);
  });
});

describe('onHeartClick', () => {
  const wrapper = shallow(<Section blog={blog} />);
  it('should complement the liked value of state when clicked', () => {
    const prevLiked = wrapper.instance().state.liked;
    wrapper.instance().onHeartClick();
    expect(wrapper.instance().state.liked).toEqual(!prevLiked);
  });
});
