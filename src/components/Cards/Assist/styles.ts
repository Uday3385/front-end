import type { AssistCardType } from '.';
import { Theme } from '@/src/theme';

export default function styles({
    backgroundColor,
    theme,
    style,
}: Omit<AssistCardType, 'iconUrl' | 'title'> & {
    theme: Theme;
}) {
    return {
        width: '100%',
        height: '95px',
        borderRadius: '10px',
        padding: '25px 30px',
        boxShadow: '1px 0px 6px 0px rgba(123, 133, 160, 0.25)',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: backgroundColor || theme.palette.primary.main,

        '& .iconWrapper': {
            width: '36px',
            height: '36px',
            marginRight: '28px',
        },

        '& .assistCardContent': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'column',

            '& .assistCardTitle': {
                fontSize: '16px',
                fontWeight: 700,
                marginBottom: '3px',
                color: '#fff',
                display: 'flex',
                justifyContent: 'flex-start',
                width: '100%',
            },

            '& .assistCardBtn': {
                width: 'auto',
                height: 'auto',
                padding: '2px',
                background: 'transparent',
                color: '#fff',
                textTransform: 'uppercase',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '1.2px',
                transition: 'all 300ms',

                '&:hover': {
                    padding: '5px 8px',
                    backgroundColor: 'rgba(0,0,0,0.095)',
                },
            },

            '& .appIcon': {
                marginLeft: '8px',
            },
        },
    };
}
