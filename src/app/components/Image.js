import React from 'react';
import { Link } from "@material-ui/core";

function Image(props) {
    const { url, link, isBlank } = props;

    const renderImage = () => (
        <img src={url} />
    )

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
