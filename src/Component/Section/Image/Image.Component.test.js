import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Image from './Image.component';

const imageName = 'outdoor.png';

describe('Image', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Image imageUrl={imageName} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Image', () => {
  const wrapper = shallow(<Image imageUrl={imageName} />);
  it('should set the background attribute of div to correct value', () => {
    expect(wrapper.find('.img').prop('style')).toHaveProperty('backgroundImage', `url(${imageName})`);
  });
});
