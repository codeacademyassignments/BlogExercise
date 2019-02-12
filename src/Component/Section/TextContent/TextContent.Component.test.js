import React from 'react';
import renderer from 'react-test-renderer';
import TextContent from './TextContent.Component';
import {shallow} from 'enzyme';

const blog = {
  "date": "2nd Januray, 2018",
  "readingTime": "2 mins",
  "title": "The future of abstract art and the culture ...",
  "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
  "claps": 10,
  "liked": false,
}
describe('snapshot testing',()=>{
  it('snapshot should match',()=>{
    const tree = renderer.create(<TextContent textContent={blog} onClapClick={jest.fn()} onHeartClick={jest.fn()}/>);
    expect(tree).toMatchSnapshot();
  })
})

describe('ArtFooter',()=>{
  const mockOnClapClick = jest.fn();
  const mockOnHeartClick = jest.fn();
  const wrapper = shallow(<TextContent textContent={blog} onClapClick={mockOnClapClick} onHeartClick={mockOnHeartClick}/>);
  it('should have the mockOnClapClick function as onClapClick props',()=>{
    expect(wrapper.find('ArtFooter').props().onClapClick).toEqual(mockOnClapClick);
  })
  it('should have the mockOnHeartClick function as onHeartClick props',()=>{
    expect(wrapper.find('ArtFooter').props().onHeartClick).toEqual(mockOnHeartClick);
  })
})