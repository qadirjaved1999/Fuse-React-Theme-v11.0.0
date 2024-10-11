import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem,
    Typography,
    Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { formatValue } from 'helpers/formulas'; // Ensure this import is correct

const CustomAccordion = () => {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Glossary</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List sx={{ listStyleType: 'disc', fontSize: '14px' }}>
                            {glossaryItems.map((item, index) => (
                                <ListItem key={index} sx={{ display: "list-item", pl: 1 }}>
                                    <b>{item.title}</b>: {item.content}
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    );
};

export default CustomAccordion;
