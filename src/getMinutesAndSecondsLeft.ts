import {getUnixTime} from 'date-fns';

type TMinuteSecondTuple = [number, number];

export function getMinutesAndSecondsLeft(
  date: Date,
  baseDate: Date,
): TMinuteSecondTuple {
  const unixDate = getUnixTime(date);
  const unixBaseDate = getUnixTime(baseDate);

  const totalSecondDifference = unixDate - unixBaseDate;
  if (totalSecondDifference <= 0) {
    return [0, 0];
  }

  const minutes = Math.floor(totalSecondDifference / 60);
  const seconds = totalSecondDifference % 60;

  return [minutes, seconds];
}
