'use client';

import * as React from 'react';
import { useRouter } from '@/src/hooks/useNavigation';

export default function CorporatePage() {
    const navigate = useRouter();

    React.useEffect(() => {
        navigate('/dashboard/corporate/hospital');
    }, [navigate]);
}
