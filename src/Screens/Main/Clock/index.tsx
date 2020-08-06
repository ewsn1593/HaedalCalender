import React, { useContext } from 'react';
import Styled from 'styled-components/native';
import { TimeContext } from '~/Context\\TimeContext';

const ClockContainer = Styled.Text`
    width: 43.2%;
    height: 19.9507389163%;
    position:absolute;
    top: 4.0640394089%;
    left: 9.066666%;
    font-size: 34px;
    font-family: 'RIDIBatang';
`;

const Clock = () => {
    const {date} = useContext<ITimeContext>(
        TimeContext
    );
    return(
        <ClockContainer allowFontScaling={false}>
            {date.year}년{'\n' + (date.month+1)}월 {date.date}일
            {'\n'+ date.meridium} {date.hour}:{date.minute} 
        </ClockContainer>
    )
}


export default Clock