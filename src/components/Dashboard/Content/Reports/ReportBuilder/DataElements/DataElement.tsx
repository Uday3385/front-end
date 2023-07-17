import * as React from 'react';

import Typography, { type TypographyProps } from '@mui/material/Typography';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';

import { reportBuilderDragDropContext } from '@/src/redux/reducers/reportBuilder';
import { getDataElementClassName } from '@/src/hooks/useReportBuilder';
import { useGetDraggableProps } from '@/src/hooks/useGlobalDragDrop';
import { useTheme } from '@/src/theme';
import styles from './styles';

type Props = {
    item: { id: string; title: React.ReactNode };
    typographyProps?: TypographyProps;
};

export default function DataElement({ item, typographyProps }: Props) {
    const theme = useTheme(),
        draggableProps = useGetDraggableProps({ item, contextType: reportBuilderDragDropContext }),
        rootStyle = styles.dataElement({ theme });

    const className = `noSelect ${getDataElementClassName(item.id)} dataElement${
        typographyProps?.className ? ' ' + typographyProps.className : ''
    }`;

    const handleClick: TypographyProps['onClick'] = async (e) => {
        const elem = e.currentTarget;
        if (!elem) return;

        document.querySelector('.dataElementSelected')?.classList?.remove('dataElementSelected');
        elem.classList.add('dataElementSelected');
    };

    return (
        <Typography component="div" className={className} sx={rootStyle} onClick={handleClick} {...draggableProps}>
            <span className="dataElementRibbon"></span>
            <span className="dataElementTitle">{item.title}</span>
            <span className="dataElementDragIndicator">
                <DragIndicatorOutlinedIcon />
            </span>
        </Typography>
    );
}
