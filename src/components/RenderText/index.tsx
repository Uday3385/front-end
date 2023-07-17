import Typography, { TypographyProps } from '@mui/material/Typography';

type Props = TypographyProps & {
    color?: string;
    fontSize?: string;
    fontWeight?: number;
    letterSpacing?: number;
    display?: string;
    alignItems?: string;
    justifyContent?: string;
};

export default function RenderText({
    letterSpacing = 0.25,
    alignItems = 'center',
    justifyContent = 'center',
    display = 'flex',
    fontSize = '14px',
    align = 'center',
    fontWeight = 400,
    children,
    color,
    ...props
}: Props) {
    const style = {
        fontFamily: 'Nunito',
        display,
        alignItems,
        justifyContent,
        letterSpacing,
        fontWeight,
        fontSize,
        color,
    };

    return (
        <Typography align={align} style={style} {...props}>
            {children}
        </Typography>
    );
}
