import React, { useEffect, useState } from "react";
import { Chip } from "@material-ui/core";
import PropTypes from "prop-types";
import { conditionalPriorityRendering } from "../utils/helpers";

function Pills(props) {
    const { defaultValue, options, handleChange, current, priority, setCurrent } = props;
    const [value, setValue] = useState(defaultValue);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const condition = conditionalPriorityRendering(current, priority);
        if (loading && condition) {
            setLoading(false);
            setCurrent(priority || 1);
        }
    });

    const localHandleChange = (val) => {
        setValue(val);
        if (handleChange) {
            handleChange(val);
        }
    }

    const renderChips = () => {
        return options.map((option) => {
            return (
                <Chip
                    key={option.value}
                    label={option.label}
                    color={value === option.value ? 'primary' : 'default'}
                    onClick={() => localHandleChange(option.value)}
                    className="mx-2"
                />
            )
        });
    };

    if (loading) {
        return <div className="w-full" />;
    }

    return (
        <div className="flex p-1">
            {renderChips()}
        </div>
    )
}

Pills.propTypes = {
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    options: PropTypes.array.isRequired,
    handleChange: PropTypes.func
};

export default Pills;
