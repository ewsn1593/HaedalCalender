import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import React from 'react';
import Loading from '~/Screens\\Loading';
import Main from '~/Screens\\Main';
import Notice from '~/Screens\\Notice';
import NoticeDetail from '~/Screens\\NoticeDetail';
import TimeTable from '~/Screens\\TimeTable';
import Calendar from '~/Screens\\Calendar'

import createAnimatedSwitchNavigator  from 'react-navigation-animated-switch';
import { Transition }  from 'react-native-reanimated';

const MainNavigator = createStackNavigator(
{
  Main,
  Notice,
  NoticeDetail,
  TimeTable,
  Calendar,
},
{
  headerLayoutPreset : 'center'
}
);

/*
const NoticeNavigator = createStackNavigator({
  
});

/*
const TimeNavigator = createStackNavigator({

});
*/

const AppNavigator = createAnimatedSwitchNavigator(
    {
        Loading,
        MainNavigator,
        //TimeNavigator,
    },
    {
        initialRouteName: 'Loading',
        transition: (
            <Transition.Together>
              <Transition.Out
                type="slide-bottom"
                durationMs={400}
                interpolation="easeIn"
              />
              <Transition.In type="fade" durationMs={500} />
            </Transition.Together>
          ),
    }
);

export default createAppContainer(AppNavigator);