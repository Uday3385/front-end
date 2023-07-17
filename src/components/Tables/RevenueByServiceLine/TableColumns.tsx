'use client';

import { AddTableColumn } from '@/src/hooks/useDataTable';

const TableColumns = ({ dataTableId }: { dataTableId: string }) => {
    return [
        AddTableColumn({
            title: 'Service Line',
            fieldName: 'serviceLine',
        }),
        AddTableColumn({
            title: 'Revenue',
            fieldName: 'revenue',
        }),
        AddTableColumn({
            title: '% Variance',
            fieldName: 'variance',
        }),
    ];
};

export default TableColumns;
