import { ReactNode } from 'react';
import type { ButtonSkin, ButtonSize, MainButtonProps } from '../MainButton';

export interface ButtonProps extends MainButtonProps {
  label: string;
  onClick?: () => void;
  skin?: ButtonSkin;
  size?: ButtonSize;
  prefix?: ReactNode;
  sufix?: ReactNode;
  fullWidth?: boolean;
  customStyle?: string;
  ref?: React.Ref<HTMLButtonElement>;
}
