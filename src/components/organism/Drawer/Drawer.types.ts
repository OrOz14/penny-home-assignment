export interface DrawerProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}
