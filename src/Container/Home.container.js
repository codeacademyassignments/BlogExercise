import { connect } from 'react-redux';
import Home from '../Component/Home/Home.component';
import { setState, initializeState } from '../Actions/Artifact.actions';


const mapStateToProps = state => ({
  blogs: state.blogs,
  fetchState: state.fetchState,
});

const mapDispatchToProps = dispatch => ({
  onDataFetched: (blogs) => {
    // blogs.forEach((blog) => {
    //   dispatch(addBlog(blog));
    // });
    dispatch(initializeState(blogs));
  },
  onDataStoreComplete: () => {
    dispatch(setState());
  },
});
const Blogs = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default Blogs;
