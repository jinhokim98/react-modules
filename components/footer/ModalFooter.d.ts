import { ConfirmButtonProps } from './buttons/ConfirmButton';
import { CloseButtonProps } from './buttons/CloseButton';

export type ButtonPosition = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export interface ModalFooterProps {
    style?: React.CSSProperties;
    buttonPosition?: ButtonPosition;
    closeButton?: CloseButtonProps;
    confirmButton?: ConfirmButtonProps;
}
declare const ModalFooter: ({ buttonPosition, closeButton, confirmButton, style }: ModalFooterProps) => import("react/jsx-runtime").JSX.Element;
export default ModalFooter;
