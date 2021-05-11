import React, { useEffect, useState } from "react";
import { Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { conditionalPriorityRendering } from "../utils/helpers";

const useStyles = makeStyles(theme => ({
    badgeRoot: {
        borderRadius: '0.5rem'
    }
}))

function Badge(props) {
    const { label, color, current, priority, setCurrent } = props;
    const classes = useStyles();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const condition = conditionalPriorityRendering(current, priority);
        if (loading && condition) {
            setLoading(false);
            setCurrent(priority || 1);
        }
    });

    if (loading) {
        return <div />;
    }

    return (
        <Chip label={label} className={classes.badgeRoot} color={color || 'primary'} />
    )
}

export default Badge;