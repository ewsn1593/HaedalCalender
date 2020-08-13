import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import Styled from 'styled-components/native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import TimeSelection from './TimeSelection';

const DismissKeyboard = Styled.TouchableWithoutFeedback``;

const CustomNav = Styled.View`
    height: 56px;
`;

const LButton = Styled.TouchableOpacity`
    height: 100%;
    justify-content: center;
    position: absolute;
    left: 20px;
`;

const RButton = Styled.TouchableOpacity`
    height: 100%;
    justify-content: center;
    position: absolute;
    right: 20px;
`;
const AddButton = Styled.TouchableOpacity`
    justify-content: center;
    margin-top: 3%;
`;
const ButtonImage = Styled.Image``;
const Container = Styled.KeyboardAvoidingView`
    flex: 1;
`;
const ContentsContainer = Styled.View`
    align-items:center;
    flex:1;
`;

const BottomIcon = Styled.Image`
    position: absolute;
    bottom: 2.0935960951%;
`;
const Image = Styled.Image`
    margin-top: 3.04232804%;
`;

const ColorSelectionText = Styled.Text`
    margin-top: 3%;
    width: 78.66666666666667%;
    font-family: NotoSansCJKkr-DemiLight;
    font-size: 15px;
    color: rgb(130, 130, 130);
`;

const TimeTableText = Styled.Text`
    font-family: NotoSansCJKkr-DemiLight;
    font-size: 25px;
    margin-top: 3.04232804%;
    margin-bottom: 3.04232804%;
`
const TextInput_Name = Styled.TextInput`
    width: 78.66666666666667%;
    font-size: 15px;
    border-bottom-color: rgb(130, 130, 130);
    border-bottom-width: 1px;
    padding-top:0;
    padding-bottom:0; 
`;

const TextInput_Professor = Styled.TextInput`
    width: 78.66666666666667%;
    font-size: 15px;
    border-bottom-color: rgb(130, 130, 130);
    border-bottom-width: 1px;
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 3%;
`;
const ScrollConatainer = Styled.View`
    width: 100%
    height: 70px;
    align-items:center;
`;
const TimeSelectionScrollContainer = Styled.ScrollView`
    width: 100%;
`;

const TextInput_Memo = Styled.TextInput`
    width: 78.66666666666667%;
    font-size: 15px;
    border-bottom-color: rgb(130, 130, 130);
    border-bottom-width: 1px;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 3%;
    text-align-vertical: center;
`;

const ColorContainer = Styled.View`
    width: 78.66666666666667%;
    flex-direction: row;
`;

const ColorButton = Styled.TouchableOpacity`
    margin-right: 10px;
`;

const ColorImage = Styled.Image``;

const CheckButton = Styled.TouchableOpacity`
    position: absolute;
    background-color: green;
    justify-content: center;
    align-items: center;
    align-self: center;
    bottom:13%;
`;
const CheckBox = Styled.Image`
    position:absolute;
`;
const CheckImage = Styled.Image`
    z-index:1;
`;

interface INavi {
    navigation: NavigationScreenProp<NavigationState>;
}

const TimeAdd = ({ navigation }: INavi) => {
    const [showTimePicker, setShowTimePicker ] = useState<boolean>(false);
    const [ClassName, setClassName] = useState<string>();
    const [ProfessorName, setProfessorName] = useState<string>();
    const [Memo, setMemo] = useState<string>();
    const [BlockColor, setBlockColor] = useState<string>();
    const [NumberOfTime, setNumberOfTime] = useState<number>(1);
    const [TimeDictionary, setTimeDictionary] =useState<object>({1:{}});
    const [TimeSelectionList, setTimeSelectionList] = useState<Array<JSX.Element>>([<TimeSelection idNumber={NumberOfTime} setTimeDictionary={setTimeDictionary} getCurrentTimeDictionary={()=>{return TimeDictionary}} />]);
    const [ColorDir, setColorDir] = useState<Array<any>>([require('~/Assets\\Images\\TimeTable\\R.png'), require('~/Assets\\Images\\TimeTable\\B.png'), require('~/Assets\\Images\\TimeTable\\O.png'), require('~/Assets\\Images\\TimeTable\\M.png'), require('~/Assets\\Images\\TimeTable\\P.png'), require('~/Assets\\Images\\TimeTable\\K.png')])


    return (
        <DismissKeyboard onPress={()=> Keyboard.dismiss()}>
            <Container>
                <CustomNav>
                    <LButton onPress={() => {
                            Keyboard.dismiss();
                            setTimeout(()=>{
                                navigation.goBack();
                            },50);
                        }}>
                        <ButtonImage source={require('~/Assets\\Images\\Common\\BLeftArrow.png')} />
                    </LButton>
                    <RButton onPress={() => {
                            Keyboard.dismiss();
                            setTimeout(()=>{
                                navigation.goBack();
                            },50);
                        }}>
                    <ButtonImage source={require('~/Assets\\Images\\Common\\BHome.png')} />
                    </RButton>
                </CustomNav>

                <ContentsContainer>
                    <Image
                        source={require('~/Assets\\Images\\Common\\TimeTableHaedal.png')}
                    />
                    <TimeTableText>시간표</TimeTableText>
                    <TextInput_Name
                        autoFocus={false}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={text => setClassName(text)}
                        placeholder = {"수업명 입력"}
                        returnKeyType="done"
                    />
                    <TextInput_Professor
                        autoFocus={false}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={text => setProfessorName(text)}
                        placeholder = {"교수명 입력"}
                        returnKeyType="done"
                    />

                    <ScrollConatainer onStartShouldSetResponder={() => true}>
                        <TimeSelectionScrollContainer
                            contentContainerStyle={{justifyContent: 'center',flexGrow: 1, alignItems: 'center'}}
                        >
                            {TimeSelectionList}
                        </TimeSelectionScrollContainer>
                    </ScrollConatainer>

                    <AddButton
                        onPress={()=>{
                            var list = TimeSelectionList;
                            list = [...list, <TimeSelection idNumber={NumberOfTime+1} setTimeDictionary={setTimeDictionary} getCurrentTimeDictionary={()=>{return TimeDictionary}} />];
                            let dict = TimeDictionary;
                            dict[NumberOfTime + 1] = {};
                            setTimeDictionary(dict);
                            setTimeSelectionList(list);
                            setNumberOfTime(NumberOfTime + 1);
                        }}    
                    >
                        <ButtonImage source={require('~/Assets\\Images\\TimeTable\\Plus.png')} />
                    </AddButton>
                    
                    <TextInput_Memo
                        autoFocus={false}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={text => setMemo(text)}
                        placeholder = {"메모"}
                        returnKeyType="done"
                    />
                    <ColorSelectionText>색 선택</ColorSelectionText>
                    <ColorContainer>
                        <ColorButton
                            onPress={()=>{
                                let newColorDir = [...ColorDir];
                                newColorDir[0] = ColorDir[4];
                                setColorDir(newColorDir);
                                setBlockColor('rgb(255, 149, 149)');
                            }}
                        >
                            <ColorImage source={ColorDir[0]}/>
                        </ColorButton>
                        <ColorButton
                            onPress={()=>{
                                setBlockColor('rgb(130, 169, 238)');
                            }}>
                            <ColorImage source={ColorDir[1]}/>
                        </ColorButton>
                        <ColorButton
                            onPress={()=>{
                                setBlockColor('rgb(255, 186, 126)');
                            }}>
                            <ColorImage source={ColorDir[2]}/>
                        </ColorButton>
                        <ColorButton
                            onPress={()=>{
                                setBlockColor('rgb(157, 238, 216)');
                            }}>
                            <ColorImage source={ColorDir[3]}/>
                        </ColorButton>
                        <ColorButton
                            onPress={()=>{
                                setBlockColor('rgb(255, 149, 149)');
                            }}>
                            <ColorImage source={ColorDir[4]}/>
                        </ColorButton>
                        <ColorButton
                            onPress={()=>{
                                setBlockColor('rgb(238, 162, 212)');
                            }}>
                            <ColorImage source={ColorDir[5]}/>
                        </ColorButton>
                    </ColorContainer>

                    <CheckButton activeOpacity={1} onPress={()=>navigation.goBack()}>
                        <CheckBox source={require('~/Assets\\Images\\TimeTable\\Box.png')}/>
                        <CheckImage source={require('~/Assets\\Images\\TimeTable\\Check.png')}/>
                    </CheckButton>
                    <BottomIcon
                        source={require('~/Assets\\Images\\Common\\Logo.png')}
                    />
                </ContentsContainer>
            </Container>
        </DismissKeyboard>
    );
};

TimeAdd.navigationOptions = {
    header: null,
}

export default TimeAdd;