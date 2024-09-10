import React, { useEffect, useState } from 'react';

const TimeInput = ({ settime }) => {

    const currentHour = new Date().getHours();
    const formattedHour = (currentHour % 12) || 12;

    const [hour, setHour] = useState(`${(new Date().getHours() % 12) || 12}`);
    const [minute, setMinute] = useState(`${new Date().getMinutes()}`);
    const [period, setPeriod] = useState('AM');
    settime(`${hour}:${minute} ${period}`)
  useEffect(()=> {
    if (currentHour < 12) {
        setPeriod("AM")
    } else {
        setPeriod("PM")
    }
  },[])
    const handleHourChange = (e) => {
        const value = e.target.value;
        // Ensure hour is between 1 and 12
        if (value >= 0 && value <= 12) {
            setHour(value);
        }
    };

    const handleMinuteChange = (e) => {
        const value = e.target.value;
        // Ensure minute is between 00 and 59
        if (value.length < 2) {
              setMinute(value.padStart(1, '0')); // Pads single digit minutes with 0
        }
        if (value >= 1 && value <= 59) {
            setMinute(value); // Pads single digit minutes with 0
        }
        // if (value < 10) {
        //   setMinute(value.padStart(1, '0')); // Pads single digit minutes with 0
        // }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', height: "100%" }}>
            {/* Hour Input */}
            <input
                type="number"
                value={hour}
                onChange={handleHourChange}
                placeholder="1"
                style={{
                    width: '40px',
                    textAlign: 'center',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    height: "100%",
                    padding: "0"
                }}
            />

            {/* Colon */}
            <span>:</span>

            {/* Minute Input */}
            <input
                type="number"
                value={minute}
                onChange={handleMinuteChange}
                placeholder="00"
                style={{
                    width: '40px',
                    textAlign: 'center',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    height: "100%",
                    background: "#f0f0f0",
                    padding: "0"
                }}
            />

            {/* AM/PM Toggle */}
            <div style={{ display: 'flex', gap: '5px' }}>
                <button
                    onClick={() => setPeriod('AM')}
                    style={{
                        backgroundColor: period === 'AM' ? '#007bff' : '#f0f0f0',
                        color: period === 'AM' ? '#fff' : '#000',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        border: 'none',
                    }}
                >
                    AM
                </button>
                <button
                    onClick={() => setPeriod('PM')}
                    style={{
                        backgroundColor: period === 'PM' ? '#007bff' : '#f0f0f0',
                        color: period === 'PM' ? '#fff' : '#000',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        border: 'none',
                    }}
                >
                    PM
                </button>
            </div>
        </div>
    );
};

export default TimeInput;
