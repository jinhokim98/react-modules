import { ModalProps } from './Modal';

interface PromptModalProps extends Omit<ModalProps, 'type' | 'closeOnOutsideClick' | 'closeOnESCKeydown' | 'dialogSize'> {
    title: string;
    placeholder?: string;
    onOk?: () => void;
    onCancel?: () => void;
}
declare const PromptModal: ({ title, placeholder, onOk, onCancel, ...props }: React.PropsWithChildren<PromptModalProps>) => import("react/jsx-runtime").JSX.Element;
export default PromptModal;
