import React, { FC } from 'react';
import { MainButton } from '../MainButton/MainButton';
import { IconButtonProps } from './IconButton.types';
import styles from './IconButton.module.css';

export const IconButton: FC<IconButtonProps> = ({ icon, ...props }) => {
  return (
    <MainButton customStyle={styles.button} {...props}>
      {icon}
    </MainButton>
  );
};
