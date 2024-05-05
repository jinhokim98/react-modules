export interface ModalHeaderStyle {
    modalHeader?: React.CSSProperties;
    modalTitle?: React.CSSProperties;
}
export interface ModalHeaderProps {
    title: string;
    onClose: () => void;
    style?: ModalHeaderStyle;
    customCloseIcon?: string;
    hideCloseIcon?: boolean;
}
declare const ModalHeader: ({ title, onClose, customCloseIcon, hideCloseIcon, style, }: ModalHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default ModalHeader;
