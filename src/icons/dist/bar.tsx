import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    viewBox="0 0 40 40"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <defs>
      <filter
        id="c"
        width="295%"
        height="400%"
        x="-97.5%"
        y="-150%"
        filterUnits="objectBoundingBox"
      >
        <feGaussianBlur in="SourceGraphic" stdDeviation={9} />
      </filter>
      <filter
        id="f"
        width="177.8%"
        height="200%"
        x="-38.9%"
        y="-35.7%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={2}
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
        />
      </filter>
      <linearGradient id="a" x1="93.823%" x2="9.004%" y1="9.334%" y2="88.281%">
        <stop offset="0%" stopColor="#D2D8FF" />
        <stop offset="100%" stopColor="#6370EA" />
      </linearGradient>
      <rect id="b" width={32} height={28} x={3.239} y={3.868} rx={4} />
      <path
        id="e"
        d="M13.84 24.868h-3.6v-9.8h3.6v9.8m7.2 0h-3.6v-14h3.6v14m7.2 0h-3.6v-5.6h3.6v5.6Z"
      />
    </defs>
    <g fillRule="evenodd">
      <path d="M0 0h40v40H0z" />
      <g transform="translate(.76 2.132)">
        <rect
          width={31.5}
          height={27.5}
          x={3.489}
          y={4.118}
          stroke="url(#a)"
          strokeWidth={0.5}
          opacity={0.625}
          rx={4}
          transform="rotate(16 19.24 17.868)"
        />
        <mask id="d">
          <use xlinkHref="#b" />
        </mask>
        <rect
          width={31.5}
          height={27.5}
          x={3.489}
          y={4.118}
          stroke="url(#a)"
          strokeWidth={0.5}
          rx={4}
        />
        <rect
          width={27.692}
          height={18}
          x={5.393}
          y={8.868}
          filter="url(#c)"
          mask="url(#d)"
          rx={4}
        />
        <g mask="url(#d)">
          <use xlinkHref="#e" filter="url(#f)" />
          <use xlinkHref="#e" />
        </g>
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgBar);
export default ForwardRef;
