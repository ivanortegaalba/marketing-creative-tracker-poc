import React from "react";
import { Text } from "office-ui-fabric-react/lib/Text";
import { Persona, PersonaSize } from "office-ui-fabric-react/lib/Persona";
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
                    <FileInfo file={file} creative={creative} />
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
                <TagList tags={file.tags} />
            </Stack.Item>
        </Stack>
    );
}
