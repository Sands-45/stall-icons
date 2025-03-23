import { StallIconType } from "@/types/icons-types";

const StChartRelationships = ({
  size = 20,
  color = "currentColor",
  ...props
}: StallIconType) => {
  return (
    <svg
    name="StChartRelationships"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={2}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
    >
      <path
        d="M11 5L18 5"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10L14.5 14.5"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 11L5 18"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="6.44444"
        cy="6.44444"
        r="4.44444"
        stroke={color}
        strokeWidth="inherit"
      />
      <circle cx="5" cy="20" r="2" stroke={color} strokeWidth="inherit" />
      <circle cx="16" cy="16" r="2" stroke={color} strokeWidth="inherit" />
      <circle cx="20" cy="5" r="2" stroke={color} strokeWidth="inherit" />
    </svg>
  );
};

export default StChartRelationships;
