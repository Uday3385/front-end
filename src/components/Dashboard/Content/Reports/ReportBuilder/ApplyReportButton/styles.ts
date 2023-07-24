import type { Theme } from '@/src/theme';

const styles = ({ theme }: { theme: Theme }) => {
    return {
        display: 'flex',
        width: '100%',
        margin: '30px 0px 10px 0px',
        justifyContent: 'flex-end',

        '& .applyReportBuilderBtn': {
            minWidth: '100px',
            textTransform: 'uppercase',
            fontWeight: '700 !important',

            '&:disabled': {
                opacity: 0.7,
            },
        },
    };
};

export default styles;
