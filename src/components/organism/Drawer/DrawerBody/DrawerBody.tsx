import React from 'react';
import { Button, TextButton } from '../../../atoms/Buttons';
import { Card } from '../../../molecules/Card';
import { IconButton } from '../../../atoms/Buttons';
import { More } from '../../../atoms/Icons';
import styles from './DrawerBody.module.css';
import { Divider } from '../../../atoms/Divider';

const payments: { title: string, amount: string, description: string }[] = [
  {
    title: 'Open balance',
    amount: '$19,945.00',
    description: '11 bills',
  },
  {
    title: 'Scheduled',
    amount: '$466.00',
    description: '4 payments',
  },
  {
    title: 'Paid',
    amount: '$500.00',
    description: '1 payment',
  },
];

export const DrawerBody = () => {
  return (
    <div className={styles.body}>
      <section className={styles.firstSection}>
        <div className={styles.eBillsContainer}>
          <div>
            <h3>eBills</h3>
            <p3>
              Subscribe to get bills from this vendor electronically to manage
              and pay them in one place.{' '}
            </p3>
          </div>
          <IconButton icon={<More />} variant="light" />
        </div>
        <Card
          title="Autopay"
          description="After receiving your first eBill, you can set up AutoPay to have future eBills paid automatically and on time."
          learnMoreLink="#"
          className={styles.card}
        />
        <Divider className={styles.divider} />
      </section>
      <section className={styles.section}>
        <h3>Payments overview</h3>
        <div className={styles.paymentsContainer}>
          {payments.map((payment, index) => (
            <div key={payment.title} className={styles.paymentItemContainer}>
              {index !== 0 && <VerticalDivider />}
              <div className={styles.paymentItem}>
                <p4>{payment.title}</p4>
                <p2>{payment.amount}</p2>
                <div>
                  <p3>{payment.description}</p3>{' '}
                  <TextButton text="View" href="#" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Divider className={styles.divider} />
      <section className={styles.section}>
        <h3>Delivery methods</h3>

        <Card
          title="Request delivery details"
          description="We'll email your vendor to set their delivery method."
          action={
            <Button label="Send request" size="small" onClick={() => {}} />
          }
        />
      </section>
    </div>
  );
};

const VerticalDivider = () => {
  return <div className={styles.verticalDivider} />;
};
