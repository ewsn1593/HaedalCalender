import React, { useEffect } from 'react';
import Styled from 'styled-components/native';
import { FlatList, Alert } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const LButtonContainer = Styled.TouchableOpacity`
    height: 100%;
    justify-content: center;
    margin-left: 20px;
`;

const RButtonContainer = Styled.TouchableOpacity`
    height: 100%;
    justify-content: center;
    margin-right: 20px;
`;

const BottomIcon = Styled.Image`
    position: absolute;
    bottom: 2.0935960951%;
`;

const Icon = Styled.Image``;

const Notice = () => {
    return (
        <Container>
            <BottomIcon
                source={require('~/Assets\\Images\\Common\\Logo.png')}
            />
        </Container>
    )
}

interface INavi {
    navigation: NavigationScreenProp<NavigationState>;
}

Notice.navigationOptions = ({ navigation } : INavi) => {
    return{
        title: '공지사항',
        headerStyle: {
            backgroundColor: 'rgb(255, 216, 68)',
        },
        headerTintColor: 'rgb(255, 255, 255)',
        headerTitleStyle: {
            fontFamily: 'SCDream4',
            color: 'black',
            fontSize: 25,
        },
        headerRight: (
            <RButtonContainer onPress={() => {navigation.navigate('Main')}}>
                <Icon source={require('~/Assets\\Images\\Notice\\Home.png')} />
            </RButtonContainer>
        ),
        headerLeft: (
            <LButtonContainer onPress={() => {navigation.navigate('Main')}}>
                <Icon source={require('~/Assets\\Images\\Notice\\LeftArrow.png')} />
            </LButtonContainer>
        ),
    };
};

export default Notice;