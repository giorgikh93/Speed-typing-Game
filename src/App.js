import React from 'react';
import CustomHook from './CustomHook'



function App() {
  const {
    textarea,
    isTimeRunning,
    handleChange,
    text,
    timeRemaining,
    startGame,
    wordCount
  } = CustomHook(5)

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea ref={textarea} disabled={!isTimeRunning} onChange={handleChange} name='textarea' value={text} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>Start</button>
      <h1>Word Count:{wordCount}</h1>
    </>
  );
}

export default App;
