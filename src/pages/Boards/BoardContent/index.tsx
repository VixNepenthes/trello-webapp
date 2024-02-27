import { Box } from '@mui/material';
import React from 'react';

function BoardContent() {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                width: '100%',
                height: (theme) => {
                    return `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight})`;
                },
                display: 'flex',
                alignItems: 'center',
                bgcolor: (theme) => {
                    return theme.palette.mode === 'dark' ? '#34495e' : '#1976d2';
                },
            }}
        >
            Board Content
        </Box>
    );
}

export default BoardContent;
