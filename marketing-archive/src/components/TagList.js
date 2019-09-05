import React from "react";
import { Stack, TagItem } from "office-ui-fabric-react";

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

export default function TagList(props) {
    return (
        <Stack horizontal wrap>
            {TAGS.map((tag, idx) => (
                <Tag key={idx}>{tag}</Tag>
            ))}
        </Stack>
    );
}

export function Tag(props) {
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

TagList.Item = Tag;
