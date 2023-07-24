'use client';

import * as React from 'react';
import { useRouter } from '@/src/hooks/useNavigation';

export default function Clinical() {
    const navigate = useRouter();

    React.useEffect(() => {
        navigate('/dashboard/revenue/review');
    }, [navigate]);
}
