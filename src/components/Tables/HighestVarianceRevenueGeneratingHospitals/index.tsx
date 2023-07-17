'use client';

import dynamic from 'next/dynamic';

import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import TableColumns from './TableColumns';

const DataTable = dynamic(() => import('@/src/hooks/useDataTable'), { ...getDynamicImportProps() });

export const dataTableId = 'HighestVarianceRevenueGeneratingHospitalDataTable';

export default function HighestVarianceRevenueGeneratingHospitalsTable() {
    const renderColumns = TableColumns({
            dataTableId,
        }),
        data = [
            {
                percentageAboveAverage: '+29.7%',
                postedRevenue: '$35,053',
                missedCharges: 83,
                hospital: 'Tennova - Knoxville',
            },
            {
                percentageAboveAverage: '+24.6%',
                postedRevenue: '$47,678',
                missedCharges: 28,
                hospital: 'Grandview',
            },
            {
                percentageAboveAverage: '+10.5%',
                postedRevenue: '$24,233',
                missedCharges: 54,
                hospital: 'Bayfront - Seven Rivers',
            },
            {
                percentageAboveAverage: '+6.7%',
                postedRevenue: '$54,842',
                missedCharges: 76,
                hospital: 'Lutheran Hospital',
            },
            {
                percentageAboveAverage: '+4.0%',
                postedRevenue: '$40,048',
                missedCharges: 38,
                hospital: 'Flowers Hospital',
            },
        ];

    return (
        // <DataTable
        //     loading={false}
        //     data={data}
        //     columns={renderColumns}
        //     dataTableId={dataTableId}
        //     dataTableProps={tableProps}
        //     fetchDataProps={fetchDataProps}
        // />
        <DataTable columns={renderColumns} data={data} />
    );
}
