import testData from '../RawData/RawData';

const {
  addBlog, increaseClaps, toggleHeartLike, setState, initializeState, ADD_BLOG, INCREASE_CLAPS, TOGGLE_HEART_LIKE, SET_STATE, INITIALIZE_STATE,
} = require('./Artifact.actions');

describe('addBlog', () => {
  const blog = {
    title: 'Best Art',
    description: 'Top 10 things to know',
  };
  it('should return addBlog action', () => {
    expect(addBlog(blog)).toEqual({ type: ADD_BLOG, blog });
  });
  it('should not return any random action', () => {
    expect(addBlog(blog)).not.toEqual({ type: INCREASE_CLAPS, blog });
  });
});

describe('increaseClaps', () => {
  const index = 1;
  const randomClapIndex = 2;
  it('should return increaseClaps action', () => {
    expect(increaseClaps(index)).toEqual({ type: INCREASE_CLAPS, index });
  });
  it('should not return any random action', () => {
    expect(increaseClaps(index)).not.toEqual({ type: INCREASE_CLAPS, randomClapIndex });
  });
});

describe('toggleHeartLike', () => {
  const index = 1;
  const randomHeartLikeIndex = 2;
  it('should return toggleHeartLike action', () => {
    expect(toggleHeartLike(index)).toEqual({ type: TOGGLE_HEART_LIKE, index });
  });
  it('should not return any random action', () => {
    expect(toggleHeartLike(index)).not.toEqual({ type: INCREASE_CLAPS, randomHeartLikeIndex });
  });
});

describe('setState', () => {
  const randomHeartLikeIndex = 2;
  it('should return setState action', () => {
    expect(setState()).toEqual({ type: SET_STATE });
  });
  it('should not return any random action', () => {
    expect(setState()).not.toEqual({ type: INCREASE_CLAPS, randomHeartLikeIndex });
  });
});

describe('initializeState', () => {
  const randomHeartLikeIndex = 2;
  it('should return initializeState action', () => {
    expect(initializeState(testData)).toEqual({ type: INITIALIZE_STATE, blogs: testData });
  });
  it('should not return any random action', () => {
    expect(setState()).not.toEqual({ type: INCREASE_CLAPS, randomHeartLikeIndex });
  });
});
