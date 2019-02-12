import React from 'react';
import '../../index.css';
import ArtFooter from '../ArtFooter/ArtFooter.Component';

const TextSection = (props)=>{
  return (
    <section class = "desc">
    <span className="left-caption">{props.textContent.date}</span>
    <span className="right-caption">{props.textContent.readingTime}</span>
    <br/>
    <p className="title">{props.textContent.title} </p>
    <p className="details">{props.textContent.description}</p>
    <hr/>
    <ArtFooter liked={props.textContent.liked} claps={props.textContent.claps} onClapClick={props.onClapClick} onHeartClick={props.onHeartClick}/>
    </section>
  )
}

export default TextSection;