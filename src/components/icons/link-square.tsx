import { StallIconType } from "@/types/icons-types";

const StLinkSquare = ({
  size = 20,
  color = "currentColor",
  ...props
}: StallIconType) => {
  return (
    <svg
      name="StLinkSquare"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={2}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
    >
      <path
        d="M11.1002 3C7.45057 3.00657 5.53942 3.09617 4.31806 4.31754C3 5.63559 3 7.75698 3 11.9997C3 16.2425 3 18.3639 4.31806 19.6819C5.63611 21 7.7575 21 12.0003 21C16.243 21 18.3644 21 19.6825 19.6819C20.9038 18.4606 20.9934 16.5494 21 12.8998"
        stroke={color}
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.0713 4.0315C21.3649 3.73926 21.3659 3.26439 21.0737 2.97085C20.7814 2.6773 20.3066 2.67625 20.013 2.9685L21.0713 4.0315ZM10.4708 12.4685C10.1773 12.7607 10.1763 13.2356 10.4685 13.5292C10.7607 13.8227 11.2356 13.8237 11.5292 13.5315L10.4708 12.4685ZM20.0285 3.22706L19.8977 3.96557L20.0285 3.22706ZM15.9999 2.25C15.5857 2.25004 15.25 2.58585 15.25 3.00007C15.2501 3.41428 15.5859 3.75004 16.0001 3.75L15.9999 2.25ZM20.25 8C20.25 8.41421 20.5858 8.75 21 8.75C21.4142 8.75 21.75 8.41421 21.75 8H20.25ZM20.773 3.97175L21.5115 3.84109V3.84109L20.773 3.97175ZM20.013 2.9685L10.4708 12.4685L11.5292 13.5315L21.0713 4.0315L20.013 2.9685ZM20.1593 2.48855C19.4584 2.36443 18.4016 2.30696 17.5581 2.27871C17.1282 2.26432 16.7396 2.25715 16.4585 2.25357C16.3179 2.25179 16.2038 2.25089 16.1247 2.25045C16.0851 2.25022 16.0543 2.25011 16.0331 2.25006C16.0226 2.25003 16.0144 2.25001 16.0089 2.25001C16.0061 2.25 16.0039 2.25 16.0024 2.25C16.0017 2.25 16.0011 2.25 16.0007 2.25C16.0005 2.25 16.0003 2.25 16.0002 2.25C16.0001 2.25 16.0001 2.25 16 2.25C16 2.25 15.9999 2.25 16 3C16.0001 3.75 16.0001 3.75 16.0001 3.75C16.0001 3.75 16.0001 3.75 16.0001 3.75C16.0001 3.75 16.0002 3.75 16.0003 3.75C16.0006 3.75 16.001 3.75 16.0016 3.75C16.0027 3.75 16.0046 3.75 16.007 3.75001C16.0119 3.75001 16.0193 3.75002 16.0292 3.75005C16.0489 3.7501 16.0782 3.75021 16.1162 3.75042C16.1922 3.75085 16.3027 3.75171 16.4394 3.75345C16.7131 3.75694 17.091 3.76391 17.5079 3.77787C18.3577 3.80633 19.3151 3.86239 19.8977 3.96557L20.1593 2.48855ZM21 8C21.75 8 21.75 7.99996 21.75 7.99991C21.75 7.99988 21.75 7.99982 21.75 7.99975C21.75 7.99963 21.75 7.99946 21.75 7.99926C21.75 7.99884 21.75 7.99826 21.75 7.99752C21.75 7.99603 21.75 7.99388 21.75 7.99109C21.75 7.98552 21.75 7.97739 21.75 7.96683C21.7499 7.9457 21.7498 7.91483 21.7496 7.87526C21.7491 7.79614 21.7482 7.68213 21.7464 7.54148C21.7428 7.2604 21.7356 6.87182 21.7212 6.44203C21.6929 5.59857 21.6355 4.54186 21.5115 3.84109L20.0344 4.1024C20.1375 4.68506 20.1936 5.64247 20.2221 6.49229C20.236 6.90913 20.243 7.28697 20.2465 7.56066C20.2483 7.69739 20.2491 7.80784 20.2496 7.88384C20.2498 7.92183 20.2499 7.95119 20.25 7.9709C20.25 7.98075 20.25 7.98819 20.25 7.99308C20.25 7.99553 20.25 7.99734 20.25 7.9985C20.25 7.99908 20.25 7.99949 20.25 7.99974C20.25 7.99987 20.25 7.99995 20.25 8C20.25 8.00002 20.25 8.00002 20.25 8.00003C20.25 8.00002 20.25 8 21 8ZM19.8977 3.96557C19.9482 3.97451 19.9757 3.99342 19.9911 4.00887C20.0065 4.02432 20.0255 4.05182 20.0344 4.1024L21.5115 3.84109C21.3874 3.13972 20.8609 2.6128 20.1593 2.48855L19.8977 3.96557Z"
        fill={color}
      />
    </svg>
  );
};

export default StLinkSquare;
