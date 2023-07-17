'use client';

import dynamic from 'next/dynamic';

import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import TableColumns from './TableColumns';

const DataTable = dynamic(() => import('@/src/hooks/useDataTable'), { ...getDynamicImportProps() });

export const dataTableId = 'TaskCategoryTable';

export default function TaskCategoryTable() {
    const renderColumns = TableColumns({
            dataTableId,
        }),
        data = [
            {
                rank: 1,
                amount: ' $453,961.00 ',
                payer: 'Medicare',
                taskCategory: 'Missing Documentation',
                facility: 'General Hospital West',
            },
            {
                rank: 2,
                amount: ' $153,961.00 ',
                payer: 'Cigna HMO',
                taskCategory: 'Missing Integrity',
                facility: 'General Hospital West',
            },
            {
                rank: 3,
                amount: ' $63,961.00 ',
                payer: 'Cigna HMO',
                taskCategory: 'Wrong FIN',
                facility: 'General Hospital East',
            },
            {
                rank: 4,
                amount: ' $463,961.00 ',
                payer: 'Aetna MCR',
                taskCategory: 'Missing Documentation',
                facility: 'General Hospital West',
            },
            {
                rank: 5,
                amount: ' $463,961.00 ',
                payer: 'Aetna',
                taskCategory: 'Wrong FIN',
                facility: 'General Hospital East',
            },
            {
                rank: 6,
                amount: ' $263,561.00 ',
                payer: 'UHC MCD',
                taskCategory: 'Wrong FIN',
                facility: 'General Hospital West',
            },
            {
                rank: 7,
                amount: ' $773,561.00 ',
                payer: 'Aetna',
                taskCategory: 'Missing MRM',
                facility: 'General Hospital East',
            },
            {
                rank: 8,
                amount: ' $762,561.00 ',
                payer: 'Blue Cross PPO',
                taskCategory: 'Revenue Integrity',
                facility: 'General Hospital East',
            },
            {
                rank: 9,
                amount: ' $112,561.00 ',
                payer: 'Medicaid of GA',
                taskCategory: 'Missing Documentation',
                facility: 'General Hospital West',
            },
            {
                rank: 10,
                amount: ' $112,561.00 ',
                payer: 'Self Pay',
                taskCategory: 'Wrong FIN',
                facility: 'General Hospital West',
            },
        ];

    return <DataTable columns={renderColumns} data={data} />;
}
