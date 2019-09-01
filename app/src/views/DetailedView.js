import React from "react";
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import { Image, ImageFit } from "office-ui-fabric-react/lib/Image";
import {
    Pivot,
    PivotItem,
    PivotLinkSize,
    PivotLinkFormat
} from "office-ui-fabric-react/lib/Pivot";
import { Text } from "office-ui-fabric-react/lib/Text";
import { FilesGrid, Metadata } from "../components";

var adjectives = [
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
var nouns = [
    "ninja",
    "chair",
    "pancake",
    "statue",
    "unicorn",
    "rainbows",
    "laser",
    "senor",
    "bunny",
    "captain",
    "nibblets",
    "cupcake",
    "carrot",
    "gnomes",
    "glitter",
    "potato",
    "salad",
    "toejam",
    "curtains",
    "beets",
    "toilet",
    "exorcism",
    "stick figures",
    "mermaid eggs",
    "sea barnacles",
    "dragons",
    "jellybeans",
    "snakes",
    "dolls",
    "bushes",
    "cookies",
    "apples",
    "ice cream",
    "ukulele",
    "kazoo",
    "banjo",
    "opera singer",
    "circus",
    "trampoline",
    "carousel",
    "carnival",
    "locomotive",
    "hot air balloon",
    "praying mantis",
    "animator",
    "artisan",
    "artist",
    "colorist",
    "inker",
    "coppersmith",
    "director",
    "designer",
    "flatter",
    "stylist",
    "leadman",
    "limner",
    "make-up artist",
    "model",
    "musician",
    "penciller",
    "producer",
    "scenographer",
    "set decorator",
    "silversmith",
    "teacher",
    "auto mechanic",
    "beader",
    "bobbin boy",
    "clerk of the chapel",
    "filling station attendant",
    "foreman",
    "maintenance engineering",
    "mechanic",
    "miller",
    "moldmaker",
    "panel beater",
    "patternmaker",
    "plant operator",
    "plumber",
    "sawfiler",
    "shop foreman",
    "soaper",
    "stationary engineer",
    "wheelwright",
    "woodworkers"
];

const creative = {
    id: 1,
    name: toTitleCase(
        `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${
            nouns[Math.floor(Math.random() * nouns.length)]
        }`
    ),
    type: {
        name: "Banner"
    },
    author: {
        name: "Marta Colombas",
        avatar:
            "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"
    },
    preview: {
        src: `https://source.unsplash.com/featured/?games,cartoon`
    }
};

const items = [
    {
        key: "1",
        name: "Resources",
        cacheKey: "myCacheKey1", // changing this key will invalidate this items cache
        iconProps: {
            iconName: "FabricAssetLibrary"
        },
        ariaLabel: "Resources"
    },
    {
        key: "2",
        name: "Pending to review",
        cacheKey: "myCacheKey1", // changing this key will invalidate this items cache
        iconProps: {
            iconName: "ReviewRequestSolid"
        },
        ariaLabel: "Pending to review"
    },
    {
        key: "3",
        name: "Final",
        cacheKey: "myCacheKey1", // changing this key will invalidate this items cache
        iconProps: {
            iconName: "CheckboxComposite"
        },
        ariaLabel: "Pending to review"
    },
    {
        key: "4",
        name: "New Folder",
        cacheKey: "myCacheKey1", // changing this key will invalidate this items cache
        iconProps: {
            iconName: "FabricNewFolder"
        },
        ariaLabel: "New"
    }
];

const overflowItems = [];

const farItems = [
    {
        key: "sort",
        name: "Sort",
        ariaLabel: "Sort",
        iconProps: {
            iconName: "SortLines"
        },
        onClick: () => console.log("Sort")
    },
    {
        key: "tile",
        name: "Grid view",
        ariaLabel: "Grid view",
        iconProps: {
            iconName: "Tiles"
        },
        iconOnly: true,
        onClick: () => console.log("Tiles")
    },
    {
        key: "help",
        name: "Help",
        ariaLabel: "Help",
        iconProps: {
            iconName: "Info"
        },
        iconOnly: true,
        onClick: () => console.log("Help clicked!")
    }
];

export default function DetailedView() {
    return (
        <div className="DetailedView">
            <div className="DetailedView-header">
                <Text variant={"xxLarge"} nowrap>
                    {creative.name}
                </Text>
            </div>
            <div className="DetailedView-preview">
                <Image
                    height={"100%"}
                    width={"100%"}
                    imageFit={ImageFit.center}
                    src="http://placehold.it/800x300"
                    alt="Example implementation of the property image fit using the center value on an image larger than the frame."
                />
            </div>
            <div className="DetailedView-metadata">
                <Metadata />
            </div>
            <div className="DetailedView-folders">
                <Pivot
                    linkFormat={PivotLinkFormat.tabs}
                    linkSize={PivotLinkSize.large}
                >
                    <PivotItem headerText="Files">
                        <CommandBar
                            items={items}
                            overflowItems={overflowItems}
                            overflowButtonProps={{ ariaLabel: "More" }}
                            farItems={farItems}
                            ariaLabel={
                                "Use left and right arrow keys to navigate between commands"
                            }
                        />
                        <FilesGrid />
                    </PivotItem>
                    <PivotItem headerText="History">
                        <span>Pivot #2</span>
                    </PivotItem>
                    <PivotItem headerText="JIRA">
                        <span>Pivot #3</span>
                    </PivotItem>
                </Pivot>
            </div>
        </div>
    );
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}