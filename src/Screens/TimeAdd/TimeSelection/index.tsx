import React, { useState, useEffect } from 'react';
import Styled from 'styled-components/native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import DateTimePiker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
//const Modal = Styled.Modal``;
const Container = Styled.View`
    width: 78.66666666666667%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const DayText = Styled.Text`
    font-size: 18px;
`;
const StartingText = Styled.Text`
    font-size: 18px;
`;
const BetweenText = Styled.Text`
    font-size : 18px;
`;
const EndingText = Styled.Text`
    font-size: 18px;
`;

const Button = Styled.TouchableOpacity``;
const ButtonImage = Styled.Image``;

const ModalContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    
`;
const ModalContent = Styled.TouchableOpacity`
    background-color: white;
    width: 77%;
    height: 5%;
    border: 1px solid black;
    border-radius: 10px;
    justify-content: center;
    align-items:center;
`;
const ModalText = Styled.Text`
    font-size: 18px;
`;


interface Props{
    idNumber : number,
    setTimeDictionary : (p: any) => any,
    getCurrentTimeDictionary : () => any,
}

const TimeSelection = ({idNumber, setTimeDictionary, getCurrentTimeDictionary}: Props) => {
        const [ ModalOpen, setModalOpen ] = useState<boolean>(false);
        const [ Day, setDay ] = useState<any>((new Date()).getDay());
        const [ StartPoint, setStartPoint ] = useState<any>(new Date("December 18, 1998, 9:00:00"));
        const [ EndPoint, setEndPoint ] = useState<any>(new Date("December 18, 1998, 10:00:00"));
        const [ ShowStartTimePicker, setShowStartTimePicker ] = useState<boolean>(false)
        const [ ShowEndTimePicker, setShowEndTimePicker ] = useState<boolean>(false)


        useEffect(()=>{

            
        })
        const dateToString = (date:object) => {
            let hour = date.getHours();
            let minute = date.getMinutes();
            let miridium = hour>=12 ? '오후 ' : '오전 ';
            hour = hour>12 ? hour-12 : hour;
            hour = hour>9 ? String(hour) : '0'+hour;
            minute = minute>9 ? String(minute) : '0' + minute;


            return(miridium + hour + ':' + minute);
            
        };

        const dayToString = (day:number) => {
            let Value;
            switch(day){
                case 1:
                    Value='월';
                    break;
                case 2:
                    Value='화';
                    break;
                case 3:
                    Value='수';
                    break;
                case 4:
                    Value='목';
                    break;
                case 5:
                    Value='금';
                    break;
            }
            return Value;
        };

    return (
        <Container>
            <DayText>{dayToString(Day)}</DayText>
            <Button
                onPress={() => setModalOpen(true)}>
                <ButtonImage
                    source={require('~/Assets\\Images\\TimeTable\\Selector.png')}
                />
                <Modal
                    isVisible={ModalOpen}    
                    animationInTiming={600}    
                    animationOutTiming={800} 
                    onBackButtonPress={()=>setModalOpen(false)}
                >
                    <ModalContainer>
                        <ModalContent onPress={()=>{
                            setDay(1);
                            let dict = getCurrentTimeDictionary();
                            dict[idNumber]['Day'] = 1;
                            setTimeDictionary(dict);
                            setModalOpen(false);
                            
                        }}>
                            <ModalText>월</ModalText>
                        </ModalContent>
                        <ModalContent onPress={()=>{
                            setDay(2);
                            let dict = getCurrentTimeDictionary();
                            dict[idNumber]['Day'] = 2;
                            setTimeDictionary(dict);
                            setModalOpen(false);
                        }}>
                            <ModalText>화</ModalText>
                        </ModalContent>
                        <ModalContent onPress={()=>{
                            setDay(3);
                            let dict = getCurrentTimeDictionary();
                            dict[idNumber]['Day'] = 3;
                            setTimeDictionary(dict);
                            setModalOpen(false);
                        }}>
                            <ModalText>수</ModalText>
                        </ModalContent>
                        <ModalContent onPress={()=>{
                            setDay(4);
                            let dict = getCurrentTimeDictionary();
                            dict[idNumber]['Day'] = 4;
                            setTimeDictionary(dict);
                            setModalOpen(false);
                        }}>
                            <ModalText>목</ModalText>
                        </ModalContent>
                        <ModalContent onPress={()=>{
                            setDay(5);
                            let dict = getCurrentTimeDictionary();
                            dict[idNumber]['Day'] = 5;
                            setTimeDictionary(dict);
                            setModalOpen(false);
                        }}>
                            <ModalText>금</ModalText>
                        </ModalContent>
                    </ModalContainer>
                </Modal>
            </Button>
            
            <StartingText>{dateToString(StartPoint)}</StartingText>
            <Button
                onPress={() => setShowStartTimePicker(true)}>
                <ButtonImage
                    source={require('~/Assets\\Images\\TimeTable\\Selector.png')}
                />
                {ShowStartTimePicker && (
                    <DateTimePiker
                        testID="test"
                        mode={'time'}
                        value={StartPoint}
                        is24Hour={false}
                        display="spinner"
                        onChange={(event, selectedDate) => {
                            setShowStartTimePicker(false);
                            if(selectedDate !== undefined){
                                setStartPoint(selectedDate);
                                let dict = getCurrentTimeDictionary();
                                dict[idNumber]['StartPoint'] = selectedDate;
                                setTimeDictionary(dict);
                            }
                        }}
                    />
                )}
            </Button>
            <BetweenText> ~ </BetweenText>
            <EndingText>{dateToString(EndPoint)}</EndingText>
            <Button
                onPress={() => setShowEndTimePicker(true)}>
                <ButtonImage
                    source={require('~/Assets\\Images\\TimeTable\\Selector.png')}
                />
                {ShowEndTimePicker && (
                    <DateTimePiker
                        testID="test"
                        mode={'time'}
                        value={EndPoint}
                        is24Hour={false}
                        display="spinner"
                        onChange={(event, selectedDate) => {
                            setShowEndTimePicker(false);
                            if(selectedDate !== undefined){
                                setEndPoint(selectedDate);   
                                let dict = getCurrentTimeDictionary();
                                dict[idNumber]['EndPoint'] = selectedDate;
                                setTimeDictionary(dict); 
                            }    
                        }}
                    />
                )}
            </Button>
            
        </Container>
    )
}

export default TimeSelection;