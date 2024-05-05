type ModalType = 'dialog' | 'drawer' | 'drawer-top' | 'drawer-left' | 'drawer-right';
export interface ModalStyle {
    dimmed?: React.CSSProperties;
    modal?: React.CSSProperties;
}
export interface ModalProps {
    open: boolean;
    onClose: () => void;
    type: ModalType;
    style?: ModalStyle;
    closeOnOutsideClick?: boolean;
    closeOnESCKeydown?: boolean;
}
declare const Modal: ({ open, onClose, type, style, closeOnOutsideClick, closeOnESCKeydown, children, }: React.PropsWithChildren<ModalProps>) => import("react/jsx-runtime").JSX.Element;
export default Modal;
