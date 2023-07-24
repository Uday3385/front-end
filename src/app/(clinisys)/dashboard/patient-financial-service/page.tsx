'use client';

import DashboardContainer from '@/src/components/Containers/Dashboard';
import PatientFinancialService from '@/src/components/Dashboard/Content/PatientFinancialService';

export default function PatientFinancialServicePage() {
    return (
        <DashboardContainer transparentBackground={true}>
            <PatientFinancialService />
        </DashboardContainer>
    );
}
