import React from 'react';
import { Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    badgeRoot: {
        borderRadius: '0.5rem'
    }
}))

function Badge(props) {
    const { label, color } = props;
    const classes = useStyles();

    return (
        <Chip label={label} className={classes.badgeRoot} color={color || 'primary'} />
    )
}

export default Badge;