import { StallIconType } from "../icons-types";

const StCalculator = ({
  size = 20,
  color = "currentColor",
  ...props
}: StallIconType) => {
  return (
    <svg
      name="StCalculator"
      viewBox="0 0 24 24"
      strokeWidth="2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
    >
      <path
        d="M3 10H21"
        stroke={color}
        strokeWidth="inherit"
        strokeLinejoin="round"
      />
      <path
        d="M15 6L17 6"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 13V11C21 6.75736 21 4.63604 19.682 3.31802C18.364 2 16.2426 2 12 2C7.75736 2 5.63604 2 4.31802 3.31802C3 4.63604 3 6.75736 3 11V13C3 17.2426 3 19.364 4.31802 20.682C5.63604 22 7.75736 22 12 22C16.2426 22 18.364 22 19.682 20.682C21 19.364 21 17.2426 21 13Z"
        stroke={color}
        strokeWidth="inherit"
      />
      <path
        d="M7 14H7.52632M11.7368 14H12.2632M16.4737 14H17"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 18H7.52632M11.7368 18H12.2632M16.4737 18H17"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StCalculator;
