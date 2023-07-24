import * as React from 'react';
import type { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import type { GlobalDragDropState } from '@/src/redux/reducers/globalDragDrop';
import { useGlobalDataRefContext } from '@/src/hooks/useGlobalDataRef';
import type { RootState } from '@/src/redux/store';
import { setDraggedItem } from '@/src/redux/reducers/globalDragDrop';
import { getStoreState } from '@/src/hooks/useStore';

export type Item = {
    [key: string]: any;
};

export type DragEventType = React.DragEvent;

type DragEventHandlerType = (event: React.DragEvent) => void;

type IsItemValid = ({ event, contextType }: { event: DragEventType; contextType?: any }) => boolean;

type DragType = (props: { states: GlobalDragDropState; event: DragEventType }) => void;

type SetupGlobalDragDrop = GlobalDragDropState & {
    onDragLeave?: DragType;
    onDragStart: DragType;
    onDragEnter?: DragType;
    onDragOver?: DragType;
    onDragEnd?: DragType;
    getItemId: (item?: Item) => string;
    onDrop?: DragType;
};

type DraggableProps = {
    onDragStart?: DragEventHandlerType;
    onDragEnd?: DragEventHandlerType;
    draggable?: true;
};

type DroppableProps = {
    onDragLeave?: DragEventHandlerType;
    onDragEnter?: DragEventHandlerType;
    onDragOver?: DragEventHandlerType;
    onDrop?: DragEventHandlerType;
};

type GetDragDropParams = {
    isItemValid?: IsItemValid;
    contextType: GlobalDragDropState['contextType'];
    item: Item;
};

type GetDragDropCacheRef = {
    draggableProps: DraggableProps;
    droppableProps: DroppableProps;
    contextType: GlobalDragDropState['contextType'];
    dropEffect: GlobalDragDropState['dropEffect'];
};

type GetDragDropCacheRefCallback = () => GetDragDropCacheRef;
type SetDropEffectCacheRefCallback = (dropEffect: SetupGlobalDragDrop['dropEffect']) => void;

type DragDropProps = {
    isItemValid?: IsItemValid;
    contextType: SetupGlobalDragDrop['contextType'];
    item: Item;
};

type DragHandlerProps = {
    setDropEffectCacheRef: SetDropEffectCacheRefCallback;
    getDragDropCacheRef: GetDragDropCacheRefCallback;
    effectAllowed?: DataTransfer['effectAllowed'];
    onDragStart?: SetupGlobalDragDrop['onDragStart'];
    contextType: GlobalDragDropState['contextType'];
    onDragEnd?: SetupGlobalDragDrop['onDragEnd'];
    dropEffect?: DataTransfer['dropEffect'];
    dragType?: GlobalDragDropState['dragType'];
    dispatch: Dispatch<AnyAction>;
    getItemId: SetupGlobalDragDrop['getItemId'];
    item?: Item;
};

type DropHandlerProps = {
    setDropEffectCacheRef: SetDropEffectCacheRefCallback;
    getDragDropCacheRef: GetDragDropCacheRefCallback;
    contextType: GlobalDragDropState['contextType'];
    dropEffect: GlobalDragDropState['dropEffect'];
    getItemId: SetupGlobalDragDrop['getItemId'];
    dispatch: Dispatch<AnyAction>;
    onDrop: SetupGlobalDragDrop['onDrop'];
    item?: Item;
};

type DragEnterHandlerProps = {
    setDropEffectCacheRef: SetDropEffectCacheRefCallback;
    getDragDropCacheRef: GetDragDropCacheRefCallback;
    onDragEnter?: SetupGlobalDragDrop['onDragEnter'];
    isItemValid?: IsItemValid;
    onDragOver?: SetupGlobalDragDrop['onDragOver'];
    contextType: GlobalDragDropState['contextType'];
    dropEffect: GlobalDragDropState['dropEffect'];
    getItemId: SetupGlobalDragDrop['getItemId'];
    dispatch: Dispatch<AnyAction>;
    item?: Item;
};

type DragLeaveHandlerProps = {
    setDropEffectCacheRef: SetDropEffectCacheRefCallback;
    getDragDropCacheRef: GetDragDropCacheRefCallback;
    onDragLeave?: SetupGlobalDragDrop['onDragLeave'];
    contextType: GlobalDragDropState['contextType'];
    dispatch: Dispatch<AnyAction>;
    item?: Item;
};

const getCacheRefId = (contextType: GlobalDragDropState['contextType']) => `drag-drop/${contextType}`;

const isContextTypeValid = ({
    getDragDropCacheRef,
    contextType,
}: {
    getDragDropCacheRef: GetDragDropCacheRefCallback;
    contextType: GlobalDragDropState['contextType'];
}) => {
    return getDragDropCacheRef().contextType === contextType;
};

/**
 * Handle drag start
 */
const handleDragItemStart =
    ({
        setDropEffectCacheRef,
        getDragDropCacheRef,
        effectAllowed,
        onDragStart,
        contextType,
        getItemId,
        dragType,
        dispatch,
        item,
    }: DragHandlerProps) =>
    async (event: DragEventType) => {
        if (!isContextTypeValid({ getDragDropCacheRef, contextType })) return;

        setDropEffectCacheRef('none');

        const draggableId = getItemId(item);

        if (effectAllowed) {
            event.dataTransfer.effectAllowed = effectAllowed;
            event.dataTransfer.dropEffect = 'none';
        }

        if (draggableId !== undefined) {
            event.dataTransfer.setData(dragType as string, draggableId);
        }

        const states = {
            isDraggingItem: true,
            draggedItem: draggableId,
        };

        setTimeout(() => {
            dispatch(setDraggedItem(states));

            onDragStart &&
                onDragStart({
                    states,
                    event,
                });
        }, 0);
    };

/**
 * Handle drag end
 */
const handleDragItemEnd =
    ({
        setDropEffectCacheRef,
        getDragDropCacheRef,
        contextType,
        onDragEnd,
        dispatch,
    }: DragHandlerProps): React.DragEventHandler =>
    async (event) => {
        if (!isContextTypeValid({ getDragDropCacheRef, contextType })) return;

        setDropEffectCacheRef('none');

        const states = {
            draggingOverItem: '',
            isDraggingItem: false,
            draggedItem: '',
            droppedItem: '',
            canDropItem: false,
        };

        setTimeout(() => {
            dispatch(setDraggedItem(states));

            onDragEnd &&
                onDragEnd({
                    states,
                    event,
                });
        }, 0);
    };

/**
 * Handle drag drop item
 */
export const handleDropItem =
    ({
        getDragDropCacheRef,
        contextType,
        getItemId,
        dispatch,
        onDrop,
        item,
    }: DropHandlerProps): React.DragEventHandler =>
    async (event) => {
        event.preventDefault();
        if (!isContextTypeValid({ getDragDropCacheRef, contextType })) return;

        if (getDragDropCacheRef().dropEffect === 'none') return;

        const states = {
            droppedItem: getItemId(item),
            isDraggingItem: false,
        };

        setTimeout(() => {
            dispatch(setDraggedItem(states));

            onDrop &&
                onDrop({
                    states,
                    event,
                });
        }, 0);
    };

/**
 * Handle drag enter/over item
 */
export const handleDragEnterItem =
    ({
        setDropEffectCacheRef,
        getDragDropCacheRef,
        contextType,
        onDragEnter,
        isItemValid,
        dropEffect,
        onDragOver,
        getItemId,
        dispatch,
        item,
    }: DragEnterHandlerProps): React.DragEventHandler =>
    async (event) => {
        event.preventDefault();
        if (!isContextTypeValid({ getDragDropCacheRef, contextType })) {
            event.dataTransfer.dropEffect = 'none';
            return;
        }

        const itemId = getItemId(item);

        const states = {
            draggingOverItem: itemId,
            isDraggingItem: true,
            canDropItem: isItemValid ? isItemValid({ event, contextType: itemId }) : true,
        };

        if (!dropEffect || !states.canDropItem) {
            event.dataTransfer.dropEffect = 'none';
            return;
        }

        setDropEffectCacheRef(dropEffect);
        event.dataTransfer.dropEffect = dropEffect;

        dispatch(setDraggedItem(states));
        setTimeout(() => {
            onDragEnter &&
                onDragEnter({
                    states,
                    event,
                });

            onDragOver &&
                onDragOver({
                    states,
                    event,
                });
        }, 0);
    };

/**
 * Handle drag leave item
 */
export const handleDragLeaveItem =
    ({
        setDropEffectCacheRef,
        getDragDropCacheRef,
        contextType,
        onDragLeave,
        dispatch,
    }: DragLeaveHandlerProps): React.DragEventHandler =>
    async (event) => {
        event.preventDefault();
        if (!isContextTypeValid({ getDragDropCacheRef, contextType })) return;

        event.dataTransfer.dropEffect = 'none';
        setDropEffectCacheRef('none');

        const states = {
            draggingOverItem: '',
            isDraggingItem: true,
        };

        setTimeout(() => {
            dispatch(setDraggedItem(states));

            onDragLeave &&
                onDragLeave({
                    states,
                    event,
                });
        }, 0);
    };

/**
 *  Setup global drag/drop behavior
 */
export const useSetupGlobalDragDrop = (props: SetupGlobalDragDrop) => {
    const globalDataRef = useGlobalDataRefContext(),
        dispatch = useDispatch(),
        [isReady, setIsReady] = React.useState(false),
        {
            effectAllowed = 'copyMove',
            dropEffect = 'copy',
            dragType = 'text/plain',
            contextType,
            onDragLeave,
            onDragEnter,
            onDragStart,
            onDragOver,
            onDragEnd,
            getItemId,
            onDrop,
        } = props,
        refId = getCacheRefId(contextType);

    const getDragDropCacheRef = (): GetDragDropCacheRef => globalDataRef.getData(refId, {});

    const setDropEffectCacheRef = (dropEffectValue: SetupGlobalDragDrop['dropEffect']) => {
        globalDataRef.setData(refId, { ...getDragDropCacheRef(), dropEffect: dropEffectValue });
    };

    const draggableProps = ({ item, contextType }: DragDropProps) => ({
        onDragStart: handleDragItemStart({
            setDropEffectCacheRef,
            getDragDropCacheRef,
            effectAllowed,
            contextType,
            onDragStart,
            getItemId,
            dragType,
            dispatch,
            item,
        }),
        onDragEnd: handleDragItemEnd({
            setDropEffectCacheRef,
            getDragDropCacheRef,
            contextType,
            getItemId,
            onDragEnd,
            dispatch,
        }),
        draggable: true,
    });

    const droppableProps = ({ item, contextType, isItemValid }: DragDropProps) => ({
        onDragEnter: onDragEnter
            ? handleDragEnterItem({
                  setDropEffectCacheRef,
                  getDragDropCacheRef,
                  isItemValid,
                  onDragEnter,
                  contextType,
                  dropEffect,
                  getItemId,
                  dispatch,
                  item,
              })
            : undefined,
        onDragLeave: handleDragLeaveItem({
            setDropEffectCacheRef,
            getDragDropCacheRef,
            onDragLeave,
            contextType,
            dispatch,
            item,
        }),
        onDragOver: handleDragEnterItem({
            setDropEffectCacheRef,
            getDragDropCacheRef,
            isItemValid,
            contextType,
            onDragOver,
            dropEffect,
            getItemId,
            dispatch,
            item,
        }),
        onDrop: handleDropItem({
            setDropEffectCacheRef,
            getDragDropCacheRef,
            contextType,
            dropEffect,
            getItemId,
            dispatch,
            onDrop,
            item,
        }),
    });

    React.useEffect(() => {
        globalDataRef.setData(refId, {
            draggableProps,
            droppableProps,
            contextType,
            dropEffect,
        });

        setIsReady(true);

        return () => {
            setIsReady(false);
        }; 
    }, []);

    return { isReady };
};

/**
 * Get the draggable props
 */
export const useGetDraggableProps = ({ contextType, item }: GetDragDropParams): DraggableProps => {
    const globalDataRef = useGlobalDataRefContext(),
        cache = globalDataRef.getData(getCacheRefId(contextType));

    return cache && cache?.draggableProps ? cache?.draggableProps({ contextType, item }) : {};
};

/**
 * Get the droppable props
 */
export const useGetDroppableProps = ({ isItemValid, contextType, item }: GetDragDropParams): DroppableProps => {
    const globalDataRef = useGlobalDataRefContext(),
        cache = globalDataRef.getData(getCacheRefId(contextType));

    return cache && cache?.droppableProps ? cache?.droppableProps({ isItemValid, contextType, item }) : {};
};

export const useDraggingOverItem = () => {
    const draggingOverItem = useSelector((state: RootState) => state.globalDragDrop.draggingOverItem);
    return draggingOverItem;
};

export const useIsDragging = () => {
    const isDraggingItem = useSelector((state: RootState) => state.globalDragDrop.isDraggingItem);
    return isDraggingItem;
};

export const useCanDropItem = () => {
    const canDropItem = useSelector((state: RootState) => state.globalDragDrop.canDropItem);
    return canDropItem;
};

export const useDroppedItem = () => {
    const droppedItem = useSelector((state: RootState) => state.globalDragDrop.droppedItem);
    return droppedItem;
};

export const useDraggedItem = () => {
    const draggedItem = useSelector((state: RootState) => state.globalDragDrop.draggedItem);
    return draggedItem;
};

export const getDraggedItem = (): string => getStoreState({ storeName: 'globalDragDrop', stateName: 'draggedItem' });
