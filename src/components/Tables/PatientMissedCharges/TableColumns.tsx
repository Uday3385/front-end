'use client';

import { AddTableColumn } from '@/src/hooks/useDataTable';

const TableColumns = ({ dataTableId }: { dataTableId: string }) => {
    return [
        AddTableColumn({
            title: 'Rank',
            fieldName: 'rank',
        }),
        AddTableColumn({
            title: 'Department',
            fieldName: 'department',
        }),
        AddTableColumn({
            title: 'Facility',
            fieldName: 'facility',
        }),
        AddTableColumn({
            title: 'Volume',
            fieldName: 'volume',
        }),
        AddTableColumn({
            title: '% Of Total',
            fieldName: 'percentageTotal',
        }),
    ];
};

export default TableColumns;
