import Header from './Header.Component.js';
import renderer from 'react-test-renderer';
import React from 'react';

test('snapshot testing',()=>{
  const tree = renderer.create(<Header />);
  expect(tree).toMatchSnapshot();
});
