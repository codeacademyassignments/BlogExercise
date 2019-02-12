import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Header from './Component/Header/Header.Component.js';
// import Footer from './Component/Footer/Footer.Component';
// import Image from './Component/Section/Image/Image.Component';
// import ArtFooter from './Component/Section/ArtFooter/ArtFooter.Component';
// import TextContent from './Component/Section/TextContent/TextContent.Component';
// import Section from './Component/Section/Section.Component';
import Index from './Component/Index/Index.Component';


const blog = {
  "date": "2nd Januray, 2018",
  "readingTime": "2 mins",
  "title": "The future of abstract art and the culture ...",
  "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
  "claps": 10,
  "liked": true,
  "image": "abstract.png"
}
const blogs = [{
  "date": "2nd Januray, 2018",
  "readingTime": "2 mins",
  "title": "The future of abstract art and the culture ...",
  "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
  "claps": 10,
  "liked": false,
  "image": "abstract.png"
}, {
  "date": "31st Januray, 2018",
  "readingTime": "1 min",
  "title": "How painting outdoors can transform your ",
  "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
  "claps": 1,
  "liked": true,
  "image": "outdoor.png"
}, {
  "date": "20th March, 2018",
  "readingTime": "2 mins",
  "title": "10 young painters you need to know",
  "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
  "claps": 15,
  "liked": false,
  "image": "young-painters.png"
}, {
  "date": "22nd June, 2018",
  "readingTime": "5 mins",
  "title": "Tips for creating the perfect art",
  "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
  "claps": 11,
  "liked": false,
  "image": "perfect-art.png"
}, {
  "date": "4th Feburary, 2019",
  "readingTime": "9 mins",
  "title": "Stay inspired: top artists blog ...",
  "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
  "claps": 45,
  "liked": true,
  "image": "inspired.png"
}, {
  "date": "10th Januray, 2019",
  "readingTime": "2 mins",
  "title": "5 reasons why everyone should try an...",
  "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
  "claps": 11,
  "liked": false,
  "image": "reason.png"
}];
// ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Header />,document.getElementById('root'));
//ReactDOM.render(<Footer />,document.getElementById('root'));
// ReactDOM.render(<Image imageUrl='abstract.png'/>,document.getElementById('root'));
// ReactDOM.render(<Image textContent={blog}/>);
//ReactDOM.render(<Section card={blog}/>,document.getElementById('root'));
ReactDOM.render(<Index cards={blogs}/>,document.getElementById('root'));
// ReactDOM.render(<ArtFooter />,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
