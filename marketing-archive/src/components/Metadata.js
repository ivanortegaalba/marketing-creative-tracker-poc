import React from "react";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { Label } from "office-ui-fabric-react/lib/Label";
import { Text } from "office-ui-fabric-react/lib/Text";
import { Persona, PersonaSize, PersonaPresence } from "office-ui-fabric-react";
import utils from "../utils";
import { TagList } from ".";

const CREATOR = {
    imageUrl:
        "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light",
    imageInitials: "MC",
    text: "Marta Colombas",
    secondaryText: "Created at " + new Date().toLocaleString()
};

const UPDATER = {
    imageUrl:
        "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light",
    imageInitials: "MC",
    text: "Marta Colombas",
    secondaryText: "Updated at " + new Date().toLocaleString()
};

const DESCRIPTION = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const COLLECTION = utils.capitalize(utils.getRandomName());

export default function Metadata(props) {
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
                    {...CREATOR}
                    size={PersonaSize.size40}
                    presence={PersonaPresence.none}
                />
            </Stack.Item>
            <Stack.Item>
                <Label>Last update:</Label>
                <Persona
                    {...UPDATER}
                    size={PersonaSize.size40}
                    presence={PersonaPresence.none}
                />
            </Stack.Item>
            <Stack.Item>
                <Label>Collection:</Label>
                <Text>{COLLECTION}</Text>
            </Stack.Item>
            <Stack.Item>
                <Label>Description:</Label>
                <Text>{DESCRIPTION}</Text>
            </Stack.Item>
            <Stack.Item>
                <Label>Sizes:</Label>
                <Text>200x200, 100x100, 340x300</Text>
            </Stack.Item>
            <Stack.Item>
                <Label>Tags:</Label>
                <TagList />
            </Stack.Item>
        </Stack>
    );
}
