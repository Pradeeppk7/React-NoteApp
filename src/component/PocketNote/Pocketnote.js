import React from 'react';
import note from './Pocketnote.module.css';
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
const Pocketnote = () => {
  return (
    <div className={note.section}>
      <div className={note.layer}>
        <div className={note.heading}>
          <div className={note.displayname}>
            <h2>WD</h2>
          </div>
            <div className={note.title}><h2>Cuvette note</h2></div>
        </div>
        <div className={note.noterack}>notes component</div>
        <div className={note.textarea}></div>
      </div>
    </div>
  );
};

Pocketnote.propTypes = propTypes;
Pocketnote.defaultProps = defaultProps;
// #endregion

export default Pocketnote;
