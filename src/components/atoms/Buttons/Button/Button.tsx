import React, { FC } from 'react';
import { MainButton } from '../MainButton/MainButton';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({
  prefix,
  label,
  sufix,
  ...props
}: ButtonProps) => {
  return (
    <MainButton {...props}>
      {prefix}
      {label}
      {sufix}
    </MainButton>
  );
};
