import { ReactNode } from 'react';
import type { ButtonVariant, ButtonSize, MainButtonProps } from '../MainButton';

export interface ButtonProps extends Omit<MainButtonProps, 'children'> {
  label: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  prefix?: ReactNode;
  sufix?: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
}
