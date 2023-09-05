import React, { useState } from 'react';
import main from './Mainsection.module.css';
import Notetile from '../component/Notetile';
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const Mainsection = () => {
  let [note, setNote] = useState();

  return (
    <div className={main.webapp}>
      <div className={main.leftsection}>
        <h1 className={main.subheading}>Pocket Notes</h1>
        <div className={main.containers}>
          <button className={main.createnotebtn} onClick={1 + 1}>
            {' '}
            + Create Notes group
          </button>
          <Notetile />
          <Notetile />
          <Notetile />
          <Notetile />
          <Notetile />
        </div>
      </div>
      <div className={main.rightsection}>ab</div>
    </div>
  );
};

Mainsection.propTypes = propTypes;
Mainsection.defaultProps = defaultProps;
// #endregion

export default Mainsection;
