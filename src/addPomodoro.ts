import {addMinutes, getUnixTime} from 'date-fns';

export function addPomodoro(minutes: number, navigation: any) {
  const currentDate = new Date();
  const pomodoroEndDate = addMinutes(currentDate, minutes);
  navigation.navigate('RunningPomodoro', {
    pomodoroEnd: getUnixTime(pomodoroEndDate),
  });
}
