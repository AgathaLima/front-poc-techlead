import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Tables } from '../Table';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{width: '80%', padding: '0 2em'}}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export function Layout() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider', minHeight: '100%', width: '300px', marginTop: '1em'}}
                >
                    <Tab label="Listar Usuários" {...a11yProps(0)} />
                    <Tab label="Cadastrar Usuários" {...a11yProps(1)} />
                    <Tab label="Listar Departamento" {...a11yProps(2)} />
                    <Tab label="Cadastrar departamento" {...a11yProps(3)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Tables />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <h1>Cadastrar Usuários</h1>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <h1>Listar Departamento</h1>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <h1>Cadastrar departamento</h1>
                </TabPanel>
            </Box>
        </>

    );
}
