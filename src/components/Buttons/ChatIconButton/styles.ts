import { Theme } from '@mui/material/styles';

export default function styles({ theme }: { theme: Theme }) {
    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '& .chatBubble': {
            width: '18px',
            height: '18px',
            fontSize: '12px',
            display: 'flex',
            position: 'absolute',
            top: '3px',
            left: '25px',
            fontFamily: theme.typography.fontFamily,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.palette.error.main,
            color: '#fff',
            borderRadius: '100%',
        },
    };
}
