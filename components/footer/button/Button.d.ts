type ButtonRole = 'confirm' | 'close';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    role: ButtonRole;
    text?: string;
    style?: React.CSSProperties;
    customButton?: React.ReactNode;
    hide?: boolean;
}
declare const Button: ({ style, customButton, hide, text, role, ...props }: ButtonProps) => string | number | boolean | Iterable<import('../../../../../node_modules/react').ReactNode> | import("react/jsx-runtime").JSX.Element | null | undefined;
export default Button;
