import { StallIconType } from "@/types/icons-types";

const StDiscount2 = ({
  size = 20,
  color = "currentColor",
  ...props
}: StallIconType) => {
  return (
    <svg
    name="StDiscount2"
      viewBox="0 0 24 24"
      strokeWidth={2}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
    >
      <path
        d="M10.9961 10H11.0111M10.9998 16H11.0148"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 13H15"
        stroke={color}
        strokeWidth="inherit.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="1.5"
        cy="1.5"
        r="1.5"
        transform="matrix(1 0 0 -1 16 8.00024)"
        stroke={color}
        strokeWidth="inherit.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.77423 11.1439C1.77108 12.2643 1.7495 13.9546 2.67016 15.1437C4.49711 17.5033 6.49674 19.5029 8.85633 21.3298C10.0454 22.2505 11.7357 22.2289 12.8561 21.2258C15.8979 18.5022 18.6835 15.6559 21.3719 12.5279C21.6377 12.2187 21.8039 11.8397 21.8412 11.4336C22.0062 9.63798 22.3452 4.46467 20.9403 3.05974C19.5353 1.65481 14.362 1.99377 12.5664 2.15876C12.1603 2.19608 11.7813 2.36233 11.472 2.62811C8.34412 5.31646 5.49781 8.10211 2.77423 11.1439Z"
        stroke={color}
        strokeWidth="inherit.5"
      />
    </svg>
  );
};

export default StDiscount2;
