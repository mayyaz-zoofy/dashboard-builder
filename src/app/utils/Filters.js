import React from 'react';
import Pills from "../components/Pills";
import PropTypes from "prop-types";
import BasicDatePicker from "./DatePicker";
import moment from "moment";

function Filters(props) {
    const { handleChange } = props;
    const filters = props.filters || [];

    const localHandleChange = (val, slug) => {
        const updatedFilters = {
            ...filters,
            [slug]: val
        };
        handleChange(updatedFilters);
    }

    const renderFilter = (filter) => {
        switch (filter.type) {
            case 'pills':
                return (
                    <Pills
                        defaultValue={filter.defaultValue}
                        options={filter.options}
                        handleChange={val => localHandleChange(val, filter.slug)}
                    />
                );
            case 'date':
                return (
                    <BasicDatePicker
                        value={moment().format('YYYY-MM-DD')}
                        label={filter.label}
                        handleChange={val => localHandleChange(val, filter.slug)}
                    />
                );
            default:
                return '';
        }
    }

    if (!filters.length) {
        return '';
    }

    return (
        <div className="flex">
            {filters.map(filter => (
                <div className="px-4">
                    {renderFilter(filter)}
                </div>

            ))}
        </div>
    )
}

Filters.propTypes = {
    filters: PropTypes.array,
    handleChange: PropTypes.func
};

export default Filters;
