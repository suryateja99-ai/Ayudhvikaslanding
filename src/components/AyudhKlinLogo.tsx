import React from 'react';
import mascotLogoImg from '../assets/images/ayudh_klin_transparent_logo_1784804065139.jpg';

interface AyudhKlinLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

export const AyudhKlinLogo: React.FC<AyudhKlinLogoProps> = ({
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'h-16 sm:h-20',
    md: 'h-28 sm:h-36',
    lg: 'h-40 sm:h-52',
    xl: 'h-56 sm:h-72',
  };

  return (
    <div className={`inline-flex flex-col items-center justify-center text-center select-none ${className}`}>
      <img
        src={mascotLogoImg}
        alt="AyudhKlin - Clean. Care. Protect."
        referrerPolicy="no-referrer"
        className={`${sizeClasses[size]} w-auto object-contain mix-blend-multiply hover:scale-102 transition-transform duration-300`}
      />
    </div>
  );
};

