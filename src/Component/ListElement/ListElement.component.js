import React from 'react';
import './ListElement.component.css';
import PropTypes from 'prop-types';

const ListElement = ({
  inputType, label, placeholder, name, onChange,
}) => (
  <li className="list">
    <label className="label">{label}</label>
    <input type={inputType} className="input" placeholder={placeholder} onChange={(event) => { console.log(event.target.value); onChange(event, name) ;}} />
  </li>
);

ListElement.propTypes = {
  inputType: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default ListElement;
