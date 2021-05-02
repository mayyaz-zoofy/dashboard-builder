import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from "prop-types";

function Theme(props) {
    const { theme } = props;

    const customTheme = createMuiTheme({ ...theme });

    return <ThemeProvider theme={customTheme}>{props.children}</ThemeProvider>;
}

Theme.defaultProps = {
    theme: PropTypes.object.isRequired
};

export default React.memo(Theme);
