import { ButtonSkin } from '../../../components/atoms/Buttons/MainButton';

export interface ModalProps {
  title: string;
  description: string;
  confirmButtonSkin: ButtonSkin;
  confirmButtonLabel: string;
  confirmButtonOnClick: () => void;
  cancelButtonSkin: ButtonSkin;
  cancelButtonLabel: string;
  icon?: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}
