import React from 'react';
import Styled from 'styled-components/native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import Clock from './Clock';
import AsyncStorage from '@react-native-community/async-storage';

const Container = Styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

const BoogyImage = Styled.Image`
    width: 79.466666667%;
    position: absolute;
    top: 24.6305418719%;
    right: -9.6%
    resize-mode : center;
`;

const IconNavigationContainer = Styled.View``;

const Icon = Styled.TouchableOpacity``;

const Notice = Styled.Text`
    width: 26.4%;
    text-align: center;
    position: absolute;
    bottom: 36.45320197044%;
    font-family: 'RIDIBatang';
    font-size: 20px;
`;

const Board = Styled.Text`
    border: 2px solid rgb(255, 221, 0);
    width: 88%;
    height: 22.536945812807%;
    text-align: center;
    font-family: 'RIDIBatang';
    font-size: 20px;
    text-align-vertical: center;
    position: absolute;
    bottom: 11.5763546%;
`;

const BottomIcon = Styled.Image`
    position: absolute;
    bottom: 2.0935960951%;
    resize-mode : center;
    width: 10.66666%;
    height: 4.187192%;
`;

interface Props {
    navigation: NavigationScreenProp<NavigationState>;
}


const Main = ({ navigation }: Props) => {
    return (
        <Container>
            <Clock />
            <BoogyImage source={require('~/Assets\\Images\\Main\\boogy.png')}/>
            <Notice allowFontScaling={false}>오늘의 일정</Notice>
            <Board allowFontScaling={false}></Board>
            <BottomIcon
                source={require('~/Assets\\Images\\Common\\Logo.png')}
            />
        </Container>
    );
};

Main.navigationOptions = {
    header: null,
}

export default Main;