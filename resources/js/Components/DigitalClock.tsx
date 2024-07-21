import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/id'; // Import locale Indonesia

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    moment.locale('id');
    const intervalId = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    // Bersihkan interval saat komponen unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>Jam Digital</h1>
      <p style={{ fontSize: '2em' }}>{currentTime.format('dddd, D MMMM YYYY')}</p>
      <p style={{ fontSize: '4em' }}>{currentTime.format('HH:mm:ss')}</p>
    </div>
  );
};

export default DigitalClock;