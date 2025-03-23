import { StallIconType } from "../icons-types";

const StPaintBoard = ({
  size = 20,
  color = "currentColor",
  ...props
}: StallIconType) => {
  return (
    <svg
      name="StPaintBoard"
      viewBox="0 0 24 24"
      strokeWidth="2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
    >
      <path
        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.8417 22 14 22.1163 14 21C14 20.391 13.6832 19.9212 13.3686 19.4544C12.9082 18.7715 12.4523 18.0953 13 17C13.6667 15.6667 14.7778 15.6667 16.4815 15.6667C17.3334 15.6667 18.3334 15.6667 19.5 15.5C21.601 15.1999 22 13.9084 22 12Z"
        stroke={color}
        strokeWidth="inherit"
      />
      <path
        d="M7 15.0024L7.00868 15.0001"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="8.5" r="1.5" stroke={color} strokeWidth="inherit" />
      <circle cx="16.5" cy="9.5" r="1.5" stroke={color} strokeWidth="inherit" />
    </svg>
  );
};

export default StPaintBoard;
