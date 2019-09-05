import React, { useState } from "react";
import { FileCard, FileDetailsPanel } from ".";
import { FILE } from "../data";

export default function FilesList(props) {
    const nFiles = new Array(parseInt(Math.random() * 20 + 1));
    const [openedFile, openFile] = useState(null);

    return (
        <div className="FilesList">
            <FileDetailsPanel
                onDismiss={() => openFile(null)}
                file={openedFile}
                isOpen={!!openedFile}
            />
            {Array.from(nFiles).map((_, idx) => (
                <FileCard
                    key={idx}
                    idx={idx}
                    className="FilesList-item"
                    onClick={() => openFile(FILE)}
                />
            ))}
        </div>
    );
}
