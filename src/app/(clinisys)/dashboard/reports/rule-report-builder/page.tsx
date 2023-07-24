'use client';

import dynamic from 'next/dynamic';
import { getDynamicImportProps } from '@/src/utils/dynamicImport';

const RuleReportBuilder = dynamic(() => import('@/src/components/Dashboard/Content/Reports/RuleReportBuilder'), {
    ...getDynamicImportProps(),
});

export default function RuleReportBuilderPage() {
    return <RuleReportBuilder />;
}
