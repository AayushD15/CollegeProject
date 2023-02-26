import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { Accordion, Avatar, Box, Card, Grid, InputLabel, Typography } from '@mui/material';

import { AccordionDetails, AccordionSummary, CardHeader } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { FormControl, makeStyles, MenuItem, Select } from '@material-ui/core';
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import { useEffect } from 'react';
import img1 from '../../assets/Last Year Images/2022/1.jpeg';
import img2 from '../../assets/Last Year Images/2022/2.jpeg';
import img3 from '../../assets/Last Year Images/2022/3.jpeg';
import img4 from '../../assets/Last Year Images/2022/4.jpeg';
import img5 from '../../assets/Last Year Images/2022/5.jpeg';
import img6 from '../../assets/Last Year Images/2022/6.jpeg';
import img7 from '../../assets/Last Year Images/2022/7.jpeg';
import img8 from '../../assets/Last Year Images/2022/8.jpeg';
import img9 from '../../assets/Last Year Images/2022/9.jpeg';
import ListofImage from './ListofImage';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import img11 from '../../assets/Last Year Images/2021/1.jpeg';
import img12 from '../../assets/Last Year Images/2021/2.jpeg';
import img13 from '../../assets/Last Year Images/2021/3.jpg';
import img14 from '../../assets/Last Year Images/2021/4.jpg';
import img20 from '../../assets/Last Year Images/2020/1.JPG';
import img21 from '../../assets/Last Year Images/2020/2.jpg';
import img22 from '../../assets/Last Year Images/2020/3.JPG';
import img23 from '../../assets/Last Year Images/2020/4.JPG';
import img24 from '../../assets/Last Year Images/2020/5.JPG';
import img25 from '../../assets/Last Year Images/2020/6.JPG';
import img26 from '../../assets/Last Year Images/2020/7.JPG';
import img27 from '../../assets/Last Year Images/2020/8.JPG';
import img28 from '../../assets/Last Year Images/2020/9.jpg';
import img29 from '../../assets/Last Year Images/2020/10.JPG';

// ===============================|| COLOR BOX ||=============================== //

const ColorBox = ({ bgcolor, title, data, dark }) => (
    <>
        <Card sx={{ mb: 3 }}>
            {/* <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 4.5,
                    bgcolor,
                    color: dark ? 'grey.800' : '#ffffff'
                }}
            >
                {title && (
                    <Typography variant="subtitle1" color="inherit">
                        {title}
                    </Typography>
                )}
                {!title && <Box sx={{ p: 1.15 }} />}
            </Box> */}
        </Card>
        {/* {data && (
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="subtitle2">{data.label}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
                        {data.color}
                    </Typography>
                </Grid>
            </Grid>
        )} */}
    </>
);

ColorBox.propTypes = {
    bgcolor: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.object.isRequired,
    dark: PropTypes.bool
};

// useEffect(() => {
//     let tempFormData = { ...form };
//     if (!tempFormData.eventRegistered) tempFormData.eventRegistered = [];
//     tempFormData.eventRegistered.push({});
//     setForm(tempFormData);
// }, [form]);

// ===============================|| UI COLOR ||=============================== //

function UIColor() {
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
            fontWeight: 'bold',
            fontSize: theme.typography.pxToRem(15)
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

    // useEffect(() => {
    //     let tempFormData = { ...form };
    //     if (!tempFormData.eventRegistered) tempFormData.eventRegistered = [];
    //     tempFormData.eventRegistered.push({});
    //     setForm(tempFormData);
    // }, [form]);

    const classes = useStyles();
    const [leftExpanded, setLeftExpanded] = React.useState();
    const handleLeftPanelChange = (panel) => (event, isExpanded) => {
        setLeftExpanded(isExpanded ? panel : false);
    };
    const Images2020 = [
        {
            image: img20,
            text: 'Images'
        },
        {
            image: img21,
            text: 'Images'
        },
        {
            image: img22,
            text: 'Images'
        },
        {
            image: img23,
            text: 'Images'
        },
        {
            image: img24,
            text: 'Images'
        },
        {
            image: img25,
            text: 'Images'
        },
        {
            image: img26,
            text: 'Images'
        },
        {
            image: img27,
            text: 'Images'
        },
        {
            image: img28,
            text: 'Images'
        },
        {
            image: img29,
            text: 'Images'
        }
    ];

    const Images2021 = [
        {
            image: img11,
            text: 'Images'
        },
        {
            image: img12,
            text: 'Images'
        },
        {
            image: img13,
            text: 'Images'
        },
        {
            image: img14,
            text: 'Images'
        }
    ];

    const Images = [
        {
            image: img1,
            text: 'Images'
        },
        {
            image: img2,
            text: 'Images'
        },
        {
            image: img3,
            text: 'Images'
        },
        {
            image: img4,
            text: 'Images'
        },
        {
            image: img5,
            text: 'Images'
        },
        {
            image: img6,
            text: 'Images'
        },
        {
            image: img7,
            text: 'Images'
        },
        {
            image: img8,
            text: 'Images'
        },
        {
            image: img9,
            text: 'Images'
        }
    ];
    return (
        <MainCard title="Previous Year Image" /*secondary={<SecondaryAction link="https://next.material-ui.com/system/palette/" />} */>
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
                        <Typography className={classes.heading}>2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ImageList sx={{ width: 250, height: 450 }} variant="woven" cols={1} gap={8}>
                            {Images.map((item) => (
                                <ImageListItem key={item.image}>
                                    <img
                                        src={`${item.image}?w=161&fit=crop&auto=format`}
                                        srcSet={`${item.image}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.text}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </AccordionDetails>
                </Accordion>
                <br />
                <Accordion expanded={leftExpanded === '2021'} onChange={handleLeftPanelChange('2021')}>
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
                        <Typography className={classes.heading}>2021</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ImageList sx={{ width: 250, height: 450 }} variant="woven" cols={1} gap={8}>
                            {Images2021.map((item) => (
                                <ImageListItem key={item.image}>
                                    <img
                                        src={`${item.image}?w=161&fit=crop&auto=format`}
                                        srcSet={`${item.image}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.text}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </AccordionDetails>
                </Accordion>
                <br />
                <Accordion expanded={leftExpanded === '2020'} onChange={handleLeftPanelChange('2020')}>
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
                        <Typography className={classes.heading}>2020</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ImageList sx={{ width: 250, height: 650 }} variant="woven" cols={2} gap={8}>
                            {Images2020.map((item) => (
                                <ImageListItem key={item.image}>
                                    <img
                                        src={`${item.image}?w=161&fit=crop&auto=format`}
                                        srcSet={`${item.image}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.text}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </AccordionDetails>
                </Accordion>
            </Grid>

            {/* <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
            <SubCard title="Primary Color">
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="primary.light" data={{ label: 'Blue-50', color: '#E3F2FD' }} title="primary.light" dark />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="primary.200" data={{ label: 'Blue-200', color: '#90CAF9' }} title="primary[200]" dark />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="primary.main" data={{ label: 'Blue-500', color: '#2196F3' }} title="primary.main" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="primary.dark" data={{ label: 'Blue-600', color: '#1E88E5' }} title="primary.dark" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="primary.800" data={{ label: 'Blue-800', color: '#1565C0' }} title="primary[800]" />
                    </Grid>
                </Grid>
            </SubCard>
        </Grid>
        <Grid item xs={12}>
            <SubCard title="Secondary Color">
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox
                            bgcolor="secondary.light"
                            data={{ label: 'DeepPurple-50', color: '#ede7f6' }}
                            title="secondary.light"
                            dark
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox
                            bgcolor="secondary.200"
                            data={{ label: 'DeepPurple-200', color: '#b39ddb' }}
                            title="secondary[200]"
                            dark
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox
                            bgcolor="secondary.main"
                            data={{ label: 'DeepPurple-500', color: '#673ab7' }}
                            title="secondary.main"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox
                            bgcolor="secondary.dark"
                            data={{ label: 'DeepPurple-600', color: '#5e35b1' }}
                            title="secondary.dark"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="secondary.800" data={{ label: 'DeepPurple-800', color: '#4527a0' }} title="secondary[800]" />
                    </Grid>
                </Grid>
            </SubCard>
        </Grid>
        <Grid item xs={12}>
            <SubCard title="Success Color">
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="success.light" data={{ label: 'Green-A100', color: '#b9f6ca' }} title="success.light" dark />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="success.main" data={{ label: 'Green-A200', color: '#69f0ae' }} title="success[200]" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="success.main" data={{ label: 'Green-A400', color: '#69f0ae' }} title="success.main" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="success.dark" data={{ label: 'Green-A700', color: '#00c853' }} title="success.dark" />
                    </Grid>
                </Grid>
            </SubCard>
        </Grid>
        <Grid item xs={12}>
            <SubCard title="Orange Color">
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox
                            bgcolor="orange.light"
                            data={{ label: 'DeepOrange-50', color: '#fbe9e7' }}
                            title="orange.light"
                            dark
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="orange.main" data={{ label: 'DeepOrange-200', color: '#ffab91' }} title="orange.main" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="orange.dark" data={{ label: 'DeepOrange-800', color: '#d84315' }} title="orange.dark" />
                    </Grid>
                </Grid>
            </SubCard>
        </Grid>
        <Grid item xs={12}>
            <SubCard title="Error Color">
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="error.light" data={{ label: 'Red-50', color: '#ef9a9a' }} title="error.light" dark />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="error.main" data={{ label: 'Red-200', color: '#f44336' }} title="error.main" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="error.dark" data={{ label: 'Red-800', color: '#c62828' }} title="error.dark" />
                    </Grid>
                </Grid>
            </SubCard>
        </Grid>
        <Grid item xs={12}>
            <SubCard title="Warning Color">
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="warning.light" data={{ label: 'Amber-50', color: '#b9f6ca' }} title="warning.light" dark />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="warning.main" data={{ label: 'Amber-100', color: '#ffe57f' }} title="warning.main" dark />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="warning.dark" data={{ label: 'Amber-500', color: '#FFC107' }} title="warning.dark" />
                    </Grid>
                </Grid>
            </SubCard>
        </Grid>
        <Grid item xs={12}>
            <SubCard title="Grey Color">
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="grey.50" data={{ label: 'Grey-50', color: '#fafafa' }} title="grey[50]" dark />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="grey.100" data={{ label: 'Grey-100', color: '#f5f5f5' }} title="grey[100]" dark />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="grey.200" data={{ label: 'Grey-200', color: '#eeeeee' }} title="grey[200]" dark />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="grey.300" data={{ label: 'Grey-300', color: '#e0e0e0' }} title="grey[300]" dark />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="grey.500" data={{ label: 'Grey-500', color: '#9e9e9e' }} title="grey[500]" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="grey.700" data={{ label: 'Grey-600', color: '#757575' }} title="grey[600]" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="grey.700" data={{ label: 'Grey-700', color: '#616161' }} title="grey[700]" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="grey.900" data={{ label: 'Grey-900', color: '#212121' }} title="grey[900]" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="#fff" data={{ label: 'Pure White', color: '#ffffff' }} title="Pure White" dark />
                    </Grid>
                </Grid>
            </SubCard>
        </Grid>
    </Grid> */}
        </MainCard>
    );
}

export default UIColor;
