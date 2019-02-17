import { connect } from 'react-redux';
import { addBlog } from '../Actions/Artifact.actions';
import CreatePost from '../Component/CreatePost/CreatePost.component';


function mapDispatchToProps(dispatch) {
  return ({
    onCreatePost: (blog) => {
      dispatch(addBlog(blog));
    },
  });
}

const createPostApp = connect({
  mapDispatchToProps,
})(CreatePost);


export default createPostApp;
