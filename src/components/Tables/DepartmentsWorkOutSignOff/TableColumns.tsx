'use client';

import { AddTableColumn } from '@/src/hooks/useDataTable';

const TableColumns = ({ dataTableId }: { dataTableId: string }) => {
    return [
        AddTableColumn({
            title: 'Rank',
            fieldName: 'rank',
        }),
        AddTableColumn({
            title: 'Facility',
            fieldName: 'facility',
        }),
        AddTableColumn({
            title: 'Count',
            fieldName: 'count',
        }),
        AddTableColumn({
            title: '% Of Total',
            fieldName: 'percentageTotal',
        }),
    ];
};

export default TableColumns;
