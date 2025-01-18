import React from 'react';
import { cn } from '@/lib/utils';

interface CenteredContainerProps {
  children: React.ReactNode;
  className?: string;
}

const CenteredContainer: React.FC<CenteredContainerProps> = ({ children, className }) => {
  return (
    <div className="flex justify-center items-center m-2 sm:m-4 md:m-6 lg:m8 xl:m-16">
      <div
        className={cn("flex flex-col w-full max-w-7xl p-8",
          className)}
      >
        {children}
      </div>
    </div>
  );
};

export default CenteredContainer;
