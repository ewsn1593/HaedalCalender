import React from 'react';
import { StatusBar } from 'react-native';
import Navigator from '~/Screens\\Navigator';
import { TimeContextProvider } from '~/Context/TimeContext'

interface Props {}

const App = ({ }: Props) => {
  return (
    <>
      <TimeContextProvider>
        <StatusBar barStyle="light-content" />
        <Navigator />
      </TimeContextProvider>
    </>
  );
};

export default App;