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
        src: `https://source.unsplash.com/featured/?games,cartoon`
    }
};

export const FILE = {
    name: utils.getRandomName(),
    icon: "/icons/image/24.svg",
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
    author: AUTHOR,
    dimensions: "200x200",
    dpi: "300",
    creative: CREATIVE
};
