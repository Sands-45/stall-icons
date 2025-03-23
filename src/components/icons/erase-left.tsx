import { StallIconType } from "../icons-types";

const StEraseLeft = ({
  size = 20,
  color = "currentColor",
  ...props
}: StallIconType) => {
  return (
    <svg
      name="StEraseLeft"
      viewBox="0 0 24 24"
      strokeWidth="2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
    >
      <path
        d="M22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H11C9.03715 20 8.05573 20 7.21115 19.5777C6.36656 19.1554 5.77771 18.3703 4.6 16.8C2.86667 14.4889 2 13.3333 2 12C2 10.6667 2.86667 9.51111 4.6 7.2C5.77771 5.62972 6.36656 4.84458 7.21115 4.42229C8.05573 4 9.03715 4 11 4L14 4C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12Z"
        stroke={color}
        strokeWidth="inherit"
      />
      <path
        d="M10 15L16 9.00039M10 9L16 14.9996"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StEraseLeft;