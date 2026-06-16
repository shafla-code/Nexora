import React from 'react';

interface NexoraLogoProps {
  isLightTheme?: boolean;
  showTagline?: boolean;
  className?: string;
  iconOnly?: boolean;
  height?: number | string;
}

export default function NexoraLogo({
  isLightTheme = false,
  showTagline = true,
  className = '',
  iconOnly = false,
  height = '48px'
}: NexoraLogoProps) {
  // Brand color scheme constants
  const tealColor = '#007D87'; // Primary Teal Blue
  const limeColor = '#A3D635'; // Secondary Lime Green
  const darkTeal = '#005060';   // Dark Accent
  
  // Dynamic color selection for theme compatibility
  const neutralText = isLightTheme ? '#0F172A' : '#FFFFFF'; // Dark slate vs White
  const taglineColor = isLightTheme ? '#005060' : '#94A3B8'; // Dark accent vs Secondary Text

  if (iconOnly) {
    // Return just the distinctive custom "x" as the icon/mark!
    return (
      <svg
        viewBox="0 0 100 100"
        style={{ height }}
        className={`inline-block select-none ${className}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g strokeLinecap="round" strokeLinejoin="round">
          {/* Back diagonal line of X - Teal */}
          <line
            x1="25"
            y1="25"
            x2="75"
            y2="75"
            stroke={tealColor}
            strokeWidth="15"
          />
          {/* Custom rising arrow - Lime green */}
          <path
            d="M 25 75 L 70 30"
            stroke={limeColor}
            strokeWidth="15"
          />
          {/* Arrow Head */}
          <path
            d="M 50 20 L 80 20 L 80 50"
            fill="none"
            stroke={limeColor}
            strokeWidth="15"
          />
        </g>
      </svg>
    );
  }

  return (
    <div className={`flex flex-col items-start select-none ${className}`} style={{ height: 'auto', display: 'inline-flex' }}>
      <svg
        viewBox="0 0 420 110"
        style={{ height }}
        className="w-auto overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>
            {`
              .logotext-bold {
                font-family: "Space Grotesk", "Outfit", "Inter", sans-serif;
                font-weight: 700;
                font-size: 76px;
                letter-spacing: -2px;
              }
              .tagline-text {
                font-family: "Space Grotesk", "Inter", sans-serif;
                font-weight: 600;
                font-size: 20px;
                letter-spacing: 4px;
              }
            `}
          </style>
        </defs>

        {/* Wordmark Assembly */}
        <g transform="translate(10, 75)">
          {/* "Ne" part in Teal */}
          <text x="0" y="0" fill={tealColor} className="logotext-bold">
            Ne
          </text>

          {/* Custom Integrated "x" arrow element */}
          <g transform="translate(92, -62)" strokeLinecap="round" strokeLinejoin="round">
            {/* Backdrop teal stroke of x */}
            <path
              d="M 12,20 L 48,56"
              stroke={tealColor}
              strokeWidth="15"
            />
            {/* Custom rising trend growth arrow in Lime Green */}
            <path
              d="M 12,56 L 56,12"
              stroke={limeColor}
              strokeWidth="15"
            />
            {/* Arrowhead */}
            <path
              d="M 38,8 L 60,8 L 60,30"
              fill="none"
              stroke={limeColor}
              strokeWidth="14"
            />
          </g>

          {/* "ora" part in Dark or Light text depending on active theme */}
          <text x="160" y="0" fill={neutralText} className="logotext-bold">
            ora
          </text>
        </g>

        {/* Underlay Tagline: Driving Digital Growth */}
        {showTagline && (
          <text
            x="18"
            y="102"
            fill={taglineColor}
            className="tagline-text uppercase"
          >
            Driving Digital Growth
          </text>
        )}
      </svg>
    </div>
  );
}
