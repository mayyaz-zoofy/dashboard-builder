import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { useTimeout } from '../../configs/hooks';
import { CircularProgress } from "@material-ui/core";

function Loading(props) {
    const [showLoading, setShowLoading] = useState(!props.delay);

    useTimeout(() => {
        setShowLoading(true);
    }, props.delay);

    if (!showLoading) {
        return null;
    }

    return (
        <div className="h-24 flex flex-1 flex-col items-center justify-center">
            <CircularProgress color="primary" />
        </div>
    );
}

Loading.propTypes = {
    delay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
};

Loading.defaultProps = {
    delay: false
};

export default Loading;
