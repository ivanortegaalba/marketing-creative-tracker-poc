import React, { Fragment } from "react";
import { FileCard } from ".";

export default function FilesList({ creative, openFile, openFileInfo }) {
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
                            onClickInfo={() => openFileInfo(file)}
                        />
                    );
                })}
            </div>
        </Fragment>
    );
}
