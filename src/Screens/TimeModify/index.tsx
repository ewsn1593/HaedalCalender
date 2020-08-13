import React from 'react';
import Styled from 'styled-components/native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

const Sample = Styled.View``;

interface INavi {
    navigation: NavigationScreenProp<NavigationState>;
}

const TimeModify = ({ navigation }: INavi) => {
    return (
        <Sample />
    );
};

TimeModify.navigationOptions = {
    header: null,
}

export default TimeModify;