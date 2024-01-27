import { Box } from '@mui/material';
import React from 'react';
import ModeSelect from '~/components/ModeSelect';

function AppBar() {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.light',
                width: '100%',
                height: (theme) => {
                    return theme.trelloCustom.appBarHeight;
                },
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <ModeSelect />
        </Box>
    );
}

export default AppBar;
