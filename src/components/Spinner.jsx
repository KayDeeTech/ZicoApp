// SpinnerSelfAnimated.jsx
export default function SpinnerSelfAnimated({
  size = 40,
  stroke = 4,
  color = "currentColor",
}) {
  const r = (size - stroke) / 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="status"
      aria-label="Loading"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray="1 200"
        strokeDashoffset="0"
      >
        <animate
          attributeName="stroke-dasharray"
          values="1 200; 90 200; 90 200"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          values="0; -35; -124"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`0 ${size / 2} ${size / 2}`}
          to={`360 ${size / 2} ${size / 2}`}
          dur="1.5s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
}
