import { cn } from "@/lib/utils";

const svgColorClassMap = {
  "primary-fixed-dim": "text-primary-fixed-dim",
  "primary-fixed": "text-primary-fixed",
  "primary-fixed-dark": "text-primary-fixed-dark",
  "primary-fixed-darker": "text-primary-fixed-darker",
  "primary-fixed-darkest": "text-primary-fixed-darkest",
  "secondary-fixed-dim": "text-secondary-fixed-dim",
  "secondary-fixed": "text-secondary-fixed",
  "secondary-fixed-dark": "text-secondary-fixed-dark",
  "secondary-fixed-darker": "text-secondary-fixed-darker",
  "secondary-fixed-darkest": "text-secondary-fixed-darkest",
  "tertiary-fixed-dim": "text-tertiary-fixed-dim",
  "tertiary-fixed": "text-tertiary-fixed",
  "tertiary-fixed-dark": "text-tertiary-fixed-dark",
  "tertiary-fixed-darker": "text-tertiary-fixed-darker",
  "tertiary-fixed-darkest": "text-tertiary-fixed-darkest",
  "success-fixed-dim": "text-success-fixed-dim",
  "success-fixed": "text-success-fixed",
  "success-fixed-dark": "text-success-fixed-dark",
  "success-fixed-darker": "text-success-fixed-darker",
  "success-fixed-darkest": "text-success-fixed-darkest",
  "info-fixed-dim": "text-info-fixed-dim",
  "info-fixed": "text-info-fixed",
  "info-fixed-dark": "text-info-fixed-dark",
  "info-fixed-darker": "text-info-fixed-darker",
  "info-fixed-darkest": "text-info-fixed-darkest",
  "warning-fixed-dim": "text-warning-fixed-dim",
  "warning-fixed": "text-warning-fixed",
  "warning-fixed-dark": "text-warning-fixed-dark",
  "warning-fixed-darker": "text-warning-fixed-darker",
  "warning-fixed-darkest": "text-warning-fixed-darkest",
  "danger-fixed-dim": "text-danger-fixed-dim",
  "danger-fixed": "text-danger-fixed",
  "danger-fixed-dark": "text-danger-fixed-dark",
  "danger-fixed-darker": "text-danger-fixed-darker",
  "danger-fixed-darkest": "text-danger-fixed-darkest",
  "primary-lower": "text-primary-lower",
  "primary-low": "text-primary-low",
  "primary-mid": "text-primary-mid",
  "primary-high": "text-primary-high",
  "primary-higher": "text-primary-higher",
  "secondary-lower": "text-secondary-lower",
  "secondary-low": "text-secondary-low",
  "secondary-mid": "text-secondary-mid",
  "secondary-high": "text-secondary-high",
  "secondary-higher": "text-secondary-higher",
  "tertiary-lower": "text-tertiary-lower",
  "tertiary-low": "text-tertiary-low",
  "tertiary-mid": "text-tertiary-mid",
  "tertiary-high": "text-tertiary-high",
  "tertiary-higher": "text-tertiary-higher",
  "success-lower": "text-success-lower",
  "success-low": "text-success-low",
  "success-mid": "text-success-mid",
  "success-high": "text-success-high",
  "success-higher": "text-success-higher",
  "info-lower": "text-info-lower",
  "info-low": "text-info-low",
  "info-mid": "text-info-mid",
  "info-high": "text-info-high",
  "info-higher": "text-info-higher",
  "warning-lower": "text-warning-lower",
  "warning-low": "text-warning-low",
  "warning-mid": "text-warning-mid",
  "warning-high": "text-warning-high",
  "warning-higher": "text-warning-higher",
  "danger-lower": "text-danger-lower",
  "danger-low": "text-danger-low",
  "danger-mid": "text-danger-mid",
  "danger-high": "text-danger-high",
  "danger-higher": "text-danger-higher",
  "primary": "text-primary",
  "on-primary": "text-on-primary",
  "primary-container": "text-primary-container",
  "on-primary-container": "text-on-primary-container",
  "secondary": "text-secondary",
  "on-secondary": "text-on-secondary",
  "secondary-container": "text-secondary-container",
  "on-secondary-container": "text-on-secondary-container",
  "tertiary": "text-tertiary",
  "on-tertiary": "text-on-tertiary",
  "tertiary-container": "text-tertiary-container",
  "on-tertiary-container": "text-on-tertiary-container",
  "on-background": "text-on-background",
  "on-surface": "text-on-surface",
  "on-surface-variant": "text-on-surface-variant",
  "outline": "text-outline",
  "outline-variant": "text-outline-variant",
  "shadow": "text-shadow",
  "success": "text-success",
  "on-success": "text-on-success",
  "success-container": "text-success-container",
  "on-success-container": "text-on-success-container",
  "info": "text-info",
  "on-info": "text-on-info",
  "info-container": "text-info-container",
  "on-info-container": "text-on-info-container",
  "warning": "text-warning",
  "on-warning": "text-on-warning",
  "warning-container": "text-warning-container",
  "on-warning-container": "text-on-warning-container",
  "danger": "text-danger",
  "on-danger": "text-on-danger",
  "danger-container": "text-danger-container",
  "on-danger-container": "text-on-danger-container",
} as const;

type ColorVariant = keyof typeof svgColorClassMap;

interface StackedSVGProps {
  children: React.ReactNode;
  front?: ColorVariant;
  back?: ColorVariant;
  offsetX?: number;
  offsetY?: number;
  className?: string;
}

const StackedSVG: React.FC<StackedSVGProps> = ({
  children,
  front = "secondary-fixed",
  back = "primary-fixed-darkest",
  offsetX = 4, // Default horizontal offset in pixels
  offsetY = 2, // Default vertical offset in pixels
  className = "",
}) => {
  const frontColorClass = svgColorClassMap[front];
  const backColorClass = svgColorClassMap[back];

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Shadow Layer */}
      <div
        className={cn("absolute", backColorClass)}
        style={{
          transform: `translate(${offsetX}px, ${offsetY}px)`,
        }}
        aria-hidden="true"
      >
        {children}
      </div>
      {/* Front Layer */}
      <div className={cn("relative", frontColorClass)}>{children}</div>
    </div>
  );
};

export { StackedSVG, svgColorClassMap };
