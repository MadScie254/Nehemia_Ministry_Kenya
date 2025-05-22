
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string; // For internal navigation
  href?: string; // For external links
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  iconLeft,
  iconRight,
}) => {
  const baseStyle = "inline-flex items-center justify-center font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-150 ease-in-out";
  
  const variantStyles = {
    primary: `bg-amber-500 hover:bg-amber-600 text-white focus:ring-amber-500 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
    secondary: `bg-sky-600 hover:bg-sky-700 text-white focus:ring-sky-600 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
    outline: `border border-amber-500 text-amber-500 hover:bg-amber-50 focus:ring-amber-500 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
    ghost: `text-amber-600 hover:bg-amber-100 focus:ring-amber-500 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const combinedClassName = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName} onClick={onClick}>
        {iconLeft && <span className="mr-2">{iconLeft}</span>}
        {children}
        {iconRight && <span className="ml-2">{iconRight}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClassName} onClick={onClick}>
        {iconLeft && <span className="mr-2">{iconLeft}</span>}
        {children}
        {iconRight && <span className="ml-2">{iconRight}</span>}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClassName} onClick={onClick} disabled={disabled}>
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

export default Button;
