import Footer from './Footer.Component.js';
import React from 'react';
import renderer from 'react-test-renderer';

test('snapshot testing',()=>{
  const tree = renderer.create(<Footer/>);
  expect(tree).toMatchSnapshot();
});