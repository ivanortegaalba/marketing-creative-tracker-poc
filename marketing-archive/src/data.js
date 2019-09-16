import utils from "./utils";
import { withPrefix } from "gatsby";

export const AUTHOR = {
    avatar: withPrefix("/images/marta.jpeg"),
    name: "Marta Colombas"
};

export const OTHER_AUTHOR = {
    avatar: withPrefix("/images/ivan.jpeg"),
    name: "Ivan Ortega"
};

export const TAGS = [
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

export const COLLABORATORS = [AUTHOR, OTHER_AUTHOR];

export function author() {
    return utils.getRandomFromArray(COLLABORATORS);
}

export function currentUser() {
    return OTHER_AUTHOR;
}

export function creativeType() {
    const CREATIVE_TYPES = [
        "Banner",
        "Playable",
        "Video",
        "Endcard",
        "Store",
        "Icon"
    ];
    const creativeType = utils.getRandomFromArray(CREATIVE_TYPES);

    return {
        id: creativeType,
        name: creativeType
    };
}

export const FILE_TYPES = [
    // { id: "video", extension: "flv" },
    { id: "image", extension: "png" },
    // { id: "pdf-document", extension: "pdf" },
    // { id: "document", extension: "doc" },
    // { id: "gif", extension: "gif" },
    // { id: "audio", extension: "mp4" },
    // { id: "executable", extension: "exe" }
];

export const ICON_SIZES = {
    small: 16,
    medium: 24,
    large: 48
};

export function fileType() {
    const fileType = utils.getRandomFromArray(FILE_TYPES);

    return {
        id: fileType.id,
        name: utils.toTitleCase(fileType.id.replace("-", " ")),
        icon: Object.keys(ICON_SIZES).reduce(
            (acc, size) => ({
                ...acc,
                [size]: `/icons/${fileType.id}/${ICON_SIZES[size]}.svg`
            }),
            {}
        ),
        extension: fileType.extension
    };
}

function history(file, nEntries = 1) {
    const TYPE = {
        VERSION: "version",
        RENAMED: "renamed",
        COMMENT: "comment",
        REQUEST_CHANGES: "requestChanges",
        APPROVED: "approved",
    }

    let versionCounter = 0;

    return [
        historyEntry(TYPE.VERSION),
        ...Array.from(new Array(nEntries)).map(() => {
            const entryType = utils.getRandomFromObject(TYPE);

            return historyEntry(entryType);
        })
    ];

    function historyEntry(type) {
        const baseEntry = {
            type,
            author: author(),
            createdAt: createdAt()
        };
        switch (type) {
            case TYPE.VERSION:
                return {
                    ...baseEntry,
                    version: ++versionCounter,
                    versionNotes: "I uploaded a new version with the changes",
                    get title() {
                        return `created the version ${versionCounter}`;
                    }
                };
            case TYPE.RENAMED:
                return {
                    ...baseEntry,
                    get title() {
                        return `${
                            baseEntry.author.name
                        } renamed the file`;
                    }
                };
            case TYPE.COMMENT:
                return {
                    ...baseEntry,
                    get title() {
                        return `added a new comment`;
                    }
                };
            case TYPE.REQUEST_CHANGES:
                return {
                    ...baseEntry,
                    get title() {
                        return `requested changes`;
                    }
                };
            case TYPE.APPROVED:
                return {
                    ...baseEntry,
                    get title() {
                        return `approved changes`;
                    }
                };
        }

        throw Error(type)
    }
}

export function file() {
    const dimensions = {
        width: (utils.getRandomNumber(5) + 2) * 100,
        height: (utils.getRandomNumber(5) + 2) * 100
    };
    const type = fileType();

    const mock = {
        name: `${utils.toSnakeCase(utils.getRandomName())}.${type.extension}`,
        fileType: type,
        version: utils.getRandomNumber(10) + 1,
        size: `${utils.getRandomNumber(1000)} MB`,
        preview: {
            src: `https://picsum.photos/${dimensions.width}/${dimensions.height}.jpg`
        },
        createdAt: createdAt(),
        updatedAt: updatedAt(),
        authors: COLLABORATORS,
        dimensions,
        dpi: "300",
        tags: tags()
    };

    return {
        ...mock,
        history: history(mock, 10)
    };
}

export function project() {
    const projectName = utils.getRandomName();
    return {
        id: projectName,
        name: projectName,
        company: utils.toTitleCase(utils.getRandomName())
    };
}

export function creative() {
    const files = Array.from(new Array(utils.getRandomNumber(10) + 10)).map(
        file
    );

    return {
        id: utils.getRandomNumber(),
        name: utils.toTitleCase(utils.getRandomName()),
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        createdAt: createdAt(),
        updatedAt: updatedAt(),
        type: creativeType(),
        project: project(),
        collection: utils.capitalize(utils.getRandomName()),
        authors: COLLABORATORS,
        preview: {
            src: files[0].preview.src
        },
        files,
        tags: tags()
    };
}

export function createdAt() {
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    };

    return new Date().toLocaleDateString("en-EN", options);
}

export function updatedAt() {
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    };

    return new Date().toLocaleDateString("en-EN", options);
}

export function tags() {
    const nTags = utils.getRandomNumber(15);

    return Array.from(
        new Set(
            Array.from(new Array(nTags)).map(
                _ => TAGS[utils.getRandomNumber(TAGS.length)]
            )
        )
    );
}

export function image(width, height) {
    if (width && height) {
        return `https://picsum.photos/${width}/${height}.jpg`;
    }

    return `https://picsum.photos/`;
}
