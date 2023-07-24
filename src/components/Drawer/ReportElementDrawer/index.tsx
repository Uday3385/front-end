import * as React from 'react';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';

import { useEditModalAction } from '@/src/hooks/useModal';
import { useTheme } from '@/src/theme';
import TitleBar from './TitleBar';
import styles from './styles';

export default function ReportElementDrawer() {
    const { open = false, data = {} } = useEditModalAction(),
        theme = useTheme(),
        stylesObj = styles({ theme }),
        { dataElement, contextType } = data;

    const handleOpenDrawer = () => {};

    const handleCloseDrawer = () => {};

    return (
        <SwipeableDrawer
            variant="persistent"
            onClose={handleCloseDrawer}
            anchor="right"
            onOpen={handleOpenDrawer}
            open={open}
            sx={stylesObj.root}
        >
            <TitleBar dataElement={dataElement} />
            <Box style={stylesObj.container}>Element settings / fields</Box>
        </SwipeableDrawer>
    );
}
