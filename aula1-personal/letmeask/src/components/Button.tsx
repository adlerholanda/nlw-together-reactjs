type ButtonProps = {
    text?: string;
    children?: string;
    number?: number;
};

export function Button(props: ButtonProps) {
    return (
        <button>{ props.number|| props.text|| props.children || 'Default'}</button>
    )
}