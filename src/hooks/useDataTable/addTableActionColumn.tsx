import IconButton, { type IconButtonProps } from '@mui/material/IconButton';
import Box, { type BoxProps } from '@mui/material/Box';
import { type SxProps } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';

import styles from './styles';
import { DarkTooltip } from '@/src/components/Tooltips/CustomTooltip';

type ActionCallbackParams = { row: any; index: number };
type ActionCallback = (props: ActionCallbackParams) => void;

type CustomActionButton = ActionCallbackParams & {
    iconStyle?: React.CSSProperties;
    onClick?: (props: ActionCallbackParams) => IconButtonProps['onClick'];
    render?: (props: ActionCallbackParams) => React.ReactNode;
    Icon: React.ElementType;
    sx: SxProps;
};

type AddActionColumnProps = {
    headerCellStyle?: React.CSSProperties;
    customButtons?: CustomActionButton[];
    wrapperStyle?: BoxProps['sx'];
    isDataEmpty?: boolean;
    onDelete?: ActionCallback;
    boxProps?: BoxProps;
    onEdit?: ActionCallback;
    onInfo?: ActionCallback;
    style?: React.CSSProperties;
    title?: String;
};

/**
 * Action button table column data.
 */
export default function addTableActionColumn({
    customButtons,
    headerCellStyle = {},
    wrapperStyle = {},
    isDataEmpty = false,
    boxProps = {},
    style = {},
    title = 'Actions',
    onDelete,
    onInfo,
    onEdit,
}: AddActionColumnProps) {
    if (isDataEmpty) {
        return { omit: true, title: '', selector: () => <></> };
    }

    const _wrapperStyle = { ...styles.actionButtonWrapper, ...wrapperStyle };

    const hasCustomButtons = customButtons && customButtons?.length,
        editIconStyle = {
            ...styles.iconButton,
            marginRight: onDelete || onInfo || hasCustomButtons ? '5px' : '0px',
        },
        deleteIconStyle = { ...styles.iconButton, marginRight: onInfo || hasCustomButtons ? '5px' : '0px' },
        infoIconStyle = { ...styles.iconButton, marginRight: onInfo || hasCustomButtons ? '5px' : '0px' };

    return {
        title,
        style,
        headerCellStyle: {
            textAlign: 'right',
            paddingRight: '26px',
            ...headerCellStyle,
        },
        selector: ({ row, index }: ActionCallbackParams) => (
            <Box {...boxProps} sx={_wrapperStyle}>
                {onDelete && (
                    <DarkTooltip title="Delete" placement="top">
                        <IconButton
                            className="tableActionDeleteIconBtn"
                            style={deleteIconStyle}
                            onClick={() => onDelete({ row, index })}
                        >
                            <DeleteIcon style={styles.icon} />
                        </IconButton>
                    </DarkTooltip>
                )}

                {onEdit && (
                    <DarkTooltip title="Edit" placement="top">
                        <IconButton
                            className="tableActionEditIconBtn"
                            style={editIconStyle}
                            onClick={() => onEdit({ row, index })}
                        >
                            <EditIcon style={styles.icon} />
                        </IconButton>
                    </DarkTooltip>
                )}

                {onInfo && (
                    <DarkTooltip title="Info" placement="top">
                    <IconButton
                        className="tableActionInfoIconBtn"
                        style={infoIconStyle}
                        onClick={() => onInfo({ row, index })}
                    >
                        <InfoIcon style={styles.icon} />
                    </IconButton>
                    </DarkTooltip>
                )}

                {hasCustomButtons
                    ? customButtons?.map((customButton, i) => {
                          const customIconStyle = { ...styles.icon, ...(customButton.iconStyle || {}) },
                              customIcon = (
                                  <IconButton
                                      key={i}
                                      style={infoIconStyle}
                                      sx={customButton.sx}
                                      onClick={customButton?.onClick && customButton?.onClick({ row, index })}
                                  >
                                      <customButton.Icon style={customIconStyle} />
                                  </IconButton>
                              );

                          return customButton?.render ? customButton?.render({ row, index }) : customIcon;
                      })
                    : null}
            </Box>
        ),
    };
}
