import { ButtonVariant } from '../../../components/atoms/Buttons/MainButton';

type CustomHandle = {
  confirmButtonFocus(): void,
  cancelButtonFocus(): void,
};

export interface ModalProps {
  title: string;
  description: string;
  confirmButtonVariant: ButtonVariant;
  confirmButtonLabel: string;
  confirmButtonOnClick: () => void;
  cancelButtonVariant: ButtonVariant;
  cancelButtonLabel: string;
  icon?: React.ReactNode;
  ref?: React.Ref<CustomHandle>;
}
