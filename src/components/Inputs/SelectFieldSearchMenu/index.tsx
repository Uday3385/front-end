import * as React from 'react';

import OutlinedInput, { type OutlinedInputProps } from '@mui/material/OutlinedInput';
import MenuItem, { type MenuItemProps } from '@mui/material/MenuItem';
import Select, { type SelectProps } from '@mui/material/Select';
import type { SxProps } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type GetItem = (item: any, index: number) => any;

export type SelectFieldSearchMenuProps = {
    value?: any;
    required?: boolean;
    getItemId?: GetItem;
    getItemLabel?: GetItem;
    getItemValue?: GetItem;
    getItemFilterBy?: GetItem;
    items: any[];
    menuStyles?: SxProps;
    menuHeight?: string;
    menuWidth?: number | string;
    itemIdProp?: string;
    placeholder?: string;
    itemGroupBy?: string;
    itemLabelProp?: string;
    itemValueProp?: string;
    itemFilterByProp?: string;
    noItemsFoundText?: string;
    backdropFilter?: boolean;
    selectComponentProps?: SelectProps;
    searchMenItemProps?: MenuItemProps;
};

export const SelectFieldSearchMenuItem = ({
    onSearch,
    placeholder = 'Search',
}: {
    onSearch: (e: string) => void;
    placeholder?: string;
}) => {
    const handleStopImmediatePropagation: React.MouseEventHandler<HTMLLIElement> = (e) => {
        e.stopPropagation();
        e.preventDefault();
    };

    const ignoreKeys = ['escape', 'enter', 'arrowup', 'arrowdown'];
    const canIgnoreKey = (key: string) => ignoreKeys.includes(key?.toLowerCase());

    const handleStopPropagation: MenuItemProps['onKeyDown'] = (e) => {
        if (!canIgnoreKey(e.key)) {
            e.stopPropagation();
        }
    };

    const handleStopInputPropagation: OutlinedInputProps['onKeyDown'] = (e) => {
        if (!canIgnoreKey(e.key)) {
            e.stopPropagation();
        }
    };

    const handleChange = (e: InputChangeEvent) => {
        e.stopPropagation();
        onSearch(e.target.value);
    };

    const inputStyle = { marginTop: 0, height: '45px', maxWidth: '95%', fontSize: '14px' },
        horizontalLineStyle = { width: '100%', height: '0px', borderTop: '1px solid #cccccc80', margin: '15px 0px' },
        menuItemStyle = {
            flexDirection: 'column' as 'column',
            pointerEvents: 'inherit' as 'inherit',
            padding: '0px',
            opacity: 1,
            fontSize: '14px',
        },
        inputProps = {
            className: 'menuSearchInput',
        };

    return (
        <MenuItem
            disabled
            style={menuItemStyle}
            onKeyDown={handleStopPropagation}
            onClickCapture={handleStopImmediatePropagation}
        >
            <OutlinedInput
                fullWidth
                autoFocus
                type="text"
                size="medium"
                inputProps={inputProps}
                style={inputStyle}
                placeholder={placeholder}
                onKeyDown={handleStopInputPropagation}
                onChange={handleChange}
            />
            <div style={horizontalLineStyle}></div>
        </MenuItem>
    );
};

const SelectFieldSearchMenu = ({
    value,
    required,
    getItemId,
    getItemLabel,
    getItemValue,
    getItemFilterBy,
    items = [],
    menuStyles = {},
    menuHeight = '95vh',
    menuWidth = 650,
    itemIdProp = 'value',
    placeholder = 'Search',
    itemGroupBy = '',
    itemLabelProp = 'label',
    itemValueProp = 'value',
    itemFilterByProp = 'label',
    noItemsFoundText = '',
    backdropFilter = true,
    selectComponentProps = {},
    searchMenItemProps = {},
}: SelectFieldSearchMenuProps) => {
    const [searchKeyword, setSearchKeyword] = React.useState(''),
        keyword = searchKeyword?.trim()?.toLowerCase(),
        fieldValue = selectComponentProps.value || value || '';

    const handleSetSearchKeyword = (keyword: string) => {
        setSearchKeyword(keyword);
    };

    const menuWidthLimit = React.useMemo(() => {
        const widthLimit = typeof window !== 'undefined' ? window.innerWidth : +menuWidth;
        return widthLimit < +menuWidth ? widthLimit - 40 : menuWidth;
    }, [window?.innerWidth, menuWidth]);

    const inputStyle = {
            fontSize: '14px',
            borderColor: '#000',
            minWidth: '140px',
            // maxWidth: '225px',
            overflow: 'hidden',
            height: '35px',
            background: '#fff',
            color: '#000',
            margin: '0px',
            flexGrow: 1,
            fontWeight: 400,
        },
        menuStyle = {
            zIndex: 9999999,
            display: 'flex',
            justifyContent: 'center',
            '& .MuiPaper-root': {
                backgroundColor: '#fff',
                top: '16px',
                // transformOrigin: 'initial',
                height: menuHeight,
                width: menuWidthLimit,
                // left: 'initial !important',
                // right: 'initial !important',
                ...menuStyles,
            },
            '& .MuiBackdrop-root': {
                backgroundColor: backdropFilter ? 'rgba(111, 126, 140, 0.2)' : undefined,
                backdropFilter: backdropFilter ? 'blur(2px)' : undefined,
            },
            '& .MuiMenuItem-root': {
                paddingLeft: itemGroupBy ? '35px' : '',
                fontSize: '14px',
            },
            '& .MuiListSubheader-root': {
                color: '#444',
                fontSize: '14px',
                fontWeight: 600,
            },
        };

    const selectProps: SelectProps = {
        size: 'small',
        label: placeholder,
        autoWidth: false,
        autoFocus: false,
        ...selectComponentProps,
        MenuProps: {
            autoFocus: false,
            sx: menuStyle,
            // disableAutoFocusItem: true,
            onKeyDown: selectComponentProps?.MenuProps?.onKeyDown || undefined,
        },
        input: (
            <OutlinedInput
                endAdornment={selectComponentProps.endAdornment}
                autoFocus={false}
                style={inputStyle}
                size="medium"
                fullWidth
            />
        ),
        value: searchKeyword ? '' : fieldValue,
        onOpen: (props) => {
            selectComponentProps?.onOpen && selectComponentProps.onOpen(props);
        },
        onClose: (props) => {
            selectComponentProps?.onClose && selectComponentProps.onClose(props);
            handleSetSearchKeyword('');

            const target = props.target as HTMLDivElement;

            if (!target) return;
            if (!target?.classList?.contains('MuiMenuItem-root')) return;

            const dataValue = target?.getAttribute('data-value');

            if (dataValue !== '') return;

            selectComponentProps?.onChange &&
                selectComponentProps.onChange(
                    {
                        target: {
                            name: selectComponentProps.name as string,
                            value: dataValue,
                        },
                    } as React.ChangeEvent<HTMLInputElement>,
                    target as unknown as React.ReactNode,
                );
        },
    };

    const renderSearchMenuItem = (
        <SelectFieldSearchMenuItem onSearch={handleSetSearchKeyword} placeholder={placeholder} />
    );

    const itemsNotFoundText = noItemsFoundText || 'No items found',
        showItemFound = false,
        renderNoItemsFound = showItemFound && (
            <MenuItem autoFocus={false} value="" className="noItemFound">
                {itemsNotFoundText}
            </MenuItem>
        );

    const getItems = () => {
        const options: { [key: string | number]: any } = {};
        if (!itemGroupBy) return items;

        for (const item of items) {
            if (!options[item[itemGroupBy]]) {
                options[item[itemGroupBy]] = {
                    items: [],
                    title: item[itemGroupBy]?.toLowerCase(),
                };
            }

            options[item[itemGroupBy]].items.push(item);
        }

        return options;
    };

    const options = [],
        menuItems = getItems();

    let hasItem = true,
        wasSearchItemFound = false;

    if (!required) {
        options.push(
            <MenuItem key="optionNone" {...searchMenItemProps} value="">
                None
            </MenuItem>,
        );
    }

    const getFieldItemLabel: GetItem = (item, index) => {
        if (getItemLabel) return getItemLabel(item, index);
        return item?.[itemLabelProp] || '';
    };

    const getFieldItemValue: GetItem = (item, index) => {
        if (getItemValue) return getItemValue(item, index);
        return item?.[itemValueProp] || '';
    };

    const getFieldItemId: GetItem = (item, index) => {
        if (getItemId) return getItemId(item, index);
        return item?.[itemIdProp];
    };

    const getFieldItemFilterBy: GetItem = (item, index) => {
        if (getItemFilterBy) return getItemFilterBy(item, index);
        return item[itemFilterByProp] || '';
    };

    const renderMenuItem: GetItem = (item, index) => {
        const itemLabel = getFieldItemLabel(item, index);

        // Skip first item if used to render empty value
        if (index === 0 && item?.value === '') return null;

        if (keyword) {
            const filterBy = (getFieldItemFilterBy(item, index) || itemLabel)?.toLowerCase() || '';
            if (filterBy?.indexOf(keyword) < 0) return null;
        }

        const itemValue = getFieldItemValue(item, index),
            itemId = getFieldItemId(item, index) || itemValue;

        options.push(
            <MenuItem key={itemId} value={itemValue} {...searchMenItemProps}>
                {itemLabel}
            </MenuItem>,
        );

        hasItem = true;
        wasSearchItemFound = true;
    };

    /**
     * Determine how to render the menu item base on menu grouping
     */
    if (itemGroupBy) {
        let counter = 0;
        for (const menuItem in menuItems) {
            options.push(<ListSubheader key={menuItem}>{menuItem}</ListSubheader>);
            hasItem = false;

            menuItems[menuItem].items?.forEach((item: any) => renderMenuItem(item, counter));

            if (!hasItem) {
                options.pop();
            }
            ++counter;
        }
    } else {
        items?.forEach((item, index) => renderMenuItem(item, index));
    }

    const noItemsPlaceholder = wasSearchItemFound ? null : renderNoItemsFound;

    return (
        <Select {...selectProps}>
            {renderSearchMenuItem}
            {options}
            {noItemsPlaceholder}
        </Select>
    );
};

export default SelectFieldSearchMenu;
