export declare const Modal: (({ open, onClose, type, style, closeOnOutsideClick, closeOnESCKeydown, children, }: import('../../node_modules/react').PropsWithChildren<import('./Modal').ModalProps>) => import("react/jsx-runtime").JSX.Element) & {
    Header: ({ title, onClose, customCloseIcon, hideCloseIcon, style, }: import('./components/header/ModalHeader').ModalHeaderProps) => import("react/jsx-runtime").JSX.Element;
    Content: ({ style, children }: import('../../node_modules/react').PropsWithChildren<import('./components/content/ModalContent').ModalContentProps>) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ buttonPosition, closeButton, confirmButton, style }: import('./components/footer/ModalFooter').ModalFooterProps) => import("react/jsx-runtime").JSX.Element;
};
