import React from 'react';
import '../../index.css';
import PropTypes from 'prop-types';


const Image = (props) => {
  const image = require(`../../../Images/${props.imageUrl}`);
  return (
    <div className="img" style={{ backgroundImage: `url(${image})` }} />
  );
};

Image.propTypes = {
  imageUrl: PropTypes.string,
};

Image.defaultProps = {
  imageUrl: 'outdoor.png',
};

export default Image;
