import React from 'react'
import './intro.scss';

const Intro = ({ close }) => {
  const text =
   "Hey , I’m Satwaj. A passionate developer who loves building clean UI, learning React, and creating macOS-style experiences."

  const [displayText, setDisplayText] = React.useState("");
  const indexRef = React.useRef(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text[indexRef.current]);
      indexRef.current++;
      if (indexRef.current === text.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="intro-overlay">
      <div className="intro-window">
        <button className="close" onClick={close}>
           ×
        </button>
        <h2>About Me</h2>
        <p>{displayText}</p>
      </div>
    </div>
  );
};


export default Intro
