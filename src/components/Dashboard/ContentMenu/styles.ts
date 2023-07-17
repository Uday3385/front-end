import { Theme } from '@/src/theme';

const styles = {
    contentMenu: ({ theme }: { theme: Theme }) => ({
        display: 'flex',
        alignItems: 'end',
        width: '100%',
        marginTop: '0px',
        // borderBottom: `1px solid ${theme.palette.borderColor.main}`,
    }),
    button: ({
        isFirstButton,
        isLastButton,
        isActive,
        theme,
    }: {
        isFirstButton: boolean;
        isLastButton: boolean;
        isActive: boolean;
        theme: Theme;
    }) => {
        let borderColor = theme.palette.borderColor.main;
        if (isActive && (isFirstButton || isLastButton)) {
            borderColor = theme.palette.borderColor.light;
        }

        return {
            height: isActive ? '36px' : '31px',
            color: isActive ? theme.palette.primary.main : theme.palette.borderColor.greyDarken,
            backgroundColor: isActive ? '#fff' : 'transparent',
            borderTopWidth: '1px',
            borderBottomWidth: isActive ? '0px' : '1px',
            borderRightWidth: '1px',
            borderLeftWidth: '1px',
            // border: `1px solid ${theme.palette.borderColor.main}`,
            borderStyle: 'solid',
            width: '200px',
            borderRadius: '10px 10px 0px 0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: isFirstButton ? '0px' : '-1px',
            borderColor,
        };
    },
    menuTitle: ({ isActive = false }) => ({
        fontWeight: isActive ? 700 : 400,
    }),
};

export default styles;
