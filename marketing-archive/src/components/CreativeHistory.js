import React from "react";
import { Text } from "office-ui-fabric-react/lib/Text";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { getTheme } from "@uifabric/styling";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { CompactFileCard } from ".";

export default function CreativeHistory({
    creative,
    onClickFile,
    onClickFileInfo
}) {
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
                                onClickInfo={() => onClickFileInfo(file)}
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
                key={"el2"}
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
