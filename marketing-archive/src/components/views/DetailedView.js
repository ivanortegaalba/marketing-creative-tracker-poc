import React, { useState } from "react";
import { Image, ImageFit } from "office-ui-fabric-react/lib/Image";
import {
    Pivot,
    PivotItem,
    PivotLinkSize,
    PivotLinkFormat
} from "office-ui-fabric-react/lib/Pivot";
import {
    DocumentCard,
    DocumentCardActivity,
    DocumentCardDetails,
    DocumentCardPreview,
    DocumentCardTitle,
    DocumentCardType,
    DocumentCardLocation
} from "office-ui-fabric-react/lib/DocumentCard";
import { Text } from "office-ui-fabric-react/lib/Text";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { getTheme } from "@uifabric/styling";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { FilesList, Metadata } from "..";
import { creative as getCreative } from "../../data";

export default function DetailedView() {
    const theme = getTheme();

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
                        <CreativeHistory creative={creative} />
                    </PivotItem>
                    <PivotItem itemKey="jira">
                        <span>Pivot #3</span>
                    </PivotItem>
                </Pivot>
            </div>
        </div>
    );
}

function CreativeHistory({ creative }) {
    const theme = getTheme();

    return (
        <Timeline lineColor={theme.palette.neutralLight}>
            <TimelineItem
                key={"el0"}
                dateText={"Today"}
                style={{ color: theme.palette.themePrimary }}
                dateInnerStyle={{
                    background: theme.semanticColors.primaryButtonBackground,
                    color: theme.semanticColors.primaryButtonText,
                }}
            >
                <Stack
                    tokens={{
                        childrenGap: "16px 0"
                    }}
                >
                    <Text variant="xLarge">New versions</Text>
                    {creative.files.slice(0, 3).map((file, idx) => {
                        return (
                            <DocumentCard type={DocumentCardType.compact}>
                                <DocumentCardPreview
                                    previewImages={[
                                        {
                                            name: file.name,
                                            previewImageSrc: file.preview.src,
                                            iconSrc: file.fileType.icon.small,
                                            width: 144
                                        }
                                    ]}
                                />
                                <DocumentCardDetails>
                                    <DocumentCardTitle
                                        title={file.name}
                                        shouldTruncate={true}
                                    />
                                    <DocumentCardLocation
                                        location={`Version ${file.version}`}
                                    />
                                    <DocumentCardActivity
                                        activity="Created a few minutes ago"
                                        people={[
                                            {
                                                profileImageSrc:
                                                    file.authors[0].avatar,
                                                name: file.authors[0].name
                                            }
                                        ]}
                                    />
                                </DocumentCardDetails>
                            </DocumentCard>
                        );
                    })}
                </Stack>
            </TimelineItem>
            <TimelineItem
                key={"el1"}
                dateText={"Yesterday"}
                style={{ color: theme.palette.themePrimary }}
                dateInnerStyle={{
                    background: theme.semanticColors.primaryButtonBackground,
                    color: theme.semanticColors.primaryButtonText
                }}
            >
                <Stack
                    tokens={{
                        childrenGap: "16px"
                    }}
                >
                    <Text variant="xLarge">New versions</Text>
                    {creative.files.slice(3, 6).map((file, idx) => {
                        return (
                            <DocumentCard
                                key={idx}
                                type={DocumentCardType.compact}
                            >
                                <DocumentCardPreview
                                    previewImages={[
                                        {
                                            name: file.name,
                                            previewImageSrc: file.preview.src,
                                            iconSrc: file.fileType.icon.small,
                                            width: 144
                                        }
                                    ]}
                                />
                                <DocumentCardDetails>
                                    <DocumentCardTitle
                                        title={file.name}
                                        shouldTruncate={true}
                                    />
                                    <DocumentCardLocation
                                        location={`Version ${file.version}`}
                                    />
                                    <DocumentCardActivity
                                        activity="Created a few minutes ago"
                                        people={[
                                            {
                                                profileImageSrc:
                                                    file.authors[0].avatar,
                                                name: file.authors[0].name
                                            }
                                        ]}
                                    />
                                </DocumentCardDetails>
                            </DocumentCard>
                        );
                    })}
                </Stack>
            </TimelineItem>
            <TimelineItem
                key={"el1"}
                dateText={"This week"}
                style={{ color: theme.palette.themePrimary }}
                dateInnerStyle={{
                    background: theme.semanticColors.primaryButtonBackground,
                    color: theme.semanticColors.primaryButtonText
                }}
            >
                <Stack
                    tokens={{
                        childrenGap: "16px"
                    }}
                >
                    <Text variant="xLarge">New versions</Text>
                    {creative.files.slice(6, 9).map((file, idx) => {
                        return (
                            <DocumentCard
                                key={idx}
                                type={DocumentCardType.compact}
                            >
                                <DocumentCardPreview
                                    previewImages={[
                                        {
                                            name: file.name,
                                            previewImageSrc: file.preview.src,
                                            iconSrc: file.fileType.icon.small,
                                            width: 144
                                        }
                                    ]}
                                />
                                <DocumentCardDetails>
                                    <DocumentCardTitle
                                        title={file.name}
                                        shouldTruncate={true}
                                    />
                                    <DocumentCardLocation
                                        location={`Version ${file.version}`}
                                    />
                                    <DocumentCardActivity
                                        activity="Created a few minutes ago"
                                        people={[
                                            {
                                                profileImageSrc:
                                                    file.authors[0].avatar,
                                                name: file.authors[0].name
                                            }
                                        ]}
                                    />
                                </DocumentCardDetails>
                            </DocumentCard>
                        );
                    })}
                </Stack>
            </TimelineItem>

        </Timeline>
    );
}
