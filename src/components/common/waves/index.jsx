import styles from "./styles.module.css";


export const Wave = ({ direction = "up", className, color = "#ffd100" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1830 85.285"
      className={`${styles.wave} ${direction === "down" ? styles.down : ""} ${className || ""}`}
    >
      <g transform="translate(0 -2185)">
        <path
          d="M4661.665,1785.181c-259.119,3.056-375.993,61.328-576.223,58.3-214.726-3.241-313.76-58.487-572.881-55.435-143.507,1.692-260.3,20.072-313.545,34.408v47.86h1830v-39.258C4967.885,1808.12,4859.114,1782.856,4661.665,1785.181Z"
          transform="translate(-3199.016 399.968)"
          fill={color}
        />
      </g>
    </svg>
  );
};



