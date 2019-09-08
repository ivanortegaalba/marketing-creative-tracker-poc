import utils from "./utils";

export const AUTHOR = {
    avatar: "/images/marta.jpeg",
    name: "Marta Colombas"
};

export const OTHER_AUTHOR = {
    avatar: "/images/ivan.jpeg",
    name: "Ivan Ortega"
};

export const COLLABORATORS = [AUTHOR, OTHER_AUTHOR];

export function author() {
    return utils.getRandomFromArray(COLLABORATORS);
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
    { id: "video", extension: "flv" },
    { id: "image", extension: "png" },
    { id: "pdf-document", extension: "pdf" },
    { id: "document", extension: "doc" },
    { id: "gif", extension: "gif" },
    { id: "audio", extension: "mp4" },
    { id: "executable", extension: "exe" }
];

export const ICON_SIZES = {
    small: 16,
    medium: 24,
    large: 48
};

export function fileType() {
    const fileType = utils.getRandomFromArray(FILE_TYPES);
    console.log(fileType);
    console.log(FILE_TYPES);
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

export function file() {
    const dimensions = {
        width: (utils.getRandomNumber(5) + 2) * 100,
        height: (utils.getRandomNumber(5) + 2) * 100
    };
    const type = fileType();

    return {
        name: `${utils.toSnakeCase(utils.getRandomName())}.${type.extension}`,
        fileType: type,
        size: `${utils.getRandomNumber(1000)} MB` ,
        preview: {
            src: `https://picsum.photos/${dimensions.width}/${dimensions.height}.jpg`
        },
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
        authors: COLLABORATORS,
        dimensions,
        dpi: "300"
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
    const files = Array.from(new Array(utils.getRandomNumber(20) + 1)).map(
        file
    );

    return {
        id: utils.getRandomNumber(),
        name: utils.toTitleCase(utils.getRandomName()),
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        type: creativeType(),
        project: project(),
        collection: utils.capitalize(utils.getRandomName()),
        authors: COLLABORATORS,
        preview: {
            src: files[0].preview.src
        },
        files
    };
}
