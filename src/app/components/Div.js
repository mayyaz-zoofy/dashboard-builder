import { Divider, Paper, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { conditionalPriorityRendering } from "../utils/helpers";

function Div(props) {
    const { width, isCard, children, className, title, current, priority, setCurrent } = props;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const condition = conditionalPriorityRendering(current, priority);
        if (loading && condition) {
            setLoading(false);
            setCurrent(priority || 1);
        }
    });

    const renderTitle = () => {
        if (title && title.length) {
            return (
                <div className="w-full">
                    <Typography className="py-3" variant="h5">{title}</Typography>
                    <Divider className="mb-4" />
                </div>
            )
        }
    }

    if (loading) {
        return <div className="w-full" />;
    }

    if (isCard) {
        return (
            <div className="w-full p-3">
                <Paper
                    className={`w-${width && width != "1" ? width : 'full'} p-2 shadow rounded-lg ${className || ''}`}
                >
                    {renderTitle()}
                    {children}
                </Paper>
            </div>
        )
    }
    return (
        <div className={`w-${width && width != "1" ? width : 'full'}  ${className || ''}`}>
            {renderTitle()}
            {children}
        </div>
    );
}

export default Div;