import { Container, Box } from '@mui/material';
import React from 'react';
import AppBar from '~/components/AppBar';
import BoardBar from './BoardBar';
import BoardContent from './BoardContent';

function Board() {
    return (
        <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
            <AppBar />
            <BoardBar />
            <BoardContent />
        </Container>
    );
}

export default Board;
