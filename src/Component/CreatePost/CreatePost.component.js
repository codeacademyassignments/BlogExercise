import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './CreatePost.component.css';
import ListElement from '../ListElement/ListElement.component';

class CreatePost extends Component {
  state = {
    date: '',
    readingTime: '',
    title: '',
    description: '',
  }


  onChange = (event, attributeName) => {
    // console.log(this.onSubmit);
    // console.log(event, attributeName);
    this.setState({ [attributeName]: event.target.value });
    console.log(this.state);
  }

  onSubmit = async () => {
    console.log(this.state);
    if (Object.values(this.state).every(value => value !== '')) {
      const createBlog = await axios({
        method: 'POST',
        url: 'http://localhost:3001/createPost',
        data: this.state,
      });
      this.props.onCreatePost(createBlog.data);
      alert(createBlog.data);
      window.location.href = '/Home';
    } else {
      alert('please fill all fields');
    }
  }

  render() {
    return (
      <form>
        <ul className="flex-outer">
          <ListElement label="Date" inputType="text" placeholder="Date of Blog" name="date" onChange={this.onChange} />
          <ListElement label="Reading Time" inputType="text" placeholder="Reading Time for Blog" name="readingTime" onChange={this.onChange} />
          <ListElement label="Title" inputType="text" placeholder="Title for Blog" name="title" onChange={this.onChange} />
          <ListElement label="Description" inputType="text" placeholder="Description for Blog" name="description" onChange={this.onChange} />
          <li>
            <button type="button" className="button" onClick={() => { this.onSubmit(); }}>Create Post</button>
          </li>
        </ul>
      </form>
    );
  }
}
CreatePost.propTypes = {
  onCreatePost: PropTypes.func.isRequired,
};
export default CreatePost;
