import React, { useCallback, useEffect, useRef } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { AccordionDetails, CardHeader, Grid, Tooltip, Typography } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import { gridSpacing } from 'store/constant';
import { AccordionActions, Accordion, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    Input,
    InputLabel,
    ListItemText,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField
} from '@material-ui/core';
import FormControl from '@mui/material/FormControl';
import useForm from 'hooks/useForm';
import { useState } from 'react';
import * as Actions from './store/actions';
import { useSelector, useDispatch } from 'react-redux';
// import * as Actions from './store/actions';

import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import SaveIcon from '@material-ui/icons/Save';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import { theme } from 'themes';
import withReducer from 'store/withReducer';
// import reducer from './store/reducers';
import { blue } from '@mui/material/colors';
import _ from '@lodash';
import { fontSize, height } from '@mui/system';

function ReportPage() {
    const initialState = {
        id: 0,
        reportTypeCode: ''
    };
    const useStyles = makeStyles((theme) => ({
        expansionPanelHeader: {
            backgroundColor: 'aliceblue',
            color: 'black'
        },
        expansionPanelDetails: {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText
        },
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
            padding: 24,
            width: '100%',
            height: '100%'
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: '90%',
            maxWidth: '95%',
            width: '300%',
            fontSize: 'x-large'
        },
        fullWith: { width: '100%', marginBottom: '10px' },
        chips: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        chip: {
            margin: 2
        },
        noLabel: {
            marginTop: theme.spacing(3)
        },
        heading: {
            // fontSize: theme.typography.pxToRem(38),
            // flexBasis: '33.33%',
            flexShrink: 0,
            fontWeight: 'bolder',
            fontSize: theme.typography.pxToRem(25)
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(37),
            color: theme.palette.text.secondary
        },
        margin100: { marginTop: '100px' },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff'
        },
        top20p: {
            marginTop: '20%'
        },
        top10p: {
            marginTop: '10%'
        }
    }));

    const classes = useStyles();
    const [formDisabled, setFormDisabled] = useState(false);

    const { form, handleChange, setForm } = useForm(initialState);

    useEffect(() => {
        console.log('=================formform===================');
        console.log(form);
        console.log('====================================');
        let data = form;
        setForm(form);
    }, [form]);

    function handleExportReport(event) {
        event.preventDefault();
        console.log(form);
        Actions.exportToExcel(form);
    }

    return (
        <>
            <Grid container>
                <Grid container>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="genderList">Report Type</InputLabel>
                        <Select
                            disabled={formDisabled}
                            labelId="reportTypeCode"
                            id="reportTypeCode"
                            name="reportTypeCode"
                            value={form.reportTypeCode}
                            onChange={handleChange}
                        >
                            <MenuItem key={'registeredStudent'} value={'registeredStudent'}>
                                Registered Student
                            </MenuItem>
                            <MenuItem key={'eventRegistered'} value={'eventRegistered'}>
                                Events Registered
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid>
                    <Button
                        variant="contained"
                        style={{
                            color: '#000',
                            background: 'ghostwhite'
                        }}
                        onClick={handleExportReport}
                    >
                        Export Report
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default ReportPage;
