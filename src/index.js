import ReactDOM from 'react-dom';
import './index.css';
import React from 'react';
import * as serviceWorker from './serviceWorker';
import Routes from './Routes/Routes';

// import Header from './Component/Header/Header.Component.js';
// import Footer from './Component/Footer/Footer.Component';
// import Image from './Component/Section/Image/Image.Component';
// import ArtFooter from './Component/Section/ArtFooter/ArtFooter.Component';
// import TextContent from './Component/Section/TextContent/TextContent.Component';
// import Section from './Component/Section/Section.Component';
// import Home from './Component/Home/Home.component';
// import ListElement from './Component/ListElement/ListElement.Component';
// import CreatePost from './Component/CreatePost/CreatePost.Component';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


ReactDOM.render(<Routes />, document.getElementById('root'));
// const store = createStore(artifactApp);

// ReactDOM.render(
//   <Provider store={store}>
//     <HomeContainer />
//   </Provider>,
//   document.getElementById('root'),
// );
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Header />,document.getElementById('root'));
// ReactDOM.render(<Footer />,document.getElementById('root'));
// ReactDOM.render(<Image imageUrl='abstract.png'/>,document.getElementById('root'));
// ReactDOM.render(<Image textContent={blog}/>);
// ReactDOM.render(<Section card={blog}/>,document.getElementById('root'));
// ReactDOM.render(<Home cards={blogs}/>,document.getElementById('root'));
// ReactDOM.render(<ListElement label='title' inputType='text' placeholder='enter title' for='title'/>,document.getElementById('root'));
// ReactDOM.render(<CreatePost/>,document.getElementById('root'));
// ReactDOM.render(<ArtFooter />,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
