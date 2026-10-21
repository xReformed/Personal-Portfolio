const paths = {
  left: "M19 12H5m6-6-6 6 6 6",
  right: "M5 12h14m-6-6 6 6-6 6",
  "up-right": "M7 17 17 7M8 7h9v9",
};

const ArrowIcon = ({
  direction,
  size = 16,
}: {
  direction: keyof typeof paths;
  size?: number;
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={paths[direction]} />
  </svg>
);

export default ArrowIcon;
