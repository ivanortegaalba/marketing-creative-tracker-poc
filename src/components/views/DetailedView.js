import React, { useState } from "react";
import { Image, ImageFit } from "office-ui-fabric-react/lib/Image";
import {
    Pivot,
    PivotItem,
    PivotLinkSize,
    PivotLinkFormat
} from "office-ui-fabric-react/lib/Pivot";
import { Text } from "office-ui-fabric-react/lib/Text";
import { getTheme } from "@uifabric/styling";
import {
    FilesList,
    Metadata,
    CreativeHistory,
    FileDetailsPanel,
    FileOverview,
    Analytics,
} from "..";
import { creative as getCreative } from "../../data";

export default function DetailedView() {
    const theme = getTheme();

    const creative = getCreative();
    const [activeTab, setActiveTab] = useState("files");
    const [openedFile, openFile] = useState(null);
    const [openedFileInfo, openFileInfo] = useState(null);

    return (
        <div className="DetailedView">
            <div className="DetailedView-header">
                <Text variant={"xLarge"} nowrap>
                    {creative.name}
                </Text>
            </div>
            <div className="DetailedView-preview">
                <Image
                    height={"100%"}
                    width={"100%"}
                    imageFit={ImageFit.center}
                    src="https://source.unsplash.com/featured/"
                    alt="Example implementation of the property image fit using the center value on an image larger than the frame."
                />
            </div>
            <div className="DetailedView-metadata">
                <Metadata creative={creative} />
            </div>
            <div className="DetailedView-tabs">
                <Pivot
                    styles={{
                        root: { display: "flex" },
                        link: {
                            flex: 1,
                            height: "74px"
                        },
                        linkIsSelected: {
                            flex: 1,
                            height: "74px"
                        },
                        linkContent: {
                            overflow: "scroll"
                        }
                    }}
                    linkFormat={PivotLinkFormat.links}
                    linkSize={PivotLinkSize.large}
                    selectedKey={activeTab}
                    onLinkClick={item => setActiveTab(item.props.itemKey)}
                    headersOnly={true}
                >
                    <PivotItem headerText="Files" itemKey="files"></PivotItem>
                    <PivotItem
                        headerText="History"
                        itemKey="history"
                    ></PivotItem>
                    <PivotItem
                        headerText="Analytics"
                        itemKey="analytics"
                    ></PivotItem>
                </Pivot>
            </div>
            <div
                className="DetailedView-folders"
                style={{
                    backgroundColor: theme.palette.neutralLighterAlt
                }}
            >
                <Pivot
                    selectedKey={activeTab}
                    styles={{ root: { display: "none" } }}
                >
                    <PivotItem itemKey="files">
                        <FilesList
                            creative={creative}
                            openFile={openFile}
                            openFileInfo={openFileInfo}
                        />
                    </PivotItem>
                    <PivotItem itemKey="history">
                        <CreativeHistory
                            creative={creative}
                            onClickFile={openFile}
                            onClickFileInfo={openFileInfo}
                        />
                    </PivotItem>
                    <PivotItem itemKey="analytics">
                        <Analytics></Analytics>
                    </PivotItem>
                </Pivot>
            </div>
            <FileDetailsPanel
                onDismiss={() => openFileInfo(null)}
                creative={creative}
                file={openedFileInfo}
                isOpen={!!openedFileInfo}
            />
            <FileOverview
                onDismiss={() => openFile(null)}
                creative={creative}
                file={openedFile}
                changeFile={openFile}
                isOpen={!!openedFile}
            />
        </div>
    );
}
