
type ModalType = 'dialog' | 'drawer' | 'drawer-top' | 'drawer-left' | 'drawer-right';
export interface ModalStyle {
    dimmed?: React.CSSProperties;
    modal?: React.CSSProperties;
}
type ModalSize = 'small' | 'medium' | 'large';
export interface ModalProps {
    open: boolean;
    dialogSize?: ModalSize;
    onClose: () => void;
    type: ModalType;
    style?: ModalStyle;
    closeOnOutsideClick?: boolean;
    closeOnESCKeydown?: boolean;
}
declare const Modal: ({ open, onClose, type, dialogSize, style, closeOnOutsideClick, closeOnESCKeydown, children, }: React.PropsWithChildren<ModalProps>) => import("react/jsx-runtime").JSX.Element;
export default Modal;
