'use client';

import dynamic from 'next/dynamic';

import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import TableColumns from './TableColumns';

const DataTable = dynamic(() => import('@/src/hooks/useDataTable'), { ...getDynamicImportProps() });

export const dataTableId = 'RevenueByHospitalTable';

export default function RevenueByHospitalTable() {
    const renderColumns = TableColumns({
            dataTableId,
        }),
        data = [
            {
                hospital: 'Houston',
                revenue: '$24,255',
                healthPlanLives: '410,781',
            },
            {
                hospital: 'Corpus Cristi',
                revenue: '$957,482',
                healthPlanLives: '150,003',
            },
            {
                hospital: 'Milwaukee',
                revenue: '$935,628',
                healthPlanLives: '130,430',
            },
            {
                hospital: 'Fort Worth',
                revenue: '$626,367',
                healthPlanLives: '124,678',
            },
        ];

    return <DataTable columns={renderColumns} data={data} />;
}
