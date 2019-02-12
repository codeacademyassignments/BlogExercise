import React from 'react';
import renderer from 'react-test-renderer';
import Image from './Image.Component';
import {shallow} from 'enzyme';

describe('snapshot testing',()=>{
  it('should match the snapshot',()=>{
  const tree = renderer.create(<Image imageUrl='outdoor.png'/>);
  expect(tree).toMatchSnapshot();
  });
})

describe('style attributes',()=>{
  const wrapper = shallow(<Image imageUrl={'outdoor.png'}/>);
  it('should set the component attribute to correct value',()=>{
    expect(wrapper.find('.img').prop('style')).toHaveProperty('backgroundImage','url(outdoor.png)');
  })
})