import React, { Fragment } from "react";
import {
    Pivot,
    PivotItem,
    PivotLinkSize,
    PivotLinkFormat
} from "office-ui-fabric-react/lib/Pivot";
import { Text } from "office-ui-fabric-react/lib/Text";
import { Persona, PersonaSize } from "office-ui-fabric-react/lib/Persona";
import { ActivityItem } from "office-ui-fabric-react/lib/ActivityItem";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import { Stack, Label, Link } from "office-ui-fabric-react";
import { TagList } from ".";

export default function FileDetailsPanel(props) {
    const { isOpen, onDismiss, file, creative } = props;

    return (
        <Panel
            isOpen={isOpen}
            onDismiss={onDismiss}
            type={PanelType.smallFixedFar}
            closeButtonAriaLabel="Close"
        >
            {isOpen ? (
                <Stack
                    tokens={{
                        padding: "8px",
                        childrenGap: "16px"
                    }}
                >
                    {" "}
                    <Stack.Item>
                        <Stack
                            tokens={{
                                childrenGap: "8px"
                            }}
                        >
                            <Stack.Item>
                                <Stack>
                                    <Text variant="large">{file.name}</Text>
                                    <Text variant="medium">{`${file.fileType.name}`}</Text>
                                    <Text variant="medium">{`${file.dimensions.width}x${file.dimensions.height}`}</Text>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item align="center">
                                <Text variant="mediumPlus">
                                    <Link href="#">Version 2</Link>
                                </Text>
                            </Stack.Item>
                        </Stack>
                    </Stack.Item>
                    <Pivot
                        styles={{
                            root: { display: "flex" },
                            link: {
                                flex: 1
                            },
                            linkIsSelected: {
                                flex: 1
                            },
                            linkContent: {
                                overflow: "scroll"
                            }
                        }}
                        linkFormat={PivotLinkFormat.links}
                        linkSize={PivotLinkSize.large}
                    >
                        <PivotItem headerText="Info">
                            <FileInfo file={file} creative={creative} />
                        </PivotItem>
                        <PivotItem headerText="History">
                            <History file={file} />
                        </PivotItem>
                    </Pivot>
                </Stack>
            ) : null}
        </Panel>
    );
}

function FileInfo({ file, creative }) {
    return (
        <Stack
            verticalAlign="space-between"
            verticalFill
            grow
            tokens={{
                padding: "8px",
                childrenGap: "16px"
            }}
        >
            <Stack.Item>
                <Label>Author</Label>
                <Persona
                    imageUrl={file.authors[0].avatar}
                    imageInitials={file.authors[0].name
                        .split(" ")
                        .map(s => s[0].toUpperCase())}
                    text={file.authors[0].name}
                    secondaryText={file.createdAt}
                    size={PersonaSize.size40}
                />
            </Stack.Item>
            <Stack.Item>
                <Label>Size</Label>
                <Text>{file.size}</Text>
            </Stack.Item>
            <Stack.Item>
                <Label>Extension</Label>
                <Text>{file.fileType.extension}</Text>
            </Stack.Item>
            <Stack.Item>
                <Label>JIRA ticket</Label>
                <Text>
                    <Link href="#">
                        MKT-250 Banner test for summer campaign
                    </Link>
                </Text>
            </Stack.Item>
            <Stack.Item>
                <Label>Creative Type</Label>
                <Text>{creative.type.name}</Text>
            </Stack.Item>
            <Stack.Item>
                <Label>Project</Label>
                <Text>{creative.project.name}</Text>
            </Stack.Item>
            <Stack.Item>
                <Label>Tags</Label>
                <TagList tags={file.tags}/>
            </Stack.Item>
        </Stack>
    );
}

function History({ file }) {
    return (
        <Stack
            verticalAlign="space-between"
            verticalFill
            grow
            tokens={{
                padding: "16px 8px",
                childrenGap: "16px"
            }}
        >
            <ActivityItem
                activityDescription={
                    <Fragment>
                        <Link>{file.authors[0].name}</Link>
                        <span> created the </span>
                        <Link>version 2</Link> of
                        <Link> {file.name}</Link>
                    </Fragment>
                }
                activityPersonas={[
                    { imageUrl: file.fileType.icon.small },
                    { imageUrl: file.authors[1].avatar }
                ]}
                comments={
                    <Fragment>
                        <span style={{ fontStyle: "italic" }}>
                            Upload the first stable version of the banner with
                            the product requirement
                        </span>
                    </Fragment>
                }
                timeStamp="23m ago"
            />
            <ActivityItem
                activityDescription={
                    <Fragment>
                        <Link>{file.authors[0].name}</Link>
                        <span> renamed </span>
                        <Link>first_upload.png</Link> to {" "}
                        <Link> {file.name}</Link>
                    </Fragment>
                }
                activityPersonas={[{ imageUrl: file.authors[0].avatar }]}
                timeStamp="1h ago"
            />
            <ActivityItem
                activityDescription={
                    <Fragment>
                        <Link>{file.authors[0].name}</Link>
                        <span> created the </span>
                        <Link>version 1</Link> of
                        <Link> first_upload.png</Link>
                    </Fragment>
                }
                activityPersonas={[
                    { imageUrl: file.fileType.icon.small },
                    { imageUrl: file.authors[0].avatar }
                ]}
                timeStamp="2 days ago"
            />
        </Stack>
    );
}
