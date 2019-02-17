import { combineReducers } from 'redux';

const {
  ADD_BLOG, INCREASE_CLAPS, TOGGLE_HEART_LIKE, SET_STATE, INITIALIZE_STATE,
} = require('../Actions/Artifact.actions');

const fetchState = (state = false, action) => {
  switch (action.type) {
    case SET_STATE:
      return !state;
    default:
      return state;
  }
};

const blogs = (state = [], action) => {
  switch (action.type) {
    case INITIALIZE_STATE:
      return action.blogs;
    case ADD_BLOG:
      return [
        ...state,
        action.blog,
      ];
    case INCREASE_CLAPS:
      return state.map((blog, index) => {
        // console.log('index to operate', index);
        if (index === action.index) {
          return Object.assign({}, blog, { claps: (blog.claps + 1) });
        }
        return blog;
      });
    case TOGGLE_HEART_LIKE:
      return state.map((blog, index) => {
        if (index === action.index) {
          return Object.assign({}, blog, { liked: !blog.liked });
        }
        return blog;
      });
    default:
      return state;
  }
};

const artifactApp = combineReducers({
  fetchState,
  blogs,
});

export default artifactApp;
