import { store, type RootState, type RootStateValues } from '@/src/redux/store';

export const getStoreState = <S extends RootState, K extends keyof RootStateValues>({
    storeName,
    stateName,
    fallbackValue,
}: {
    storeName: K;
    stateName?: keyof S[K];
    fallbackValue?: any;
}) => {
    const states = store.getState(),
        storeStates = states?.[storeName];

    if (stateName) {
        const value = storeStates[stateName as keyof typeof storeStates];
        return value === undefined ? fallbackValue : value;
    }

    if (storeStates === undefined) return fallbackValue;

    return storeStates;
};
