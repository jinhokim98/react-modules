export interface ConfirmButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    style?: React.CSSProperties;
    customButton?: React.ReactNode;
    hide?: boolean;
}
declare const ConfirmButton: ({ style, customButton, hide, text, ...props }: ConfirmButtonProps) => import("react/jsx-runtime").JSX.Element;
export default ConfirmButton;
