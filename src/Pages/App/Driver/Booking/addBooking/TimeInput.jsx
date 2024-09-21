import React, { useEffect, useState } from 'react';

const TimeInput = ({ settime, setbookingInputsObject, time, bookingInputsObject }) => {

    const currentHour = new Date().getHours();
    const formattedHour = (currentHour % 12) || 12;

    const [hour, setHour] = useState(`${(new Date().getHours() % 12) || 12}`);
    const [minute, setMinute] = useState(`${new Date().getMinutes()}`);
    const [period, setPeriod] = useState('AM');
    
    useEffect(()=> {
        if (currentHour < 12) {
        setPeriod("AM")
    } else {
        setPeriod("PM")
    }
},[])
const handleHourChange = (e) => {
    console.log(`${hour}:${minute} ${period}`, "helloworkld")
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
    useEffect(() => {
        // Set the time whenever hour, minute, or period changes
        settime(`${hour}:${minute} ${period}`);
        setbookingInputsObject({ ...bookingInputsObject, time: time })
    }, [hour, minute, period, settime]);

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

// import React, { useEffect, useState } from 'react';

// const TimeInput = ({ settime }) => {
//     const currentHour = new Date().getHours();
//     const formattedHour = (currentHour % 12) || 12;
//     const currentMinute = new Date().getMinutes();

//     const [hour, setHour] = useState(`${(new Date().getHours() % 12) || 12}`);
//     const [minute, setMinute] = useState(`${new Date().getMinutes().toString().padStart(2, '0')}`);
//     const [period, setPeriod] = useState(currentHour < 12 ? 'AM' : 'PM');
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const currentTime = `${hour}:${minute} ${period}`;
//         settime(currentTime);
//     }, [hour, minute, period, settime]);

//     const handleHourChange = (e) => {
//         const value = e.target.value;
//         // Ensure hour is between 1 and 12
//         if (value >= 1 && value <= 12) {
//             setHour(value);
//             validateTime();
//         }
//     };

//     const handleMinuteChange = (e) => {
//         const value = e.target.value;
//         // Ensure minute is between 00 and 59
//         if (value >= 0 && value <= 59) {
//             setMinute(value.padStart(2, '0')); // Pads single digit minutes with 0
//             validateTime();
//         }
//     };

//     const handlePeriodChange = (newPeriod) => {
//         setPeriod(newPeriod);
//         validateTime();
//     };

//     const validateTime = () => {
//         const selectedHour = period === 'AM' ? hour : hour + 12;
//         const selectedMinute = minute;
//         const currentHour12 = currentHour % 12;
//         const isTimePassed = (selectedHour < currentHour) ||
//             (selectedHour === currentHour && selectedMinute < currentMinute) ||
//             (selectedHour === currentHour12 && period === 'AM' && currentHour >= 12);

//         if (isTimePassed) {
//             setError('Time has passed. Please select a future time.');
//         } else {
//             setError(null);
//         }
//     };

//     return (
//         <div style={{ display: 'flex', alignItems: 'center', gap: '5px', height: "100%" }}>
//             {/* Hour Input */}
//             <input
//                 type="number"
//                 value={hour}
//                 onChange={handleHourChange}
//                 placeholder="1"
//                 style={{
//                     width: '40px',
//                     textAlign: 'center',
//                     borderRadius: '4px',
//                     border: '1px solid #ccc',
//                     height: "100%",
//                     padding: "0"
//                 }}
//             />

//             {/* Colon */}
//             <span>:</span>

//             {/* Minute Input */}
//             <input
//                 type="number"
//                 value={minute}
//                 onChange={handleMinuteChange}
//                 placeholder="00"
//                 style={{
//                     width: '40px',
//                     textAlign: 'center',
//                     borderRadius: '4px',
//                     border: '1px solid #ccc',
//                     height: "100%",
//                     background: "#f0f0f0",
//                     padding: "0"
//                 }}
//             />

//             {/* AM/PM Toggle */}
//             <div style={{ display: 'flex', gap: '5px' }}>
//                 <button
//                     onClick={() => handlePeriodChange('AM')}
//                     style={{
//                         backgroundColor: period === 'AM' ? '#007bff' : '#f0f0f0',
//                         color: period === 'AM' ? '#fff' : '#000',
//                         borderRadius: '4px',
//                         padding: '4px 8px',
//                         border: 'none',
//                     }}
//                 >
//                     AM
//                 </button>
//                 <button
//                     onClick={() => handlePeriodChange('PM')}
//                     style={{
//                         backgroundColor: period === 'PM' ? '#007bff' : '#f0f0f0',
//                         color: period === 'PM' ? '#fff' : '#000',
//                         borderRadius: '4px',
//                         padding: '4px 8px',
//                         border: 'none',
//                     }}
//                 >
//                     PM
//                 </button>
//             </div>
//             {error && <div style={{ color: 'red' }}>{error}</div>}
//         </div>
//     );
// };

// export default TimeInput;




// import React, { useEffect, useState } from 'react';

// const TimeInput = ({ settime, setTimeError }) => {
//     const currentHour = new Date().getHours();
//     const currentMinute = new Date().getMinutes();

//     const [hour, setHour] = useState(`${(new Date().getHours() % 12) || 12}`);
//     const [minute, setMinute] = useState(`${new Date().getMinutes().toString().padStart(2, '0')}`);
//     const [period, setPeriod] = useState(currentHour < 12 ? 'AM' : 'PM');
//     const [error, setError] = useState(null);

//     const handleTimeInput = (time) => {
//         const [hour, minute, period] = time.split(' ');
//         const currentHour = new Date().getHours();
//         const currentMinute = new Date().getMinutes();
    
//         const selectedHour = period === 'AM' ? hour : hour + 12;
//         const selectedMinute = minute.replace(/^0+/, ''); // Remove leading zeros
//         const isTimePassed = (selectedHour < currentHour) ||
//             (selectedHour === currentHour && selectedMinute < currentMinute);
    
//         if (isTimePassed) {
//             setTimeError('Time has passed. Please select a future time.');
//         } else {
//             settime(time);
//             setTimeError(null);
//         }
//     };
    
//     useEffect(() => {
//         const currentTime = `${hour}:${minute} ${period}`;
//         handleTimeInput(currentTime);
//     }, [hour, minute, period]);

//     useEffect(() => {
//         const currentTime = `${hour}:${minute} ${period}`;
//         settime(currentTime);
//     }, [hour, minute, period, settime]);

//     const handleHourChange = (e) => {
//         const value = e.target.value;
//         if (value >= 1 && value <= 12) {
//             setHour(value);
//             validateTime();
//         }
//     };

//     const handleMinuteChange = (e) => {
//         const value = e.target.value;
//         if (value >= 0 && value <= 59) {
//             setMinute(value.padStart(2, '0')); 
//             validateTime();
//         }
//     };

//     const handlePeriodChange = (newPeriod) => {
//         setPeriod(newPeriod);
//         validateTime();
//     };

//     const validateTime = () => {
//         const selectedHour = period === 'AM' ? hour : hour + 12;
//         const selectedMinute = minute;
//         const isTimePassed = (selectedHour < currentHour) ||
//             (selectedHour === currentHour && selectedMinute < currentMinute);

//         if (isTimePassed) {
//             setError('Time has passed. Please select a future time.');
//         } else {
//             setError(null);
//         }
//     };

//     return (
//         <div style={{ display: 'flex', alignItems: 'center', gap: '5px', height: "100%" }}>
//             {/* Hour Input */}
//             <input
//                 type="number"
//                 value={hour}
//                 onChange={handleHourChange}
//                 placeholder="1"
//                 style={{
//                     width: '40px',
//                     textAlign: 'center',
//                     borderRadius: '4px',
//                     border: '1px solid #ccc',
//                     height: "100%",
//                     padding: "0"
//                 }}
//             />

//             {/* Colon */}
//             <span>:</span>

//             {/* Minute Input */}
//             <input
//                 type="number"
//                 value={minute}
//                 onChange={handleMinuteChange}
//                 placeholder="00"
//                 style={{
//                     width: '40px',
//                     textAlign: 'center',
//                     borderRadius: '4px',
//                     border: '1px solid #ccc',
//                     height: "100%",
//                     background: "#f0f0f0",
//                     padding: "0"
//                 }}
//             />

//             {/* AM/PM Toggle */}
//             <div style={{ display: 'flex', gap: '5px' }}>
//                 <button
//                     onClick={() => handlePeriodChange('AM')}
//                     style={{
//                         backgroundColor: period === 'AM' ? '#007bff' : '#f0f0f0',
//                         color: period === 'AM' ? '#fff' : '#000',
//                         borderRadius: '4px',
//                         padding: '4px 8px',
//                         border: 'none',
//                     }}
//                 >
//                     AM
//                 </button>
//                 <button
//                     onClick={() => handlePeriodChange('PM')}
//                     style={{
//                         backgroundColor: period === 'PM' ? '#007bff' : '#f0f0f0',
//                         color: period === 'PM' ? '#fff' : '#000',
//                         borderRadius: '4px',
//                         padding: '4px 8px',
//                         border: 'none',
//                     }}
//                 >
//                     PM
//                 </button>
//             </div>
//             {error && <div style={{ color: 'red' }}>{error}</div>}
//         </div>
//     );
// };

// export default TimeInput;
