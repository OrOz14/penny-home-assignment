import { ReactNode } from 'react';

export interface MainButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
}

export type ButtonVariant = 'standard' | 'light' | 'destructive';
export type ButtonSize = 'small' | 'medium';
