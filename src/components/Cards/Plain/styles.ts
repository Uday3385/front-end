import type { PlainCardType } from '.';
import { Theme } from '@/src/theme';

export default function styles({
    contentStyle,
    titleStyle,
    success,
    theme,
    style,
    error,
    size,
}: Omit<PlainCardType, 'children' | 'title'> & {
    theme: Theme;
}) {
    let contentColor = undefined;
    if (success) {
        contentColor = theme.palette.success.main;
    } else if (error) {
        contentColor = theme.palette.error.main;
    }

    const isSmallSize = size === 'small';

    return {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: isSmallSize ? '208px' : '182px',
        height: isSmallSize ? '110px' : '140px',
        backgroundColor: '#fff',
        border: `1px solid ${theme.palette.borderColor.main}`,
        borderRadius: '10px',
        boxShadow: '0px 4px 10px 0px rgba(189, 195, 197, 0.25)',
        padding: isSmallSize ? '12px 20px 8px 20px' : '20px 20px 27px 20px',
        ...style,

        '& .plainCardTitle': {
            fontSize: isSmallSize ? '13px' : '16px',
            fontWeight: 700,
            lineHeight: 1.3,
            minHeight: isSmallSize ? '40px' : '55px',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            flexWrap: 'wrap',
            color: theme.palette.borderColor.greyDarken,
            textTransform: 'capitalize',
            ...titleStyle,
        },

        '& .plainCardContent': {
            display: 'flex',
            alignItems: isSmallSize ? 'flex-end' : undefined,
            justifyContent: 'center',
            fontSize: isSmallSize ? '26px' : '36px',
            fontWeight: 600,
            color: contentColor,
            ...contentStyle,
        },
    };
}
