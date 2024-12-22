import React, {
  FC,
  useState,
  useRef,
  useImperativeHandle,
  Ref,
  RefObject,
} from 'react';
import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '../../ui/dialog';
import { Button, IconButton } from '../../atoms/Buttons';
import { Close } from '../../atoms/Icons/Close';
import styles from './Modal.module.css';
import { ModalProps } from './Modal.types';

export const Modal: FC<ModalProps> = ({
  title,
  description,
  icon,
  confirmButtonLabel,
  confirmButtonSkin,
  confirmButtonOnClick,
  cancelButtonLabel,
  cancelButtonSkin,
  ref,
}) => {
  const [open, setOpen] = useState(false);
  const confirmButtonRef = useRef(null) as RefObject<HTMLButtonElement>;
  const cancelButtonRef = useRef(null) as RefObject<HTMLButtonElement>;

  // useImperativeHandle(ref, () => {
  //   return {
  //     focusConfirmButton: confirmButtonRef.current?.focus(),
  //   };
  // }, []);

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const modalPlacement = isMobile ? 'bottom' : 'top';

  return (
    <DialogRoot
      placement={modalPlacement}
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <DialogTrigger asChild>
        <Button label="Open Modal" />
      </DialogTrigger>
      <DialogContent className={styles.content} ref={ref}>
        <DialogHeader className={styles.header}>
          <div className={styles.title}>
            {icon}
            <DialogTitle>{title}</DialogTitle>
          </div>
          <IconButton
            icon={<Close />}
            skin="light"
            onClick={() => setOpen(false)}
          />
        </DialogHeader>
        <DialogBody className={styles.description}>{description}</DialogBody>
        <DialogFooter className={styles.footer}>
          <div className={styles.footerButton}>
            <Button
              label={cancelButtonLabel}
              skin={cancelButtonSkin}
              fullWidth={isMobile}
              onClick={() => setOpen(false)}
              customStyle={styles.button}
              ref={cancelButtonRef}
            />
          </div>
          <div className={styles.footerButton}>
            <Button
              label={confirmButtonLabel}
              skin={confirmButtonSkin}
              fullWidth={isMobile}
              onClick={confirmButtonOnClick}
              customStyle={styles.button}
              ref={confirmButtonRef}
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};
