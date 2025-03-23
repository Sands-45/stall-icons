import { StallIconType } from "../icons-types";

const StDatabaseSync = ({
  size = 20,
  color = "currentColor",
  ...props
}: StallIconType) => {
  return (
    <svg
      name="StDatabaseSync"
      viewBox="0 0 24 24"
      strokeWidth="2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
    >
      <path
        d="M13 17L14.0228 17.5944C14.5374 15.7277 16.5114 14.6199 18.4318 15.1201C19.4149 15.3761 20.1934 16.0039 20.6501 16.806M22 20L20.9774 19.4056C20.4628 21.2723 18.4888 22.3801 16.5684 21.8799C15.6081 21.6298 14.8431 21.0251 14.3824 20.2496"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 13V11.5C21 7.02166 21 4.78249 19.6088 3.39124C18.2175 2 15.9783 2 11.5 2C7.02166 2 4.78249 2 3.39124 3.39124C2 4.78249 2 7.02166 2 11.5C2 15.9783 2 18.2175 3.39124 19.6088C4.61763 20.8351 6.50289 20.9805 10 20.9977H11"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
      />
      <path
        d="M2 11.5H21"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 6.5L16.5 6.5"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="7.75"
        cy="6.5"
        r="1.25"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="7.75"
        cy="16.5"
        r="1.25"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StDatabaseSync;