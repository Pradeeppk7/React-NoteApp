import React from 'react';
import main from './Mainsection.module.css';
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
    return <div className={main.webapp}>
        <div className={main.leftsection}>
            <h1 className={main.subheading}>
            Pocket Notes
            </h1>
            <div className={main.containers}>
                <button className={main.createnotebtn}> + Create Notes group</button>
                
            </div>
        </div>
        <div className={main.rightsection}>ab</div>
    </div>;
};

Mainsection.propTypes = propTypes;
Mainsection.defaultProps = defaultProps;
// #endregion

export default Mainsection;
