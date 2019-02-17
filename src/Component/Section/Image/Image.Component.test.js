import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Image from './Image.component';

const imageName = 'outdoor.png';

describe('Image Component', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Image imageUrl={imageName} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Image Component', () => {
  it('should set the backgroundImage attribute of div to correct value', () => {
    const wrapper = shallow(<Image imageUrl={imageName} />);
    expect(wrapper.find('.img').prop('style')).toHaveProperty('backgroundImage', `url(${imageName})`);
  });
  it('should set the backgroundImage attribute of div to default value when no imageUrl passed', () => {
    const wrapper = shallow(<Image />);
    const defaultImage = 'outdoor.png';
    expect(wrapper.find('.img').prop('style')).toHaveProperty('backgroundImage', `url(${defaultImage})`);
  });
});
