import * as React from 'react';

function GroundTest(props) {
  return (
    <svg
      id="sky1"
      className="image-container"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 185.21 105.83"
      //for mobile
      // viewBox="19 10 165 105"
      //   height={400}
      //   width={700}
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
      <g className="ground-container">
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
          <g className="solars">
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
    </svg>
  );
}

export default GroundTest;
