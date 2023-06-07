import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgProcess = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
        id="d"
        width="324.4%"
        height="356.8%"
        x="-112.2%"
        y="-128.4%"
        filterUnits="objectBoundingBox"
      >
        <feGaussianBlur in="SourceGraphic" stdDeviation={9} />
      </filter>
      <filter
        id="g"
        width="275%"
        height="275%"
        x="-87.5%"
        y="-62.5%"
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
        id="i"
        width="275%"
        height="275%"
        x="-87.5%"
        y="-62.5%"
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
      <linearGradient id="a" x1="93.823%" x2="9.004%" y1="4.202%" y2="93.112%">
        <stop offset="0%" stopColor="#D2D8FF" stopOpacity={0.673} />
        <stop offset="100%" stopColor="#6370EA" stopOpacity={0.413} />
      </linearGradient>
      <linearGradient id="c" x1="93.823%" x2="9.004%" y1="3.731%" y2="93.556%">
        <stop offset="0%" stopColor="#D2D8FF" />
        <stop offset="100%" stopColor="#6370EA" />
      </linearGradient>
      <path id="f" d="M3.965 0H.105l3.783 4.099L0 8h3.948L8 4.145z" />
      <path id="h" d="M14.965 0h-3.86l3.783 4.099L11 8h3.948L19 4.145z" />
      <rect id="b" width={30} height={28} x={1.352} y={3.352} rx={4} />
    </defs>
    <g fillRule="evenodd">
      <path d="M0 0h40v40H0z" />
      <g transform="translate(1.648 2.38)">
        <path
          stroke="url(#a)"
          strokeWidth={0.5}
          d="M29.43 3.865a3.73 3.73 0 0 1 2.65 1.094 3.73 3.73 0 0 1 1.1 2.65l-.012 19.99a3.748 3.748 0 0 1-1.101 2.651 3.748 3.748 0 0 1-2.65 1.102l-22.143.01a3.73 3.73 0 0 1-2.651-1.094 3.736 3.736 0 0 1-1.1-2.65l.013-19.99a3.748 3.748 0 0 1 1.101-2.652 3.748 3.748 0 0 1 2.65-1.101Z"
          transform="rotate(16 18.352 17.613)"
        />
        <mask id="e">
          <use xlinkHref="#b" />
        </mask>
        <rect
          width={29.5}
          height={27.5}
          x={1.602}
          y={3.602}
          stroke="url(#c)"
          strokeWidth={0.5}
          rx={4}
        />
        <rect
          width={24.06}
          height={21.027}
          x={4.513}
          y={7.357}
          filter="url(#d)"
          mask="url(#e)"
          rx={4}
        />
        <g mask="url(#e)">
          <g transform="translate(6.852 13.35)">
            <use xlinkHref="#f" filter="url(#g)" />
            <use xlinkHref="#f" />
          </g>
          <g transform="translate(6.852 13.35)">
            <use xlinkHref="#h" filter="url(#i)" />
            <use xlinkHref="#h" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgProcess);
export default ForwardRef;
