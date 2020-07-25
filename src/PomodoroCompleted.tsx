import React, {useEffect} from 'react';
import {
  Text,
  ToastAndroid,
  Platform,
  View,
  Pressable,
  Vibration,
} from 'react-native';
import CheckIcon from './CheckIcon';
import {availablePomodoros} from './availablePomodoros';
import {addPomodoro} from './addPomodoro';
import {primaryColor} from './styles';
import Sound from 'react-native-sound';

// Enable playback in silence mode
Sound.setCategory('Playback');

function PomodoroCompleted({navigation}: any) {
  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  useEffect(() => {
    const alarmSound = new Sound(
      'old_alarm_clock_sound.mp3',
      Sound.MAIN_BUNDLE,
      (error) => {
        console.log(error);
        return;
      },
    );

    // Play the sound with an onEnd callback
    alarmSound.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });

    alarmSound.setNumberOfLoops(-1);

    if (Platform.OS === 'android') {
      Vibration.vibrate(10 * ONE_SECOND_IN_MS, true);
    } else {
      Vibration.vibrate(PATTERN, true);
    }

    return () => {
      Vibration.cancel();
      // Release the audio player resource
      alarmSound.release();
    };
  }, []);

  useEffect(() => {
    function handleBeforeRemove(e: any) {
      const action = e.data.action;

      // don't prevent anything else than go back
      if (action.type !== 'GO_BACK') {
        return;
      }
      // Prevent default behavior of leaving the screen
      e.preventDefault();

      // Prompt the user before leaving the screen
      const message = `Where you want to go back? in stale Pomodoro`;

      if (Platform.OS === 'android') {
        ToastAndroid.show(message, 2000);
      }
    }

    navigation.addListener('beforeRemove', handleBeforeRemove);

    return () => navigation.removeListener('beforeRemove', handleBeforeRemove);
  }, []);

  function handleShortBreak() {
    const shortBreak = availablePomodoros.find((p) => p.id === 'shortBreak');

    if (!shortBreak) {
      console.log("can't find the shortbreak");
      return;
    }
    addPomodoro(shortBreak.minutes, navigation);
  }

  function handleSelectPomodoro() {
    navigation.navigate('SelectPomodoro');
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: 46,
            height: 46,
            borderRadius: 100,
            backgroundColor: primaryColor,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 16,
          }}>
          <CheckIcon
            style={{color: '#fff', strokeWidth: 20}}
            width={32}
            height={32}
          />
        </View>
        <Text style={{fontSize: 16}}>Pomodoro Completed</Text>
      </View>
      <View
        style={{
          marginTop: 64,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}>
        <Pressable
          style={{
            borderWidth: 2,
            borderColor: primaryColor,
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: 16,
            borderRadius: 6,
          }}
          onPress={handleShortBreak}>
          <Text style={{color: '#000'}}>Start a Break</Text>
        </Pressable>
        <Pressable
          style={{
            borderWidth: 2,
            borderColor: primaryColor,
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: 16,
            borderRadius: 6,
          }}
          onPress={handleSelectPomodoro}>
          <Text style={{color: '#000'}}>Select Pomodoro</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default PomodoroCompleted;
