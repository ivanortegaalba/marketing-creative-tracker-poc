import React, { useState, Fragment } from "react";
import { FileCard, FileDetailsPanel, FileOverview } from ".";

export default function FilesList({ creative }) {
    const [openedFile, openFile] = useState(null);

    return (
        <Fragment>
            <div className="FilesList">
                {creative.files.map((file, idx) => {
                    return (
                        <FileCard
                            key={idx}
                            idx={idx}
                            className="FilesList-item"
                            file={file}
                            onClick={() => openFile(file)}
                        />
                    );
                })}
            </div>
            <FileDetailsPanel
                onDismiss={() => openFile(null)}
                creative={creative}
                file={openedFile}
                isOpen={false}
            />
            <FileOverview
                onDismiss={() => openFile(null)}
                creative={creative}
                file={openedFile}
                changeFile={openFile}
                isOpen={!!openedFile}
            />
        </Fragment>
    );
}
