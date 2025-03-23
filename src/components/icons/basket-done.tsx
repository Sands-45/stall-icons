import { StallIconType } from "@/types/icons-types";

const StBasketDone = ({
  size = 20,
  color = "currentColor",
  ...props
}: StallIconType) => {
  return (
    <svg
      name="StBasketDone"
      viewBox="0 0 24 24"
      strokeWidth="2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
    >
      <path
        d="M11.5 8H20.196C20.8208 8 21.1332 8 21.3619 8.10084C22.3736 8.5469 21.9213 9.67075 21.7511 10.4784C21.7205 10.6235 21.621 10.747 21.4816 10.8132C20.9446 11.068 20.6384 11.4914 20.4665 12M7.5 8H3.80397C3.17922 8 2.86684 8 2.63812 8.10084C1.6264 8.5469 2.07874 9.67075 2.24894 10.4784C2.27952 10.6235 2.37896 10.747 2.51841 10.8132C3.09673 11.0876 3.50177 11.6081 3.60807 12.2134L4.20066 15.5878C4.46138 17.0725 4.55052 19.1942 5.8516 20.2402C6.8062 21 8.18162 21 10.9325 21H11.5"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
      />
      <path
        d="M14 19C14 19 15 19 16 21C16 21 19.1765 16 22 15"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 11L10 3M15 3L17.5 8"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default StBasketDone;
