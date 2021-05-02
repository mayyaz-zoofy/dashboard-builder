import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    label: {
        position: 'absolute',
        top: '40%',
        left: '40%'
    }
}));

function ProgressCircular(props) {
    const { progress, label, size } = props;
    const classes = useStyles();

    const labelVariant = () => {
        if (size > 200) {
            return 'h4';
        }
        if (size > 100) {
            return 'subtitle1';
        }
        return 'caption';
    }

    return (
        <div className="relative">
            <CircularProgress variant="determinate" value={progress} size={size || 100} />
            <Typography className={classes.label} variant={labelVariant()} component="div" color="textSecondary">
                {label || `${Math.round(progress)}%`}
            </Typography>
        </div>
    );
}

ProgressCircular.propTypes = {
    progress: PropTypes.number.isRequired,
};

export default ProgressCircular;
