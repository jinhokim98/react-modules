import { ButtonProps } from './button/Button';

export type ButtonPosition = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export interface ModalFooterProps {
    style?: React.CSSProperties;
    buttonPosition?: ButtonPosition;
    closeButton?: ButtonProps;
    confirmButton?: ButtonProps;
}
declare const ModalFooter: ({ buttonPosition, closeButton, confirmButton, style }: ModalFooterProps) => import("react/jsx-runtime").JSX.Element;
export default ModalFooter;
