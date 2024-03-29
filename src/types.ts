import { ReactNode, CSSProperties, MouseEvent } from 'react';

export interface AppProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  closeIcon: string;
  boxStyle?: React.CSSProperties;
  overlayStyle?: React.CSSProperties;
  closeStyle?: React.CSSProperties;
  enableSecondModalButton?: boolean;
}

export interface OverlayProps {
  children?: ReactNode;
  onClick: (event: MouseEvent) => void;
  overlayStyle?: CSSProperties;
  fade?: boolean;
  secondOverlayStyle?: CSSProperties;
}

export type CloseIcon = React.ReactElement | string;

export interface BoxProps {
  message?: string;
  boxStyle?: CSSProperties;
  onClick: (event: MouseEvent) => void;
  closeStyle?: CSSProperties;
  customCloseIcon?: string;
  msgStyle?: CSSProperties;
  btnStyle?: CSSProperties;
  fade?: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  options?: ModalOptions;
  secondModalOptions?: ModalOptions;
}

export interface ModalOptions {
  message: string;
  boxStyle?: React.CSSProperties;
  overlayStyle?: React.CSSProperties;
  customCloseIcon?: string;
  closeStyle?: React.CSSProperties;
  msgStyle?: CSSProperties;
  btnStyle?: CSSProperties;
  fade?: boolean;
}

export type BoxClickHandler = (e: MouseEvent<HTMLDivElement>) => void;
