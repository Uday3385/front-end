'use client';

import dynamic from 'next/dynamic';

import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import TableColumns from './TableColumns';

const DataTable = dynamic(() => import('@/src/hooks/useDataTable'), { ...getDynamicImportProps() });

export const dataTableId = 'PatientMissedChargesTable';

export default function PatientMissedChargesTable() {
    const renderColumns = TableColumns({
            dataTableId,
        }),
        data = [
            {
                rank: 1,
                department: 'ED',
                facility: 'General Hospital East',
                volume: 409,
                percentageTotal: '20%',
            },
            {
                rank: 2,
                department: 'Ortho',
                facility: 'General Hospital East',
                volume: 363,
                percentageTotal: '18%',
            },
            {
                rank: 3,
                department: 'OB/GYN',
                facility: 'General Hospital West',
                volume: 209,
                percentageTotal: '10%',
            },
            {
                rank: 4,
                department: '4West ICU',
                facility: 'General Hospital West',
                volume: 138,
                percentageTotal: '7%',
            },
            {
                rank: 5,
                department: 'IPBH',
                facility: 'General Hospital West',
                volume: 95,
                percentageTotal: '5%',
            },
        ];

    return <DataTable columns={renderColumns} data={data} />;
}
