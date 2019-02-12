import renderer from 'react-test-renderer';
import React from 'react';
import Header from './Header.component';

test('Header', () => {
  const tree = renderer.create(<Header />);
  expect(tree).toMatchSnapshot();
});
