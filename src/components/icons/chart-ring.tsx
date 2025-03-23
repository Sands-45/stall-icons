import { StallIconType } from "@/types/icons-types";

const StChartRing = ({
  size = 20,
  color = "currentColor",
  ...props
}: StallIconType) => {
  return (
    <svg
      name="StChartRing"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={2}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
    >
      <path
        d="M9 9L5 5M16 12H22M12 16V22"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="inherit" />
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="inherit" />
    </svg>
  );
};

export default StChartRing;
