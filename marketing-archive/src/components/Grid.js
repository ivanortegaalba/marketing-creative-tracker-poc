import React from "react";
import { getTheme } from "@uifabric/styling";

const theme = getTheme();

export default function Grid(props) {
    const { children } = props;

    return (
        <div
            className="Grid"
            style={{
                backgroundColor: theme.palette.neutralLighter
            }}
        >
            {children}
        </div>
    );
}
