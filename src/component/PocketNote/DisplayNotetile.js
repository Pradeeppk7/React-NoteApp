import React from 'react';
import display from './Pocketnote.module.css';
import Moment from 'react-moment';
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

/**
 *
 */
const DisplayNotetile = ({ data }) => {
  return (
    <div className={display.datatile}>
      <div className={display.leftsection}>
        <h2>{data.time}</h2>
        <h2>{data.date}</h2>
      </div>
      <div className={display.rightsection}>
        <p id={display.content}>{data.content}</p>
      </div>
    </div>
  );
};

export default DisplayNotetile;
