import React from 'react';
import tile from './Notetile.module.css';
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
const Notetile = () => {
  return (
    <div className={tile.tile}>
      <div className={tile.shorthand}>
        <h2>CU</h2>{' '}
      </div>
      <div className={tile.noteheading}>
        {' '}
        <h2>Cuvettee notes</h2>
      </div>
    </div>
  );
};

Notetile.propTypes = propTypes;
Notetile.defaultProps = defaultProps;
// #endregion

export default Notetile;
