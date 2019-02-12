import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer.component';

test('Footer', () => {
  const tree = renderer.create(<Footer />);
  expect(tree).toMatchSnapshot();
});
