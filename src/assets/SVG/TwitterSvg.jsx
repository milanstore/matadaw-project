import * as React from "react";

const TwitterSvg = (props) => (
  <svg
    width={54}
    height={55}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={2.5}
      y={6.795}
      width={45}
      height={45}
      rx={22.5}
      fill="#DE1CF6"
      fillOpacity={0.05}
    />
    <rect x={2.5} y={6.795} width={45} height={45} rx={22.5} stroke="#D9D9D9" />
    <rect x={2.5} y={6.795} width={45} height={45} rx={22.5} stroke="url(#a)" />
    <g filter="url(#b)">
      <rect
        x={4.5}
        y={4.795}
        width={45}
        height={45}
        rx={22.5}
        stroke="#D9D9D9"
      />
      <rect
        x={4.5}
        y={4.795}
        width={45}
        height={45}
        rx={22.5}
        stroke="url(#c)"
      />
    </g>
    <path
      d="M36.644 22.233c-.835.37-1.733.62-2.675.732a4.67 4.67 0 0 0 2.047-2.578 9.3 9.3 0 0 1-2.957 1.13 4.66 4.66 0 0 0-7.938 4.25 13.23 13.23 0 0 1-9.602-4.867 4.66 4.66 0 0 0 1.442 6.22 4.648 4.648 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.736 4.567 4.692 4.692 0 0 1-2.104.08 4.66 4.66 0 0 0 4.352 3.234 9.348 9.348 0 0 1-5.786 1.995 9.5 9.5 0 0 1-1.111-.065 13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.097 13.255-13.253 0-.2-.005-.402-.014-.603a9.47 9.47 0 0 0 2.322-2.41l.003-.002Z"
      fill="#D9D9D9"
    />
    <path
      d="M36.644 22.233c-.835.37-1.733.62-2.675.732a4.67 4.67 0 0 0 2.047-2.578 9.3 9.3 0 0 1-2.957 1.13 4.66 4.66 0 0 0-7.938 4.25 13.23 13.23 0 0 1-9.602-4.867 4.66 4.66 0 0 0 1.442 6.22 4.648 4.648 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.736 4.567 4.692 4.692 0 0 1-2.104.08 4.66 4.66 0 0 0 4.352 3.234 9.348 9.348 0 0 1-5.786 1.995 9.5 9.5 0 0 1-1.111-.065 13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.097 13.255-13.253 0-.2-.005-.402-.014-.603a9.47 9.47 0 0 0 2.322-2.41l.003-.002Z"
      fill="url(#d)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={25}
        y1={6.295}
        x2={25}
        y2={52.295}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EF9D57" />
        <stop offset={1} stopColor="#E45C00" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={27}
        y1={4.295}
        x2={27}
        y2={50.295}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EF9D57" />
        <stop offset={1} stopColor="#E45C00" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={25.291}
        y1={20.043}
        x2={25.291}
        y2={38.502}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EF9D57" />
        <stop offset={1} stopColor="#E45C00" />
      </linearGradient>
      <filter
        id="b"
        x={0}
        y={0.295}
        width={54}
        height={54}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          stdDeviation={2}
          result="effect1_foregroundBlur_628_556"
        />
      </filter>
    </defs>
  </svg>
);

export default TwitterSvg;
