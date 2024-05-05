export interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    style?: React.CSSProperties;
    customButton?: React.ReactNode;
    hide?: boolean;
}
declare const CloseButton: ({ style, customButton, hide, text, ...props }: CloseButtonProps) => import("react/jsx-runtime").JSX.Element;
export default CloseButton;
