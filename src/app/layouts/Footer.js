import React from 'react';
import { AppBar, Link, Toolbar, Tooltip, Typography } from "@material-ui/core";
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

export default function Footer(props) {
    const { title, links } = props;
    const classes = useStyles();

    const renderLinks = () => {
        if (links && links.length) {
            return (
                <div className="flex">
                    {links.map(link => (
                        <Tooltip title={link.tooltip}>
                            <Link className="mx-3" href={link.link} target={link.newTab ? '_blank' : ''}>
                                <img src={link.icon} width={40} />
                            </Link>
                        </Tooltip>
                    ))}
                </div>
            )
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        {title}
                    </Typography>
                    {renderLinks()}
                </Toolbar>
            </AppBar>
        </div>
    )
}