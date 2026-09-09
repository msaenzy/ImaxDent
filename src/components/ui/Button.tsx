import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'navy' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  id?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  target,
  rel,
  fullWidth = false,
  disabled = false,
  id,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-display font-semibold transition-all duration-200 cursor-pointer rounded-xl select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 gap-2',
    lg: 'text-base sm:text-lg px-7 py-3.5 sm:px-8 sm:py-4 gap-2.5',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#C89B3C] hover:bg-[#B5882E] text-[#12233D] font-bold shadow-md shadow-[#C89B3C]/25 hover:shadow-lg hover:shadow-[#C89B3C]/30',
    secondary:
      'bg-white/90 hover:bg-white text-[#1B3A63] border border-[#1B3A63]/20 shadow-sm hover:border-[#1B3A63]/40',
    navy:
      'bg-[#1B3A63] hover:bg-[#122845] text-[#FAF9F6] shadow-md shadow-[#1B3A63]/20 hover:shadow-lg',
    outline:
      'bg-transparent border-2 border-[#1B3A63] text-[#1B3A63] hover:bg-[#1B3A63] hover:text-[#FAF9F6]',
    whatsapp:
      'bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold shadow-md shadow-[#25D366]/25 hover:shadow-lg hover:shadow-[#25D366]/35',
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('https://wa.me');
    return (
      <a
        id={id}
        href={href}
        className={combinedClasses}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};
