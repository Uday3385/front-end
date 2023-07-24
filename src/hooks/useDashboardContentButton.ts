import * as React from 'react';
import { useGlobalDataRefContext } from './useGlobalDataRef';

type ButtonRef = React.MutableRefObject<HTMLButtonElement | null>;

type DashboardContentButtonsRef = {
    subscribeButtonRef: ButtonRef;
    filterButtonRef: ButtonRef;
    exportButtonRef: ButtonRef;
};

const dashboardContentButtonRefId = 'dashboardContentButtons';

export const useSetDashboardContentButtonsRef = (props: DashboardContentButtonsRef) => {
    const globalDataRef = useGlobalDataRefContext();

    React.useEffect(() => {
        globalDataRef.setData(dashboardContentButtonRefId, props);
    }, [props]);
};

export const useDashboardContentButtonsRef = (): DashboardContentButtonsRef => {
    const globalDataRef = useGlobalDataRefContext();
    return globalDataRef.getData(dashboardContentButtonRefId);
};
