import React from "react";
import { Text } from "office-ui-fabric-react/lib/Text";
import { Persona, PersonaSize } from "office-ui-fabric-react/lib/Persona";
import { Label, Link } from "office-ui-fabric-react";
import { TagList } from ".";
import { Stack } from "office-ui-fabric-react/lib/Stack";

export default function FileInfo({ file, creative }) {
    return (
        <Stack
            styles={{
                root: {
                    overflow: "scroll",
                    height: "100%"
                }
            }}
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
                <Label>Current version</Label>
                <Text>{file.version}</Text>
            </Stack.Item>
            <Stack.Item>
                <Label>Size</Label>
                <Text variant="medium">{`${file.dimensions.width}x${file.dimensions.height}`}</Text>
            </Stack.Item>
            <Stack.Item>
                <Label>File size</Label>
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
