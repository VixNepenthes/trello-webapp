import { LightMode, DarkModeOutlined, SettingsBrightness } from '@mui/icons-material';
import { useColorScheme, SelectChangeEvent, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import React from 'react';

function ModeSelect() {
    const { mode, setMode } = useColorScheme();

    const handleChange = (event: SelectChangeEvent) => {
        setMode(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="lebel-select-dark-light-mode">Mode</InputLabel>
            <Select
                labelId="lebel-select-dark-light-mode"
                id="select-dark-light-mode"
                value={mode}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value="light">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <LightMode fontSize="small" />
                        Light
                    </div>
                </MenuItem>
                <MenuItem value="dark">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <DarkModeOutlined fontSize="small" />
                        Dark
                    </Box>
                </MenuItem>
                <MenuItem value="system">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <SettingsBrightness fontSize="small" />
                        system
                    </Box>
                </MenuItem>
            </Select>
        </FormControl>
    );
}

export default ModeSelect;
