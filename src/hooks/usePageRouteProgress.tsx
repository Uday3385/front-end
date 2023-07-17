import * as React from 'react';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';

import { useGlobalDataRefContext } from './useGlobalDataRef';
import { primary } from '@/src/theme/colors';

export function PageRouteProgress() {
    const ref = React.useRef<LoadingBarRef>(null),
        isInit = React.useRef(0),
        pathname = usePathname(),
        globalDataRef = useGlobalDataRefContext();

    React.useEffect(() => {
        globalDataRef.setData('loadingBarRef', ref);

        const progressRef = ref.current;
        if (isInit.current === 0) {
            progressRef?.continuousStart(100);
        }

        setTimeout(() => {
            progressRef?.complete();
        }, 60);

        return () => {
            isInit.current += 1;
            progressRef?.continuousStart();
        };
    }, [pathname]);

    return <LoadingBar color={primary.main} ref={ref} height={4} shadow={true} />;
}

export const useStartLoadingBar = () => {
    const globalDataRef = useGlobalDataRefContext();

    return () => {
        const loadingBarRef = globalDataRef.getData('loadingBarRef');
        if (loadingBarRef?.current) {
            loadingBarRef.current?.continuousStart();
        }
    };
};
