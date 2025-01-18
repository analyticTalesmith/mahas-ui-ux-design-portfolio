import React from 'react';
import Link from 'next/link';

// Container component for the whole card
const ProjectCard = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col m-4 text-on-surface bg-surface-container rounded-sm p-8 text-lg">
      {children}
    </div>
  );
};

// Featured Image component
interface FeaturedImageProps {
  src: string;
  alt: string;
}

const FeaturedImage: React.FC<FeaturedImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-full h-full object-contain mb-8 max-h-96" />;
};

// Category component
const ProjectCategory = ({ children }: {children: React.ReactNode}) => {
  return (
    <p className="uppercase italic text-base font-light tracking-4x-wide">{children}</p>
  );
};

// Project Title component
const ProjectTitle = ({ children }: {children: React.ReactNode}) => {
  return <h3 className="styled-h3 text-6xl font-black mb-4">{children}</h3>;
};

// Project Summary component
const ProjectSummary= ({ children }: {children: React.ReactNode}) => {
  return <p className="text-lg mb-8">{children}</p>;
};

// Project Page Link component
interface ProjectPageLinkProps {
  src: string;
}

const ProjectPageLink: React.FC<ProjectPageLinkProps> = ({ src }) => {
  return (
    <Link href={src} className="text-primary-high underline tracking-4x-wide uppercase hover:text-primary-mid">
      Learn More
    </Link>
  );
};


const ProjectPageLinkPlaceholder: React.FC = () => {
  return (
    <span className="text-primary-high/50 tracking-4x-wide uppercase">
      Write-Up Coming Soon
    </span>
  );
};

export { ProjectCard, FeaturedImage, ProjectCategory, ProjectTitle, ProjectSummary, ProjectPageLink, ProjectPageLinkPlaceholder };
