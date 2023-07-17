import { Theme } from '@/src/theme';

const flexStyle = {
    display: 'flex',
    alignItems: 'center',
};

export default function styles({ theme }: { theme: Theme }) {
    const primaryColor = theme.palette.primary.main,
        secondaryColor = theme.palette.secondary.main;

    return {
        root: ({ isFirstMenuItem = false }) => ({
            ...flexStyle,
            minHeight: '40px',
            width: '100%',
            justifyContent: 'flex-start',
            backgroundColor: 'transparent',
            color: primaryColor,
            border: 'none',
            padding: '6px 0px',
            margin: `0px 0px ${isFirstMenuItem ? 15 : 5}px 0px`,
            position: 'relative' as 'relative',
            zIndex: 999,
        }),

        sidebarMenuItemIndicator: {
            ...flexStyle,
            marginRight: '10px',
            minWidth: '4px',
        },
        sidebarMenuItemIcon: {
            ...flexStyle,
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            minWidth: '40px',
            border: `1px solid ${theme.palette.borderColor.main}`,
            borderRadius: '12px',
            marginRight: '8px',
        },
        sidebarMenuItemTitle: {
            ...flexStyle,
            marginRight: '10px',
            fontFamily: 'Nunito',
            fontSize: '13px',
            fontWeight: 700,
            width: '140px',
            color: secondaryColor,
        },
    };
}
