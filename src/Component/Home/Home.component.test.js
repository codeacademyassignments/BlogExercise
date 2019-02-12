import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import renderer from 'react-test-renderer';
import Home from './Home.component';
import testData from '../../RawData/RawData';

let mockAxios;
beforeAll(() => {
  mockAxios = jest.fn().mockImplementation(() => new Promise(((resolve) => { resolve({ data: testData }); })));
  axios.get = mockAxios;
});
afterAll(() => {
  jest.resetModules();
});

describe('Home', () => {
  it('snapshot should match', () => {
    const tree = renderer.create(<Home />);
    expect(tree).toMatchSnapshot();
  });
});

describe('componentDidMount', () => {
  it('should call mock function with proper arguements', async (done) => {
    const wrapper = shallow(<Home />);
    await wrapper.instance().componentDidMount();
    expect(mockAxios).toHaveBeenCalledWith('https://api.myjson.com/bins/hc5ye');
    done();
  });

  it('should update the state of Home component', async (done) => {
    const wrapper = shallow(<Home />);
    expect(wrapper.instance().state.blogs.length).toEqual(0);
    await wrapper.instance().componentDidMount();
    // console.log(wrapper.instance());
    expect(wrapper.instance().state.blogs.length).toEqual(6);
    done();
  });

  it('Snapshot should match', () => {
    const tree = renderer.create(<Home />);
    expect(tree).toMatchSnapshot();
  });
});
