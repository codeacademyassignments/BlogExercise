import React from 'react';
import renderer from 'react-test-renderer';
import ArtFooter from './ArtFooter.Component';
import {shallow} from 'enzyme';


describe('snapshot test',()=>{
  it('snapshot should match',()=>{
    const tree = renderer.create(<ArtFooter liked={true} claps={10}/>);
    expect(tree).toMatchSnapshot();
  })
})

describe('mock function',()=>{
  const onClapClickMock = jest.fn();
  const onHeartClickMock = jest.fn();
  const wrapper = shallow(<ArtFooter liked={true} claps = {2} onClapClick={onClapClickMock} onHeartClick={onHeartClickMock}/>)
  it('should call onClapClickMock when clap clicked',()=>{
    wrapper.find('.claps').simulate('click');
    expect(onClapClickMock).toHaveBeenCalledWith();
    expect(onClapClickMock).toHaveBeenCalledTimes(1);
  })
  it('should call onHeartClickMock when clap clicked',()=>{
    wrapper.find('.heart').simulate('click');
    expect(onHeartClickMock).toHaveBeenCalledWith();
    expect(onHeartClickMock).toHaveBeenCalledTimes(1);
  })
})