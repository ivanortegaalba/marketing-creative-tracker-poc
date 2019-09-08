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
import { creative as getCreative} from "../../data";

export default function DetailedView() {
    const creative = getCreative();

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
                    src="https://source.unsplash.com/featured/"
                    alt="Example implementation of the property image fit using the center value on an image larger than the frame."
                />
            </div>
            <div className="DetailedView-metadata">
                <Metadata creative={creative} />
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
                        <FilesList creative={creative} />
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
