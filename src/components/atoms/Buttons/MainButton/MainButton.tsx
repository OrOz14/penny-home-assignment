import React, { FC } from 'react';
import styles from './MainButton.module.css';
import { MainButtonProps } from './MainButton.types';

export const MainButton: FC<MainButtonProps> = ({
  onClick,
  variant = 'standard',
  size = 'medium',
  fullWidth,
  disabled = false,
  ariaLabel,
  className,
  ref,
  ...props
}) => {
  return (
    <button
      className={`${styles.main} ${styles[variant]} ${styles[size]} ${fullWidth && styles.fullWidth} ${className}`}
      onClick={onClick}
      ref={ref}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {props.children}
    </button>
  );
};
