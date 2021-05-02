import React, { useEffect, useState } from "react";
import { Link, Typography } from "@material-ui/core";
import Filters from "../../utils/Filters";
import ProgressCircular from "../../utils/ProgressCircular";
import httpClient from "../../../httpClient";
import MiniLoading from "../../utils/MiniLoading";
import ProgressLinear from "../../utils/ProgressLinear";

function GLinear(props) {
    const { title, subtitle, endpoint, viewAll, filters } = props;
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    let filterVals;

    useEffect(() => {
        const updatedFilters = {};
        if (filters && filters.length) {
            filters.map(filter => {
                if (filter.defaultValue) {
                    updatedFilters[filter.slug] = filter.defaultValue;
                }
            });
        }
        filterVals = updatedFilters;
        fetchFiltersData(updatedFilters);
    }, []);

    const fetchFiltersData = () => {
        setLoading(true);
        httpClient(endpoint, filterVals)
            .then(res => {
                setData(res.data);
                setLoading(false);
            });
    };

    const handleFilterChange = (updatedFilters) => {
        filterVals = updatedFilters;
        fetchFiltersData();
    };

    const renderTitle = () => {
        if (title || subtitle) {
            return (
                <div className="flex flex-col">
                    {title && (
                        <Typography variant="h4">
                            {title}
                        </Typography>
                    )}
                    {subtitle && (
                        <Typography variant="subtitle1">
                            {subtitle}
                        </Typography>
                    )}
                </div>
            )
        }
        return '';
    };

    const renderFilters = () => {
        return <Filters filters={filters} handleChange={handleFilterChange} />
    };

    const renderViewAll = () => {
        if (viewAll && viewAll.link) {
            return (
                <div className="w-full justify-center">
                    <Link href={viewAll.link} target={viewAll.newTab ? '_blank' : '_self'}>{viewAll.label}</Link>
                </div>
            )
        }
    }

    if (loading) {
        return <MiniLoading />;
    }

    return (
        <div className="flex w-full">
            <div className="flex-auto">
                {renderTitle()}
            </div>
            <div>
                {renderFilters()}
            </div>
            <div className="w-full justify-center">
                <ProgressLinear progress={data.progress || 0} size={250} />
            </div>
            {renderViewAll()}
        </div>
    );
}

export default GLinear;
