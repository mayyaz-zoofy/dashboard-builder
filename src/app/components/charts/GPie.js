import React, { useEffect, useState } from "react";
import { Link, Typography } from "@material-ui/core";
import Filters from "../../utils/Filters";
import httpClient from "../../../httpClient";
import MiniLoading from "../../utils/MiniLoading";
import PieGraph from "../../utils/graphs/PieGraph";

function GPieWrapper(props) {
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
                        <Typography variant="h6">
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
        <div className="flex flex-col w-full">
            <div className="flex-auto">
                {renderTitle()}
            </div>
            <div className="flex w-full justify-end">
                {renderFilters()}
            </div>
            <div className="w-full justify-center">
                <PieGraph data={data} />
            </div>
            {renderViewAll()}
        </div>
    );
}

export default GPieWrapper;