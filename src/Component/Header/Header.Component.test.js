import header from './Header.Component.js';
import renderer from 'react-test-renderer';
import React from 'react';

// describe('snapshot testing',()=>{})

test('snapshot testing',()=>{
  const tree = renderer.create(<header />);
  expect(tree).toMatchSnapshot();
});
