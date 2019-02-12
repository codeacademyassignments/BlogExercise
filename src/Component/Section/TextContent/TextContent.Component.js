import React from 'react';
import '../../index.css';
import PropTypes from 'prop-types';
import ArtFooter from '../ArtFooter/ArtFooter.component';

const TextSection = ({ textContent, onClapClick, onHeartClick }) => (
  <section className="desc">
    <span className="left-caption">{textContent.date}</span>
    <span className="right-caption">{textContent.readingTime}</span>
    <br />
    <p className="title">
      {textContent.title}
      {' '}
    </p>
    <p className="description">{textContent.description}</p>
    <hr />
    <ArtFooter liked={textContent.liked} claps={textContent.claps} onClapClick={onClapClick} onHeartClick={onHeartClick} />
  </section>
);

TextSection.propTypes = {
  onClapClick: PropTypes.func.isRequired,
  onHeartClick: PropTypes.func.isRequired,
  textContent: PropTypes.shape({
    date: PropTypes.string.isRequired,
    readingTime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,

};
export default TextSection;
