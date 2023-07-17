'use client';

import { AddTableColumn } from '@/src/hooks/useDataTable';

const TableColumns = ({ dataTableId }: { dataTableId: string }) => {
    return [
        AddTableColumn({
            title: 'FIN',
            fieldName: 'fin',
        }),
        AddTableColumn({
            title: 'Charges',
            fieldName: 'charges',
        }),
        AddTableColumn({
            title: 'MRN',
            fieldName: 'MRN',
        }),
        AddTableColumn({
            title: 'Description',
            fieldName: 'description',
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
