import DashboardContainer from '@/src/components/Containers/Dashboard';
import InternalAudit from '@/src/components/Dashboard/Content/InternalAudit';

export default function InternalAuditPage() {
    return (
        <DashboardContainer transparentBackground={true}>
            <InternalAudit />
        </DashboardContainer>
    );
}
