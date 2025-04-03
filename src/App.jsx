import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
  } else if (!running) {
    clearInterval(interval);
  }
  return () => clearInterval(interval);
}, [running]);

  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center py-8'>
      <h1 className='text-5xl font-semibold pb-1'>Stopwatch</h1>
      <div className='text-5xl font-semibold py-4 pb-6'>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className='flex flex-row justify-center gap-4'>
        {running ? (
            <button 
              className='border rounded-lg py-2 px-3.5 text-3xl' 
              onClick={() => setRunning(false)}
            >
              Stop
            </button>
          ) : (
            <button 
              className='border rounded-lg py-2 px-3 text-3xl'
              onClick={() => setRunning(true)}
            >
              Start
            </button>
          )
          }
        <button 
          className='border rounded-lg py-2 px-2.5 text-3xl'
          onClick={() => setTime(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;