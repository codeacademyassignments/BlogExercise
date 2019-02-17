import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer.component';
import Header from '../Header/Header.component';
import Section from '../Section/Section.component';
import '../index.css';

// import ReactDOM from 'react-dom';
// import RawData from '../../RawData/RawData';

class Home extends Component {
  componentDidMount() {
    const { onDataStoreComplete, onDataFetched, fetchState } = this.props;
    const createUser = axios({
      method: 'POST',
      url: 'http://localhost:3001/createPost',
      data: {
        name: 'Pulkit Agarwal',
      },
    });
    createUser.then((response) => {
      console.log(response.data);
    });
    if (!fetchState) {
      const allArticlesAsJsonArray = axios.get('https://api.myjson.com/bins/hc5ye');
      return allArticlesAsJsonArray.then((response) => {
        // console.log(response);
        onDataFetched(response.data);
        onDataStoreComplete();
      });
    }
    return {};
  }

  // const allArticlesAsJsonArray = axios.get('https://api.myjson.com/bins/hc5ye');
  // const createUser = axios({
  //   method:'POST',
  //   url: 'http://localhost:3000/createPost',
  //   data:{
  //     'name':'Pulkit Agarwal',
  //   }
  // })
  // console.log('done',createUser);
  // createUser.then((response)=>{
  //   console.log(response.data);
  // })
  // ReactDOM.render(<Header/>,document.getElementById('root'));
  // return allArticlesAsJsonArray.then((response) => {
  // console.log(response);
  //   this.setState({ blogs: response.data });
  // });
  // return createUser.then((response)=>{
  //   console.log(response.data);
  // })

  createRows = (blogs) => {
    const rows = [];
    blogs.forEach((blog, index) => {
      rows.push(<Section key={`${index}${blog.readingTime}`} index={index} blog={blog} />);
    });
    return rows;
  }

  render() {
    console.log(this.props);
    const { blogs } = this.props;
    if (blogs === undefined) return (<></>);
    return (
      <section>
        <Header />
        <section className="main-block">
          {this.createRows(blogs)}
        </section>
        <section className="main-block">
          <button className="createPost" type="submit" onClick={() => { window.location.href = 'CreatePost'; }}>Create Post</button>
        </section>
        <Footer />
      </section>
    );
  }


  // componentDidUpdate(prevProps) {
  //   console.log('component updated', prevProps);
  // }
}

Home.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      readingTime: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
      claps: PropTypes.number.isRequired,
      image: PropTypes.string,
    }),
  ),
  onDataStoreComplete: PropTypes.func.isRequired,
  onDataFetched: PropTypes.func.isRequired,
  fetchState: PropTypes.bool.isRequired,
};

Home.defaultProps = {
  blogs: [],
};


export default Home;
