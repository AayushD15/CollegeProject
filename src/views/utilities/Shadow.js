import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import LogoSection from 'layout/MainLayout/LogoSection';
import Logo from 'ui-component/Logo';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@material-ui/core';
import MuiTypography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

// ===============================|| SHADOW BOX ||=============================== //

const ShadowBox = ({ shadow }) => (
    <Card sx={{ mb: 3, boxShadow: shadow }}>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 4.5,
                bgcolor: 'primary.light',
                color: 'grey.800'
            }}
        >
            <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
        </Box>
    </Card>
);

ShadowBox.propTypes = {
    shadow: PropTypes.string.isRequired
};

// ============================|| UTILITIES SHADOW ||============================ //

const UtilitiesShadow = () => (
    <MainCard /* secondary={<SecondaryAction link="https://next.material-ui.com/system/shadows/" />} */>
        <Box>
            <LogoSection />
        </Box>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={6} md={4} lg={3}></Grid>
                    <Grid item xs={12}>
                        <SubCard title="Contact Us">
                            <Grid container direction="row" justifyContent="space-around" spacing={1}>
                                <Grid item>
                                    <Link href="https://www.instagram.com/nkc_itcs/">
                                        <InstagramIcon style={{ fontSize: '46px' }} />
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <MuiTypography variant="body1" gutterBottom>
                                        <Link href="https://www.nkc.ac.in/">
                                            <PhoneIcon style={{ fontSize: '46px' }}></PhoneIcon>
                                        </Link>
                                    </MuiTypography>
                                </Grid>
                                <Grid item>
                                    <MuiTypography variant="body2" gutterBottom>
                                        <Link href="https://www.google.com/maps/place/Nagindas+Khandwala+College/@19.1926831,72.8452004,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7b649ddd2fde5:0x6bee99472824bd7c!8m2!3d19.1926831!4d72.8473891">
                                            <LocationOnIcon style={{ fontSize: '46px' }}></LocationOnIcon>
                                        </Link>
                                    </MuiTypography>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </MainCard>
);

export default UtilitiesShadow;
