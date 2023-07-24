'use client';

import { useSetDeleteModalAction } from '@/src/hooks/useModal';
import addTableActionColumn from '@/src/hooks/useDataTable/addTableActionColumn';
import { AddTableColumn } from '@/src/hooks/useDataTable';

const TableColumns = ({ dataTableId }: { dataTableId: string }) => {
    const setDeleteModalAction = useSetDeleteModalAction();

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
            onDelete: async ({ row }) => {
                setDeleteModalAction({
                    itemTitle: 'report ' + row?.name,
                    title: 'Delete Report',
                    open: true,
                });
            }, 

            onEdit: async () => {},

            headerCellStyle: {
                paddingRight: '35px !important',
            },

            wrapperStyle: {
                '& .tableActionDeleteIconBtn, .tableActionEditIconBtn': {
                    backgroundColor: '#eee',
                    width: '25px !important',
                    height: '25px !important',
                    borderRadius: '3px',
                },
                '& .tableActionDeleteIconBtn': {
                    marginRight: '10px !important',
                },
            },
        }),
    ];
};

export default TableColumns;
