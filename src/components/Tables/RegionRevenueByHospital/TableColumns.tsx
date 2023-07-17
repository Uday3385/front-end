'use client';

import { AddTableColumn } from '@/src/hooks/useDataTable';

const TableColumns = ({ dataTableId }: { dataTableId: string }) => {
    return [
        AddTableColumn({
            title: 'Hospital',
            fieldName: 'hospital',
        }),
        AddTableColumn({
            title: 'Expected Revenue',
            fieldName: 'expectedRevenue',
        }),
        AddTableColumn({
            title: 'Posted Revenue',
            fieldName: 'postedRevenue',
        }),
        AddTableColumn({
            title: 'YoY OM',
            fieldName: 'variance',
        }),
    ];
};

export default TableColumns;
