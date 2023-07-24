'use client';

import dynamic from 'next/dynamic';

import { getDynamicImportProps } from '@/src/utils/dynamicImport';
import { getDashboardPageTitle } from '@/src/utils/env';

const ReportBuilder = dynamic(() => import('@/src/components/Dashboard/Content/Reports/ReportBuilder'), {
    ...getDynamicImportProps(),
});

export default function ReportBuilderPage() {
    return (
        <ReportBuilder />
    );
}
