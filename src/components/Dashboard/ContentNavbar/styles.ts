import { Theme } from '@/src/theme';

const styles = {
    root: ({ theme }: { theme: Theme }) => ({
        width: '100%',
        minHeight: 'calc(100vh - 168px)',
        padding: '20px 30px',
        backgroundColor: '#fff',
        borderRadius: '0px 10px 10px 10px',
        border: `1px solid ${theme.palette.borderColor.light}`,
        marginTop: '-1px',
    }),
    buttonWrapper: ({ theme }: { theme: Theme }) => ({
        display: 'flex',
        width: '100%',
        borderBottom: `1px solid ${theme.palette.borderColor.main}`,
    }),
    button: ({ theme, isActive }: { theme: Theme; isActive: boolean }) => ({
        height: '45px',
        minWidth: '90px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 0,
        transition: 'all 300ms',
        color: isActive ? theme.palette.primary.main : theme.palette.borderColor.greyDarken,
        backgroundColor: isActive ? '#fff' : 'transparent',
        border: 'none',
        textAlign: 'center' as 'center',
        borderBottom: isActive ? `2px solid ${theme.palette.primary.main}` : '',
    }),
};

export default styles;
