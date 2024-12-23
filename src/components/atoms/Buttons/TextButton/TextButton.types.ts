import { CSSProperties } from 'react';

export interface TextButtoProps {
  text: string;
  href?: string;
  onClick?: () => void;
  decoration?: TextDecoration;
  className?: CSSProperties;
  ref?: React.Ref<HTMLAnchorElement>;
}

type TextDecoration =
  | 'underline'
  | 'overline'
  | 'line-through'
  | 'italic'
  | 'none';
