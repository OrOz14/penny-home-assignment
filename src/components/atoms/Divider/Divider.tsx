import React, { FC } from 'react';
import styles from './Divider.module.css';

interface DividerProps {
  className?: string
}

export const Divider: FC<DividerProps> = ({ className }) => {
  return <div className={`${styles.divider} ${className}`}></div>;
};
