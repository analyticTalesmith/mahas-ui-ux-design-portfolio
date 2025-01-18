interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
  }
  
  const Heart = ({ className, ...props }: IconProps) => {
    return (
      <svg
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        preserveAspectRatio="xMidYMid meet"
        className={className}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9999 3.94228C13.1757 2.85872 14.7069 2.25 16.3053 2.25C18.0313 2.25 19.679 2.95977 20.8854 4.21074C22.0832 5.45181 22.75 7.1248 22.75 8.86222C22.75 10.5997 22.0831 12.2728 20.8854 13.5137C20.089 14.3393 19.2938 15.1836 18.4945 16.0323C16.871 17.7562 15.2301 19.4985 13.5256 21.14L13.5216 21.1438C12.6426 21.9779 11.2505 21.9476 10.409 21.0754L3.11399 13.5136C0.62867 10.9374 0.62867 6.78707 3.11399 4.21085C5.54605 1.68984 9.46239 1.60032 11.9999 3.94228Z"
          fill="currentColor"
        ></path>
      </svg>
    );
  };
  
  export { Heart };
  