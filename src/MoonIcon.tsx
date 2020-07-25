import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      //   @ts-ignore
      strokeLinecap="round"
      //   @ts-ignore
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-moon"
      {...props}>
      <Path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </Svg>
  );
}

export default MoonIcon;
