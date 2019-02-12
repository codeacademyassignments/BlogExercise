import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ArtFooter from './ArtFooter.component';


describe('ArtFooter', () => {
  it('snapshot should match', () => {
    const tree = renderer.create(<ArtFooter liked claps={10} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('mock function', () => {
  const onClapClickMock = jest.fn();
  const onHeartClickMock = jest.fn();
  const wrapper = shallow(<ArtFooter liked claps={2} onClapClick={onClapClickMock} onHeartClick={onHeartClickMock} />);
  it('should call onClapClickMock when clap clicked', () => {
    wrapper.find('.claps').simulate('click');
    expect(onClapClickMock).toHaveBeenCalledWith();
    expect(onClapClickMock).toHaveBeenCalledTimes(1);
  });
  it('should call onHeartClickMock when clap clicked', () => {
    wrapper.find('.heart').simulate('click');
    expect(onHeartClickMock).toHaveBeenCalledWith();
    expect(onHeartClickMock).toHaveBeenCalledTimes(1);
  });
});
