import React from "react";
import { Image, ImageFit } from "office-ui-fabric-react/lib/Image";
import {
    Pivot,
    PivotItem,
    PivotLinkSize,
    PivotLinkFormat
} from "office-ui-fabric-react/lib/Pivot";
import { Text } from "office-ui-fabric-react/lib/Text";
import { FilesList, Metadata } from "..";
import utils from "../../utils";

export default function DetailedView() {
    const CREATIVE = {
        id: 1,
        name: utils.toTitleCase(utils.getRandomName()),
        type: {
            name: "Banner"
        },
        project: {
            name: utils.toTitleCase(utils.getRandomName())
        },
        author: {
            name: "Marta Colombas",
            avatar:
                "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"
        },
        preview: {
            src: `https://images.unsplash.com/photo-1567623047423-eebe1e011f70?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9`
        }
    };

    return (
        <div className="DetailedView">
            <div className="DetailedView-header">
                <Text variant={"xxLarge"} nowrap>
                    {CREATIVE.name}
                </Text>
            </div>
            <div className="DetailedView-preview">
                <Image
                    height={"100%"}
                    width={"100%"}
                    imageFit={ImageFit.center}
                    src="https://source.unsplash.com/featured/"
                    alt="Example implementation of the property image fit using the center value on an image larger than the frame."
                />
            </div>
            <div className="DetailedView-metadata">
                <Metadata />
            </div>
            <div className="DetailedView-folders">
                <Pivot
                    styles={{
                        root: { display: "flex" },
                        link: {
                            flex: 1,
                            height: "74px"
                        },
                        linkIsSelected: {
                            flex: 1,
                            height: "74px"
                        },
                        linkContent: {
                            overflow: "scroll"
                        }
                    }}
                    linkFormat={PivotLinkFormat.links}
                    linkSize={PivotLinkSize.large}
                >
                    <PivotItem headerText="Files">
                        <FilesList />
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
