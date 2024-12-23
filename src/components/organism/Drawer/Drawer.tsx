'use client';

import React, { FC } from 'react';
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '../../../components/ui/drawer';
import { useState } from 'react';
import { Button, IconButton } from '../../../components/atoms/Buttons';
import { Close } from '../../../components/atoms/Icons';
import type { DrawerProps } from './Drawer.types';
import styles from './Drawer.module.css';
import { Divider } from '../../../components/atoms/Divider';

export const Drawer: FC<DrawerProps> = ({
  title,
  children,
  footer,
  ref,
}: DrawerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button label={'Open Drawer'} />
      </DrawerTrigger>
      <DrawerContent className={styles.content} ref={ref}>
        <DrawerHeader className={styles.header}>
          <DrawerTitle className={styles.title}>{title}</DrawerTitle>
          <IconButton
            icon={<Close />}
            variant="light"
            onClick={() => setOpen(false)}
          />
        </DrawerHeader>
        <DrawerBody className={styles.body}>{children}</DrawerBody>
        {footer ? (
          <>
            <Divider className={styles.divider} />
            {footer}
          </>
        ) : null}
      </DrawerContent>
    </DrawerRoot>
  );
};
