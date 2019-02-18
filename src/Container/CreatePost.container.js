import { connect } from 'react-redux';
import { addBlog } from '../Actions/Artifact.actions';
import CreatePost from '../Component/CreatePost/CreatePost.component';

// const mapStateToProps = state => ({
//   nothing: 1,
// });
console.log('inside');
const mapDispatchToProps = dispatch => ({
  onCreatePost: (blog) => {
    dispatch(addBlog(blog));
  },
});

const createPostApp = connect({
  // mapStateToProps,
  mapDispatchToProps,
})(CreatePost);


export default createPostApp;
