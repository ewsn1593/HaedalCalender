import React, { useContext } from 'react';
import Styled from 'styled-components/native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import Clock from './Clock';
import { TimeContext } from '~/Context\\TimeContext';
import AsyncStorage from '@react-native-community/async-storage';

const Container = Styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

const BoogyImage = Styled.Image`
    position: absolute;
    top: 24.6305418719%;
    right: -9.6%
`;

const IconNavigationContainer = Styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 55.2%;
    position: absolute;
    top: 51.354679803%;;
`;

const TouchIcon = Styled.TouchableOpacity``;

const Icon = Styled.Image``;

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

const BoardDateText = Styled.Text`
    font-family: 'RIDIBatang';
    font-size: 20px;
    text-align: center;

`;

const BottomIcon = Styled.Image`
    position: absolute;
    bottom: 2.0935960951%;
`;

interface Props {
    navigation: NavigationScreenProp<NavigationState>;
}


const Main = ({ navigation }: Props) => {
    const {date} = useContext<ITimeContext>(
        TimeContext
    );

    return (
            <Container>
                <Clock />
                <BoogyImage source={require('~/Assets\\Images\\Main\\boogy.png')}/>
                <IconNavigationContainer>
                    <TouchIcon onPress={() => navigation.navigate('Calendar')}>
                        <Icon source={require('~/Assets\\Images\\Main\\calendar.png')} />
                    </TouchIcon>
                    <TouchIcon onPress={() => navigation.navigate('Notice')}>
                        <Icon source={require('~/Assets\\Images\\Main\\megaphone.png')} />
                    </TouchIcon>
                    <TouchIcon onPress={() => navigation.navigate('TimeTable')}>
                        <Icon source={require('~/Assets\\Images\\Main\\clock.png')} />
                    </TouchIcon>
                </IconNavigationContainer>
                <Notice allowFontScaling={false}>오늘의 일정</Notice>
                <Board allowFontScaling={false}>
                    <BoardDateText>
                        {date.year}년 {date.month+1 < 10 ? '0' + (date.month+1) : date.month+1}월 {date.date < 10 ? '0' + date.date : date.date}일
                    </BoardDateText>
                </Board>
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