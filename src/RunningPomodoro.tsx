import React, {useState, useRef, useEffect} from 'react';
import {View} from 'react-native';
import {getUnixTime, fromUnixTime} from 'date-fns';
import TimeLeftFormatted from './TimeLeftFomatted';

function RunningPomodoro({navigation, route}: any) {
  const {pomodoroEnd} = route.params;
  const dateTimeOfPomodoEnd = fromUnixTime(pomodoroEnd);
  const [currentDateTime, setCurrentTime] = useState(new Date());
  let interval = useRef<any | null>(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      const newCurrenTime = new Date();
      const epoch = getUnixTime(newCurrenTime);

      if (epoch >= pomodoroEnd) {
        navigation.navigate('PomodoroCompleted');
      } else {
        setCurrentTime(newCurrenTime);
      }
    }, 1000);

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  });

  if (typeof pomodoroEnd !== 'number') {
    navigation.navigate('SelectPomodoro');
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TimeLeftFormatted
        baseDateTime={dateTimeOfPomodoEnd}
        dateTime={currentDateTime}
      />
    </View>
  );
}

export default RunningPomodoro;
