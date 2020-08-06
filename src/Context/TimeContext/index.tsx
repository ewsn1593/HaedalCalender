import React, { createContext, useState, useEffect } from 'react';

function getTimeString() : string {
    let curHour = new Date();
    let beforeProcessHour = curHour.getHours()
    let processedHour = '00';
    if (beforeProcessHour > 12){
        if (beforeProcessHour < 22){
            processedHour = '0' + (beforeProcessHour-12);
        }
    }
    else{
        if (beforeProcessHour < 10){
             processedHour = '0' + beforeProcessHour;
        }
    }
    return processedHour;
}

interface Props {
    children: JSX.Element | Array<JSX.Element>
}

const TimeContext = createContext<ITimeContext>({
    date: {year : 2020,
            month: 1,
            date: 1,
            hour: '00',
            minute: '00',
            second: '00',
            meridium: '오전'
    },
    setTime: (t: ITime): void => {},
})

const TimeContextProvider = ({ children } : Props ) => {
    let Ftime = new Date();
    let timeNow = {
        year: Ftime.getFullYear(),
        month: Ftime.getMonth(),
        date: Ftime.getDate(),
        hour: getTimeString(),
        minute: Ftime.getMinutes()<10 ? '0'+Ftime.getMinutes() : String(Ftime.getMinutes()),
        second: Ftime.getSeconds()<10 ? '0'+Ftime.getSeconds() : String(Ftime.getSeconds()),
        meridium: Ftime.getHours()>=12 ? '오전' : '오후',
    };
    const  [date, setDate] = useState<ITime>(timeNow);

    const setTime = (t: ITime) => {
        setDate(t);
    };

    useEffect( () => {
        setInterval(()=>{
            let time = new Date();
            let timeNow = {
                year: time.getFullYear(),
                month: time.getMonth(),
                date: time.getDate(),
                hour: getTimeString(),
                minute: time.getMinutes()<10 ? '0'+time.getMinutes() : String(time.getMinutes()),
                second: time.getSeconds()<10 ? '0'+time.getSeconds() : String(time.getSeconds()),
                meridium: time.getHours()>=12 ? '오전' : '오후',
            }
            setDate(timeNow)
        }, 1000);
    }, []);

    return (
        <TimeContext.Provider 
            value={{
                date,
                setTime,
            }}>
            {children}
        </TimeContext.Provider>
    );
};

export { TimeContextProvider, TimeContext };