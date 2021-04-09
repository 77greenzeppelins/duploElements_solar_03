import * as React from "react";

function SvgQuestionMark(props) {
  return (
    <svg
      id="questionMark_svg__svg8"
      width={16}
      height={16}
      viewBox="0 0 4 4"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="questionMark_svg__layer1">
        <path
          id="questionMark_svg__rect1469"
          fill="#fff"
          stopColor="#000"
          d="M.8 0h3v4h-3z"
        />
        <text
          id="questionMark_svg__text1467"
          x={1.029}
          y={3.603}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 0.9,
          }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Montserrat"
          fontSize={4}
          letterSpacing={0}
          strokeWidth={0.3}
        >
          <tspan
            id="questionMark_svg__tspan1465"
            x={1.029}
            y={3.603}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
            }}
            fill="#000"
            fontFamily="Montserrat"
            fontSize={4}
            strokeWidth={0.3}
          >
            {"?"}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default SvgQuestionMark;
