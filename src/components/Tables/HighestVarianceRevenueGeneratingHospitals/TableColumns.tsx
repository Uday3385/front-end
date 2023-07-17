'use client';

import { AddTableColumn } from '@/src/hooks/useDataTable';

const TableColumns = ({ dataTableId }: { dataTableId: string }) => {
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
            title: '% Above Average',
            fieldName: 'percentageAboveAverage',
        }),
        AddTableColumn({
            title: 'Missed Charges',
            fieldName: 'missedCharges',
        }),
    ];
};

export default TableColumns;
