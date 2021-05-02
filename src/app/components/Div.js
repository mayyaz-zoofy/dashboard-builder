import { Divider, Paper, Typography } from "@material-ui/core";

function Div(props) {
    const { width, isCard, children, className, title } = props;

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

    if (isCard) {
        return (
            <div className="w-full p-3">
                <Paper
                    className={`w-${width && width != "1" ? width : 'full'} p-2 shadow rounded-lg ${className || ''}`}
                >
                    {renderTitle()}
                    {props.children}
                </Paper>
            </div>
        )
    }
    return (
        <div className={`w-${width && width != "1" ? width : 'full'}  ${className || ''}`}>
            {renderTitle()}
            {props.children}
        </div>
    );
}

export default Div;