import React from 'react';
import { Button } from '../../../atoms/Buttons';
import styles from './DrawerFooter.module.css';
import { Add } from '../../../atoms/Icons';

export const DrawerFooter = () => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.button}>
        <Button label={'More'} sufix={<Add />} variant={'light'} fullWidth />
      </div>
      <div className={styles.button}>
        <Button label={'New Payment'} fullWidth />
      </div>
    </div>
  );
};
