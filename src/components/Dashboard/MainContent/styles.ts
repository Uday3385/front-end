import { Theme } from '@/src/theme';

const styles = {
    root: ({ theme, transparentBackground }: { theme: Theme; transparentBackground?: boolean }) => ({
        width: '100%',
        minHeight: 'calc(100vh - 168px)',
        padding: transparentBackground ? '0px' : '20px 30px',
        backgroundColor: transparentBackground ? 'transparent' : '#fff',
        borderRadius: transparentBackground ? '0px' : '0px 10px 10px 10px',
        border: transparentBackground ? 'none' : `1px solid ${theme.palette.borderColor.light}`,
        marginTop: transparentBackground ? '0px' : '-1px',
    }),
};

export default styles;
