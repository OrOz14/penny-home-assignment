import React, { FC, useState, useRef, useImperativeHandle } from 'react';
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
  confirmButtonVariant,
  confirmButtonOnClick,
  cancelButtonLabel,
  cancelButtonVariant,
  ref,
}: ModalProps) => {
  const [open, setOpen] = useState(false);
  const confirmButtonRef = useRef<HTMLButtonElement>(null);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => {
    return {
      confirmButtonFocus() {
        confirmButtonRef.current?.focus();
      },
      cancelButtonFocus() {
        cancelButtonRef.current?.focus();
      },
    };
  }, []);

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
      <DialogContent className={styles.content}>
        <DialogHeader className={styles.header}>
          <div className={styles.title}>
            {icon}
            <DialogTitle>{title}</DialogTitle>
          </div>
          <IconButton
            icon={<Close />}
            variant="light"
            onClick={() => setOpen(false)}
          />
        </DialogHeader>
        <DialogBody className={styles.body}>
          <p2>{description}</p2>
        </DialogBody>
        <DialogFooter className={styles.footer}>
          <div className={styles.footerButton}>
            <Button
              label={cancelButtonLabel}
              variant={cancelButtonVariant}
              fullWidth={isMobile}
              onClick={() => setOpen(false)}
              className={styles.button}
              ref={cancelButtonRef}
            />
          </div>
          <div className={styles.footerButton}>
            <Button
              label={confirmButtonLabel}
              variant={confirmButtonVariant}
              fullWidth={isMobile}
              onClick={confirmButtonOnClick}
              className={styles.button}
              ref={confirmButtonRef}
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};
