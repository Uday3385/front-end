'use client';

import { AddTableColumn } from '@/src/hooks/useDataTable';

const TableColumns = ({ dataTableId }: { dataTableId: string }) => {
    return [
        AddTableColumn({
            title: 'Hospital',
            fieldName: 'hospital',
        }),
        AddTableColumn({
            title: 'Revenue',
            fieldName: 'revenue',
        }),
        AddTableColumn({
            title: 'Health Plan Lives',
            fieldName: 'healthPlanLives',
        }),
    ];
};

export default TableColumns;
