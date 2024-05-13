import { ModalProps } from './Modal';

interface AlertModalProps extends Omit<ModalProps, 'type' | 'closeOnOutsideClick' | 'closeOnESCKeydown' | 'dialogSize'> {
    title: string;
    caption: string;
    onOk?: () => void;
}
declare const AlertModal: ({ title, caption, onOk, ...props }: React.PropsWithChildren<AlertModalProps>) => import("react/jsx-runtime").JSX.Element;
export default AlertModal;
