import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SelectPomodoro from './SelectPomodoro';
import RunningPomodoro from './RunningPomodoro';
import PomodoroCompleted from './PomodoroCompleted';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="SelectPomodoro"
              component={SelectPomodoro}
              options={{title: 'Select Pomodoro'}}></Stack.Screen>
            <Stack.Screen
              name="RunningPomodoro"
              component={RunningPomodoro}
              options={{title: 'Running Pomodoro'}}></Stack.Screen>
            <Stack.Screen
              name="PomodoroCompleted"
              component={PomodoroCompleted}
              options={{title: 'Pomodoro Completed'}}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
