import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
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
      className="prefix__feather prefix__feather-zap"
      {...props}>
      <Path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </Svg>
  );
}

export default ZapIcon;
