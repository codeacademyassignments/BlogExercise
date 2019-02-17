import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import Image from './Image/Image.component';
import TextContent from './TextContent/TextContent.component';

class Section extends Component {
  // state = {
  //   claps: this.props.blog.claps,
  //   liked: this.props.blog.liked,
  // };

  // onClapClick = () => {
  //   this.setState({
  //     claps: this.state.claps + 1,
  //   });
  // }

  // onHeartClick = () => {
  //   this.setState({
  //     liked: !this.state.liked,
  //   });
  // }

  render() {
    const textContent = {
      date: this.props.blog.date,
      readingTime: this.props.blog.readingTime,
      title: this.props.blog.title,
      description: this.props.blog.description,
      liked: this.props.blog.liked,
      claps: this.props.blog.claps,
    };
    return (
      <article className="article">
        <Image imageUrl={this.props.blog.image} />
        <TextContent textContent={textContent} index={this.props.index} />
      </article>
    );
  }
}

Section.propTypes = {
  blog: PropTypes.shape({
    image: PropTypes.string,
    date: PropTypes.string.isRequired,
    readingTime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    claps: PropTypes.number.isRequired,
  }),
  index: PropTypes.number.isRequired,
};

Section.defaultProps = {
  blog: {
    image: 'outdoor.png',
  },
};

export default Section;
