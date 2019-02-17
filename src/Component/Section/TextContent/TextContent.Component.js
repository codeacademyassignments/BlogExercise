import React from 'react';
import '../../index.css';
import PropTypes from 'prop-types';
// import ArtFooter from '../ArtFooter/ArtFooter.component';
import ArtFooter from '../../../Container/ArtFooter.container';

const TextSection = ({ textContent, index }) => (
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
    <ArtFooter liked={textContent.liked} claps={textContent.claps} index={index} />
  </section>
);

TextSection.propTypes = {
  textContent: PropTypes.shape({
    date: PropTypes.string.isRequired,
    readingTime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
export default TextSection;
