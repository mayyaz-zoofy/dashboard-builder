import React, { useEffect, useState } from "react";
import httpClient from "../../../../httpClient";
import { Link } from "@material-ui/core";
import CustomTable from "../../../utils/table/Table";
import Badge from "../../../components/Badge";
import Filters from "../../../utils/Filters";

export const convertToLink = (value, url) => <Link to={url}>{value}</Link>;

function TableWrapper(props) {
    const { endpoint, filters, columns, viewAll } = props;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    let filterVals;

    useEffect(() => {
        if (endpoint) {
            const updatedFilters = {};
            filters.map(filter => {
                if (filter.defaultValue) {
                    updatedFilters[filter.slug] = filter.defaultValue;
                }
            });
            filterVals = updatedFilters;
            fetchTableData();
        }
    }, []);

    const fetchTableData = () => {
        setLoading(true);
        httpClient(endpoint, filterVals)
            .then(res => {
                setData(res.data);
                setLoading(false);
            });
    }

    const handleFilterChange = (updatedFilters) => {
        filterVals = updatedFilters;
        fetchTableData();
    };

    const renderColumnByType = (item, column) => {
        if (item[column.key]) {
            if (column.type) {
                if (column.type === 'link') {
                    return convertToLink(item[column.key], '#');
                }
                if (column.type === 'badge') {
                    return <Badge label={item[column.key]} />;
                }
            }
            return item[column.key];
        }
    }

    const formatData = () => {
        return data.map(item => {
            let row = {};
            columns.map(column => {
                row[column.key] = renderColumnByType(item, column);
            });
            return row;
        });
    };

    const caption = () => {
        if (viewAll) {
            return (
                <Link href={viewAll.link} target={viewAll.newTab ? '_blank' : '_self'} className="float-right">
                    {viewAll.label}
                </Link>
            )
        }
        return '';
    };

    const renderFilters = () => {
        return <Filters filters={filters} handleChange={handleFilterChange} />
    };

    return (
        <div className="w-full">
            <div className="flex justify-end w-full">
                {renderFilters()}
            </div>
            <CustomTable data={formatData()} headers={columns} caption={caption()} />
        </div>
    )
}

export default TableWrapper;
