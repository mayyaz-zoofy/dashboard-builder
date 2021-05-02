import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function ProgressLinear(props) {
    const { progress, label } = props;

    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress className="h-3 rounded-md" variant="determinate" value={progress} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">
                    {label || `${Math.round(progress)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

ProgressLinear.propTypes = {
    progress: PropTypes.number.isRequired,
};

export default ProgressLinear;
