import { useRef, useContext, createContext } from 'react';

type KeyType = string | number;

type GlobalDataRefValueType = {
    [key: KeyType]: any;
};

type DataRefType = React.MutableRefObject<GlobalDataRefValueType>;
type SetDataType = (key: KeyType, value: any) => void;
type RemoveDataType = (key: KeyType) => void;
type HasDataType = (key: KeyType) => boolean;
type GetDataType = (key: KeyType, fallbackValue?: any) => any;

type providerPropsType = {
    removeData: RemoveDataType;
    setData: SetDataType;
    getData: GetDataType;
    hasData: HasDataType;
    ref: DataRefType;
};

const GlobalDataRefContext = createContext({} as providerPropsType);

const GlobalDataRefProvider = ({ children }: { children: React.ReactNode }) => {
    const globalDataRef = useRef({} as GlobalDataRefValueType);

    const setData = (key: KeyType, value: any) => (globalDataRef.current[key] = value);

    const getData = (key: KeyType, fallbackValue = undefined) => {
        const value = globalDataRef.current[key];
        if (value === undefined) return fallbackValue;
        return value;
    };

    const hasData = (key: KeyType) => globalDataRef.current[key] !== undefined;

    const removeData = (key: KeyType) => {
        delete globalDataRef.current[key];
    };

    const providerProps: providerPropsType = {
        ref: globalDataRef,
        removeData,
        setData,
        getData,
        hasData,
    };

    return <GlobalDataRefContext.Provider value={providerProps}>{children}</GlobalDataRefContext.Provider>;
};

/**
 * Use Global Data Ref Context.
 * Note: this will not cause re-rendering since we're using ref
 */
export const useGlobalDataRefContext = (): providerPropsType => useContext(GlobalDataRefContext);

/**
 * Get the hasData function
 * @returns {HasDataType}
 */
export const useHasGlobalRef = (): HasDataType => {
    const { hasData } = useGlobalDataRefContext();
    return hasData;
};

/**
 * Get the ref object
 * @returns {DataRefType}
 */
export const useGetGlobalRef = (): DataRefType => {
    const { ref } = useGlobalDataRefContext();
    return ref;
};

/**
 * Get an item from ref object
 * @returns {GetDataType}
 */
export const useGetGlobalRefItem = (): GetDataType => {
    const { getData } = useGlobalDataRefContext();
    return getData;
};

/**
 * Get an item from ref object
 * @returns {SetDataType}
 */
export const useSetGlobalRefItem = (): SetDataType => {
    const { setData } = useGlobalDataRefContext();
    return setData;
};

/**
 * Get an item from ref object
 * @returns {RemoveDataType}
 */
export const useRemoveGlobalRefItem = (): RemoveDataType => {
    const { removeData } = useGlobalDataRefContext();
    return removeData;
};

export default GlobalDataRefProvider;
