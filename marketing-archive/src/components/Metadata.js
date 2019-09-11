import React from "react";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { Label } from "office-ui-fabric-react/lib/Label";
import { Text } from "office-ui-fabric-react/lib/Text";
import { Persona, PersonaSize, PersonaPresence } from "office-ui-fabric-react";
import { TagList } from ".";

export default function Metadata({ creative }) {
    return (
        <Stack
            tokens={{
                childrenGap: "m",
                padding: "m"
            }}
        >
            <Stack.Item>
                <Label>Created:</Label>
                <Persona
                    imageUrl={creative.authors[1].avatar}
                    text={creative.authors[1].name}
                    secondaryText={"Created at " + new Date().toLocaleString()}
                    size={PersonaSize.size40}
                    presence={PersonaPresence.none}
                />
            </Stack.Item>
            <Stack.Item>
                <Label>Last update:</Label>
                <Persona
                    imageUrl={creative.authors[0].avatar}
                    text={creative.authors[0].name}
                    secondaryText={"Updated at " + new Date().toLocaleString()}
                    size={PersonaSize.size40}
                    presence={PersonaPresence.none}
                />
            </Stack.Item>
            <Stack.Item>
                <Label>Collection:</Label>
                <Text>{creative.collection}</Text>
            </Stack.Item>
            <Stack.Item>
                <Label>Description:</Label>
                <Text>{creative.description}</Text>
            </Stack.Item>
            <Stack.Item>
                <Label>Sizes:</Label>
                <Text>
                    {creative.files
                        .map(
                            ({ dimensions }) =>
                                `${dimensions.width}x${dimensions.height}`
                        )
                        .join(", ")}
                </Text>
            </Stack.Item>
            <Stack.Item>
                <Label>Tags:</Label>
                <TagList tags={creative.tags} />
            </Stack.Item>
        </Stack>
    );
}
