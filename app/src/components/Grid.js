import React from 'react';

export default function Grid(props) {
    const { children } = props;

    return (
        <div className="Grid">
            {children}
        </div>
    );
}

