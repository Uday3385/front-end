'use client';

import dynamic from 'next/dynamic';

import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import TableColumns from './TableColumns';

const DataTable = dynamic(() => import('@/src/hooks/useDataTable'), { ...getDynamicImportProps() });

export const dataTableId = 'RevenueByServiceLineTable';

export default function RevenueByServiceLineTable() {
    const renderColumns = TableColumns({
            dataTableId,
        }),
        data = [
            {
                serviceLine: 'OR',
                revenue: '$232,837',
                variance: '2.3%',
            },
            {
                serviceLine: 'Cath Lab',
                revenue: '$82,636',
                variance: '4.9%',
            },
            {
                serviceLine: 'MRI',
                revenue: '$927,364',
                variance: '8.52%',
            },
            {
                serviceLine: 'Emergency',
                revenue: '$52,374',
                variance: '5.52%',
            },
        ];

    return <DataTable columns={renderColumns} data={data} />;
}
