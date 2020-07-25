import React from 'react';
import {View, Text} from 'react-native';
import {getMinutesAndSecondsLeft} from './getMinutesAndSecondsLeft';

interface TimeLeftFormattedProps {
  dateTime: Date;
  baseDateTime: Date;
}

function TimeLeftFormatted(props: TimeLeftFormattedProps) {
  const {baseDateTime, dateTime} = props;
  const [minutes, seconds] = getMinutesAndSecondsLeft(baseDateTime, dateTime);

  return (
    <View style={{flexDirection: 'row'}}>
      {Boolean(minutes) && (
        <Text style={{fontSize: 46, color: '#454545', fontWeight: 'bold'}}>
          {minutes.toString()}
        </Text>
      )}
      {Boolean(minutes) && (
        <Text style={{fontSize: 46, color: '#454545', fontWeight: 'bold'}}>
          :
        </Text>
      )}
      <Text style={{fontSize: 46, color: '#454545', fontWeight: 'bold'}}>
        {seconds.toString()}
      </Text>
    </View>
  );
}

export default TimeLeftFormatted;
