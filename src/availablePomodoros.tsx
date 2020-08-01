import React from 'react';
import TargetIcon from './TargetIcon';
import CoffeeIcon from './CoffeeIcon';
import MoonIcon from './MoonIcon';
import ZapIcon from './ZapIcon';
import {primaryColor} from './styles';
import MaggiIcon from './MaggiIcon';

export const availablePomodoros = [
  {
    id: 'FocussedWork',
    minutes: 25,
    label: 'Focussed Work',
    icon: <TargetIcon color={primaryColor} width={50} height={50} />,
  },
  {
    id: 'shortBreak',
    minutes: 5,
    label: 'Short Break',
    icon: <CoffeeIcon color={primaryColor} width={50} height={50} />,
  },
  {
    id: 'powerNap',
    minutes: 30,
    label: 'Power Nap',
    icon: <MoonIcon color={primaryColor} width={50} height={50} />,
  },
  {
    id: 'maggiBreak;',
    minutes: 1,
    label: 'Maggi break',
    icon: <ZapIcon color={primaryColor} width={50} height={50} />,
  },
];
