'use client';

import dynamic from 'next/dynamic';

import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import TableColumns from './TableColumns';

const DataTable = dynamic(() => import('@/src/hooks/useDataTable'), { ...getDynamicImportProps() });

export const dataTableId = 'PatientsList';

export default function PatientsList() {
    const renderColumns = TableColumns({
            dataTableId,
        }),
        data = [
            {
                fin: 1,
                charges: ' $453,961.00 ',
                MRN: '23412',
                description: 'CT Foot',
                taskCategory: 'Missing CDN',
                facility: 'General Hospital West',
            },
            {
                fin: 2,
                charges: ' $153,961.00 ',
                MRN: '83412',
                description: 'CT Hand',
                taskCategory: 'Missing DOC',
                facility: 'General Hospital West',
            },
            {
                fin: 3,
                charges: ' $63,961.00 ',
                MRN: '83412',
                description: 'CT Arm',
                taskCategory: 'Missing MRM',
                facility: 'General Hospital East',
            },
            {
                fin: 4,
                charges: ' $463,961.00 ',
                MRN: '56453',
                description: 'CT Foot',
                taskCategory: 'Missing MRM',
                facility: 'General Hospital West',
            },
            {
                fin: 5,
                charges: ' $463,961.00 ',
                MRN: '93410',
                description: 'CT Foot',
                taskCategory: 'Missing MRM',
                facility: 'General Hospital East',
            },
            {
                fin: 6,
                charges: ' $263,561.00 ',
                MRN: '13412',
                description: 'CT Head',
                taskCategory: 'Missing MRM',
                facility: 'General Hospital West',
            },
            {
                fin: 7,
                charges: ' $773,561.00 ',
                MRN: '198415',
                description: 'CT Foot',
                taskCategory: 'Missing MRM',
                facility: 'General Hospital East',
            },
            {
                fin: 8,
                charges: ' $762,561.00 ',
                MRN: '124580',
                description: 'CT Head',
                taskCategory: 'Missing MRM',
                facility: 'General Hospital East',
            },
            {
                fin: 9,
                charges: ' $112,561.00 ',
                MRN: '46880',
                description: 'CT Arm',
                taskCategory: 'Missing MRM',
                facility: 'General Hospital West',
            },
            {
                fin: 10,
                charges: ' $112,561.00 ',
                MRN: '12390',
                description: 'CT Head',
                taskCategory: 'Missing MRM',
                facility: 'General Hospital West',
            },
        ];

    return <DataTable columns={renderColumns} data={data} />;
}
