import React from 'react';
import colors from '../../css/colors';

type Props = {
  className?: string;
}

const Logo: React.FC<Props> = ({ className }) => (
  <svg
    width="150"
    height="110" // base(7.5)
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 612 390.04"
    xmlSpace="preserve"
    enableBackground="new 0 0 612 390.04"
  >
    <rect
      id="XMLID_00000062896022287137478890000015573255980750334351_"
      x="27.3"
      y="25.6"
      className="st0"
      width="554.06"
      height="338.13"
      style={{ fill: colors.purple }}
    />
    <rect
      id="XMLID_00000019636420080145426120000005017557518344600724_"
      x="57.92"
      y="70.11"
      className="st1"
      width="492.83"
      height="252.38"
      style={{
        fill: 'none',
        stroke: colors.white,
        strokeWidth: '4.9989',
        strokeMiterlimit: '10',
      }}
    />
    <rect
      x="118.65"
      y="306.52"
      className="st0"
      width="371.37"
      height="32.99"
      style={{ fill: colors.purple }}
    />
    <rect
      x="180.31"
      y="57.41"
      className="st0"
      width="248.05"
      height="32.99"
      style={{ fill: colors.purple }}
    />
    <g>
      <g>
        <path
          className="st2"
          style={{ fill: colors.white }}
          d="M129.22,192.45h-9.29v47.5H86.5V115.42h46.43c24.14,0,40.33,9.96,40.33,25.09v27.57 c0,8.18-5.04,14.94-13.53,19.21l16.98,52.66h-33.7L129.22,192.45z M129.75,135.88h-9.82v32.56l-14.86,4.09v0.71h24.67 c6.1,0,10.08-2.49,10.08-6.58v-24.19C139.83,138.37,135.85,135.88,129.75,135.88z"
        />
        <path
          className="st2"
          style={{ fill: colors.white }}
          d="M235.61,209.89h-20.43l-3.45,30.07h-33.7l22.55-124.53h51.47l22.29,124.53h-35.29L235.61,209.89zM202.18,191.38h31.31l-5.84-43.41v-10.32h-4.51v10.32l-5.57,38.43l-15.39,4.27V191.38z"
        />
        <path
          className="st2"
          style={{ fill: colors.white }}
          d="M367.21,115.42v124.53h-33.43v-53.19h-19.9v53.19h-33.43V115.42h33.43v46.61l-14.86,4.09v0.71h34.76v-51.42H367.21z"
        />
        <path
          className="st2"
          style={{ fill: colors.white }}
          d="M379.95,115.42h59.7l9.55,82.55v19.75h4.78v-19.75l9.55-82.55h58.64v124.53h-33.43v-89.49l0.27-10.14h-4.51l-0.53,10.14l-11.41,89.49h-42.98l-11.67-89.49l-0.27-10.14h-4.51l0.27,10.14v89.49h-33.43V115.42z"
        />
      </g>
    </g>
    <g>
      <path
        className="st2"
        style={{ fill: colors.white }}
        d="M136,324.83V313.1h3.75v11.59c0,3.78,2.04,5.79,5.4,5.79c3.32,0,5.37-1.89,5.37-5.65V313.1h3.75v11.56c0,6.08-3.6,9.14-9.18,9.14C139.54,333.8,136,330.74,136,324.83z"
      />
      <path
        className="st2"
        style={{ fill: colors.white }}
        d="M168.96,330.51l2.26-2.56c2.04,1.69,4.12,2.65,6.74,2.65c2.32,0,3.78-1.05,3.78-2.56v-0.06c0-1.46-0.85-2.24-4.82-3.12c-4.54-1.05-7.1-2.33-7.1-6.08v-0.06c0-3.49,3.05-5.91,7.29-5.91c3.11,0,5.58,0.9,7.74,2.56l-2.01,2.71c-1.92-1.37-3.84-2.1-5.79-2.1c-2.19,0-3.48,1.08-3.48,2.42v0.06c0,1.57,0.98,2.27,5.09,3.2c4.51,1.05,6.83,2.59,6.83,5.97v0.06c0,3.81-3.14,6.08-7.62,6.08C174.6,333.77,171.52,332.69,168.96,330.51z"
      />
      <path
        className="st2"
        style={{ fill: colors.white }}
        d="M220.06,323.35v-0.06c0-5.79,4.54-10.54,11.01-10.54c3.93,0,6.31,1.31,8.35,3.17l-2.41,2.65c-1.71-1.51-3.54-2.53-5.98-2.53c-4.05,0-7.04,3.2-7.04,7.19v0.06c0,3.99,2.96,7.22,7.04,7.22c2.62,0,4.3-0.99,6.13-2.62l2.41,2.33c-2.23,2.21-4.67,3.61-8.66,3.61C224.7,333.83,220.06,329.2,220.06,323.35z"
      />
      <path
        className="st2"
        style={{ fill: colors.white }}
        d="M252.93,323.35v-0.06c0-5.74,4.63-10.54,11.19-10.54s11.13,4.75,11.13,10.48v0.06c0,5.74-4.63,10.54-11.19,10.54S252.93,329.08,252.93,323.35z M271.31,323.35v-0.06c0-3.96-3.02-7.25-7.26-7.25c-4.24,0-7.2,3.23-7.2,7.19v0.06c0,3.96,3.02,7.22,7.26,7.22C268.36,330.51,271.31,327.31,271.31,323.35z"
      />
      <path
        className="st2"
        style={{ fill: colors.white }}
        d="M290.77,313.1h3.48l11.43,14.09V313.1h3.69v20.38h-3.14l-11.77-14.5v14.5h-3.69V313.1z"
      />
      <path
        className="st2"
        style={{ fill: colors.white }}
        d="M324.89,323.35v-0.06c0-5.71,4.57-10.54,11.01-10.54c3.72,0,6.01,0.99,8.2,2.77l-2.38,2.71c-1.65-1.34-3.26-2.18-5.98-2.18c-3.93,0-6.92,3.29-6.92,7.19v0.06c0,4.19,2.9,7.28,7.26,7.28c2.01,0,3.84-0.61,5.15-1.54v-3.81h-5.46v-3.11h9.08v8.56c-2.1,1.72-5.12,3.17-8.9,3.17C329.28,333.83,324.89,329.29,324.89,323.35z"
      />
      <path
        className="st2"
        style={{ fill: colors.white }}
        d="M360.71,313.1h9.51c2.68,0,4.79,0.76,6.16,2.04c1.13,1.11,1.77,2.62,1.77,4.4v0.06c0,3.35-2.1,5.36-5.06,6.17l5.76,7.72h-4.45l-5.24-7.1h-4.69v7.1h-3.75V313.1z M369.95,323.2c2.68,0,4.39-1.34,4.39-3.41v-0.06c0-2.18-1.65-3.38-4.42-3.38h-5.46v6.84H369.95z"
      />
      <path
        className="st2"
        style={{ fill: colors.white }}
        d="M393.73,313.1h15.82v3.2h-12.07v5.3h10.7v3.2h-10.7v5.47h12.22v3.2h-15.97V313.1z"
      />
      <path
        className="st2"
        style={{ fill: colors.white }}
        d="M423.7,330.51l2.26-2.56c2.04,1.69,4.12,2.65,6.74,2.65c2.32,0,3.78-1.05,3.78-2.56v-0.06c0-1.46-0.85-2.24-4.82-3.12c-4.54-1.05-7.1-2.33-7.1-6.08v-0.06c0-3.49,3.05-5.91,7.29-5.91c3.11,0,5.58,0.9,7.74,2.56l-2.01,2.71c-1.92-1.37-3.84-2.1-5.79-2.1c-2.19,0-3.48,1.08-3.48,2.42v0.06c0,1.57,0.98,2.27,5.09,3.2c4.51,1.05,6.83,2.59,6.83,5.97v0.06c0,3.81-3.14,6.08-7.62,6.08C429.34,333.77,426.27,332.69,423.7,330.51z"
      />
      <path
        className="st2"
        style={{ fill: colors.white }}
        d="M453.89,330.51l2.26-2.56c2.04,1.69,4.12,2.65,6.74,2.65c2.32,0,3.78-1.05,3.78-2.56v-0.06c0-1.46-0.85-2.24-4.82-3.12c-4.54-1.05-7.1-2.33-7.1-6.08v-0.06c0-3.49,3.05-5.91,7.29-5.91c3.11,0,5.58,0.9,7.74,2.56l-2.01,2.71c-1.92-1.37-3.84-2.1-5.79-2.1c-2.19,0-3.48,1.08-3.48,2.42v0.06c0,1.57,0.98,2.27,5.09,3.2c4.51,1.05,6.83,2.59,6.83,5.97v0.06c0,3.81-3.14,6.08-7.62,6.08C459.53,333.77,456.45,332.69,453.89,330.51z"
      />
    </g>
    <g>
      <path
        className="st2"
        style={{ fill: colors.white }}
        d="M207.51,61.92h-10.64v-5.15h27.21v5.15h-10.64v26.46h-5.94V61.92z"
      />
      <path
        className="st2"
        style={{ fill: colors.white }}
        d="M242.67,56.54h5.46l14.76,31.83h-6.23l-3.4-7.63H237.4l-3.45,7.63h-6.04L242.67,56.54z M251.11,75.82l-5.8-12.64l-5.75,12.64H251.11z"
      />
      <path
        className="st2"
        style={{ fill: colors.white }}
        d="M278.03,75.91l-13.32-19.14h7l9.34,13.95l9.49-13.95h6.76l-13.32,19.01v12.6h-5.94V75.91z"
      />
      <path
        className="st2"
        style={{ fill: colors.white }}
        d="M307.25,56.77h5.89v26.55h17.63v5.06h-23.52V56.77z"
      />
      <path
        className="st2"
        style={{ fill: colors.white }}
        d="M341.7,56.77h24.87v4.97h-18.97v8.22h16.82v4.97h-16.82v8.49h19.21v4.97H341.7V56.77z"
      />
      <path
        className="st2"
        style={{ fill: colors.white }}
        d="M378.59,56.77h14.95c4.22,0,7.52,1.17,9.68,3.16c1.77,1.72,2.78,4.06,2.78,6.82v0.09c0,5.19-3.31,8.31-7.95,9.57l9.06,11.96h-7l-8.24-11.02h-7.38v11.02h-5.89V56.77z M393.11,72.44c4.22,0,6.9-2.08,6.9-5.28v-0.09c0-3.39-2.59-5.24-6.95-5.24h-8.58v10.61H393.11z"
      />
    </g>
    <g>
      <g>
        <polygon
          id="XMLID_00000010994472210177202450000008947351168523277186_"
          className="st2"
          style={{ fill: colors.white }}
          points="354.01,268.95 351.63,276.18 343.94,276.18 350.16,280.65 347.79,287.89 354.01,283.42 360.23,287.89 357.85,280.65 364.07,276.18 356.38,276.18"
        />
        <polygon
          id="XMLID_00000002376446768208112520000013018632848386513795_"
          className="st2"
          style={{ fill: colors.white }}
          points="389.56,268.95 387.18,276.18 379.49,276.18 385.71,280.65 383.34,287.89 389.56,283.42 395.78,287.89 393.4,280.65 399.62,276.18 391.93,276.18"
        />
        <polygon
          id="XMLID_00000020377328434271876490000005943123672328706710_"
          className="st2"
          style={{ fill: colors.white }}
          points="425.11,268.95 422.73,276.18 415.04,276.18 421.26,280.65 418.89,287.89 425.11,283.42 431.33,287.89 428.95,280.65 435.17,276.18 427.48,276.18"
        />
      </g>
      <g>
        <polygon
          id="XMLID_00000118355901317909660440000003901944994142946983_"
          className="st2"
          style={{ fill: colors.white }}
          points="183.56,268.95 181.18,276.18 173.49,276.18 179.71,280.65 177.34,287.89 183.56,283.42 189.78,287.89 187.4,280.65 193.62,276.18 185.93,276.18"
        />
        <polygon
          id="XMLID_00000152265177647287429370000006935766436284049304_"
          className="st2"
          style={{ fill: colors.white }}
          points="219.11,268.95 216.73,276.18 209.04,276.18 215.26,280.65 212.89,287.89 219.11,283.42 225.33,287.89 222.95,280.65 229.17,276.18 221.48,276.18"
        />
        <polygon
          id="XMLID_00000152251470014410987590000010926621778085833613_"
          className="st2"
          style={{ fill: colors.white }}
          points="254.66,268.95 252.28,276.18 244.59,276.18 250.81,280.65 248.44,287.89 254.66,283.42 260.88,287.89 258.5,280.65 264.72,276.18 257.03,276.18"
        />
      </g>
      <polygon
        className="st2"
        style={{ fill: colors.white }}
        points="311.84,290.83 312.11,289.98 311.95,288.48 312.06,287.42 312.11,286.78 312.7,285.77 312,284.81 311.2,284.65 311.25,284.28 311.58,283.54 312,283.16 312.27,282.42 314.84,281.03 314.9,280.45 314.9,278.42 314.84,276.72 315.27,276.61 315.49,276.24 315.7,276.08 316.18,275.55 317.63,274.8 317.84,274.54 318.92,273.9 319.34,273.47 320.2,273 322.61,270.7 323.84,269.8 325.61,268.89 327.38,268.42 330.6,267.14 331.03,266.82 331.67,266.61 331.24,266.5 330.01,266.45 329.47,266.66 328.83,266.34 328.24,265.86 327.54,265.75 327.17,265.86 326.04,265.81 325.61,265.91 325.18,265.7 324.27,265.91 323.63,264.8 323.31,264.74 322.51,265.17 322.08,265.28 321.22,265.91 320.15,266.18 319.24,266.13 319.24,265.86 318.6,265.81 318.38,265.22 317.95,265.17 317.52,265.12 317.36,264.9 316.77,264.8 316.61,264.53 316.72,264.32 316.13,263.95 314.95,264.1 314.95,264.8 314.47,264.96 313.93,264.16 313.99,263.63 313.61,263.3 312.54,263.3 312.59,262.98 312.97,262.93 312.91,262.56 312.16,262.56 310.88,261.97 310.18,262.03 309.54,261.92 308.04,262.29 307.93,262.56 306.06,262.93 305.95,262.24 305.57,261.92 303.75,261.81 303.32,261.92 303.11,261.55 302.68,261.39 302.25,261.5 301.02,261.23 300.54,260.86 300.48,259.42 300.32,258.89 299.84,256.76 299.09,256.44 298.56,256.55 297.75,256.44 297.75,259.26 296.94,259.26 290.46,259.26 285.32,259.26 285.64,260.7 286.18,261.76 285.8,262.4 285.91,262.67 285.91,263.36 285.86,264 285.91,264.32 285.91,265.28 285.91,265.49 285.91,265.75 286.34,266.23 286.45,267.03 287.47,269.16 287.68,270.07 287.68,270.44 287.79,271.24 287.79,272.35 287.84,273.05 287.89,273.53 287.79,274.17 288.22,274.75 288.11,276.93 288.54,278.32 289.23,279.22 289.45,281.41 289.39,282.05 289.45,282.52 288.86,283.38 287.84,284.12 287.84,284.65 288.7,285.77 290.14,286.62 290.14,287.05 290.14,289.18 290.14,290.46 290.2,291.73 290.2,292.43 290.2,294.93 290.2,294.93 290.2,294.98 290.2,297.59 290.25,300.3 292.55,300.25 293.63,300.2 295.98,300.14 296.46,300.2 299.31,300.2 299.57,300.2 302.04,300.2 303.22,300.14 304.93,300.14 306.86,300.09 307.77,300.09 310.39,300.09 310.55,300.14 313.4,300.09 313.99,300.14 316.24,300.14 318.33,300.09 319.08,300.09 321.33,300.2 321.17,299.77 321.22,299.13 321.06,298.71 321.17,298.44 321.22,297.86 320.95,297.54 320.04,296.47 319.4,296.15 317.68,295.03 317.04,293.7 316.07,293.33 315.17,293.06 314.68,292.43 314.52,292.32 313.5,292.1 312.64,291.31"
      />
    </g>
  </svg>
);

export default Logo;
