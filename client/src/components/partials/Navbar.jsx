import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

const Navbar = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography id="title" variant="h3" component={Link} to="/">
                        <LiveHelpIcon fontSize="large" /> RandoQuiz
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;