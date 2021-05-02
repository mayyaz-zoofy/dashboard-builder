import React from 'react';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

export default function Header(props) {
    const { title, logo, sideNav, rightNav } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {logo && <img src={logo} className="h-16" />}
                    <Typography className={classes.title} variant="h6" noWrap>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}