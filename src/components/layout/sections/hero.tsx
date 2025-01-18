import React, { ReactNode } from 'react';

interface TwoColumnHeroProps {
  children: [ReactNode, ReactNode]; // Expect exactly two children
  className?: string; // Allow additional styling
}

const HomeTwoColumnHero: React.FC<TwoColumnHeroProps> = ({ children, className }) => {
  const [leftChild, rightChild] = children;

  return (
    <div className={`p-4 sm:p-8 lg:p-16 overflow-hidden ${className || ''}`}>
      <div className="max-w-7xl max-md:max-w-md mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-20">
          <div>{leftChild}</div>
          <div>{rightChild}</div>
        </div>
      </div>
    </div>
  );
};

export { HomeTwoColumnHero };