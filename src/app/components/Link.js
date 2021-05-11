import React, { useEffect, useState } from "react";
import { Link } from '@material-ui/core';
import { conditionalPriorityRendering } from "../utils/helpers";

export default function CustomLink(props) {
    const { label, url, isBlank, className, current, priority, setCurrent } = props;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const condition = conditionalPriorityRendering(current, priority);
        if (loading && condition) {
            setLoading(false);
            setCurrent(priority || 1);
        }
    });

    if (loading) {
        return <div className="w-full" />;
    }

    return (
        <Link href={url} target={isBlank ? '_blank' : ''} className={className || ''}>
            {label}
        </Link>
    )
}
