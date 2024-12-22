import { ReactNode } from 'react';
import type {
  ButtonSkin,
  MainButtonProps,
} from '../MainButton/MainButton.types';

export interface IconButtonProps extends Omit<MainButtonProps, 'children'> {
  icon: ReactNode;
  onClick?: () => void;
  skin?: ButtonSkin;
  customStyle?: string;
  ref?: React.Ref<HTMLButtonElement>;
}
