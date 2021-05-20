import * as React from 'react';

function SkyHomeLandscape(props) {
  return (
    <svg
      id="sky1"
      className="image-container"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 185.21 105.83"
      //for mobile
      // viewBox="0 0 185 105"
      // viewBox="0 0 50 50"
      //
      stroke="#fff"
      strokeWidth={0.364}
      //
      height={200}
      width={350}
      {...props}
    >
      <defs>
        <filter id="sunShadow">
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

      <g className="sky-container">
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
          filter="url(#sunShadow)"
        />
        <path
          className="sunRD"
          id="skyHome1_svg__sunRD"
          d="M131.41 82.828c-18.663.752-33.445-16.314-32.057-31.908 1.168-13.128 9.9-23.95 22.786-24.975 51.423-6.528 43.444 54.879 9.272 56.883z"
          transform="matrix(.72738 0 0 .72731 39.224 .702)"
          fill="none"
          stroke="#fff"
          strokeWidth={0.364}
          filter="url(#sunShadow)"
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
            filter="url(#sunShadow)"
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
      </g>
    </svg>
  );
}

export default SkyHomeLandscape;
