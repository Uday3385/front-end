'use client';

import dynamic from 'next/dynamic';

import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import TableColumns from './TableColumns';
import { useTheme } from '@/src/theme';

const DataTable = dynamic(() => import('@/src/hooks/useDataTable'), { ...getDynamicImportProps() });

export const dataTableId = 'RegionRevenueByHospitalTable';

export default function RegionRevenueByHospitalTable() {
    const theme = useTheme(),
        renderColumns = TableColumns({
            dataTableId,
        }),
        data = [
            {
                hospital: 'Bayfront - Seven Rivers',
                expectedRevenue: '$2.5',
                postedRevenue: '$8.2',
                variance: '2.5 Variance',
            },
            {
                hospital: 'Physicians - Pine Ridge',
                expectedRevenue: '$6.3',
                postedRevenue: '$4.9',
                variance: '1.4',
            },
            {
                hospital: 'Tennova - Clarksville',
                expectedRevenue: '$7.4',
                postedRevenue: '$6.3',
                variance: '1.2',
            },
            {
                hospital: 'Tennova - N Knoxville',
                expectedRevenue: '$4.4',
                postedRevenue: '$4.0',
                variance: '0.4',
            },
            {
                hospital: 'Tennova - Cleveland',
                expectedRevenue: '$9.1',
                postedRevenue: '$8.8',
                variance: '0.3',
            },
            {
                hospital: 'Tennova - Newport',
                expectedRevenue: '$1.5',
                postedRevenue: '$1.6',
                variance: '0.1',
            },
            {
                hospital: 'Tennova - LaFollette',
                expectedRevenue: '$24.3',
                postedRevenue: '$26.9',
                variance: '2.6',
            },
            {
                hospital: 'Tennova - Turkey Creek',
                expectedRevenue: '$7.8',
                postedRevenue: '$13.3',
                variance: '6.0',
            },
            {
                hospital: 'Tennova - Jefferson',
                expectedRevenue: '$7.2',
                postedRevenue: '$14.3',
                variance: '7.1',
            },
        ];

    const tableFooter = {
        columns: [
            { item: 'Median' },
            { item: '$82.8' },
            { item: '$83.4' },
            { item: '+0.3%', style: { fontWeight: 700, color: theme.palette.success.main } },
        ],
    };

    return <DataTable columns={renderColumns} data={data} tableFooter={tableFooter} />;
}
