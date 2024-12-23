export interface CardProps {
  title: string;
  description: string;
  learnMoreLink?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  note?: string;
  className?: string;
}
