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
import { Icon, IconType } from "office-ui-fabric-react/lib/Icon";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import { Stack, Label, Link } from "office-ui-fabric-react";
import { TagList } from ".";

export default function FileDetailsPanel(props) {
    const { isOpen, onDismiss, file } = props;

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
                                    <Text variant="large">
                                        Banner_test_0.png
                                    </Text>
                                    <Text variant="medium">PNG File</Text>
                                    <Text variant="medium">200x200</Text>
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
                            <FileInfo file={file} />
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

function FileInfo({ file }) {
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
                    imageUrl={file.author.avatar}
                    imageInitials={file.author.name
                        .split(" ")
                        .map(s => s[0].toUpperCase())}
                    text={file.author.name}
                    secondaryText={file.createdAt}
                    size={PersonaSize.size40}
                />
            </Stack.Item>
            <Stack.Item>
                <Label>Size</Label>
                <Text>500 MB</Text>
            </Stack.Item>
            <Stack.Item>
                <Label>Extension</Label>
                <Text>png</Text>
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
                <Text>{file.creative.type.name}</Text>
            </Stack.Item>
            <Stack.Item>
                <Label>Project</Label>
                <Text>{file.creative.project.name}</Text>
            </Stack.Item>
            <Stack.Item>
                <Label>Tags</Label>
                <TagList />
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
                padding: "8px",
                childrenGap: "16px"
            }}
        >
            <ActivityItem
                activityDescription={
                    <Fragment>
                        <Link>Marta Colombas</Link>
                        <span> created the </span>
                        <Link>version 2</Link> of
                        <Link> Banner_test_0.png</Link>
                    </Fragment>
                }
                // activityIcon={
                //     <Icon
                //         iconType={IconType.image}
                //         imageProps={{
                //             src: '/icons/image/24.svg',
                //         }}
                //     />
                // }
                activityPersonas={[
                    { imageUrl: "/icons/image/24.svg" },
                    { imageUrl: file.author.avatar },
                ]}
                comments={
                    <Fragment>
                        <span style={{ fontStyle: "italic" }}>
                            Upload the first stable version of the banner in
                            200x200
                        </span>
                    </Fragment>
                }
                timeStamp="23m ago"
            />
            <ActivityItem
                activityDescription={
                    <Fragment>
                        <Link>Ivan Ortega</Link>
                        <span> renamed </span>
                        <Link>first_upload.png</Link> to
                        <Link> Banner_test_0.png</Link>
                    </Fragment>
                }
                activityPersonas={[{ imageUrl: file.author.avatar }]}
                timeStamp="1h ago"
            />
            <ActivityItem
                activityDescription={
                    <Fragment>
                        <Link>Ivan Ortega</Link>
                        <span> created the </span>
                        <Link>version 1</Link> of
                        <Link> first_upload.png</Link>
                    </Fragment>
                }
                activityPersonas={[
                    { imageUrl: "/icons/image/24.svg" },
                    { imageUrl: file.author.avatar },
                ]}
                timeStamp="2 days ago"
            />
        </Stack>
    );
}
