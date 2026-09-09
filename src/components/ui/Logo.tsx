import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'default';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  className = '',
  size = 'md',
}) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? '#FAF9F6' : '#1B3A63';
  const subtextColor = isDark ? '#F7EEDB' : '#C89B3C';
  const goldColor = '#C89B3C';

  const scaleClasses = {
    sm: 'h-8 text-lg',
    md: 'h-10 text-xl',
    lg: 'h-14 text-2xl',
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* SVG Icon: Heart-Molar in Gold */}
      <svg
        className={scaleClasses.split(' ')[0]}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Heart shaped tooth outer silhouette */}
        <path
          d="M24 6.5C18.5 2 10.5 3 6.5 8C2.5 13 3 20 5.5 26C8 32 11.5 39 16 43.5C17.5 45 19.5 44 20.5 42C21.8 39.5 23 35.5 24 33C25 35.5 26.2 39.5 27.5 42C28.5 44 30.5 45 32 43.5C36.5 39 40 32 42.5 26C45 20 45.5 13 41.5 8C37.5 3 29.5 2 24 6.5Z"
          fill={goldColor}
        />
        {/* Subtle inner heart/dentin highlight in soft white/cream */}
        <path
          d="M24 12C20.5 9 15.5 9.5 12.5 13C9.5 16.5 10 21.5 12 25.5C14 29.5 18 34.5 21.5 37.5C22.5 38.5 23.5 38.5 24 37C24.5 38.5 25.5 38.5 26.5 37.5C30 34.5 34 29.5 36 25.5C38 21.5 38.5 16.5 35.5 13C32.5 9.5 27.5 9 24 12Z"
          fill="rgba(250, 249, 246, 0.28)"
        />
        {/* Sparkle star on top right corner */}
        <path
          d="M37 6L38 9L41 10L38 11L37 14L36 11L33 10L36 9L37 6Z"
          fill="#FAF9F6"
        />
      </svg>

      {/* Typography Lockup */}
      <div className="flex flex-col leading-none">
        <span
          className="font-display font-extrabold tracking-wider"
          style={{ color: textColor }}
        >
          IMAX<span style={{ color: goldColor }}>DENT</span>
        </span>
        <span
          className="text-[9px] font-semibold tracking-[0.22em] uppercase mt-0.5"
          style={{ color: subtextColor }}
        >
          Consultorio Dental
        </span>
      </div>
    </div>
  );
};

// Friendly Tooth Mascot component (smiling/winking tooth) representing @imax.dental's identity
export const ToothMascot: React.FC<{
  className?: string;
  size?: number;
  winking?: boolean;
}> = ({ className = '', size = 48, winking = true }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Tooth Body with gentle shadows */}
      <path
        d="M32 8C23 8 14 11 11 18C8 25 9 34 12 42C15 50 19 58 24 58C28 58 29 50 32 44C35 50 36 58 40 58C45 58 49 50 52 42C55 34 56 25 53 18C50 11 41 8 32 8Z"
        fill="#FFFFFF"
        stroke="#1B3A63"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Golden crown / hair accent */}
      <path
        d="M26 11C28 9 30 7 32 7C34 7 36 9 38 11"
        stroke="#C89B3C"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Rosy Cheeks */}
      <ellipse cx="19" cy="31" rx="3.5" ry="2" fill="#F7D0D8" />
      <ellipse cx="45" cy="31" rx="3.5" ry="2" fill="#F7D0D8" />

      {/* Eyes: One Winking, One Open Smiling */}
      {winking ? (
        <>
          {/* Left Eye: Open Sparkle */}
          <circle cx="23" cy="25" r="3" fill="#1B3A63" />
          <circle cx="24" cy="24" r="1" fill="#FFFFFF" />
          {/* Right Eye: Friendly Wink Curve */}
          <path
            d="M38 25C40 23 43 23 45 25"
            stroke="#1B3A63"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <circle cx="23" cy="25" r="3" fill="#1B3A63" />
          <circle cx="24" cy="24" r="1" fill="#FFFFFF" />
          <circle cx="41" cy="25" r="3" fill="#1B3A63" />
          <circle cx="42" cy="24" r="1" fill="#FFFFFF" />
        </>
      )}

      {/* Bright Big Smile */}
      <path
        d="M25 33C27 37 37 37 39 33"
        stroke="#1B3A63"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Tooth Sparkle */}
      <path
        d="M48 12L49 14.5L51.5 15.5L49 16.5L48 19L47 16.5L44.5 15.5L47 14.5L48 12Z"
        fill="#C89B3C"
      />
    </svg>
  );
};
