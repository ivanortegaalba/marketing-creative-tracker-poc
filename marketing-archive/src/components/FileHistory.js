import React, { Fragment } from "react";
import { ActivityItem } from "office-ui-fabric-react/lib/ActivityItem";
import { Link } from "office-ui-fabric-react";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { getTheme } from "@uifabric/styling";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { CompactFileCard } from ".";


export default function FileHistory({ file, onClickFile, onClickFileInfo }) {
    const theme = getTheme();

    return (
        <div>
            <Timeline lineColor={theme.palette.neutralLight}>
                {file.history.reverse().map(entry => {
                    return (
                        <TimelineItem
                            key={"el0"}
                            dateText={`Version ${entry.version}`}
                            style={{ color: theme.palette.themePrimary }}
                            dateInnerStyle={{
                                background:
                                    theme.semanticColors
                                        .primaryButtonBackground,
                                color: theme.semanticColors.primaryButtonText,
                                display:
                                    entry.type === "version"
                                        ? undefined
                                        : "none"
                            }}
                            dateStyle={{
                                display:
                                    entry.type === "version"
                                        ? undefined
                                        : "none"
                            }}
                        >
                            <Stack
                                tokens={{
                                    childrenGap: "16px 0"
                                }}
                            >
                                <ActivityItem
                                    styles={{
                                        root: {
                                            color: theme.semanticColors.bodyText
                                        }
                                    }}
                                    activityDescription={
                                        <Fragment>
                                            <Link>{`${entry.author.name}`}</Link>
                                            <span>{` ${entry.title}`}</span>
                                        </Fragment>
                                    }
                                    activityPersonas={[
                                        { imageUrl: entry.author.avatar }
                                    ]}
                                    comments={
                                        entry.versionNotes && (
                                            <span
                                                style={{ fontStyle: "italic" }}
                                            >
                                                {entry.versionNotes}
                                            </span>
                                        )
                                    }
                                    timeStamp={entry.createdAt}
                                />
                                {entry.type === "version" && (
                                    <CompactFileCard
                                        key={file.name}
                                        file={file}
                                        hideActions
                                    />
                                )}
                            </Stack>
                        </TimelineItem>
                    );
                })}
            </Timeline>
        </div>
    );
}