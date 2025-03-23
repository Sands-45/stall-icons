import { StallIconType } from "@/types/icons-types";

const StSpeed = ({
  size = 20,
  color = "currentColor",
  ...props
}: StallIconType) => {
  return (
    <svg
      name="StSpeed"
      viewBox="0 0 24 24"
      strokeWidth="2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
    >
      <path
        d="M4 7.84L17.3333 4L13.3333 9.12L20 14.24L4 20L12 12.96L4 7.84Z"
        stroke={color}
        strokeWidth="inherit"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StSpeed;