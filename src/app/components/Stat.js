import React from 'react';
import { Divider, Paper, Typography } from "@material-ui/core";

function Stat(props) {
    const { title, subtitle, content, bottom } = props;

    const renderBottom = () => {
        if (bottom && (bottom.left || bottom.right)) {
            const { left, right }  = bottom;
            return (
                <div className="flex w-full">
                    <div className="flex-auto">
                        {left && <Typography variant="subtitle1">{left}</Typography>}
                    </div>
                    <div>
                        {right && <Typography variant="subtitle1">{right}</Typography>}
                    </div>
                </div>
            )
        }
        return '';
    }

    return (
        <Paper className="p-2 w-full shadow rounded-lg">
            <div className="flex w-full">
                <Typography variant="h5">{title}</Typography>
                {subtitle ? <Typography className="p-2" variant="caption">{subtitle}</Typography> : '' }
                <Divider />
            </div>
            <div className="flex py-10 justify-center">
                <Typography variant="h4">{content}</Typography>
            </div>
            {renderBottom()}
        </Paper>
    )
}

export default Stat;