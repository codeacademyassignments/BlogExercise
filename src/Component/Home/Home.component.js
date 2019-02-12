import React,{Component} from 'react';
import Footer from '../Footer/Footer.component';
import Header from '../Header/Header.component';
import Section from '../Section/Section.component';
import '../index.css';
import axios from 'axios';
// import ReactDOM from 'react-dom';
// import RawData from '../../RawData/RawData';

class Home extends Component{
  state={
    blogs:[],
  };
  createRows = (blogs)=>{
    const rows = [];
    blogs.forEach((blog,index)=>{
      rows.push(<Section key={`${index}${blog.readingTime}`} blog={blog}/>);
    });
    return rows;
  }
  render(){  
    return (
      <section>
      <Header/>
      <section className="main-block">
      {this.createRows(this.state.blogs)}
      </section>
      <section className="main-block">
      <button className='createPost' onClick={()=>window.location.href='CreatePost'}>Create Post</button>
      </section>
      <Footer/>
  </section>
    );
  }

  componentDidMount(){
    const dataPromise = axios.get('https://api.myjson.com/bins/hc5ye');
    // ReactDOM.render(<Header/>,document.getElementById('root'));
    return dataPromise.then((response)=>{
      //console.log(response);
      this.setState({blogs:response.data});
    })
  }
}


export default Home;