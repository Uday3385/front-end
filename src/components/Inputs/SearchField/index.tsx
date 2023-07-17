import * as React from 'react';

import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';

import TextField, { type TextFieldType } from '@/src/components/Inputs/TextField';
import InputFieldContainer from '@/src/components/Containers/InputFieldContainer';
import { DarkTooltip } from '@/src/components/Tooltips/CustomTooltip';
import SearchIcon from '@/src/components/Icons/Search';
import styles from './styles';

type SearchFieldProps = TextFieldType & {
    searchIconPosition?: 'start' | 'end';
    onClearSearch?: () => void;
    clearSearch?: boolean;
    onSearch?: (searchText: string) => void;
    children?: React.ReactNode;
};

export default function SearchField({
    searchIconPosition = 'end',
    containerProps = {},
    clearSearch = false,
    onClearSearch,
    onSearch,
    onChange,
    disabled,
    children,
    sx,
    ...props
}: SearchFieldProps) {
    const searchInputRef = React.useRef<HTMLInputElement>(null),
        [searchText, setSearchText] = React.useState<string>(''),
        hasSearchText = searchText?.length > 0,
        isSearchIconStart = searchIconPosition === 'start',
        searchInputStyle = {
            height: '35px',
            maxWidth: '280px',
            width: '100%',
            ...(sx || {}),
        },
        rootStyle = {
            ...styles.root,
            ...(containerProps.sx || {}),
        };

    const renderSearchIcon = <SearchIcon fontSize="small" />;

    const renderSearchAdornment = <InputAdornment position="start">{renderSearchIcon}</InputAdornment>;

    const filterSearchText = (searchTerm: string) => searchTerm?.trim()?.replace(/\s+/g, ' ') || '';

    const handleSearch = async () => {
        if (!onSearch) return;
        const value = filterSearchText(searchInputRef.current?.value || '');
        if (!value) {
            return searchInputRef.current?.focus();
        }
        onSearch(filterSearchText(value));
    };

    const handleKeyDown = async (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleChange: SearchFieldProps['onChange'] = (e) => {
        setSearchText(e.target.value);
        onChange && onChange(e);
    };

    const handleClearSearch = () => {
        if (searchInputRef.current) {
            searchInputRef.current.value = '';
            setSearchText('');
        }
        onClearSearch && onClearSearch();
    };

    const inputProps = {
        onKeyDown: handleKeyDown,
        startAdornment: clearSearch && isSearchIconStart ? renderSearchAdornment : undefined,
        endAdornment: (
            <>
                {!isSearchIconStart && (
                    <IconButton className={`searchBtn${hasSearchText ? ' hasSearchText' : ''}`} onClick={handleSearch}>
                        {renderSearchIcon}
                    </IconButton>
                )}

                {!disabled && hasSearchText ? (
                    <DarkTooltip title="Clear search" placement="bottom">
                        <IconButton className="clearSearchBtn" onClick={handleClearSearch}>
                            <CancelIcon fontSize="small" fill="#9E9E9E" />
                        </IconButton>
                    </DarkTooltip>
                ) : null}
            </>
        ),
    };

    const _containerProps = { ...containerProps, sx: rootStyle, children };

    return (
        <TextField
            name="search"
            placeholder="Search"
            variant="outlined"
            type="text"
            label={null}
            required={false}
            {...props}
            onChange={handleChange}
            disabled={disabled}
            inputRef={searchInputRef}
            sx={searchInputStyle}
            InputProps={inputProps}
            containerProps={_containerProps}
        />
    );
}
