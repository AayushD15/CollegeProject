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
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from './store/actions';

import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import SaveIcon from '@material-ui/icons/Save';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import { theme } from 'themes';
import withReducer from 'store/withReducer';
import reducer from './store/reducers';
import { blue } from '@mui/material/colors';
import _ from '@lodash';
import { fontSize, height } from '@mui/system';

function EventRegister(props) {
    const dispatch = useDispatch();
    const initialState = {
        id: 0,
        fullName: undefined,
        emailId: undefined,
        clas: undefined,
        collegeName: undefined,
        contactNumber: undefined,
        gender: undefined,
        // eventName: undefined,
        // eventDate: undefined,
        // festType: undefined,
        eventRegistered: {}
    };
    const fromReducer = useSelector((state) => state.registerApp.register);
    const colleges = useSelector((state) => state.registerApp.registerReducer);
    useEffect(() => {
        setCollegeList(colleges.collegesLists);
        console.log(collegeList);
    }, [colleges]);

    const { form, handleChange, setForm } = useForm(initialState);

    const collegeName = [
        { code: 'N.K College', displayName: 'N.K Collge' },
        {
            code: 'Thakur College',
            displayName: 'Thakur College'
        },
        { code: 'Jai Hind College', displayName: 'Jai Hind College' }
    ];

    function setCollegeName(e, field, stringField) {
        let tempData = { ...form };
        tempData[field] = e;
        setForm(tempData);
    }

    useEffect(() => {
        dispatch(Actions.getCollegeListMaster());
        console.log(colleges);
    }, []);

    // useEffect(()=>{
    //     if(colleges.collegesLists)

    // },[colleges])

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

    const [collegeList, setCollegeList] = useState([]);

    // useEffect(() => {
    //     let tempFormData = { ...form };
    //     if (!tempFormData.eventRegistered) tempFormData.eventRegistered = [];
    //     tempFormData.eventRegistered.push({});
    //     setForm(tempFormData);
    // }, [form]);

    const classes = useStyles();
    const [leftExpanded, setLeftExpanded] = React.useState('basics');
    const handleLeftPanelChange = (panel) => (event, isExpanded) => {
        setLeftExpanded(isExpanded ? panel : false);
    };

    function handleChangeParseInt(e) {
        setForm({ ...form, [e.target.name]: parseInt(e.target.value) });
    }

    const handleCalculationBaseChange = function (e) {
        if (e.target.value == 'Male' || e.target.value == 'Female') {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            });
        } else {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
    };

    function handleSubmit(event) {
        if (validate()) {
            event.preventDefault();
            console.log('-----------Error Click----------------');
            dispatch(Actions.registerUser(form));
        }
    }

    function validate() {
        var isError = false;
        if (form.fullName == undefined) {
            isError = true;
            alert('Please Give Full Name');
        }
        if (form.collegeName == undefined) {
            isError = true;
            alert('Please Select a College Name');
        }
        if (form.clas == undefined) {
            isError = true;
            alert('Please give Class');
        }
        if (form.emailId == undefined) {
            isError = true;
            alert('Please give Email Id');
        }
        if (form.gender == undefined) {
            isError = true;
            alert('Please select Gender');
        }
        if (!form.contactNumber || form.contactNumber == NaN) {
            isError = true;
            alert('Please Give Mobile Number');
        }
        if (form.eventRegistered && form.eventRegistered.festType == undefined) {
            isError = true;
            alert('Please select Fest Type');
        }
        if (form.eventRegistered && form.eventRegistered.eventName == undefined) {
            isError = true;
            alert('Please select Event for which student is to be registered');
        }

        setForm({
            ...form,
            isValidate: !isError
        });
        return !isError;
    }

    const [events, setEvents] = useState(initialState);

    function handleEventChange(name, form, events, e) {
        console.log('-----------------Events---------------------');
        console.log(events);
        console.log(e);
        console.log('=-------------------------------------------');
        let tempData = { ...events };
        let tempForm = { ...form };
        tempData[e.target.name] = e.target.value;
        console.log('-------------------TempData--------------------');
        console.log(tempData);
        tempForm.eventRegistered[e.target.name] = e.target.value;
        console.log(tempForm);
        setForm(tempForm);
    }

    useEffect(() => {
        console.log('=================formform===================');
        console.log(form);
        console.log('====================================');
        let data = form;

        if (!data.collegeName) data.collegeName = [];
        // if (data.colleges) data.collegeList = data.colleges.split(',');
        // if (!data.eventRegistered) data.eventRegistered = [];
        // data.eventRegistered.push([{}]);
        setForm(data);
    }, [form]);

    const [formDisabled, setFormDisabled] = useState(false);
    return (
        form && (
            <div id="eventRegister">
                <MainCard
                    classes={{ root: classes.layout }}
                    children={
                        <>
                            <div>
                                <Grid>
                                    <Grid>
                                        <Accordion expanded={leftExpanded === 'basics'} onChange={handleLeftPanelChange('basics')}>
                                            <AccordionSummary
                                                style={{
                                                    display: 'flex',
                                                    background: 'aliceblue',
                                                    paddingLeft: 15,
                                                    paddingRight: 15
                                                }}
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2bh-content"
                                                id="panel2bh-header"
                                                className={classes.expansionPanelHeader}
                                            >
                                                <Typography className={classes.heading}>Basic Details</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Grid>
                                                    <Grid>
                                                        {/* <Tooltip> */}
                                                        <FormControl className={classes.formControl}>
                                                            <TextField
                                                                label="Full Name"
                                                                id="fullName"
                                                                name="fullName"
                                                                type="text"
                                                                value={form.fullName}
                                                                fullWidth
                                                                onChange={handleChange}
                                                            />
                                                        </FormControl>
                                                        {/* </Tooltip> */}
                                                    </Grid>
                                                    <Grid>
                                                        <br />
                                                        <br />
                                                    </Grid>
                                                    <Grid>
                                                        <FormControl className={classes.formControl}>
                                                            <InputLabel id="demo-simple-select-label">College Name</InputLabel>
                                                            <Select
                                                                disabled={formDisabled}
                                                                labelId="collegeName"
                                                                id="collegeName"
                                                                name="collegeName"
                                                                value={form.collegeName}
                                                                onChange={handleChange}
                                                                input={<Input />}
                                                            >
                                                                {collegeList &&
                                                                    collegeList.map((option) => (
                                                                        <MenuItem key={option.code} value={option.code}>
                                                                            <ListItemText primary={option.displayName} />
                                                                        </MenuItem>
                                                                    ))}
                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid>
                                                        <br />
                                                    </Grid>
                                                    <Grid>
                                                        <FormControl className={classes.formControl}>
                                                            <TextField
                                                                label="Contact No"
                                                                name="contactNumber"
                                                                id="contactNumber"
                                                                value={form.contactNumber}
                                                                onInput={(e) => {
                                                                    e.target.value = Math.max(0, parseInt(e.target.value))
                                                                        .toString()
                                                                        .slice(0, 10);
                                                                }}
                                                                onChange={handleChangeParseInt}
                                                                // type="number"
                                                                disabled={formDisabled}
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid>
                                                        <br />
                                                    </Grid>
                                                    <Grid>
                                                        {/* <Tooltip> */}
                                                        <FormControl className={classes.formControl}>
                                                            <TextField
                                                                label="Class"
                                                                id="clas"
                                                                name="clas"
                                                                type="text"
                                                                value={form.clas}
                                                                onChange={handleChange}
                                                            />
                                                        </FormControl>
                                                        {/* </Tooltip> */}
                                                    </Grid>
                                                    <Grid>
                                                        <br />
                                                    </Grid>
                                                    <Grid>
                                                        {/* <Tooltip> */}
                                                        <FormControl className={classes.formControl}>
                                                            <TextField
                                                                label="Email Id"
                                                                id="emailId"
                                                                name="emailId"
                                                                type="text"
                                                                value={form.emailId}
                                                                onChange={handleChange}
                                                            />
                                                        </FormControl>
                                                        {/* </Tooltip> */}
                                                    </Grid>
                                                    <Grid>
                                                        <br />
                                                        <br />
                                                    </Grid>
                                                    <Grid>
                                                        <FormControl className={classes.formControl}>
                                                            <InputLabel id="genderList">Gender</InputLabel>
                                                            <Select
                                                                disabled={formDisabled}
                                                                labelId="Gender"
                                                                id="gender"
                                                                name="gender"
                                                                value={form.gender}
                                                                onChange={handleCalculationBaseChange}
                                                            >
                                                                <MenuItem key={'male'} value={'Male'}>
                                                                    Male
                                                                </MenuItem>
                                                                <MenuItem key={'female'} value={'Female'}>
                                                                    Female
                                                                </MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                </Grid>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Grid>
                                    <Grid>
                                        <br />
                                        <br />
                                    </Grid>
                                    <Grid>
                                        <Accordion
                                            expanded={leftExpanded === 'eventsDetail'}
                                            onChange={handleLeftPanelChange('eventsDetail')}
                                        >
                                            <AccordionSummary
                                                style={{
                                                    display: 'flex',
                                                    background: 'aliceblue',
                                                    paddingLeft: 15,
                                                    paddingRight: 15
                                                }}
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2bh-content"
                                                id="panel2bh-header"
                                                className={classes.expansionPanelHeader}
                                            >
                                                <Typography className={classes.heading}>Events Detail</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Grid>
                                                    <Grid>
                                                        <FormControl className={classes.formControl}>
                                                            <InputLabel id="genderList">Fest Name</InputLabel>
                                                            <Select
                                                                disabled={formDisabled}
                                                                labelId="festType"
                                                                id="festType"
                                                                name="festType"
                                                                // value={item.festType}
                                                                onChange={(e) => handleEventChange('events', form, events, e)}
                                                            >
                                                                <MenuItem key={'Aahvaan'} value={'Aahvaan'}>
                                                                    Aahvaan
                                                                </MenuItem>
                                                                <MenuItem key={'Zestech'} value={'Zestech'}>
                                                                    Zestech
                                                                </MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid>
                                                        <br />
                                                        <br />
                                                    </Grid>

                                                    <Grid>
                                                        <FormControl className={classes.formControl}>
                                                            <InputLabel id="genderList">Event Name</InputLabel>
                                                            <Select
                                                                disabled={formDisabled}
                                                                labelId="eventName"
                                                                id="eventName"
                                                                name="eventName"
                                                                value={events.eventName}
                                                                onChange={(e) => handleEventChange('events', form, events, e)}
                                                            >
                                                                <MenuItem key={'fifa22'} value={'FIFA 22'}>
                                                                    FIFA 22
                                                                </MenuItem>
                                                                <MenuItem key={'couterStrike'} value={'CounterStrike'}>
                                                                    Counter Strike
                                                                </MenuItem>

                                                                <MenuItem key={'cod'} value={'Call of Duty'}>
                                                                    Call of Duty
                                                                </MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid>
                                                        <br />
                                                        <br />
                                                    </Grid>
                                                    <Grid>
                                                        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                            <KeyboardDatePicker disabled={true} />
                                                        </MuiPickersUtilsProvider> */}
                                                    </Grid>
                                                    {/* <Grid container>
                                                        <FormControl>
                                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                <KeyboardDatePicker disabled={true} />
                                                            </MuiPickersUtilsProvider>
                                                        </FormCont
                                                        rol>
                                                    </Grid> */}
                                                </Grid>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Grid>
                                    <Grid>
                                        <br />
                                        <br />
                                    </Grid>

                                    <Button variant="contained" onClick={handleSubmit}>
                                        Submit
                                    </Button>
                                    <Grid>{/* <Button className={classes.formControl}>Submit</Button> */}</Grid>
                                </Grid>
                            </div>
                        </>
                    }
                />
            </div>
        )
    );
}

export default withReducer('registerApp', reducer)(EventRegister);
