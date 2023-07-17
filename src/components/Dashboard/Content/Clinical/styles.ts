import type { Theme } from '@/src/theme';
import styles from '@/src/styles/dashboard/content';

const stylesObj = {
    contentStyle: ({ theme }: { theme: Theme }) =>
        styles.graphWrapper({
            theme,
            minHeight: '486px',
            style: { width: '100%', marginTop: '20px', display: 'flex', alignItems: 'center', padding: '20px' },
        }),

    contentSection: { border: 'none', padding: '0px', margin: '-10px 0px -20px 0px' },

    revenueStats: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        lineHeight: 1.3,
        fontSize: '16px',
    },
    revenueStatsColor: ({ theme }: { theme: Theme }) => ({
        color: theme.palette.error.main,
    }),
    graphWrapper: {
        // width: '450px',
        flex: 0.4,
        marginRight: '20px',
    },
    tableWrapper: {
        flex: 0.6,
        // flexGrow: 1,
    },
};

export default stylesObj;
