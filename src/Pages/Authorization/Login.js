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
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearMessage} from "../../redux/slices/security/AuthMessageSlice";
import {login} from "../../redux/slices/security/AuthSlice";


export default function Login() {

    const { isLoggedIn } = useSelector((state) => state.security.auth)

    const { message } = useSelector((state) => state.security.message)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearMessage());
        if (isLoggedIn){
            navigate("/");
        }
    },[dispatch, navigate, isLoggedIn]);


    const handleLogin = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        dispatch(login({email, password})).unwrap()
            .then(()=>{
                navigate("/")
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
                      Logowanie
                    </Typography>
                    <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
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
                            Zaloguj
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link component={RouterLink} to="/register" variant="body2" style={{color: "grey"}}>
                                    {"Nie masz konta? Zarejestruj"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
    );
}