import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import React from 'react';

export type SizeType = 'small' | 'large';

export type MenuItemType = {
    navigationIndicator?: {
        title: string | React.ReactNode;
    };
    showLineConnector?: boolean;
    pathAlias?: string;
    isHidden?: boolean;
    subMenu?: MenuItemType[];
    paths?: string[];
    title: string;
    icon?: React.ComponentType;
    path: string;
};

export type SubMenuType = {
    isNestedMenu?: boolean;
    expand?: boolean;
    items?: null | MenuItemType[];
};

export type MenuItemStateType = MenuItemType & { paths?: string[] };

export type SuccessCallbackType = <D>(res: AxiosResponse<any, any>) => Promise<D | void> | D | void;
export type ErrorCallbackType = <E>(res?: any) => Promise<E | void> | E | void;

type SuccessMsgType = string | null | undefined;
type ErrorMsgType = string | null | undefined;

export type RequestQueryParams = {
    successCallback: SuccessCallbackType;
    errorCallback: ErrorCallbackType;
    finallyCallback: () => void;
    config: AxiosRequestConfig<any>;
    url: string;
    data: any;
};

export type SuccessResponseParams = {
    successCallback: SuccessCallbackType;
    successMessage?: SuccessMsgType;
    errorMessage?: ErrorMsgType;
    response: AxiosResponse<any, any>;
};

export type ErrorResponseParams = {
    errorCallback: ErrorCallbackType;
    ignoreErrorCodes?: number[];
    errorMessage?: ErrorMsgType;
    error: any;
};

export type ProcessResponseType = {
    ignoreErrorCodes?: number[];
    finallyCallback: () => void;
    successCallback: SuccessCallbackType;
    successMessage?: SuccessMsgType;
    errorCallback: ErrorCallbackType;
    errorMessage: ErrorMsgType;
};

export type TooltipType = 'dark' | 'light' | 'html';

export type ReportBuilderDragDropContext = {
    reportPromptsField1: 'reportPromptsField1';
    reportPromptsField2: 'reportPromptsField2';
    reportPrompts: 'reportPrompts';
    dataElements: 'dataElements';
    columns: 'columns';
};

export type ReportBuilderDragDropContextType = keyof ReportBuilderDragDropContext | '';

export type ReportBuilderDragDropArrowContextType = keyof Omit<ReportBuilderDragDropContext, 'dataElements'>;

export interface ReportBuilderState {
    selectedDraggedItemContext: ReportBuilderDragDropContextType;
    reportPromptDataElements: any[];
    reportColumnDataElements: any[];
    selectedDraggedItems: { [key in ReportBuilderDragDropContextType]?: any[] };
    _dataElements: any[];
    dataElements: any[];
}

export type ReportBuilderSelectedDragItems =
    ReportBuilderState['selectedDraggedItems'][ReportBuilderDragDropContextType];

export type ReportBuilderReportPromptsOrColumns =
    | ReportBuilderState['reportColumnDataElements']
    | ReportBuilderState['reportPromptDataElements'];

export type DropRegionClassNames = {
    selectedDraggedItemContext: ReportBuilderDragDropContextType;
    selectedDraggedItems?: ReportBuilderSelectedDragItems;
    isDraggingOverItem?: boolean;
    hasDataElements?: boolean;
    isDragging?: boolean;
    contextType: ReportBuilderDragDropContextType;
};
