import { StallIconType } from "@/types/icons-types";

const StWifiCircle = ({
  size = 20,
  color = "currentColor",
  ...props
}: StallIconType) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={2}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
    >
      <path
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke={color}
        strokeWidth="inherit"
      />
      <path
        d="M8 10.3136C9.14883 9.48279 10.5209 9 11.9946 9C13.4729 9 14.849 9.48584 16 10.3214M14.1743 13C13.5182 12.6363 12.7779 12.4317 11.9946 12.4317C11.2152 12.4317 10.4784 12.6343 9.82477 12.9945"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
      />
      <path
        d="M12 16H12.0064"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StWifiCircle;
