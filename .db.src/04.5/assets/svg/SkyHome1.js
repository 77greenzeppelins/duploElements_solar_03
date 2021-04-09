import * as React from 'react';

function SvgSkyHome1(props) {
  return (
    <svg
      id="sky1"
      className="sky-container"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 185.21 105.83"
      //for mobile
      // viewBox="19 10 165 105"
      height={400}
      width={700}
      {...props}
    >
      <defs>
        <filter id="shadow2">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="4"
            floodColor="#cccc19"
            // flood-opacity="0.5"
          />
        </filter>
        <filter id="cloudShadow">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="1.3"
            floodColor="#0ed2f7"
            // flood-opacity="0.5"
          />
        </filter>
        npm start
      </defs>

      <path
        className="sunLU"
        id="skyHome1_svg__sunLU"
        d="M96.706 50.534c-3.488 18.129 12.098 31.619 28.501 29.508 13.808-1.777 26.318-10.775 29.251-23.317 14.24-50.171-50.714-39.416-57.752-6.191z"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
      />
      <path
        className="sunLD"
        id="skyHome1_svg__sunLD"
        d="M127.36 82.075c-18.857 3.353-32.889-11.631-30.693-27.4 1.849-13.275 11.207-25.301 24.253-28.121 52.186-13.69 41 48.756 6.44 55.522z"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
      />
      <path
        className="sunRU"
        id="skyHome1_svg__sunRU"
        d="M97.548 48.181c-2.557 17.794 13.701 33.57 29.976 33.728 13.701.133 25.735-7.195 28.023-19.433 11.657-48.604-52.669-46.816-57.998-14.295z"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
        filter="url(#shadow2)"
      />
      <path
        className="sunRD"
        id="skyHome1_svg__sunRD"
        d="M131.41 82.828c-18.663.752-33.445-16.314-32.057-31.908 1.168-13.128 9.9-23.95 22.786-24.975 51.423-6.528 43.444 54.879 9.272 56.883z"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
        filter="url(#shadow2)"
      />
      <path
        className="ray1a"
        id="skyHome1_svg__ray1a"
        d="M129.31 5.312l-.219 2.674.413 5.647-.643 3.134.449 3.573"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="ray1b"
        id="skyHome1_svg__ray1b"
        d="M129.1 1.097l.331 5.726-.413 4.546.644 4.85-.45 2.374"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="ray2a"
        id="skyHome1_svg__ray2a"
        d="M172.5 20.339l-2.311 1.6-5.29 2.649-2.527 2.197-3.434 1.52"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="ray2b"
        id="skyHome1_svg__ray2b"
        d="M174.62 19.121l-4.166 2.204L164.975 25l-6.35 3.017-2.751 2.114"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="ray3a"
        id="skyHome1_svg__ray3a"
        d="M182.86 56.681l-7.073-.379-7.12.397-3.952-.618-4.505.432"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
        strokeLinecap="round"
      />
      <path
        className="ray3b"
        id="skyHome1_svg__ray3b"
        d="M181.38 56.17l-4.108.21-5.731-.396-6.116.618-2.993-.432"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="ray4a"
        id="skyHome1_svg__ray4a"
        d="M153.88 78.125l2.406 2.595 5.537 4.77 2.62 3.356 3.6 2.865"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="ray4b"
        id="skyHome1_svg__ray4b"
        d="M151.66 76.032l4.358 3.893 5.708 6.016 6.653 5.538 2.858 3.331"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="ray5a"
        id="skyHome1_svg__ray5a"
        d="M127.14 87.531l-.219 2.674.413 5.647-.643 3.134.449 3.573"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="ray5b"
        id="skyHome1_svg__ray5b"
        d="M127.23 84.357l.219 3.258-.413 4.546.643 4.85-.449 2.374"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="ray6a"
        id="skyHome1_svg__ray6a"
        d="M87.117 90.515l2.311-2.22 5.29-4.072 2.527-2.877 3.434-2.442"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="ray6b"
        id="skyHome1_svg__ray6b"
        d="M84.995 92.303l4.166-3.324 5.479-5.147 6.35-4.725 2.752-2.853"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="ray7a"
        id="skyHome1_svg__ray7a"
        d="M90.568 57.308l-2.781.21-5.875-.396-3.259.618-3.717-.432"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="ray7b"
        id="skyHome1_svg__ray7b"
        d="M93 57.332l-4.684-.21-6.536.396-6.974-.618-3.412.432"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g className="ray7-mask">
        <path
          className="ray7a"
          id="skyHome1_svg__ray7a"
          d="M90.568 57.308l-2.781.21-5.875-.396-3.259.618-3.717-.432"
          transform="matrix(.72738 0 0 .72731 39.224 .702)"
          fill="none"
          stroke="#fff"
          strokeWidth={0.364}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#shadow2)"
        />

        <path
          className="ray7b"
          id="skyHome1_svg__ray7b"
          d="M93 57.332l-4.684-.21-6.536.396-6.974-.618-3.412.432"
          transform="matrix(.72738 0 0 .72731 39.224 .702)"
          fill="none"
          stroke="#fff"
          strokeWidth={0.364}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        className="ray8a"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        id="skyHome1_svg__ray8a"
        d="M87.2 19.651l2.311 2.066 5.29 3.715 2.527 2.707 3.434 2.211"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="ray8b"
        transform="matrix(.72738 0 0 .72731 39.224 .702)"
        id="skyHome1_svg__ray8b"
        d="M85.079 18.005l4.166 3.044 5.478 4.78 6.351 4.297 2.751 2.668"
        fill="none"
        stroke="#fff"
        strokeWidth={0.364}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="cloud2x"
        id="skyHome1_svg__cloud2x"
        d="M95.464 19.764c-2.667.01-4.77 1.342-5.119 3.24a3.09 3.09 0 00-.028.929c-.244-1.112-2.064-1.951-4.23-1.952-2.299 0-4.286 1.653-4.358 2.84-2.81-3.525-9.922-3.13-10.074.142-5.092.743-9.19.433-9.396 3.275.059 3.354 8.657 5.838 11.574 2.968 2.839 5.884 7.862 5.634 12.5 5.78 10.685-.293 12.046-5.026 14.728-4.938 10.883-.547 7.9-5.77 1.035-6.932.388-2.298-1.891-4.625-5.11-5.216a8.26 8.26 0 00-1.522-.136z"
        fill="none"
        stroke="#fff"
        strokeWidth={0.265}
        strokeLinecap="square"
      />

      <path
        className="cloud2x-color"
        id="sun_shine_1opt_svg__cloud2x"
        d="M95.464 19.764c-2.667.01-4.77 1.342-5.119 3.24a3.09 3.09 0 00-.028.929c-.244-1.112-2.064-1.951-4.23-1.952-2.299 0-4.286 1.653-4.358 2.84-2.81-3.525-9.922-3.13-10.074.142-5.092.743-9.19.433-9.396 3.275.059 3.354 8.657 5.838 11.574 2.968 2.839 5.884 7.862 5.634 12.5 5.78 10.685-.293 12.046-5.026 14.728-4.938 10.883-.547 7.9-5.77 1.035-6.932.388-2.298-1.891-4.625-5.11-5.216a8.26 8.26 0 00-1.522-.136z"
        fill="none"
        stroke="#fff"
        strokeLinecap="square"
        strokeWidth={0.265}
        filter="url(#cloudShadow)"
      />

      <path
        className="cloud2a"
        id="skyHome1_svg__cloud2a"
        d="M73.212 31.05s3.099 7.795 13.908 6.635c5.545-.595 15.5-6.29 15.5-6.29"
        fill="none"
        stroke="#fff"
        strokeWidth={0.265}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="cloud2b"
        id="skyHome1_svg__cloud2b"
        d="M91.533 23.374c.139.137.035.36-.108.444-.256.152-.492-.498-.475-.81.062-1.135 1.041-2.183 2.035-2.737 1.66-.927 3.117-.96 4.586-.506.514.159 1.354.498 1.224 1.05"
        fill="none"
        stroke="#fff"
        strokeWidth={0.265}
        strokeLinecap="round"
      />
      <path
        className="cloud3x"
        id="skyHome1_svg__cloud3x"
        d="M162.236 4.154c1.66.011 2.968 1.35 3.186 3.26.035.306.04.619.017.934.152-1.118 1.285-1.963 2.632-1.963 1.431 0 2.668 1.662 2.713 2.856 1.749-3.546 6.175-3.148 6.27.143 3.169.748 4.995 1.844 4.995 2.999 0 1.37-2.511 2.795-6.35 3.281-1.767 5.919-4.924.505-7.81.652-4.64 2.458-6.222.091-7.887-.1-5.14-.59-6.273-2.192-6.274-3.833 0-1.075 1.583-2.102 4.381-2.845-.241-2.312 1.177-4.652 3.18-5.246.314-.094.633-.14.947-.138z"
        fill="none"
        stroke="#fff"
        strokeWidth={0.265}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        className="cloud3x-color"
        id="skyHome1_svg__cloud3x"
        d="M162.236 4.154c1.66.011 2.968 1.35 3.186 3.26.035.306.04.619.017.934.152-1.118 1.285-1.963 2.632-1.963 1.431 0 2.668 1.662 2.713 2.856 1.749-3.546 6.175-3.148 6.27.143 3.169.748 4.995 1.844 4.995 2.999 0 1.37-2.511 2.795-6.35 3.281-1.767 5.919-4.924.505-7.81.652-4.64 2.458-6.222.091-7.887-.1-5.14-.59-6.273-2.192-6.274-3.833 0-1.075 1.583-2.102 4.381-2.845-.241-2.312 1.177-4.652 3.18-5.246.314-.094.633-.14.947-.138z"
        fill="#none"
        stroke="#fff"
        strokeWidth={0.265}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#cloudShadow)"
      />

      <path
        className="cloud3a"
        id="skyHome1_svg__cloud3a"
        d="M159.077 14.977l-1.64.396s-3.092.536-3.99-1.991c-.62-3.132 2.787-3.62 4.92-3.595"
        fill="none"
        stroke="#fff"
        strokeWidth={0.265}
        strokeLinecap="round"
      />
      <path
        className="cloud3b"
        id="skyHome1_svg__cloud3b"
        d="M167.791 15.816c3.61.755 6.28 3.757 7.236.664.905-2.93-3.264 1.791-.96.221v0"
        fill="none"
        stroke="#fff"
        strokeWidth={0.265}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="cloud3c"
        id="skyHome1_svg__cloud3c"
        d="M177.032 9.952c2.522-.69 5.746.84 5.802 2.111.106 2.395-4.74 2.914-6.521 2.975"
        fill="none"
        stroke="#fff"
        strokeWidth={0.265}
        strokeLinecap="round"
      />
      <path
        className="cloud4x"
        id="skyHome1_svg__cloud4x"
        d="M169.458 53.586c1.019.006 1.821.724 1.955 1.749.021.164.025.332.01.5.094-.6.79-1.052 1.616-1.052.879 0 1.638.891 1.665 1.532 1.074-1.902 3.79-1.689 3.848.077 1.945.4 2.456.964 2.312 1.965-.163 1.136-1.544 1.881-3.144 1.404-1.6-.478-2.604 2.151-4.239 2.246-4.077.237-4.046-2.117-6.16-1.792-4.158-.295-3.018-3.113-.396-3.74-.148-1.241.722-2.496 1.951-2.815.193-.05.389-.075.582-.074z"
        fill="none"
        stroke="#fff"
        strokeWidth={0.265}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="cloud4x-color"
        id="skyHome1_svg__cloud4x"
        d="M169.458 53.586c1.019.006 1.821.724 1.955 1.749.021.164.025.332.01.5.094-.6.79-1.052 1.616-1.052.879 0 1.638.891 1.665 1.532 1.074-1.902 3.79-1.689 3.848.077 1.945.4 2.456.964 2.312 1.965-.163 1.136-1.544 1.881-3.144 1.404-1.6-.478-2.604 2.151-4.239 2.246-4.077.237-4.046-2.117-6.16-1.792-4.158-.295-3.018-3.113-.396-3.74-.148-1.241.722-2.496 1.951-2.815.193-.05.389-.075.582-.074z"
        fill="none"
        stroke="#fff"
        strokeWidth={0.265}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#cloudShadow)"
      />

      <path
        className="cloud4a"
        id="skyHome1_svg__cloud4a"
        d="M165.838 59.541c-3.512-1.577-.15-3.117.352-3.381 1.452-.765 1.592-3.247 3.229-3.13 1.351.099 2.825 1.657 2.405 3.074"
        fill="none"
        stroke="#fff"
        strokeWidth={0.265}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        className="cloud4b"
        id="skyHome1_svg__cloud4b"
        d="M176.438 59.597s4.681 2.146 4.984-1.352c.108-1.248-1.85-1.254-2.884-1.535-1.626-.443 1.43-2.642-2.296-1.916"
        fill="none"
        stroke="#fff"
        strokeWidth={0.265}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ======================================================== */}
      <g>
        <g className="ground">
          <path
            className="roofA"
            d="M31.39 90.22l7.454-23.838 10.494 24.407 18.52-1.993"
            id="skyHome1_svg__roofA"
            fill="none"
            stroke="#fff"
            strokeWidth={0.265}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="roofB"
            d="M38.844 66.382l24.217 7.407 4.797 15.007"
            id="skyHome1_svg__roofB"
            fill="none"
            stroke="#fff"
            strokeWidth={0.265}
            strokeLinecap="butt"
            strokeLinejoin="miter"
          />
          <path
            className="wallA"
            d="M48.464 87.109l-14.416-1.543 3.793 16.205 10.338 3.255v-15.97"
            id="skyHome1_svg__wallA"
            fill="none"
            stroke="#fff"
            strokeWidth={0.265}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="windowA"
            id="skyHome1_svg__windowA"
            d="M47.132 91.75l.462 7.782-10-2.246-2.004-7.076z"
            fill="none"
            stroke="#fff"
            strokeWidth={0.265}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="windowBarA"
            id="skyHome1_svg__windowBarA"
            d="M40.69 90.492l.63 8.299"
            fill="none"
            stroke="#fff"
            strokeWidth={0.265}
            strokeLinecap="round"
            strokeLinejoin="miter"
          />
          <path
            className="wallB"
            d="M48.179 88.955v16.071l11.826-2.447 4.543-13.048"
            id="skyHome1_svg__wallB"
            fill="none"
            stroke="#fff"
            strokeWidth={0.265}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="windowB"
            d="M49.532 91.87l.19 7.158 9.348-1.623 2.003-7.077z"
            id="skyHome1_svg__windowB"
            fill="none"
            stroke="#fff"
            strokeWidth={0.265}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="windowBarB"
            d="M55.617 90.61 l-.629 7.3"
            id="skyHome1_svg__windowBarB"
            fill="none"
            stroke="#fff"
            strokeWidth={0.265}
            strokeLinecap="round"
            strokeLinejoin="miter"
          />

          <path
            className="solarB"
            d="M42.938 71.006 l6.994 16.951 16.122-.948-4.267-11.736z"
            id="skyHome1_svg__solarB"
            opacity={1}
            fill="none"
            fillOpacity={1}
            stroke="#fff"
            strokeWidth={0.265}
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity={1}
          />
          <path
            className="solarA"
            id="skyHome1_svg__solarA"
            d="M43.353 70.235l6.994 16.952 16.122-.949-4.267-11.735z"
            opacity={1}
            fill="none"
            stroke="#fff"
            strokeWidth={0.265}
            strokeLinecap="butt"
            strokeLinejoin="miter"
          />
          <path
            className="solarA-lineVertical"
            d="m 53.848211,72.806317 6.217243,14.149719"
            opacity={1}
            fill="none"
            stroke="#000"
            strokeWidth={0.265}
            strokeLinecap="butt"
          />
          <path
            className="solarA-lineHorizontal"
            d="m 47,78.795307 17.105556,1.688009"
            opacity={1}
            fill="none"
            stroke="#000"
            strokeWidth={0.265}
            strokeLinecap="butt"
          />
        </g>

        <path
          className="treeTrunkA"
          d="M22.66 101.266l-2.149-14.103"
          id="skyHome1_svg__treeTrunkA"
          fill="none"
          stroke="#fff"
          strokeWidth={0.265}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={1}
          opacity={1}
        />
        <path
          className="treeTrunkB"
          id="skyHome1_svg__treeTrunkB"
          d="M23.942 101.266l-.724-14.103"
          fill="none"
          stroke="#fff"
          strokeWidth={0.265}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={1}
          opacity={1}
        />
        <path
          className="treeBody"
          id="skyHome1_svg__treeBody"
          d=" M29.395 77.256 c0 6.32-5.035 14.957-8.785 14.957s-1.744-2.577-6.79-11.443c-7.477-13.136 3.709-12.488 7.55-12.394 3.749.092 8.025 2.56 8.025 8.88z"
          opacity={1}
          fill="none"
          stroke="#fff"
          strokeWidth={0.265}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={1}
          stopColor="#000"
        />
        <path
          className="treeTop"
          d="M29 72.583 c0 3.51-3.415 8.309-5.958 8.309s-1.183-1.432-4.605-6.357c-5.07-7.297 2.515-6.937 5.12-6.885 2.543.05 5.443 1.422 5.443 4.933z"
          id="skyHome1_svg__treeTop"
          opacity={1}
          fill="none"
          fillOpacity={0.996}
          stroke="#fff"
          strokeWidth={0.265}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={1}
          stopColor="#000"
        />
        <path
          className="groundA"
          d="M5 103.69s6.502-4.592 15.974-6.762m2.695-.249c2.882-.858 8.893.711 10.772-.815"
          id="skyHome1_svg__groundA"
          fill="none"
          stroke="#fff"
          strokeWidth={0.265}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={1}
          opacity={1}
        />
        <path
          className="groundB"
          id="skyHome1_svg__groundB"
          d="M86.246 103.192s-9.427-6.658-22.116-7.728"
          fill="none"
          stroke="#fff"
          strokeWidth={0.265}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={1}
          opacity={1}
        />
        <path
          className="groundC"
          d="M19.484 101.806c7.125-.251 5.134-1.346 5.134-1.346l1.735.99v0"
          id="skyHome1_svg__groundC"
          fill="none"
          stroke="#fff"
          strokeWidth={0.265}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={1}
          opacity={1}
        />

        <ellipse
          className="stone1"
          id="skyHome1_svg__stone1"
          cx={55.24}
          cy={103.9}
          rx={1.097}
          ry={0.533}
          opacity={1}
          fill="#fff"
          fillOpacity={1}
          stroke="none"
          strokeWidth={0.265}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={1}
          stopColor="#000"
        />
        <ellipse
          className="stone2"
          id="skyHome1_svg__stone2"
          cx={57}
          cy={104.9}
          rx={0.8}
          ry={0.296}
          opacity={1}
          fill="#fff"
          fillOpacity={1}
          stroke="none"
          strokeWidth={0.265}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={1}
          stopColor="#000"
        />
        <ellipse
          className="stone3"
          id="skyHome1_svg__tone3"
          cx={64.071}
          cy={105.139}
          rx={0.682}
          ry={0.207}
          opacity={1}
          fill="#fff"
          fillOpacity={1}
          stroke="none"
          strokeWidth={0.265}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={1}
          stopColor="#000"
        />
        <ellipse
          className="stone4"
          id="skyHome1_svg__tone4"
          cx={59.084}
          cy={103.86}
          rx={0.859}
          ry={0.356}
          opacity={1}
          fill="#fff"
          fillOpacity={1}
          stroke="none"
          strokeWidth={0.265}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={1}
          stopColor="#000"
        />
        <ellipse
          id="skyHome1_svg__path1007"
          cx={62.245}
          cy={104.127}
          rx={0.563}
          ry={0.237}
          opacity={1}
          fill="#fff"
          fillOpacity={1}
          stroke="none"
          strokeWidth={0.265}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={1}
          stopColor="#000"
        />

        <path
          transform="matrix(.20116 0 0 .38414 93.321 60.108)"
          d="M -107.23 84.357l.219 3.258-.413 4.546.643 4.85-.449 2.374"
          id="skyHome1_svg__bar1"
          fill="none"
          stroke="#fff"
          strokeWidth={0.952}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={1}
        />
        <path
          transform="matrix(.14688 0 0 .4217 102.587 57.264)"
          d="M-187 84.357l.219 3.258-.413 4.546.643 4.85-.449 2.374"
          id="skyHome1_svg__bar2"
          fill="none"
          stroke="#fff"
          strokeWidth={1.063}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={1}
        />
        <path
          id="skyHome1_svg__bar3"
          d="M-100.23 84.357l.219 3.258-.413 4.546.643 4.85-.449 2.374"
          transform="matrix(.20116 0 0 .44342 98.774 56.409)"
          fill="none"
          stroke="#fff"
          strokeWidth={0.886}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={1}
        />
        <path
          transform="matrix(.20116 0 0 .44342 102.45 57.95)"
          d="M-100.23 84.357l.219 3.258-.413 4.546.643 4.85-.449 2.374"
          id="skyHome1_svg__bar4"
          fill="none"
          stroke="#fff"
          strokeWidth={0.886}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={1}
        />
        <path
          id="skyHome1_svg__bar5"
          d="M-20.23 84.357l.219 3.258-.413 4.546.643 4.85-.449 2.374"
          transform="matrix(.30972 0 0 .52306 92.57 52.286)"
          fill="none"
          stroke="#fff"
          strokeWidth={0.657}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={1}
        />
      </g>
      {/* ======================================================== */}
      {/* <path
        className="treeBody"
        id="skyHome1_svg__treeBody"
        d="M79.395 77.256c0 6.32-5.035 14.957-8.785 14.957s-1.744-2.577-6.79-11.443c-7.477-13.136 3.709-12.488 7.55-12.394 3.749.092 8.025 2.56 8.025 8.88z"
        opacity={1}
        fill="none"
        stroke="#fff"
        strokeWidth={0.265}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
        stopColor="#000"
      />
      <path
        className="treeTop"
        d="M78.378 72.583c0 3.51-3.415 8.309-5.958 8.309s-1.183-1.432-4.605-6.357c-5.07-7.297 2.515-6.937 5.12-6.885 2.543.05 5.443 1.422 5.443 4.933z"
        id="skyHome1_svg__treeTop"
        opacity={1}
        fill="none"
        fillOpacity={0.996}
        stroke="#fff"
        strokeWidth={0.265}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
        stopColor="#000"
      />
      <path
        className="groundA"
        d="M55.637 103.69s6.502-4.592 15.974-6.762m2.695-.249c2.882-.858 8.893.711 10.772-.815"
        id="skyHome1_svg__groundA"
        fill="none"
        stroke="#fff"
        strokeWidth={0.265}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
        opacity={1}
      />
      <path
        className="groundB"
        id="skyHome1_svg__groundB"
        d="M136.246 103.192s-9.427-6.658-22.116-7.728"
        fill="none"
        stroke="#fff"
        strokeWidth={0.265}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
        opacity={1}
      />
      <path
        className="groundC"
        d="M69.484 101.806c7.125-.251 5.134-1.346 5.134-1.346l1.735.99v0"
        id="skyHome1_svg__groundC"
        fill="none"
        stroke="#fff"
        strokeWidth={0.265}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
        opacity={1}
      />

      <ellipse
        className="stone1"
        id="skyHome1_svg__stone1"
        cx={105.24}
        cy={103.9}
        rx={1.097}
        ry={0.533}
        opacity={1}
        fill="#fff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={0.265}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
        stopColor="#000"
      />
      <ellipse
        className="stone2"
        id="skyHome1_svg__stone2"
        cx={110.6}
        cy={102.788}
        rx={0.8}
        ry={0.296}
        opacity={1}
        fill="#fff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={0.265}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
        stopColor="#000"
      />
      <ellipse
        className="stone3"
        id="skyHome1_svg__tone3"
        cx={114.071}
        cy={105.139}
        rx={0.682}
        ry={0.207}
        opacity={1}
        fill="#fff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={0.265}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
        stopColor="#000"
      />
      <ellipse
        className="stone4"
        id="skyHome1_svg__tone4"
        cx={109.084}
        cy={103.86}
        rx={0.859}
        ry={0.356}
        opacity={1}
        fill="#fff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={0.265}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
        stopColor="#000"
      />
      <ellipse
        id="skyHome1_svg__path1007"
        cx={112.245}
        cy={104.127}
        rx={0.563}
        ry={0.237}
        opacity={1}
        fill="#fff"
        fillOpacity={1}
        stroke="none"
        strokeWidth={0.265}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
        stopColor="#000"
      />

      <path
        transform="matrix(.20116 0 0 .38414 93.321 60.108)"
        d="M127.23 84.357l.219 3.258-.413 4.546.643 4.85-.449 2.374"
        id="skyHome1_svg__bar1"
        fill="none"
        stroke="#fff"
        strokeWidth={0.952}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={1}
      />
      <path
        transform="matrix(.14688 0 0 .4217 102.587 57.264)"
        d="M127.23 84.357l.219 3.258-.413 4.546.643 4.85-.449 2.374"
        id="skyHome1_svg__bar2"
        fill="none"
        stroke="#fff"
        strokeWidth={1.063}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={1}
      />
      <path
        id="skyHome1_svg__bar3"
        d="M127.23 84.357l.219 3.258-.413 4.546.643 4.85-.449 2.374"
        transform="matrix(.20116 0 0 .44342 98.774 56.409)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.886}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={1}
      />
      <path
        transform="matrix(.20116 0 0 .44342 102.45 57.95)"
        d="M127.23 84.357l.219 3.258-.413 4.546.643 4.85-.449 2.374"
        id="skyHome1_svg__bar4"
        fill="none"
        stroke="#fff"
        strokeWidth={0.886}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={1}
      />
      <path
        id="skyHome1_svg__bar5"
        d="M127.23 84.357l.219 3.258-.413 4.546.643 4.85-.449 2.374"
        transform="matrix(.30972 0 0 .52306 92.57 52.286)"
        fill="none"
        stroke="#fff"
        strokeWidth={0.657}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={1}
      /> */}
    </svg>
  );
}

export default SvgSkyHome1;
