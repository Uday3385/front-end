'use client';

import addTableActionColumn from '@/src/hooks/useDataTable/addTableActionColumn';
import { AddTableColumn } from '@/src/hooks/useDataTable';

const TableColumns = ({ dataTableId }: { dataTableId: string }) => {
    return [
        AddTableColumn({
            title: 'Report Name',
            fieldName: 'name',
        }),
        AddTableColumn({
            title: 'Report Description',
            fieldName: 'description',
        }),
        AddTableColumn({
            title: 'Report Category',
            fieldName: 'category',
        }),
        AddTableColumn({
            title: 'Created Date',
            fieldName: 'createdAt',
        }),
        addTableActionColumn({
            onDelete: () => {},
            onEdit: () => {},
        }),
    ];
};

export default TableColumns;
