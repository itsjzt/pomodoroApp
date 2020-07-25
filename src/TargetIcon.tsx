import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      // @ts-ignore
      strokeLinecap="round"
      // @ts-ignore
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-target"
      {...props}>
      <Circle cx={12} cy={12} r={10} />
      <Circle cx={12} cy={12} r={6} />
      <Circle cx={12} cy={12} r={2} />
    </Svg>
  );
}

export default TargetIcon;
