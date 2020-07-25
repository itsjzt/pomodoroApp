import React from 'react';
import {View, Pressable, Text} from 'react-native';
import {addPomodoro} from './addPomodoro';
import {availablePomodoros} from './availablePomodoros';

function SelectPomodoro({navigation}: any) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#efefef',
      }}>
      {availablePomodoros.map((pomodoro) => (
        <Pressable
          key={pomodoro.id}
          style={{
            width: '60%',
            maxWidth: 300,
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: 16,
            margin: 16,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 8,
          }}
          onPress={() => addPomodoro(pomodoro.minutes, navigation)}>
          {pomodoro.icon}
          <Text>{pomodoro.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

export default SelectPomodoro;
