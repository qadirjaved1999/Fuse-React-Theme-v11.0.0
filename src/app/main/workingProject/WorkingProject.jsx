import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import Pql1 from './Pql1';
import Pql2 from './Pql2';
import Pql3 from './Pql3';

function WorkingProject() {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs value={selectedTab} onChange={handleChange} centered>
                <Tab label="PQL One" />
                <Tab label="PQL Two" />
                <Tab label="PQL Three" />
            </Tabs>

            {selectedTab === 0 && <Pql1 />}
            {selectedTab === 1 && <Pql2 />}
            {selectedTab === 2 && <Pql3 />}
        </Box>
    );
}

export default WorkingProject;
