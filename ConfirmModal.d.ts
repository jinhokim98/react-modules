import { ModalProps } from './Modal';

interface ConfirmModalProps extends Omit<ModalProps, 'type' | 'closeOnOutsideClick' | 'closeOnESCKeydown' | 'dialogSize'> {
    title: string;
    caption: string;
    onOk?: () => void;
    onCancel?: () => void;
}
declare const ConfirmModal: ({ title, caption, onOk, onCancel, ...props }: React.PropsWithChildren<ConfirmModalProps>) => import("react/jsx-runtime").JSX.Element;
export default ConfirmModal;
