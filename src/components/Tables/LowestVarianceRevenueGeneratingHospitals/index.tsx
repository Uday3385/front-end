'use client';

import dynamic from 'next/dynamic';

import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import TableColumns from './TableColumns';

const DataTable = dynamic(() => import('@/src/hooks/useDataTable'), { ...getDynamicImportProps() });

export const dataTableId = 'LowestVarianceRevenueGeneratingHospitalsTable';

export default function LowestVarianceRevenueGeneratingHospitalsTable() {
    const renderColumns = TableColumns({
            dataTableId,
        }),
        data = [
            {
                percentageBelowAverage: '(36.8)%',
                postedRevenue: '$23,583',
                hospital: 'Lutheran Downtown',
            },
            {
                percentageBelowAverage: '(35.9)%',
                postedRevenue: '$63,957',
                hospital: 'Porter Hospital',
            },
            {
                percentageBelowAverage: '(30.1)%',
                postedRevenue: '$82,265',
                hospital: 'Northwest Ark - Benton',
            },
            {
                percentageBelowAverage: '(25.2)%',
                postedRevenue: '$95,464',
                hospital: 'Northwest Az - Tucson',
            },
            {
                percentageBelowAverage: '(23.2)%',
                postedRevenue: '$85,563',
                hospital: 'Gadsden',
            },
        ];

    return <DataTable columns={renderColumns} data={data} />;
}
