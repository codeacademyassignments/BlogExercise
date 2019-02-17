import React from 'react';
import renderer from 'react-test-renderer';
import TextContent from './TextContent.component';
import TestData from '../../../RawData/RawData';

const blog = TestData[0];

describe('TextContent', () => {
  it('snapshot should match', () => {
    const tree = renderer.create(<TextContent textContent={blog} onClapClick={jest.fn()} onHeartClick={jest.fn()} />);
    expect(tree).toMatchSnapshot();
  });
});

// describe('ArtFooter', () => {
//   const mockOnClapClick = jest.fn();
//   const mockOnHeartClick = jest.fn();
//   const wrapper = shallow(<TextContent textContent={blog} onClapClick={mockOnClapClick} onHeartClick={mockOnHeartClick} />);
//   it('should have the mockOnClapClick function as onClapClick props', () => {
//     expect(wrapper.find('ArtFooter').props().onClapClick).toEqual(mockOnClapClick);
//   });
//   it('should have the mockOnHeartClick function as onHeartClick props', () => {
//     expect(wrapper.find('ArtFooter').props().onHeartClick).toEqual(mockOnHeartClick);
//   });
// });
