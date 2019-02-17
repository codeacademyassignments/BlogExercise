export const TOGGLE_HEART_LIKE = 'TOGGLE_HEART_LIKE';
export const INCREASE_CLAPS = 'INCREASE_CLAPS';
export const ADD_BLOG = 'ADD_BLOG';
export const SET_STATE = 'SET_STATE';
export const INITIALIZE_STATE = 'INITIALIZE_STATE';


export const addBlog = blog => ({ type: ADD_BLOG, blog });
export const increaseClaps = index => ({ type: INCREASE_CLAPS, index });
export const toggleHeartLike = index => ({ type: TOGGLE_HEART_LIKE, index });
export const setState = () => ({ type: SET_STATE });
export const initializeState = blogs => ({ type: INITIALIZE_STATE, blogs });
