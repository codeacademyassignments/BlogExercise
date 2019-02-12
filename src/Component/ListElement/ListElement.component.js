import React from 'react';
import './ListElement.component.css';
import PropTypes from 'prop-types';

const ListElement = ({ inputType, label, placeholder }) => (
  <li className="list">
    <label className="label">{label}</label>
    <input type={inputType} className="input" placeholder={placeholder} />
  </li>
);

ListElement.propTypes = {
  inputType: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default ListElement;
