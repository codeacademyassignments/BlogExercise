// import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import CreatePost from '../Component/CreatePost/CreatePost.component';
import Home from '../Component/Home/Home.component';
import Routes from './Routes';

const reactRouterDom = require('react-router-dom');

describe('Routes', () => {
  it('snapshot should match', () => {
    const tree = renderer.create(<Routes />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Routes', () => {
  beforeAll(() => {
    reactRouterDom.BrowserRouter = ({ children }) => (<div>{children}</div>);
  });
  it('request should redirect to Home component for route /Home ', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/Home']}>
      <Routes />
    </MemoryRouter>);
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(CreatePost)).toHaveLength(0);
  });
  it('request should redirect to Home component for any route like /Home/{anything} ', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/Home/123']}>
      <Routes />
    </MemoryRouter>);
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(CreatePost)).toHaveLength(0);
  });
  it('request should redirect to CreatePost component for route /CreatePost', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/CreatePost']}>
      <Routes />
                          </MemoryRouter>);
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(CreatePost)).toHaveLength(1);
  });

  it('request should redirect to Home component for route like /CreatePost/{anything}', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/CreatePost/other']}>
      <Routes />
                          </MemoryRouter>);
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(CreatePost)).toHaveLength(1);
  });
});
