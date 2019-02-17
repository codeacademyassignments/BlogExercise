import React from 'react';
import '../../index.css';

const ArtFooter = (props) => {
  const heartUrl = props.liked ? 'heart-red.svg' : 'heart-black.svg';
  console.log(props);
  return (
    <>
      <img
        src={require('../../../Icons/clapping.svg')}
        alt="clapping"
        className="claps"
        onClick={(event) => { props.onClapClick(); }}
      />
      <span className="no-of-claps">{props.claps}</span>
      <img
        src={require(`../../../Icons/${heartUrl}`)}
        alt="heart-black"
        className="heart"
        onClick={() => {
          props.onHeartClick();
        }}
      />
    </>
  );
};

export default ArtFooter;
