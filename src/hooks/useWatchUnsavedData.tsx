import * as React from 'react';

type WatchUnsavedDataType = {
    clearUnsavedDataState: () => void;
    setUnsavedDataState: (confirmationText?: string) => void;
    hasUnsavedData: () => boolean;
};

const WatchUnsavedDataContext = React.createContext({} as WatchUnsavedDataType);

const WatchUnsavedDataProvider = ({ children }: { children: React.ReactNode }) => {
    /**
     * Handle unsaved data confirmation
     */
    const triggerUnsavedDataChangesConfirmationHandler = (event: BeforeUnloadEvent, confirmationText: string = '') => {
        event.preventDefault();
        return (event.returnValue =
            confirmationText || 'You have unsaved data changes, are you sure you want to leave this page?');
    };

    /**
     * Set the unsaved data confirmation
     */
    const setUnsavedDataState = (confirmationText: string = '') => {
        if (!window.onbeforeunload) {
            window.onbeforeunload = async (event) =>
                triggerUnsavedDataChangesConfirmationHandler(event, confirmationText);
        }
    };

    /**
     * Clear the unsaved data confirmation
     */
    const clearUnsavedDataState = () => {
        window.onbeforeunload = null;
    };

    /**
     * Check whether there's unsaved data
     */
    const hasUnsavedData = () => typeof window.onbeforeunload === 'function';

    const providerProps = {
        clearUnsavedDataState,
        setUnsavedDataState,
        hasUnsavedData,
    };

    return <WatchUnsavedDataContext.Provider value={providerProps}>{children}</WatchUnsavedDataContext.Provider>;
};

/**
 * Subscribe to the watch unsaved data context.
 * Note: this will not cause re-rendering since we're using ref
 */
export const useWatchUnsavedDataContext = (): WatchUnsavedDataType => React.useContext(WatchUnsavedDataContext);

/**
 * Subscribe to the unsaved data state change
 * @returns {Callback<boolean>}
 */
export const useHasUnsavedData = () => {
    const { hasUnsavedData } = useWatchUnsavedDataContext();
    return hasUnsavedData;
};

/**
 * Clear the unsaved data state
 */
export const useClearUnsavedDataState = () => {
    const { clearUnsavedDataState } = useWatchUnsavedDataContext();
    return clearUnsavedDataState;
};

/**
 * Set the unsaved data state
 */
export const useSetUnsavedDataState = (componentTreeConfirmationText: string = '') => {
    const { setUnsavedDataState } = useWatchUnsavedDataContext();
    return (confirmationText = '') => {
        setUnsavedDataState(confirmationText || componentTreeConfirmationText);
    };
};

export default WatchUnsavedDataProvider;
