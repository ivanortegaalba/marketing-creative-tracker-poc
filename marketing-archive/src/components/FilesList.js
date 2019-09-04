import React from "react";
import { FileCard } from ".";

export default function FilesList(props) {
    const nFiles = new Array(parseInt(Math.random() * 20));

    return (
        <div className="FilesList">
            {Array.from(nFiles).map((_, idx) => (
                <FileCard key={idx} idx={idx} className="FilesList-item" />
            ))}
        </div>
    );
}
