import React from "react";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { Label } from "office-ui-fabric-react/lib/Label";
import { Text } from "office-ui-fabric-react/lib/Text";
import {
    Persona,
    PersonaSize,
    PersonaPresence,
    TagItem
} from "office-ui-fabric-react";
import utils from "../utils";

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

const TAGS = [
    "adamant",
    "adroit",
    "amatory",
    "animistic",
    "antic",
    "arcadian",
    "baleful",
    "bellicose",
    "bilious",
    "boorish",
    "calamitous",
    "caustic",
    "cerulean",
    "comely",
    "concomitant",
    "contumacious",
    "corpulent",
    "crapulous",
    "defamatory",
    "didactic",
    "dilatory",
    "dowdy",
    "efficacious",
    "effulgent",
    "egregious",
    "endemic",
    "equanimous",
    "execrable",
    "fastidious",
    "feckless",
    "fecund",
    "friable",
    "fulsome",
    "garrulous",
    "guileless",
    "gustatory",
    "heuristic",
    "histrionic",
    "hubristic",
    "incendiary",
    "insidious",
    "insolent",
    "intransigent",
    "inveterate",
    "invidious",
    "irksome",
    "jejune",
    "jocular",
    "judicious",
    "lachrymose",
    "limpid",
    "loquacious",
    "luminous",
    "mannered",
    "mendacious",
    "meretricious",
    "minatory",
    "mordant",
    "munificent",
    "nefarious",
    "noxious",
    "obtuse",
    "parsimonious",
    "pendulous",
    "pernicious",
    "pervasive",
    "petulant",
    "platitudinous",
    "precipitate",
    "propitious",
    "puckish",
    "querulous",
    "quiescent",
    "rebarbative",
    "recalcitant",
    "redolent",
    "rhadamanthine",
    "risible",
    "ruminative",
    "sagacious",
    "salubrious",
    "sartorial",
    "sclerotic",
    "serpentine",
    "spasmodic",
    "strident",
    "taciturn",
    "tenacious",
    "tremulous",
    "trenchant",
    "turbulent",
    "turgid",
    "ubiquitous",
    "uxorious",
    "verdant",
    "voluble",
    "voracious",
    "wheedling",
    "withering",
    "zealous"
];

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
                <Stack horizontal wrap>
                    {TAGS.map(tag => (
                        <Tag>{tag}</Tag>
                    ))}
                </Stack>
            </Stack.Item>
        </Stack>
    );
}

function Tag(props) {
    return (
        <TagItem
            styles={{
                close: { display: "none" }
            }}
        >
            {props.children}
        </TagItem>
    );
}
