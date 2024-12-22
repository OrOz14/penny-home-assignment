import { ReactNode } from 'react';

export interface MainButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  skin?: ButtonSkin;
  size?: ButtonSize;
  fullWidth?: boolean;
  customStyle?: string;
  ref?: React.Ref<HTMLButtonElement>;
}

export type ButtonSkin = 'standard' | 'light' | 'destructive';
export type ButtonSize = 'small' | 'medium';
