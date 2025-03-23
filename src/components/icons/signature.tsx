import { StallIconType } from "@/types/icons-types";

const StSignature = ({
  size = 20,
  color = "currentColor",
  ...props
}: StallIconType) => {
  return (
    <svg
      name="StSignature"
      viewBox="0 0 24 24"
      strokeWidth="2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
    >
      <path
        d="M22 12.6342C18 16.1464 17.4279 10.6209 15.3496 11.0164C13 11.4635 11.5 16.4443 13 16.4443C14.5 16.4443 12.5 10.4999 10.5 12.5554C8.5 14.611 7.85936 17.2945 6.23526 15.3023C-1.5 5.81434 4.99998 -1.15006 8.16322 3.45673C10.1653 6.37244 6.5 16.9768 2 21.9999"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 20.9999H19"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StSignature;
