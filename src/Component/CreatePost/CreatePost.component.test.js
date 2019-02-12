// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import React from 'react';
import CreatePost from './CreatePost.component';

describe('CreatePost', () => {
  it('snapshot should match', () => {
    const tree = shallow(<CreatePost />);
    expect(tree).toMatchSnapshot();
  });
});
