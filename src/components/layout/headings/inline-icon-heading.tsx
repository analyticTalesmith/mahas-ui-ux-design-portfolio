import React from 'react';
import { StackedSVG, svgColorClassMap } from '@/components/svgs/stacked-svg';

interface InlineIconHeadingProps {
  icon: React.ReactNode; // SVG or icon component passed as child
  heading: string;
  front?: keyof typeof svgColorClassMap;
  back?: keyof typeof svgColorClassMap;
}

const InlineIconHeading: React.FC<InlineIconHeadingProps> = ({ icon, heading, front, back}) => {
  return (
    <span className="flex-row flex space-x-4 items-center">
    <StackedSVG front={front|| undefined} back={back || undefined}>
      <div>{icon}</div>
    </StackedSVG>    
    <h2 className="styled-h2 text-7xl">{heading}</h2> {/* Render the heading text */}
    </span>
  );
};

export default InlineIconHeading;
