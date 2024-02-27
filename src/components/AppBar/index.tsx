import { Badge, Box, Button, InputAdornment, SvgIcon, TextField, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import ModeSelect from '~/components/ModeSelect';
import AppsIcon from '@mui/icons-material/Apps';
import { ReactComponent as trelloLogo } from '~/assets/trello.svg';
import Workspaces from './Menus/Workspaces';
import Recent from './Menus/Recent';
import Started from './Menus/Started';
import Templates from './Menus/Templates';
import { Close, HelpOutline, LibraryAdd, NotificationsNone, Search } from '@mui/icons-material';
import Profile from './Menus/Profile';
import theme from '~/theme';

function AppBar() {
    const [searchValue, setSearchValue] = useState('');
    return (
        <Box
            sx={{
                width: '100%',
                height: (theme) => {
                    return theme.trelloCustom.appBarHeight;
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
                overflowX: 'auto',
                bgcolor: (theme) => {
                    return theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0';
                },
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AppsIcon sx={{ color: 'white' }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <SvgIcon component={trelloLogo} inheritViewBox sx={{ color: 'white' }} />
                    <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>
                        Trello
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                    <Workspaces />
                    <Recent />
                    <Started />
                    <Templates />
                    <Button
                        sx={{ color: 'white', border: 'none', '&:hover': { border: 'none' } }}
                        variant="outlined"
                        startIcon={<LibraryAdd />}
                    >
                        Create
                    </Button>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <TextField
                    id="outline-search"
                    label="Search..."
                    type="text"
                    size="small"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search sx={{ color: 'white' }} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <Close
                                onClick={() => setSearchValue('')}
                                fontSize="small"
                                sx={{ color: searchValue ? 'white' : 'transparent', cursor: 'pointer' }}
                            />
                        ),
                    }}
                    sx={{
                        minWidth: '120px',
                        maxwidth: '180px',
                        '& label': { color: 'white' },
                        '& input': { color: 'white' },
                        '& label.Mui-focused': { color: 'white' },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white',
                            },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white',
                            },
                        },
                    }}
                />
                <ModeSelect />
                <Tooltip title="Notification">
                    <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
                        <NotificationsNone sx={{ color: 'white' }} />
                    </Badge>
                </Tooltip>
                <Tooltip title="Help">
                    <HelpOutline sx={{ color: 'white', cursor: 'pointer' }} />
                </Tooltip>
                <Profile />
            </Box>
        </Box>
    );
}

export default AppBar;
