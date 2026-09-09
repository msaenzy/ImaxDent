import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// Customized Orthodontics Icon (Tooth with detailed bracket, tie wings, and continuous archwire)
export const OrthodonticsIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Tooth outline */}
    <path d="M12 4C8.5 2 5.5 3 4.5 6C3 10.5 4 15 5.5 18C7 21 8.5 22 10 20C11 18.5 11.5 16 12 14.5C12.5 16 13 18.5 14 20C15.5 22 17 21 18.5 18C20 15 21 10.5 19.5 6C18.5 3 15.5 2 12 4Z" />
    {/* Horizontal orthodontic archwire passing through */}
    <path d="M2 11H22" strokeDasharray="0" />
    {/* Center bracket */}
    <rect x="9" y="8.5" width="6" height="5" rx="1" fill="currentColor" fillOpacity="0.12" />
    {/* Bracket slot center marker */}
    <path d="M12 8.5V13.5" />
    {/* Archwire tie wings */}
    <circle cx="8" cy="11" r="1" fill="currentColor" />
    <circle cx="16" cy="11" r="1" fill="currentColor" />
  </svg>
);

// Customized Prophylaxis / Cleaning Icon (Tooth with ultrasonic waves & sparkling shine)
export const CleaningIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Tooth outline */}
    <path d="M12 4.5C9 2.5 6.5 3 5 5.5C3.5 9.5 4 14.5 5.5 17.5C7 20.5 8.5 21 9.5 19C10.5 17.5 11 15 12 14C13 15 13.5 17.5 14.5 19C15.5 21 17 20.5 18.5 17.5C20 14.5 20.5 9.5 19 5.5C17.5 3 15 2.5 12 4.5Z" />
    {/* Sparkle 1 */}
    <path d="M19 2L19.5 3.5L21 4L19.5 4.5L19 6L18.5 4.5L17 4L18.5 3.5L19 2Z" fill="currentColor" />
    {/* Sparkle 2 */}
    <path d="M4 3L4.5 4.5L6 5L4.5 5.5L4 7L3.5 5.5L2 5L3.5 4.5L4 3Z" fill="currentColor" />
    {/* Clean bubbles / water wave */}
    <path d="M9 10C10.5 11 13.5 11 15 10" />
    <circle cx="15.5" cy="7.5" r="0.75" fill="currentColor" />
  </svg>
);

// Resins & Fillings Icon (Tooth with restoration matrix)
export const ResinsIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 4C8.5 2 5.5 3 4.5 6C3 10.5 4 15 5.5 18C7 21 8.5 22 10 20C11 18.5 11.5 16 12 14.5C12.5 16 13 18.5 14 20C15.5 22 17 21 18.5 18C20 15 21 10.5 19.5 6C18.5 3 15.5 2 12 4Z" />
    {/* Restored aesthetic occlusal filling */}
    <path d="M9 7C10.5 8.5 13.5 8.5 15 7" />
    <path d="M10 11C11.2 12 12.8 12 14 11" strokeDasharray="1 2" />
    {/* High-polish sparkle */}
    <path d="M12 6V9" />
  </svg>
);

// Prosthetics Icon (Dental Bridge / Crown Replacement)
export const ProstheticsIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Dental Crown / Bridge Support structure */}
    <path d="M4 18V10C4 6 7 4 12 4C17 4 20 6 20 10V18" />
    <path d="M4 14H20" />
    <path d="M8 14V18" />
    <path d="M16 14V18" />
    <path d="M12 14V19" />
    <circle cx="12" cy="9" r="1.5" fill="currentColor" />
  </svg>
);

// Extractions Icon (Gentle extraction & molar)
export const ExtractionsIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Molar */}
    <path d="M12 7C9.5 5 7 5.5 6 7.5C4.5 10.5 5.5 14 6.5 16.5C7.5 19 8.5 19.5 9.5 18C10.5 16.5 11 14.5 12 13.5C13 14.5 13.5 16.5 14.5 18C15.5 19.5 16.5 19 17.5 16.5C18.5 14 19.5 10.5 18 7.5C17 5.5 14.5 5 12 7Z" />
    {/* Gentle upward care arrows / extraction indicator */}
    <path d="M12 2V5" />
    <path d="M9.5 3.5L12 1L14.5 3.5" />
    {/* Safety shield check */}
    <path d="M18 20L19.5 21.5L22 19" />
  </svg>
);

export const TreatmentIcon: React.FC<{
  name: 'ortodoncia' | 'resinas' | 'limpieza' | 'protesis' | 'extracciones';
  className?: string;
  size?: number;
}> = ({ name, className = '', size = 28 }) => {
  switch (name) {
    case 'ortodoncia':
      return <OrthodonticsIcon className={className} size={size} />;
    case 'resinas':
      return <ResinsIcon className={className} size={size} />;
    case 'limpieza':
      return <CleaningIcon className={className} size={size} />;
    case 'protesis':
      return <ProstheticsIcon className={className} size={size} />;
    case 'extracciones':
      return <ExtractionsIcon className={className} size={size} />;
    default:
      return <OrthodonticsIcon className={className} size={size} />;
  }
};
