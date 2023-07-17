import type { Theme } from '@/src/theme';

const styles = {
    graph: {
        flex: 0.49,
        maxHeight: '470px',
    },
    graphWrapper: ({ theme }: { theme: Theme }) => ({
        theme,
        minHeight: '240px',
        style: {
            marginTop: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 10px 20px 10px',
        },
    }),
};

export default styles;
