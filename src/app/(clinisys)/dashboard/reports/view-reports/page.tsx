'use client';

import dynamic from 'next/dynamic';
import { getDynamicImportProps } from '@/src/utils/dynamicImport';

const Reports = dynamic(() => import('@/src/components/Dashboard/Content/Reports'), {
    ...getDynamicImportProps(),
});

export default function ViewReportsPage() {
    return <Reports />;
}
