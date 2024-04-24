// ProgressBar.js
import React, { useState, useEffect } from 'react';
import './App.css'; // Importing styles from App.css

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [progress]);

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%`, backgroundColor: progress === 100 ? 'green' : '#007bff' }}>
        <div className="progress-text">{progress}%</div>
      </div>
    </div>
  );
};

export default ProgressBar;
