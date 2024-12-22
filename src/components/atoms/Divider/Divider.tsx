import React, { FC } from 'react';
import styles from './Divider.module.css';

interface DividerProps {
  customStyle?: string
}

export const Divider: FC<DividerProps> = ({ customStyle }) => {
  return <div className={`${styles.divider} ${customStyle}`}></div>;
};
