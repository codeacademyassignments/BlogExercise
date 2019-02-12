import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Section from './Section.Component';
import { wrap } from 'module';

const card = {
  "date": "2nd Januray, 2018",
  "readingTime": "2 mins",
  "title": "The future of abstract art and the culture ...",
  "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
  "claps": 10,
  "liked": false,
  "image": "abstract.png"
};
describe('snapshot testing',()=>{
  it('snapshot should match',()=>{
    const tree = renderer.create(<Section card={card}/>);
    expect(tree).toMatchSnapshot();
  })
})

describe('onClapClick',()=>{
  const wrapper = shallow(<Section card={card}/>)
  it('should increment claps in state by 1 when called',()=>{
    const prevClaps = wrapper.instance().state.claps;
    wrapper.instance().onClapClick();
    expect(wrapper.instance().state.claps).toEqual(prevClaps+1);
  })
})

describe('onHeartClick',()=>{
  const wrapper = shallow(<Section card={card}/>);
  it('should complement the liked value of state when clicked',()=>{
    const prevLiked = wrapper.instance().state.liked;
    wrapper.instance().onHeartClick();
    expect(wrapper.instance().state.liked).toEqual(!prevLiked);
  })
})