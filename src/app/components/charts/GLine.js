import React, { useEffect, useState } from "react";
import { Link, Typography } from "@material-ui/core";
import Filters from "../../utils/Filters";
import httpClient from "../../../httpClient";
import MiniLoading from "../../utils/MiniLoading";
import LineGraph from "../../utils/graphs/LineGraph";

function GLineWrapper(props) {
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
                <div className="flex w-full justify-end">
                    <Link href={viewAll.link} target={viewAll.newTab ? '_blank' : '_self'}>{viewAll.label}</Link>
                </div>
            )
        }
    }

    if (loading) {
        return <MiniLoading />;
    }

    return (
        <div className="w-full">
            <div className="flex w-full justify-between">
                <div>
                    {renderTitle()}
                </div>
                <div className="mb-3">
                    {renderFilters()}
                </div>
            </div>
            <div className="w-full justify-center">
                <LineGraph data={data} />
            </div>
            {renderViewAll()}
        </div>
    );
}

export default GLineWrapper;
