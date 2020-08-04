import React, { useState, useEffect } from 'react';
import Styled from 'styled-components/native';

const ClockContainer = Styled.Text`
    width: 43.2%;
    height: 19.9507389163%;
    position:absolute;
    top: 4.0640394089%;
    left: 9.066666%;
    font-size: 34px;
    font-family: 'RIDIBatang';
`;

interface ITime {
    year: number;
    month: number;
    date: number;
    hour: string;
    minute: string;
    second: string;
    meridium: string;
}

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

const Clock = () => {
    let Ftime = new Date();
    let timeNow = {
        year: Ftime.getFullYear(),
        month: Ftime.getMonth(),
        date: Ftime.getDate(),
        hour: getTimeString(),
        minute: Ftime.getMinutes()<10 ? '0'+Ftime.getMinutes() : String(Ftime.getMinutes()),
        second: Ftime.getSeconds()<10 ? '0'+Ftime.getSeconds() : String(Ftime.getSeconds()),
        meridium: Ftime.getHours()>=12 ? '오전' : '오후',
    }
    const [time, setTime] = useState<ITime>(timeNow);
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
            setTime(timeNow)
        }, 1000);
    }, []);

    return(
        <ClockContainer allowFontScaling={false}>
            {time.year}년{'\n' + (time.month+1)}월 {time.date}일
            {'\n'+ time.meridium} {time.hour}:{time.minute} 
        </ClockContainer>
    )
}


export default Clock