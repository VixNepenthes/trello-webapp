import { ExpandMore, Check, Logout, PersonAdd, Settings } from '@mui/icons-material';
import {
    Avatar,
    Box,
    Button,
    Divider,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
} from '@mui/material';
import React from 'react';
import avatar from '~/assets/270236317_2954352121449240_2744543041549082339_n-modified.png';

function Profile() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ padding: 0 }}
                    aria-controls={open ? 'basic-menu-profiles' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: 30, height: 30 }} src={avatar} alt="TienViDev"></Avatar>
                </IconButton>
            </Tooltip>

            <Menu
                id="basic-menu-profiles"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button-profiles',
                }}
            >
                <MenuItem>
                    <Avatar sx={{ width: 34, height: 34, mr: 2 }} /> Profile
                </MenuItem>
                <MenuItem>
                    <Avatar sx={{ width: 34, height: 34, mr: 2 }} /> My account
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default Profile;
