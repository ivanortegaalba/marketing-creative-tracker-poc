import utils from "./utils";

export const AUTHOR = {
    avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light",
    name: "Marta Colombas"
};

export const CREATIVE = {
    id: 1,
    name: utils.toTitleCase(utils.getRandomName()),
    type: {
        name: "Banner"
    },
    project: {
        name: utils.toTitleCase(utils.getRandomName())
    },
    author: AUTHOR,
    preview: {
        src: `https://images.unsplash.com/photo-1567623047423-eebe1e011f70?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9`
    }
};

export const FILE = {
    name: utils.getRandomName(),
    icon: "/icons/image/24.svg",
    preview: { src: "https://images.unsplash.com/photo-1567623047423-eebe1e011f70?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" },
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
    author: AUTHOR,
    dimensions: "200x200",
    dpi: "300",
    creative: CREATIVE
};
