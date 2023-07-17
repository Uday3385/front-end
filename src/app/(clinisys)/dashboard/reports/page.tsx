'use client';

import * as React from 'react';
import { useRouter } from '@/src/hooks/useNavigation';

export default function Reports() {
    const navigate = useRouter();

    React.useEffect(() => {
        navigate('/dashboard/reports/view-reports');
    }, [navigate]);
}
