import React from "react";

const BlackCross = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <desc>Created with Pixso.</desc>
      <defs>
        <filter
          id="filter_12_2996_dd"
          x="-0.685059"
          y="-0.707031"
          width="33.414062"
          height="33.414062"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0" dy="4" />
          <feGaussianBlur stdDeviation="1.33333" />
          <feComposite in2="hardAlpha" operator="out" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect_dropShadow_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect_dropShadow_1"
            result="shape"
          />
        </filter>
      </defs>
      <g filter="url(#filter_12_2996_dd)">
        <path
          id="Vector"
          d="M24.63 0L16.02 8.61L7.4 0L4.02 3.38L12.63 12L4.02 20.61L7.4 24L16.02 15.38L24.63 24L28.02 20.61L19.4 12L28.02 3.38L24.63 0Z"
          fill="#292929"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default BlackCross;
