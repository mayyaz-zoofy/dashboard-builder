import React from 'react';
import { Link } from '@material-ui/core';

export default function CustomLink(props) {
    const { label, url, isBlank, className } = props;

    return (
        <Link href={url} target={isBlank ? '_blank' : ''} className={className || ''}>
            {label}
        </Link>
    )
}
