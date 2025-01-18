import React from 'react';
import { cn } from '@/lib/utils';

interface ColorBlockCenteredContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ColorBlockCenteredContainer: React.FC<ColorBlockCenteredContainerProps> = ({ children, className }) => {
  return (
    <div className="bg-primary-lower flex justify-center items-center p-2 sp:p-4 pd:p-6 lg:p8 xl:p-16">
      <div
        className={cn("flex flex-col w-full max-w-7xl p-8",
          className)}
      >
        {children}
      </div>
    </div>
  );
};

export default ColorBlockCenteredContainer;
