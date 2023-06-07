import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLines = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <linearGradient id="a" x1="93.823%" x2="9.004%" y1="4.202%" y2="93.112%">
        <stop offset="0%" stopColor="#D2D8FF" stopOpacity={0.673} />
        <stop offset="100%" stopColor="#6370EA" stopOpacity={0.413} />
      </linearGradient>
      <linearGradient id="c" x1="93.823%" x2="9.004%" y1="3.731%" y2="93.556%">
        <stop offset="0%" stopColor="#D2D8FF" />
        <stop offset="100%" stopColor="#6370EA" />
      </linearGradient>
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
        width="218.4%"
        height="200.5%"
        x="-59.9%"
        y="-37.7%"
        filterUnits="objectBoundingBox"
      >
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={0.75}
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
      <rect id="b" width={30} height={28} x={1.352} y={3.352} rx={4} />
      <path
        id="f"
        d="M.848 10.776 0 10.019l.218-.269 4.626-5.495 4.226.925L12.89 0l.895.648L9.377 6.4 5.14 5.47l-4.032 4.973-.259.333Zm.548 4.449 3.096-3.093 4.811 1.961 3.524-2.483.66.913-4.278 2.781-4.308-1.988-2.708 2.705-.797-.796Z"
      />
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
        <g fillRule="nonzero" mask="url(#e)">
          <g transform="translate(8.68 9.372)">
            <use xlinkHref="#f" filter="url(#g)" />
            <use xlinkHref="#f" stroke="#FFF" strokeWidth={1.5} />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgLines);
export default ForwardRef;