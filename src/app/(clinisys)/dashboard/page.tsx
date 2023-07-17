'use client';

import * as React from 'react';
import * as constants from '@/src/utils/constants';
import { useRouter } from '@/src/hooks/useNavigation';

export default function Dashboard() {
    const navigate = useRouter();

    React.useEffect(() => {
        navigate(constants.DASHBOARD_SIDEBAR_MENU_DEFAULT_STATE.path);
    }, [navigate]);
}
