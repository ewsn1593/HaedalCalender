import React, { useEffect, useState } from 'react';
import Styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

let TimeBlockList = Array<any>([]);

for(let i=9; i<=24; i++){
    let DTimeBlockFragment = Styled.View`
        position: absolute;
        left: -43.5px;
        top: ${(i-9)*58}px;
        width: 43.5px;
        height: 58px;
        border-color: rgb(255, 149, 149);
        border-top-width: 1.5px;
    `;

    let TimeText = Styled.Text`
        font-family: 'SCDream4';
        font-size: 13px;
        position:absolute;
        top: 4px;
        left: -14px;
    `

    TimeBlockList.push(
        <DTimeBlockFragment>
            <TimeText>
                {i}:00
            </TimeText>
        </DTimeBlockFragment>
    )
}

interface INavi {
    navigation: NavigationScreenProp<NavigationState>;
}


const TimeBlock = ({navigation}: INavi) => {
    const [ BlockInfo, setBlockInfo ] = useState<Array<any>>([]);

    const initData = async() => {
        try{
            const list = await AsyncStorage.getItem('BlockInfo')
            if (list!==null){
                setBlockInfo(JSON.parse(list));
                BlockInfo.map((info) => {
                    let Block = Styled.TouchableOpacity`
                        position: absolute;
                        top: ${(58/60)*info.startingPoint}px;
                        left: ${53*info.day}px;
                        width: 53px;
                        height: ${(58/60)*info.duration}px;
                        background-color: ${info.color};
                    `;
                    TimeBlockList.push(
                        <Block onPress={() => {
                            navigation.navigate('TimeDetail', {
                               information: info,
                            });
                        }}>
                            
                        </Block>
                    );
                })
            }
        } catch(e){
            console.log(e);
        }
    };

    useEffect(() => {
        initData();
    }, []);

    return (
        <>
            {TimeBlockList}
        </>
    )
}

export default TimeBlock;