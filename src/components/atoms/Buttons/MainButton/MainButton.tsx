import React, { FC } from 'react';
import styles from './MainButton.module.css';
import { MainButtonProps } from './MainButton.types';

export const MainButton: FC<MainButtonProps> = ({
  onClick,
  skin = 'standard',
  size = 'medium',
  fullWidth,
  customStyle,
  ref,
  ...props
}) => {
  return (
    <button
      className={`${styles.main} ${styles[skin]} ${styles[size]} ${fullWidth && styles.fullWidth} ${customStyle}`}
      onClick={onClick}
      ref={ref}
    >
      {props.children}
    </button>
  );
};
