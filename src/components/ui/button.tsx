import * as React from "react"
import { cn } from "@/lib/utils"

const sizeVariants = {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-md px-3 text-xs",
  lg: "h-10 rounded-full px-8",
  icon: "h-10 w-10",
} as const

type ButtonSize = keyof typeof sizeVariants

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          "focus-bold inline-flex items-center justify-center gap-2",
          "whitespace-nowrap rounded-2xs text-sm font-medium",
          "transition-colors",
          "disabled:pointer-events-none disabled:opacity-50",
          "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          // Size variant
          sizeVariants[size],
          // Custom classes passed in
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"


const boldButtonColorClassMap = {
  primary: "bg-primary text-on-primary border-2 border-primary-fixed-darkest shadow-primary",
  secondary: "bg-secondary text-on-secondary border-2 border-secondary-fixed-darkest shadow-secondary",
  tertiary: "bg-tertiary text-on-tertiary border-2 border-tertiary-fixed-darkest shadow-tertiary",
  info: "bg-info text-on-info border-2 border-info-fixed-darkest shadow-info",
  success: "bg-success text-on-success border-2 border-success-fixed-darkest shadow-success",
  warning: "bg-warning text-on-warning border-2 border-warning-fixed-darkest shadow-warning",
  danger: "bg-danger text-on-danger border-2 border-danger-fixed-darkest shadow-danger",
} as const;

type ColorVariant = keyof typeof boldButtonColorClassMap;

interface BoldButtonProps extends ButtonProps {
  color: ColorVariant;
}

const BoldButton = React.forwardRef<HTMLButtonElement, BoldButtonProps>(
  ({ color, className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "font-semibold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all",
          boldButtonColorClassMap[color],
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

BoldButton.displayName = "BoldButton";


const largePillButtonColorClassMap = {
  primary: "bg-primary-mid text-on-primary border-primary-fixed-darkest shadow-secondary",
  secondary: "bg-secondary-mid text-on-secondary border-primary-fixed-darkest shadow-black hover:border-primary-fixed-darker",
  tertiary: "bg-tertiary text-on-tertiary border-tertiary-fixed-darkest shadow-tertiary",
  info: "bg-info text-on-info border-info-fixed-darkest shadow-info",
  success: "bg-success text-on-success border-success-fixed-darkest shadow-success",
  warning: "bg-warning text-on-warning border-warning-fixed-darkest shadow-warning",
  danger: "bg-danger text-on-danger border-danger-fixed-darkest shadow-danger",
} as const;

type PillColorVariant = keyof typeof largePillButtonColorClassMap;

interface LargePillButtonProps extends ButtonProps {
  color: PillColorVariant;
}

const LargePillButton = React.forwardRef<HTMLButtonElement, LargePillButtonProps>(
  ({ color, className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "font-bold text-xl font-josefin-sans my-8 p-8 border-4 uppercase",
          "relative flex items-center justify-center overflow-hidden",
          "before:ease relative overflow-hidden",
          "transition-all before:absolute before:right-0 before:top-0 before:h-40",
          "before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-500",
          "hover:before:-translate-x-80",
          largePillButtonColorClassMap[color],
          className
        )}
        size="lg"
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </Button>
    );
  }
);

LargePillButton.displayName = "LargePillButton";


export { Button, BoldButton, LargePillButton }
