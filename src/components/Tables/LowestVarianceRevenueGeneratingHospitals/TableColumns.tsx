'use client';

import { AddTableColumn } from '@/src/hooks/useDataTable';
import { useTheme } from '@/src/theme';

const TableColumns = ({ dataTableId }: { dataTableId: string }) => {
    const theme = useTheme();

    return [
        AddTableColumn({
            title: 'Hospital',
            fieldName: 'hospital',
        }),
        AddTableColumn({
            title: 'Posted Revenue',
            fieldName: 'postedRevenue',
        }),
        AddTableColumn({
            title: '% Below Average',
            renderCallback({ row }) {
                const color = { color: theme.palette.error.main };
                return <span style={color}>{row.percentageBelowAverage}</span>;
            },
        }),
    ];
};

export default TableColumns;
