import React from "react";
import {
    Pivot,
    PivotItem,
    PivotLinkSize,
    PivotLinkFormat
} from "office-ui-fabric-react/lib/Pivot";
import { Text } from "office-ui-fabric-react/lib/Text";
import { Persona, PersonaSize } from "office-ui-fabric-react/lib/Persona";
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
                            horizontalAlign="center"
                            tokens={{
                                childrenGap: "8px"
                            }}
                        >
                            <Persona
                                imageUrl={"/icons/image/24.svg"}
                                imageInitials="PNG"
                                text={`Banner_test_0.png`}
                                secondaryText="PNG file"
                                tertiaryText={file.dimensions}
                                size={PersonaSize.large}
                            />
                            <Text variant="mediumPlus">
                                <Link href="#">Version 1</Link>
                            </Text>
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
                                            MKT-250 Banner test for summer
                                            campaign
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
                        </PivotItem>
                        <PivotItem headerText="History">
                            {/* <ActivityItem {...item} key={item.key} className={classNames.exampleRoot} /> */}
                        </PivotItem>
                    </Pivot>
                </Stack>
            ) : null}
        </Panel>
    );
}
