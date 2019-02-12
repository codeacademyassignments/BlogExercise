import React,{Component} from 'react';
import '../index.css';
import Image from './Image/Image.component';
import TextContent from './TextContent/TextContent.component';

class Section extends Component{

  state = {
    claps : this.props.blog.claps,
    liked : this.props.blog.liked,
  };

  onClapClick = ()=>{
    this.setState({
      claps: this.state.claps+1,
    })
  }

  onHeartClick = ()=>{
    this.setState({
      liked: !this.state.liked,
    })
  }
  render(){
    const textContent = {
      date: this.props.blog.date,
      readingTime: this.props.blog.readingTime,
      title: this.props.blog.title,
      description: this.props.blog.description,
      liked: this.state.liked,
      claps: this.state.claps,
    };
   return (
    <article className='article'>
    <Image imageUrl={this.props.blog.image}/>
    <TextContent textContent = {textContent} onClapClick = {this.onClapClick} onHeartClick = {this.onHeartClick}/>
    </article>
   );
  }
}

export default Section;