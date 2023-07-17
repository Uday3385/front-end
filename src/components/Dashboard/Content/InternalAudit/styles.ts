import type { Theme } from '@/src/theme';

const styles = {
    graph: {
        flex: 0.49,
        maxHeight: '470px',
    },
    graphWrapper: ({ theme, style = {} }: { theme: Theme; style?: React.CSSProperties }) => ({
        theme,
        minHeight: '240px',
        style: {
            marginBottom: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 10px 20px 10px',
            ...style,
        },
    }),
};

export default styles;
