import renderer from 'react-test-renderer';
import React from 'react';
import ListElement from './ListElement.component';

describe('ListElement', () => {
  it('ListElement', () => {
    const wrapper = renderer.create(<ListElement label="title" inputType="text" placeholder="enter title" for="title" />);
    expect(wrapper).toMatchSnapshot();
  });
});
