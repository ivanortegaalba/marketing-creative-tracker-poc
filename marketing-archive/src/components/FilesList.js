import React, { useState, Fragment } from "react";
import { FileCard, FileDetailsPanel } from ".";
import { FILE } from "../data";

const nFiles = new Array(parseInt(Math.random() * 20 + 1));

export default function FilesList(props) {
    const [openedFile, openFile] = useState(null);

    return (
        <Fragment>
            <div className="FilesList">
                {Array.from(nFiles).map((_, idx) => (
                    <FileCard
                        key={idx}
                        idx={idx}
                        className="FilesList-item"
                        file={FILE}
                        onClick={() => openFile(FILE)}
                    />
                ))}
            </div>
            <FileDetailsPanel
                onDismiss={() => openFile(null)}
                file={openedFile}
                isOpen={!!openedFile}
            />
        </Fragment>
    );
}
