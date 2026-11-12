import React from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
