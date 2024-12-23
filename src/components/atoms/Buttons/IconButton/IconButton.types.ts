import { ReactNode } from 'react';
import type {
  ButtonVariant,
  MainButtonProps,
} from '../MainButton/MainButton.types';

export interface IconButtonProps extends Omit<MainButtonProps, 'children'> {
  icon: ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  ariaLabel?: string;
  customStyle?: string;
  ref?: React.Ref<HTMLButtonElement>;
}
