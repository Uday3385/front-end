'use client';

import dynamic from 'next/dynamic';

import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import TableColumns from './TableColumns';

const DataTable = dynamic(() => import('@/src/hooks/useDataTable'), { ...getDynamicImportProps() });

export const dataTableId = 'DepartmentsWorkOutSignOffTable';

export default function DepartmentsWorkOutSignOffTable() {
    const renderColumns = TableColumns({
            dataTableId,
        }),
        data = [
            {
                rank: 1,
                facility: 'General Hospital East',
                count: 40,
                percentageTotal: '20%',
            },
            {
                rank: 2,
                facility: 'General Hospital East',
                count: 36,
                percentageTotal: '18%',
            },
            {
                rank: 3,
                facility: 'General Hospital West',
                count: 20,
                percentageTotal: '10%',
            },
            {
                rank: 4,
                facility: 'General Hospital West',
                count: 13,
                percentageTotal: '7%',
            },
            {
                rank: 5,
                facility: 'General Hospital West',
                count: 95,
                percentageTotal: '5%',
            },
        ];

    return <DataTable columns={renderColumns} data={data} />;
}
