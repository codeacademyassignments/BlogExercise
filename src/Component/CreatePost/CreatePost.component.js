import React from 'react';
import './CreatePost.component.css';
import ListElement from '../ListElement/ListElement.component';

const CreatePost = () => (
  <form>
    <ul className="flex-outer">
      <ListElement label="Date" inputType="text" placeholder="Date of Blog" />
      <ListElement label="Reading Time" inputType="text" placeholder="Reading Time for Blog" />
      <ListElement label="Title" inputType="text" placeholder="Title for Blog" />
      <ListElement label="Description" inputType="text" placeholder="Description for Blog" />
      <li>
        <button type="button" className="button" onClick={() => { window.location.href = 'Home'; }}>Create Post</button>
      </li>
    </ul>
  </form>
);

export default CreatePost;
