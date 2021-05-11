import React, { useEffect, useState } from "react";
import { Link } from "@material-ui/core";
import { conditionalPriorityRendering } from "../utils/helpers";

function Image(props) {
    const { url, link, isBlank, current, priority, setCurrent } = props;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const condition = conditionalPriorityRendering(current, priority);
        if (loading && condition) {
            setLoading(false);
            setCurrent(priority || 1);
        }
    });

    const renderImage = () => (
        <img src={url} />
    )

    if (loading) {
        return <div className="w-full" />;
    }

    if (link) {
        return (
            <div className="flex w-full">
                <Link href={link} target={isBlank ? '_blank' : ''}>
                    {renderImage()}
                </Link>
            </div>
        )
    }

    return (
        <div className="flex w-full">
            {renderImage()}
        </div>
    )
}

export default Image;
