import React, { useState, useEffect } from 'react';
import './styles.css'; 

function ConsoleText({ words, colors }) {
    const [letterCount, setLetterCount] = useState(1);
    const [wordIndex, setWordIndex] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const [visible, setVisible] = useState(true);
    const [forward, setForward] = useState(true);
  
    useEffect(() => {
      const interval1 = setInterval(() => {
        setLetterCount(prevCount => {
          if (forward) {
            if (prevCount === words[wordIndex].length) {
              setForward(false);
              return prevCount;
            }
            return prevCount + 1;
          } else {
            if (prevCount === 0) {
              setForward(true);
              setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
              setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
              return prevCount;
            }
            return prevCount - 1;
          }
        });
      }, 120);
  
      const interval2 = setInterval(() => {
        setVisible((prevVisible) => !prevVisible);
      }, 600);
  
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
      };
    }, [forward, words, wordIndex, colors]);
  
    return (
      <div className="console-container">
        <span id="text" style={{ color: colors[colorIndex] }}>
          {words[wordIndex].substring(0, letterCount)}
        </span>
        <div className={visible ? 'console-underscore' : 'console-underscore hidden'}>&#95;</div>
      </div>
    );
  }
  
  function App() {
    const words = ['SURAJ JADHAV', 'Frontend Developer', 'CODER'];
    const colors = ['tomato', 'rebeccapurple', 'lightblue'];
  
    return <ConsoleText words={words} colors={colors} />;
  }
  
  export default App;