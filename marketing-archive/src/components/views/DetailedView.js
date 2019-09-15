import React, { useState } from "react";
import { Image, ImageFit } from "office-ui-fabric-react/lib/Image";
import {
    Pivot,
    PivotItem,
    PivotLinkSize,
    PivotLinkFormat
} from "office-ui-fabric-react/lib/Pivot";
import { Text } from "office-ui-fabric-react/lib/Text";
import { FilesList, Metadata } from "..";
import { creative as getCreative } from "../../data";
import { getTheme } from "@uifabric/styling";

const theme = getTheme();

export default function DetailedView() {
    const creative = getCreative();
    const [activeTab, setActiveTab] = useState("files");

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
                    <PivotItem headerText="JIRA" itemKey="jira"></PivotItem>
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
                        <FilesList creative={creative} />
                    </PivotItem>
                    <PivotItem itemKey="history">
                        <span>Pivot #2</span>
                    </PivotItem>
                    <PivotItem itemKey="jira">
                        <span>Pivot #3</span>
                    </PivotItem>
                </Pivot>
            </div>
        </div>
    );
}
