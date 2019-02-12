// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Routes from './Routes';


describe('snapshot testing', () => {
  it('snapshot should match', () => {
    const tree = shallow(Routes);
    expect(tree).toMatchSnapshot();
  });
});
