import React, { useEffect, useState } from 'react';
import main from './Mainsection.module.css';
import Notetile from '../component/Notetile';
import Popup from 'reactjs-popup';
import Pocketnote from '../component/PocketNote/Pocketnote';
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
const Mainsection = () => {
  let [groupNames, setGroupNames] = useState([]);
  let [grouptittle, setGrouptittles] = useState([]);
  let [input, setInput] = useState('');
  let [color, setColor] = useState('');
  let [pop, setPop] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('groupNames');
    if (data) {
      setGroupNames(JSON.parse(data));
    } else {
      setGroupNames([]);
    }
  }, []);

  useEffect(() => {
    if (groupNames.length > 0) {
      const obj = JSON.parse(localStorage.getItem('groupNames'));
      const result = Object.keys(obj).map((key) => [obj[key]]);
      setGrouptittles(result);
      console.log(result);
      console.log(groupNames);
    }
  }, [groupNames]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const settingColor = (e) => {
    setColor(e.target.value);
  };

  const handleCreate = () => {
    let newdata = { name: input, bgcolor: color };
    setGroupNames([...groupNames, newdata]);
    localStorage.setItem(
      'groupNames',
      JSON.stringify([...groupNames, newdata])
    );
    setInput('');
    setColor('');
    handleclosepopup();
  };

  const handleclosepopup = () => {
    console.log('false');
    setPop(false);
  };
  const handlepopup = () => {
    console.log('true');
    setPop(true);
  };

  return (
    <div className={main.webapp}>
      <div className={main.leftsection}>
        <h1 className={main.subheading}>Pocket Notes</h1>
        <div className={main.containers}>
          <Popup
            trigger={
              <div>
                <button className={main.createnotebtn} onClick={handlepopup}>
                  {' '}
                  + Create Notes group
                </button>
              </div>
            }
            open={pop}
            position=" center"
          >
            {(close = pop) => (
              <div className={main.popup}>
                <h2 className={main.popuph2}>Create New Notes group</h2>
                <div className={main.createpopup}>
                  <div>
                    <label>Group Name</label>
                    <input
                      className={main.inputhead}
                      type="text"
                      name="heading"
                      autoComplete="off"
                      onChange={handleInput}
                      placeholder="Enter your group name...."
                    ></input>
                  </div>
                  <div className={main.rowclr}>
                    <label>Choose colour</label>
                    <button
                      className={main.clr1}
                      name="color"
                      value="#B38BFA"
                      onClick={settingColor}
                    ></button>
                    <button
                      className={main.clr2}
                      name="color"
                      value="#FF79F2"
                      onClick={settingColor}
                    ></button>
                    <button
                      className={main.clr3}
                      name="color"
                      value="#43E6FC"
                      onClick={settingColor}
                    ></button>
                    <button
                      className={main.clr4}
                      name="color"
                      value="#F19576"
                      onClick={settingColor}
                    ></button>
                    <button
                      className={main.clr5}
                      name="color"
                      value="#0047FF"
                      onClick={settingColor}
                    ></button>
                    <button
                      className={main.clr6}
                      name="color"
                      value="#6691FF"
                      onClick={settingColor}
                    ></button>
                  </div>
                  <div className={main.popbtn}>
                    <button
                      onClick={handleCreate}
                      disabled={input.length === 0 || color.length === 0}
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Popup>
          {grouptittle.length > 0
            ? grouptittle.map((items, index) => (
              <Notetile key={index} title={items} />
              ))
            : null}

          
        </div>
      </div>
      <div className={main.rightsection}><Pocketnote></Pocketnote></div>
    </div>
  );
};

export default Mainsection;
