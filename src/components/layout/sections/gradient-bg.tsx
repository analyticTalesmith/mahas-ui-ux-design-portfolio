import React, { ReactNode } from 'react';

interface GradientBGWrapperProps {
  children: ReactNode;
}

const GradientBGWrapper: React.FC<GradientBGWrapperProps> = ({ children }) => {
  return (
    <div className="bg-gradient-mesh">
      {children}
    </div>
  );
};

export default GradientBGWrapper;

export {GradientBGWrapper}