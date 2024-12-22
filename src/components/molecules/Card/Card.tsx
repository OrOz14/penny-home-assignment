import { TextButton } from '../../atoms/Buttons';
import React, { FC } from 'react';
import styles from './Card.module.css';
import { Divider } from '../../../components/atoms/Divider';
import { CardProps } from './Card.types';

export const Card: FC<CardProps> = ({
  title,
  description,
  learnMoreLink,
  icon,
  action,
  note,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <div className={styles.caption}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>
            {description}{' '}
            {learnMoreLink && <TextButton text="Learn more" href="#" />}
          </p>
        </div>
        {action && action}
      </div>
      {note && (
        <div className={styles.noteContainer}>
          <Divider />
          <p className={styles.note}>{note}</p>
        </div>
      )}
    </div>
  );
};
