'use client';

import dynamic from 'next/dynamic';

import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import TableColumns from './TableColumns';

const DataTable = dynamic(() => import('@/src/hooks/useDataTable'), { ...getDynamicImportProps() });

export const dataTableId = 'ReportsTable';

export default function ReportsTable() {
    const renderColumns = TableColumns({
            dataTableId,
        }),
        data = [
            {
                name: 'Aged ATB',
                description: 'Aged Trial Balance',
                category: 'AR',
                createdAt: '11/3/2020',
            },
            {
                name: 'Medicare Denial Report',
                description: '',
                category: 'AR',
                createdAt: '11/4/2020',
            },
            {
                name: 'Level of Care Denial Report',
                description: '',
                category: 'AR',
                createdAt: '11/5/2020',
            },
            {
                name: 'Held in Scrubber',
                description: 'Claims Held in Scrubber Pending Review',
                category: 'CCR',
                createdAt: '11/6/2020',
            },
            {
                name: 'Top 10 Edits',
                description: '',
                category: 'CCR',
                createdAt: '11/7/2020',
            },
            {
                name: 'Top 10 Denials',
                description: '',
                category: 'Denial',
                createdAt: '11/8/2020',
            },
            {
                name: 'Write Offs (30 Days)',
                description: '',
                category: 'Denial',
                createdAt: '11/9/2020',
            },
            {
                name: 'Write Offs (YTD)',
                description: '',
                category: 'Denial',
                createdAt: '11/10/2020',
            },
            {
                name: 'Black Hole',
                description: '',
                category: 'AR',
                createdAt: '11/11/2020',
            },
            {
                name: 'ADR Summary Report',
                description: '',
                category: 'AR, Denial, CCR',
                createdAt: '11/12/2020',
            },
            {
                name: 'Level of Care Denial Report',
                description: '',
                category: 'AR',
                createdAt: '11/5/2020',
            },
            {
                name: 'Held in Scrubber',
                description: 'Claims Held in Scrubber Pending Review',
                category: 'CCR',
                createdAt: '11/6/2020',
            },
            {
                name: 'Top 10 Edits',
                description: '',
                category: 'CCR',
                createdAt: '11/7/2020',
            },
            {
                name: 'Top 10 Denials',
                description: '',
                category: 'Denial',
                createdAt: '11/8/2020',
            },
            {
                name: 'Write Offs (30 Days)',
                description: '',
                category: 'Denial',
                createdAt: '11/9/2020',
            },
            {
                name: 'Write Offs (YTD)',
                description: '',
                category: 'Denial',
                createdAt: '11/10/2020',
            },
            {
                name: 'Black Hole',
                description: '',
                category: 'AR',
                createdAt: '11/11/2020',
            },
        ];

    return <DataTable columns={renderColumns} data={data} />;
}
