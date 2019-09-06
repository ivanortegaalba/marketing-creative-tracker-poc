import React, { Fragment } from 'react';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { CreativeCard, Grid } from '..';

var adjectives = ["adamant", "adroit", "amatory", "animistic", "antic", "arcadian", "baleful", "bellicose", "bilious", "boorish", "calamitous", "caustic", "cerulean", "comely", "concomitant", "contumacious", "corpulent", "crapulous", "defamatory", "didactic", "dilatory", "dowdy", "efficacious", "effulgent", "egregious", "endemic", "equanimous", "execrable", "fastidious", "feckless", "fecund", "friable", "fulsome", "garrulous", "guileless", "gustatory", "heuristic", "histrionic", "hubristic", "incendiary", "insidious", "insolent", "intransigent", "inveterate", "invidious", "irksome", "jejune", "jocular", "judicious", "lachrymose", "limpid", "loquacious", "luminous", "mannered", "mendacious", "meretricious", "minatory", "mordant", "munificent", "nefarious", "noxious", "obtuse", "parsimonious", "pendulous", "pernicious", "pervasive", "petulant", "platitudinous", "precipitate", "propitious", "puckish", "querulous", "quiescent", "rebarbative", "recalcitant", "redolent", "rhadamanthine", "risible", "ruminative", "sagacious", "salubrious", "sartorial", "sclerotic", "serpentine", "spasmodic", "strident", "taciturn", "tenacious", "tremulous", "trenchant", "turbulent", "turgid", "ubiquitous", "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"];
var nouns = ["ninja", "chair", "pancake", "statue", "unicorn", "rainbows", "laser", "senor", "bunny", "captain", "nibblets", "cupcake", "carrot", "gnomes", "glitter", "potato", "salad", "toejam", "curtains", "beets", "toilet", "exorcism", "stick figures", "mermaid eggs", "sea barnacles", "dragons", "jellybeans", "snakes", "dolls", "bushes", "cookies", "apples", "ice cream", "ukulele", "kazoo", "banjo", "opera singer", "circus", "trampoline", "carousel", "carnival", "locomotive", "hot air balloon", "praying mantis", "animator", "artisan", "artist", "colorist", "inker", "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up artist", "model", "musician", "penciller", "producer", "scenographer", "set decorator", "silversmith", "teacher", "auto mechanic", "beader", "bobbin boy", "clerk of the chapel", "filling station attendant", "foreman", "maintenance engineering", "mechanic", "miller", "moldmaker", "panel beater", "patternmaker", "plant operator", "plumber", "sawfiler", "shop foreman", "soaper", "stationary engineer", "wheelwright", "woodworkers"];

const creatives = Array.from(new Array(30)).map((_, idx) => {
    return {
        id: idx,
        name: toTitleCase(`${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`),
        type: {
            name: 'Banner'
        },
        author: {
            name: 'Marta Colombas',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light'
        },
        preview: {
            src: `https://images.unsplash.com/photo-1567623047423-eebe1e011f70?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9`
        }
    };
});

const items = [
    {
        key: 'newItem',
        name: 'New',
        cacheKey: 'myCacheKey', // changing this key will invalidate this items cache
        iconProps: {
            iconName: 'Add'
        },
        ariaLabel: 'New',
        subMenuProps: {
            items: [
                {
                    key: 'newCollection',
                    name: 'Collection',
                    iconProps: {
                        iconName: 'AssetLibrary'
                    }
                },
                {
                    key: 'teamProject',
                    name: 'Project',
                    iconProps: {
                        iconName: 'NewTeamProject'
                    }
                },
                {
                    key: 'upload',
                    name: 'Upload file',
                    iconProps: {
                        iconName: 'Upload'
                    },
                },
                {
                    key: 'upload',
                    name: 'Upload folder',
                    iconProps: {
                        iconName: 'BulkUpload'
                    },
                },
            ]
        }
    }
];

const overflowItems = [];

const farItems = [
    {
        key: 'sort',
        name: 'Sort',
        ariaLabel: 'Sort',
        iconProps: {
            iconName: 'SortLines'
        },
        onClick: () => console.log('Sort')
    },
    {
        key: 'tile',
        name: 'Grid view',
        ariaLabel: 'Grid view',
        iconProps: {
            iconName: 'Tiles'
        },
        iconOnly: true,
        onClick: () => console.log('Tiles')
    },
    {
        key: 'help',
        name: 'Help',
        ariaLabel: 'Help',
        iconProps: {
            iconName: 'Info'
        },
        iconOnly: true,
        onClick: () => console.log('Help clicked!')
    }
]

export default function ListView() {
    return (
        <Fragment>
            <CommandBar
                items={items}
                overflowItems={overflowItems}
                overflowButtonProps={{ ariaLabel: 'More' }}
                farItems={farItems}
                ariaLabel={'Use left and right arrow keys to navigate between commands'}
            />

            <Grid>
                {
                    creatives.map(creative => (
                        <CreativeCard key={creative.id} creative={creative} />
                    ))
                }
            </Grid>
        </Fragment>
    );
}


function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}