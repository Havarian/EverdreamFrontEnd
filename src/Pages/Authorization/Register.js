import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {LockOpen} from "@mui/icons-material";
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login, register} from "../../redux/slices/security/AuthSlice";
import {clearMessage, setMessage} from "../../redux/slices/security/AuthMessageSlice";


export default function Register() {

    const [sucessfull, setSuccessfull] = useState(false);
    const { message } = useSelector((state) => state.message || {});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=> {
        dispatch(clearMessage());
    },[dispatch])



    const handleRegister = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = data.get('username')
        const email = data.get('email')
        const password = data.get('password')

        dispatch(register({username, email, password})).unwrap().then(()=> {
            setSuccessfull(true);
            dispatch(login({email, password})).unwrap().then(() => {
                navigate("/");
            })
        }).catch (() => {
            setSuccessfull(false);
        })
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOpen />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Rejestracja
                </Typography>
                <Box component="form" onSubmit={handleRegister} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Nazwa użytkownika"
                        name="username"
                        autoComplete="username"
                        variant={"standard"}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Adres Email"
                        name="email"
                        autoComplete="email"
                        variant={"standard"}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Hasło"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        variant={"standard"}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Zarejestruj
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link component={RouterLink} to="/login" variant="body2" style={{color: "grey"}}>
                                {"Posiadasz konto? Zaloguj!"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}