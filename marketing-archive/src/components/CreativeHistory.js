import React from "react";
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
import { ImageFit } from "office-ui-fabric-react/lib/Image";
import { getTheme } from "@uifabric/styling";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

export default function CreativeHistory({ creative, onClickFile }) {
    const theme = getTheme();

    return (
        <Timeline lineColor={theme.palette.neutralLight}>
            <TimelineItem
                key={"el0"}
                dateText={"Today"}
                style={{ color: theme.palette.themePrimary }}
                dateInnerStyle={{
                    background: theme.semanticColors.primaryButtonBackground,
                    color: theme.semanticColors.primaryButtonText
                }}
            >
                <Stack
                    tokens={{
                        childrenGap: "16px 0"
                    }}
                >
                    <Text variant="xLarge">New versions</Text>
                    {creative.files.slice(0, 3).map(file => {
                        return (
                            <CompactFileCard
                                key={file.name}
                                file={file}
                                onClick={() => onClickFile(file)}
                            />
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
                    {creative.files.slice(3, 5).map((file, idx) => {
                        return <CompactFileCard file={file} />;
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
                    {creative.files.slice(5, 9).map((file, idx) => {
                        return <CompactFileCard file={file} />;
                    })}
                </Stack>
            </TimelineItem>
        </Timeline>
    );
}

function CompactFileCard({ file, onClick }) {
    return (
        <DocumentCard type={DocumentCardType.compact} onClick={onClick}>
            <DocumentCardPreview
                previewImages={[
                    {
                        name: file.name,
                        previewImageSrc: file.preview.src,
                        iconSrc: file.fileType.icon.small,
                        width: 144,
                        height: 106,
                        imageFit: ImageFit.cover
                    }
                ]}
            />
            <DocumentCardDetails>
                <DocumentCardTitle title={file.name} shouldTruncate={true} />
                <DocumentCardLocation location={`Version ${file.version}`} />
                <DocumentCardActivity
                    activity="Created a few minutes ago"
                    people={[
                        {
                            profileImageSrc: file.authors[0].avatar,
                            name: file.authors[0].name
                        }
                    ]}
                />
            </DocumentCardDetails>
        </DocumentCard>
    );
}
