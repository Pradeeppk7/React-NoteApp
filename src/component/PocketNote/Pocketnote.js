import React, { useEffect, useState } from 'react';
import note from './Pocketnote.module.css';
import useNoteContext from '../../context/useNoteContext';
import enterlogo from '../../assets/arrow.svg';
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
  const [text, setText] = useState('');
  const [bgColor, setBgColor] = useState('#fff');
  const [Title, setTitle] = useState('');
  const { notes, setNotes, selectedNote } = useNoteContext();

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getFirstLetters = (str) => {
    const firstLetters = str
      .split(' ')
      .map((word) => word.charAt(0))
      .join('')
      .slice(0, 2)
      .toUpperCase();

    return firstLetters;
    };
    const handleText = (e) => {
        setText(e.target.value);
    }
    const handleKey = (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleSaveNotes();
          }
    }
  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem(selectedNote)) || []);
    const groupNames = JSON.parse(localStorage.getItem('groupNames'));
    const selectedGroupname = groupNames.find(
      (item) => item.name === selectedNote
    );
    if (selectedNote) {
      setBgColor(selectedGroupname.bgcolor);
      setTitle(selectedGroupname.name);
    }
  }, [selectedNote, setNotes]);

  const getDate = () => {
    return new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    })
  }
  const handleSaveNotes = () => {
    if (!text.trim()) {
      return;
    }
    const notes = JSON.parse(localStorage.getItem(selectedNote)) || [];
    const newNoteObj = {
      id: Date.now(),
      title: selectedNote,
      content: text.trim(),
      date:getDate(),
      time: new Date().toLocaleTimeString(),
    };
    notes.push(newNoteObj);
    localStorage.setItem(selectedNote, JSON.stringify(notes));
    setText("");
    setNotes(notes);
  };
  return (
    <div className={note.section}>
      <div className={note.layer}>
        <div className={note.heading}>
          <div
            className={note.displayname}
            style={{ backgroundColor: bgColor }}
          >
            <h2>{getFirstLetters(Title)}</h2>
          </div>
          <div className={note.title}>
            <h2>{capitalizeFirst(Title)}</h2>
          </div>
        </div>
        <div className={note.noterack}>
          
        </div>
              <div className={note.textarea}>
              <textarea
          value={text}
          placeholder="Enter your text here......"
          onChange={handleText}
          onKeyDown={handleKey}
        ></textarea>
        <img src = {enterlogo} onClick={handleSaveNotes} alt="My Happy SVG"/>
        </div>
      </div>
    </div>
  );
};

Pocketnote.propTypes = propTypes;
Pocketnote.defaultProps = defaultProps;
// #endregion

export default Pocketnote;
