import React, { useEffect } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import Styled from 'styled-components/native';

const ActivityIndicator = Styled.ActivityIndicator`
    position: absolute;
    right: 26.060606%;
    top: 39.76083707%;
    width: 10.303030%;
    height: 4.84330484%;
    z-index: 1;
`;

const Container = Styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
`;

const BottomIcon = Styled.Image`
    position: absolute;
    bottom: 2.0935960951%;
    resize-mode : center;
    width: 10.66666%;
    height: 4.187192%;
`;
const HaedalImage = Styled.Image`
    position:absolute;
    bottom: 9.865470852%;
    width: 78.181818%;
    height: 38.746438%;
    resize-mode : center;
    z-index: 1;
`;
const MessageBoxImage = Styled.Image`
    position: absolute;
    top: 36.4723467862%;
    right: 12.72727272%;
    width: 37.27272727%;
    height: 12.34678624%;
    resize-mode : center;
`;
const ShadowImage = Styled.Image`
    width: 83.39393939%;
    height: 11.03139013%;
    resize-mode: center;
    position: absolute;
    bottom: 6.9656203288%;
`;
const WelcomeText = Styled.Text`
    width: 60.60606060%;
    height: 26.3532763533%;
    position: absolute;
    top: -5.9829059829%;
    font-size: 40px;
    text-align: center;
    background-color: #FFFFFF;
    font-family: 'neodgm';
`;
const ImageContainer = Styled.View`
    position:absolute;
    width: 88%;
    height: 81.4532019704%;
    border: 3px solid rgb(255, 221, 0);
    bottom: 7.758620689%;
    align-items: center;
`;

interface Props {
    navigation: NavigationScreenProp<NavigationState>;
}

const Loading = ({ navigation }: Props) => {
    
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('MainNavigator');
        }, 2500)
    });
    
    return (
        <Container>
            <ImageContainer>
            <WelcomeText allowFontScaling={false}>HAEDAL{"\n"}VILLAGE{"\n"}CALENDAR</WelcomeText>
                <ActivityIndicator size="large" color="#999999"/>
                <MessageBoxImage 
                    source={require('~/Assets/\\Images\\Loading\\MsgBox.png')}
                />   
                <HaedalImage
                    source={require('~/Assets\\Images\\Loading\\HaedalCh.png')}
                />
                <ShadowImage
                    source={require('~/Assets\\Images\\Loading\\Shadow.png')}
                />
            </ImageContainer>
            <BottomIcon
                source={require('~/Assets\\Images\\Common\\Logo.png')}
            />
        </Container>
    );
};


export default Loading;
