// material-ui
import { Icon, Typography } from '@mui/material';
import Formsy from 'formsy-react';
// project imports
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    useMediaQuery
} from '@mui/material';

import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

import MainCard from 'ui-component/cards/MainCard';
import Logo from 'ui-component/Logo';
import * as authActions from 'app/auth/store/actions';
import AuthCardWrapper from 'views/pages/authentication/AuthCardWrapper';
import TextFieldFormsy from 'ui-component/Component/TextFieldFormsy';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    const theme = useTheme();
    const formRef = useRef(null);

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.customization);
    const [isFormValid, setIsFormValid] = useState(false);
    function handleSubmit(model) {
        dispatch(authActions.submitLogin(model));
    }

    function disableButton() {
        setIsFormValid(false);
    }
    // useEffect(() => {
    //     console.log(auth);
    // }, [auth]);

    function enableButton() {
        setIsFormValid(true);
    }

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12}>
                    {/* <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper> */}
                    <Link to="#">
                        <Logo />
                    </Link>
                    {/* </AuthCardWrapper>
                        </Grid>
                    </Grid> */}
                </Grid>
                <Grid item xs={12}>
                    {/* <div className="w-full login" style={{ padding: '10%' }}> */}
                    <Formsy
                        onValidSubmit={handleSubmit}
                        onValid={enableButton}
                        onInvalid={disableButton}
                        ref={formRef}
                        className="flex flex-col justify-center w-full"
                    >
                        <TextFieldFormsy
                            className="mb-16"
                            type="text"
                            name="email"
                            label="Username"
                            value="admin"
                            validations={{
                                minLength: 1
                            }}
                            validationErrors={{
                                minLength: 'Please Enter UserName'
                            }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end"></InputAdornment>
                            }}
                            variant="outlined"
                            required
                        />
                        <br />
                        <br />

                        <TextFieldFormsy
                            className="mb-16"
                            type="password"
                            name="password"
                            label="Password"
                            value="nkc@123"
                            validations={{
                                minLength: 1
                            }}
                            validationErrors={{
                                minLength: 'Please Enter Password'
                            }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end"></InputAdornment>
                            }}
                            variant="outlined"
                            required
                        />
                        <br />
                        <br />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="w-full mx-auto mt-16 normal-case"
                            aria-label="LOG IN"
                            disabled={!isFormValid}
                            value="legacy"
                        >
                            Login
                        </Button>
                    </Formsy>
                </Grid>
            </Grid>
        </>
    );
};

export default SamplePage;
