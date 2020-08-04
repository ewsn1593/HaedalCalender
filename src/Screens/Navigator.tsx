import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import React from 'react';
import Loading from '~/Screens\\Loading';
import Main from '~/Screens\\Main';


import createAnimatedSwitchNavigator  from 'react-navigation-animated-switch';
import { Transition }  from 'react-native-reanimated';

const MainNavigator = createStackNavigator({
    Main,
});

/*
const NoticeNavigator = createStackNavigator({

});

const TimeNavigator = createStackNavigator({

});
*/

const AppNavigator = createAnimatedSwitchNavigator(
    {
        Loading,
        MainNavigator,
        //NoticeNavigator,
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