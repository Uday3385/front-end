import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { SxProps } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';

import styles from './styles';

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
    wrapperStyle?: React.CSSProperties;
    customButtons?: CustomActionButton[];
    isDataEmpty?: boolean;
    onDelete?: ActionCallback;
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
    wrapperStyle = {},
    isDataEmpty = false,
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
        },
        selector: ({ row, index }: ActionCallbackParams) => (
            <div style={_wrapperStyle}>
                {onDelete && (
                    <IconButton style={deleteIconStyle} onClick={() => onDelete({ row, index })}>
                        <DeleteIcon style={styles.icon} />
                    </IconButton>
                )}

                {onEdit && (
                    <IconButton style={editIconStyle} onClick={() => onEdit({ row, index })}>
                        <EditIcon style={styles.icon} />
                    </IconButton>
                )}

                {onInfo && (
                    <IconButton style={infoIconStyle} onClick={() => onInfo({ row, index })}>
                        <InfoIcon style={styles.icon} />
                    </IconButton>
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
            </div>
        ),
    };
}
