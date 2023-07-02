import React, { createContext, useState, useEffect, useContext } from 'react';

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [seconds, setSeconds] = useState(
    typeof window !== 'undefined'
      ? parseInt(localStorage.getItem('timerSeconds')) || 180
      : 180
  );

  useEffect(() => {
    let timerId = null;

    if (seconds > 0) {
      timerId = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          }
          return prevSeconds;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [seconds]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('timerSeconds', seconds);
    }
  }, [seconds]);

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
  };

  return (
    <TimerContext.Provider value={{ seconds, formatTime }}>
      {children}
    </TimerContext.Provider>
  );
};

const useTimer = () => useContext(TimerContext);

const TimerDisplay = () => {
  const { formatTime } = useTimer();

  return (
    <div>
      <h3>{formatTime()}</h3>
    </div>
  );
};

const App = () => {
  return (
    <TimerProvider>
      <TimerDisplay />
    </TimerProvider>
  );
};

export default App;
