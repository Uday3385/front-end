'use client';

import { AddTableColumn } from '@/src/hooks/useDataTable';

const TableColumns = ({ dataTableId }: { dataTableId: string }) => {
    return [
        AddTableColumn({
            title: 'Rank',
            fieldName: 'rank',
        }),
        AddTableColumn({
            title: 'Amount',
            fieldName: 'amount',
        }),
        AddTableColumn({
            title: 'Payer',
            fieldName: 'payer',
        }),
        AddTableColumn({
            title: 'Task Category',
            fieldName: 'taskCategory',
        }),
        AddTableColumn({
            title: 'Facility',
            fieldName: 'facility',
        }),
    ];
};

export default TableColumns;
