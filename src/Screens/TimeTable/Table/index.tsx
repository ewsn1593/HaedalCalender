import React, { useEffect } from 'react';
import Styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import TimeBlock from './TimeBlock';

const DayIndexBlock = Styled.View`
    position:absolute;
    right: 36px;
    width: 265px;
    height: 58px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`
const TimeBlockContainer = Styled.View`
    width: 265px;
    height: 928px;
    background-color: white;
    position: absolute;
    right: 36px;
    top: 58px;
`;



const Day = Styled.Text`
    font-size: 14px;
    font-family: 'SCDream4';
`;

interface INavi {
    navigation: NavigationScreenProp<NavigationState>;
}



const Table = ({navigation}: INavi) => {
    return (
        <>
            <DayIndexBlock>
                <Day>M</Day>
                <Day>T</Day>
                <Day>W</Day>
                <Day>T</Day>
                <Day>F</Day>
            </DayIndexBlock>
            <TimeBlockContainer>
                <TimeBlock navigation={navigation} />
            </TimeBlockContainer>
        </>
    );
};

export default Table;