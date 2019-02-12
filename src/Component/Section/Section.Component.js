import React,{Component} from 'react';
import '../index.css';
import Image from './Image/Image.Component';
import TextContent from './TextContent/TextContent.Component';

class Section extends Component{
  state = {
    claps : this.props.card.claps,
    liked : this.props.card.liked,
  }

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
      date: this.props.card.date,
      readingTime: this.props.card.readingTime,
      title: this.props.card.title,
      description: this.props.card.description,
      liked: this.state.liked,
      claps: this.state.claps,
    };
   return (
    <article class='article'>
    <Image imageUrl={this.props.card.image}/>
    <TextContent textContent = {textContent} onClapClick = {this.onClapClick} onHeartClick = {this.onHeartClick}/>
    </article>
   );
  }
}

export default Section;