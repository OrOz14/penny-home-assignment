import React, { FC } from 'react';
import { TextButtoProps } from './TextButton.types';
import styles from './TextButton.module.css';

export const TextButton: FC<TextButtoProps> = ({
  text,
  href,
  onClick,
  decoration = 'none',
  customStyle,
  ref,
  ...props
}) => {
  return (
    <a
      className={`${styles.textButton} ${styles[decoration]} ${customStyle}`}
      href={href}
      onClick={onClick}
      ref={ref}
      {...props}
    >
      {text}
    </a>
  );
};
