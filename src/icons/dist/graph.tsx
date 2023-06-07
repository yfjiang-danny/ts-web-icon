import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgGraph = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        width="281.2%"
        height="390%"
        x="-90.6%"
        y="-105%"
        filterUnits="objectBoundingBox"
      >
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={0.25}
          result="shadowSpreadOuter1"
        />
        <feOffset dy={2} in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={2}
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
        />
      </filter>
      <filter
        id="h"
        width="212%"
        height="462.5%"
        x="-54%"
        y="-131.2%"
        filterUnits="objectBoundingBox"
      >
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={0.25}
          result="shadowSpreadOuter1"
        />
        <feOffset dy={2} in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feMorphology in="SourceAlpha" radius={1} result="shadowInner" />
        <feOffset dy={2} in="shadowInner" result="shadowInner" />
        <feComposite
          in="shadowOffsetOuter1"
          in2="shadowInner"
          operator="out"
          result="shadowOffsetOuter1"
        />
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
      <filter
        id="j"
        width="275%"
        height="380%"
        x="-87.5%"
        y="-100%"
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
      <filter
        id="l"
        width="275%"
        height="380%"
        x="-87.5%"
        y="-100%"
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
      <path id="e" d="M9.261 10.845h8v5h-8z" />
      <path id="g" d="M25.26 19.845v-2h-12v2m0-4v1.858" />
      <path id="i" d="M9.261 19.845h8v5h-8z" />
      <path id="k" d="M21.261 19.845h8v5h-8z" />
      <linearGradient id="a" x1="93.823%" x2="9.004%" y1="9.334%" y2="88.281%">
        <stop offset="0%" stopColor="#D2D8FF" />
        <stop offset="100%" stopColor="#6370EA" />
      </linearGradient>
      <rect id="b" width={32} height={28} x={3.239} y={3.868} rx={4} />
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
          <use xlinkHref="#e" stroke="#FFF" strokeWidth={0.5} />
        </g>
        <g mask="url(#d)">
          <use xlinkHref="#g" filter="url(#h)" />
          <use xlinkHref="#g" stroke="#FFF" strokeWidth={0.5} />
        </g>
        <g mask="url(#d)">
          <use xlinkHref="#i" filter="url(#j)" />
          <use xlinkHref="#i" />
        </g>
        <g mask="url(#d)">
          <use xlinkHref="#k" filter="url(#l)" />
          <use xlinkHref="#k" />
        </g>
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgGraph);
export default ForwardRef;
