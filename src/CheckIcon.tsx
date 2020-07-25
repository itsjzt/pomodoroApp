import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
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
      className="prefix__feather prefix__feather-check"
      {...props}>
      <Path d="M20 6L9 17l-5-5" />
    </Svg>
  );
}

export default CheckIcon;
