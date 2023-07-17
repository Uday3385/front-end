'use client';

import dynamic from 'next/dynamic';

import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import TableColumns from './TableColumns';
import { useTheme } from '@/src/theme';

const DataTable = dynamic(() => import('@/src/hooks/useDataTable'), { ...getDynamicImportProps() });

export const dataTableId = 'RegionTotalRevenueByHospitalTable';

export default function RegionTotalRevenueByHospitalTable() {
    const theme = useTheme(),
        columnStyle = { fontWeight: 700 };

    const renderColumns = TableColumns({
            dataTableId,
            theme,
        }),
        data = [
            {
                hospital: 'Bayfront - Seven Rivers',
                totalRevenue: '$8,905,982',
                totalCost: '$6,461,416',
                profit: '$2,544,566',
                averageDailyCensus: 3995,
            },
            {
                hospital: 'Physicians - Pine Ridge',
                totalRevenue: '$4,598,705',
                totalCost: '$3,284,789',
                profit: '$1,313,916',
                averageDailyCensus: 2060,
            },
            {
                hospital: 'Tennova - Clarksville',
                totalRevenue: '$3,655,157',
                totalCost: '$2,610,827',
                profit: '$1,044,331',
                averageDailyCensus: 1680,
            },
            {
                hospital: 'Tennova - N Knoxville',
                totalRevenue: '$2,894,004',
                totalCost: '$2,067,145',
                profit: '$826,858',
                averageDailyCensus: 1348,
            },
            {
                hospital: 'Tennova - Cleveland',
                totalRevenue: '$2,538,968',
                totalCost: '$1,813,549',
                profit: '$725,419',
                averageDailyCensus: 1090,
            },
            {
                hospital: 'Tennova - Newport',
                totalRevenue: '$1,587,358',
                totalCost: '$1,133,827',
                profit: '$453,531',
                averageDailyCensus: 696,
            },
            {
                hospital: 'Tennova - LaFollette',
                totalRevenue: '$1,505,652',
                totalCost: '$1,075,466',
                profit: '$430,186',
                averageDailyCensus: 6854,
            },
            {
                hospital: 'Tennova - Turkey Creek',
                totalRevenue: '$1,297,449',
                totalCost: '$926,750',
                profit: '$370,700',
                averageDailyCensus: 588,
            },
            {
                hospital: 'Tennova - Jefferson',
                totalRevenue: '$1,230,929',
                totalCost: '$879,235',
                profit: '$351,694',
                averageDailyCensus: 533,
            },
        ];

    const tableFooter = {
        rowProps: {
            style: { backgroundColor: theme.palette.borderColor.tableFooterThick },
        },
        columns: [
            { item: 'Median' },
            { item: '$1,067,400', style: columnStyle },
            { item: '$762,429', style: columnStyle },
            { item: '$304,972', style: columnStyle },
            { item: '489', style: columnStyle },
        ],
    };

    return <DataTable columns={renderColumns} data={data} tableFooter={tableFooter} />;
}
