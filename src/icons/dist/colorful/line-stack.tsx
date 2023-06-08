import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLineStack = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    viewBox="0 0 40 40"
    ref={ref}
    {...props}
  >
    <defs>
      <linearGradient
        id="line-stack_svg__a"
        x1="9.438%"
        x2="81.731%"
        y1="96.465%"
        y2="7.482%"
      >
        <stop offset="0%" stopColor="#B0B5ED" />
        <stop offset="100%" stopColor="#F2EFFF" />
      </linearGradient>
      <linearGradient
        id="line-stack_svg__b"
        x1="93.823%"
        x2="9.004%"
        y1="4.202%"
        y2="93.112%"
      >
        <stop offset="0%" stopColor="#D2D8FF" stopOpacity={0.673} />
        <stop offset="100%" stopColor="#6370EA" stopOpacity={0.413} />
      </linearGradient>
      <linearGradient
        id="line-stack_svg__d"
        x1="93.823%"
        x2="9.004%"
        y1="3.731%"
        y2="93.556%"
      >
        <stop offset="0%" stopColor="#D2D8FF" />
        <stop offset="100%" stopColor="#6370EA" />
      </linearGradient>
      <filter
        id="line-stack_svg__e"
        width="324.4%"
        height="356.8%"
        x="-112.2%"
        y="-128.4%"
        filterUnits="objectBoundingBox"
      >
        <feGaussianBlur in="SourceGraphic" stdDeviation={9} />
      </filter>
      <filter
        id="line-stack_svg__h"
        width="177.8%"
        height="206.9%"
        x="-38.9%"
        y="-38.2%"
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
      <rect
        id="line-stack_svg__c"
        width={30}
        height={28}
        x={1.352}
        y={3.352}
        rx={4}
      />
      <path
        id="line-stack_svg__g"
        d="M12.217 7.218 18 9.166v3.925H0V9.9l4.357.542 7.86-3.225ZM18 0v7.871l-5.825-1.962-7.987 3.277L0 8.664V1.021l6.137.634L12.6 0H18Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h40v40H0z" />
      <g transform="translate(1.648 2.38)">
        <path
          fill="url(#line-stack_svg__a)"
          stroke="url(#line-stack_svg__b)"
          strokeWidth={0.5}
          d="M29.43 3.865a3.73 3.73 0 0 1 2.65 1.094 3.73 3.73 0 0 1 1.1 2.65l-.012 19.99a3.748 3.748 0 0 1-1.101 2.651 3.748 3.748 0 0 1-2.65 1.102l-22.143.01a3.73 3.73 0 0 1-2.651-1.094 3.736 3.736 0 0 1-1.1-2.65l.013-19.99a3.748 3.748 0 0 1 1.101-2.652 3.748 3.748 0 0 1 2.65-1.101Z"
          transform="rotate(16 18.352 17.613)"
        />
        <mask id="line-stack_svg__f" fill="#fff">
          <use xlinkHref="#line-stack_svg__c" />
        </mask>
        <rect
          width={29.5}
          height={27.5}
          x={1.602}
          y={3.602}
          stroke="url(#line-stack_svg__d)"
          strokeWidth={0.5}
          rx={4}
        />
        <rect
          width={24.06}
          height={21.027}
          x={4.513}
          y={7.357}
          fill="#ACAEFF"
          filter="url(#line-stack_svg__e)"
          mask="url(#line-stack_svg__f)"
          rx={4}
        />
        <g fillRule="nonzero" mask="url(#line-stack_svg__f)">
          <g transform="translate(7.352 10.62)">
            <use
              xlinkHref="#line-stack_svg__g"
              fill="#000"
              filter="url(#line-stack_svg__h)"
            />
            <use xlinkHref="#line-stack_svg__g" fill="#FFF" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgLineStack);
export default ForwardRef;
