import React from 'react';

type FillColor = string;
type ClassName = string;

interface Props {
  fillColor: FillColor;
  className: ClassName;
}

const defaultProps = {
  className: '',
  fillColor: '#53585E',
};

const InstagramIcon = ({
  fillColor,
  className,
}: Props): React.ReactElement<React.ReactNode> => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    aria-labelledby="instagramLogo"
    aria-hidden="true"
  >
    <title id="instagramLogo">Instagram Logo</title>
    <g fill="none" fillRule="evenodd">
      <g>
        <path
          fill={fillColor}
          d="M10 0C7.28 0 6.94.03 5.88.08 4.8.1 4.08.28 3.45.53a4.9 4.9 0 0 0-1.77 1.15A4.9 4.9 0 0 0 .52 3.45a7.34 7.34 0 0 0-.46 2.43C.01 6.95 0 7.28 0 10s.01 3.06.06 4.12c.05 1.07.22 1.8.46 2.43.26.66.6 1.22 1.16 1.77.55.56 1.11.9 1.77 1.16.63.24 1.36.41 2.43.46 1.06.05 1.4.06 4.12.06 2.71 0 3.05-.01 4.12-.06a7.34 7.34 0 0 0 2.43-.46 4.9 4.9 0 0 0 1.77-1.16 4.9 4.9 0 0 0 1.15-1.77c.25-.63.42-1.36.46-2.43.05-1.06.06-1.4.06-4.12 0-2.71 0-3.05-.06-4.12a7.34 7.34 0 0 0-.46-2.43 4.9 4.9 0 0 0-1.15-1.77A4.9 4.9 0 0 0 16.55.53a7.34 7.34 0 0 0-2.43-.46C13.05.02 12.72 0 10 0zm0 1.8c2.67 0 2.98.02 4.04.07.97.04 1.5.2 1.85.34.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.35.3.88.34 1.85.05 1.06.06 1.37.06 4.04s0 2.99-.06 4.04c-.04.98-.2 1.5-.34 1.86-.18.47-.4.8-.75 1.15a3.1 3.1 0 0 1-1.15.75c-.35.13-.88.3-1.85.34-1.06.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.2-1.86-.34a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.13-.35-.3-.88-.34-1.86A69.38 69.38 0 0 1 1.8 10c0-2.67.01-2.98.06-4.04.04-.97.2-1.5.34-1.85.19-.47.4-.8.75-1.15A3.1 3.1 0 0 1 4.1 2.2c.35-.14.88-.3 1.86-.34C7 1.82 7.33 1.8 10 1.8z"
        />
      </g>
      <path
        fill={fillColor}
        d="M10 13.34a3.33 3.33 0 1 1 0-6.67 3.33 3.33 0 0 1 0 6.67zm0-8.47a5.13 5.13 0 1 0 0 10.27 5.13 5.13 0 0 0 0-10.27zM16.53 4.67a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0"
      />
    </g>
  </svg>
);

InstagramIcon.defaultProps = defaultProps;

export { InstagramIcon };
