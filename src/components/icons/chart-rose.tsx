import { StallIconType } from "@/types/icons-types";

const StChartRose = ({
  size = 20,
  color = "currentColor",
  ...props
}: StallIconType) => {
  return (
    <svg
      name="StChartRose"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={2}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
    >
      <path
        d="M9.71361 7.97461C6.60553 7.97461 4.08594 10.2303 4.08594 13.0129H9.71361V7.97461Z"
        stroke={color}
        strokeWidth="inherit"
      />
      <path
        d="M2.53453 15.9261C3.77319 18.3681 6.52105 20.0664 9.71196 20.0664L9.71196 13.0128H4.87217C3.40834 13.0128 2.67643 13.0128 2.23141 13.732C1.78639 14.4512 2.03577 14.9428 2.53453 15.9261Z"
        stroke={color}
        strokeWidth="inherit"
      />
      <path
        d="M12.7153 21.6766C16.8439 20.5311 19.8427 17.0854 19.8427 13.0127H9.71289V19.0586C9.71289 20.5322 9.71289 21.269 10.3135 21.7226C10.9142 22.1763 11.5145 22.0097 12.7153 21.6766Z"
        stroke={color}
        strokeWidth="inherit"
      />
      <path
        d="M21.6417 10.0343C20.4542 6.21439 17.0389 3.22528 12.7279 2.25958C11.4784 1.97968 10.8536 1.83973 10.2833 2.29354C9.71289 2.74735 9.71289 3.48208 9.71289 4.95155V13.0127H19.0548C20.5347 13.0127 21.2746 13.0127 21.7301 12.3984C22.1856 11.784 22.0043 11.2008 21.6417 10.0343Z"
        stroke={color}
        strokeWidth="inherit"
      />
    </svg>
  );
};

export default StChartRose;
