import React from 'react';
import { StyleSheet } from 'react-native';
import Styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import Table from './Table';

const CustomNav = Styled.View`
    background-color: #fcec9b;
    height: 56px;
`;
const Button = Styled.TouchableOpacity`
    height: 100%;
    justify-content: center;
    margin-left: 20px;
`;
const ButtonImage = Styled.Image``;
const Container = Styled.ScrollView`
    flex: 1;
`;
const BottomIcon = Styled.Image`
    position: absolute;
    bottom: 2.0935960951%;
`;
const Icon = Styled.Image`
    position: absolute;
    left: 3.54666666667%;
`;

const gradientStyles = StyleSheet.create({
    linearGradient : {
        flex: 1,
        alignItems: 'center',
        height: 1285,
    }
})

interface INavi {
    navigation: NavigationScreenProp<NavigationState>;
}

const TimeTable = ({navigation}: INavi) => {
    return (
        <Container>
            <CustomNav>
                <Button onPress={() => navigation.goBack()}>
                    <ButtonImage source={require('~/Assets\\Images\\Common\\LeftArrow.png')} />
                </Button>
            </CustomNav>
            <LinearGradient colors={['#fcec9b', '#fefaea']} style={gradientStyles.linearGradient}>
                <Icon source={require('~/Assets\\Images\\TimeTable\\ari.png')} />
                <Table navigation={navigation}/>
                <BottomIcon
                    source={require('~/Assets\\Images\\Common\\Logo.png')}
                />
            </LinearGradient>
        </Container>
    );
};

TimeTable.navigationOptions = {
    header: null,
}

export default TimeTable;