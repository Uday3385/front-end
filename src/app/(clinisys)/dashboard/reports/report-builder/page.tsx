'use client';

// import ReportBuilder from '@/src/components/Dashboard/Content/Reports/ReportBuilder';
import { getDynamicImportProps } from '@/src/utils/dynamicImport';

import dynamic from 'next/dynamic';
const ReportBuilder = dynamic(() => import('@/src/components/Dashboard/Content/Reports/ReportBuilder'), {
    ...getDynamicImportProps(),
});

export default function ReportBuilderPage() {
    return <ReportBuilder />;
}
