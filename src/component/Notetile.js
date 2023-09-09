import React from 'react';
import tile from './Notetile.module.css';
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

/**
 *
 */

const Notetile = ({ title }) => {
  
  const capitalizeFirst = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
 
  const getFirstLetters = str => {
    const firstLetters = str
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .slice(0,2)
      .toUpperCase();
  
    return firstLetters;
  }
  

  return (
    <div className={tile.tile} >
      <div className={tile.shorthand} style={{ backgroundColor: title[0].bgcolor }}>
        <h2>{getFirstLetters(title[0].name)}</h2>{' '}
      </div>
      <div className={tile.noteheading}>
        {' '}
        {title.length > 0 ? <h2>{capitalizeFirst(title[0].name)}</h2> : <p>loading</p>}
      </div>
    </div>
  );
};

// #endregion

export default Notetile;
