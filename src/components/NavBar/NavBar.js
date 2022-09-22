import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/slices/security/AuthSlice";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {ShowAdminPanel, ShowCreatorPanel, ShowMainPage, ShowSettings} from "../../redux/slices/appState/navbarSlice";

export default function NavBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const currentUser = useSelector(state => state.security.auth)
    const navbar = useSelector(state => state.appState.navbar);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser.isLoggedIn){
            dispatch(ShowMainPage(true))
            dispatch(ShowCreatorPanel(currentUser.user.roles.includes("ROLE_CREATOR")))
            dispatch(ShowAdminPanel(currentUser.user.roles.includes("ROLE_ADMIN")))
            dispatch(ShowSettings(true))
            // navigate("/mainPage")
        }
    }, [currentUser, dispatch])

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logOut = () => {
        dispatch(logout()).unwrap().then(()=> {
            navigate("/login")
        });
        dispatch(ShowSettings(false))
        dispatch(ShowMainPage(false))
        dispatch(ShowAdminPanel(false))
        dispatch(ShowCreatorPanel(false))
    }

    return (
        <AppBar position="static" elevation={0}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'darkred',
                            textDecoration: 'none',
                        }}
                    >
                        EVERDREAM
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            ><MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem component={RouterLink} to="/" onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Strona Główna</Typography>
                            </MenuItem>
                            <MenuItem component={RouterLink} to="/creatorPage" onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Panel Twórcy</Typography>
                            </MenuItem>
                            <MenuItem component={RouterLink} to="/adminPage" onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Panel Administratora</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        EVERDREAM
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {navbar.showMainPage && <Button
                            component={RouterLink} to="/"
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            Strona Główna
                        </Button>}
                        {navbar.showCreatorPanel && <Button
                            component={RouterLink} to="/creatorPage"
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            Panel Twórcy
                        </Button>}
                        {navbar.showAdminPanel && <Button
                            component={RouterLink} to="/adminPage"
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            Panel Administratora
                        </Button>}
                    </Box>

                    {navbar.showSettings && <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Ustawienia">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem  onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Profil</Typography>
                            </MenuItem>
                            <MenuItem  onClick={() => {handleCloseUserMenu(); logOut();}}>
                                <Typography textAlign="center">Wyloguj</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>}
                </Toolbar>
            </Container>
        </AppBar>
    );
};