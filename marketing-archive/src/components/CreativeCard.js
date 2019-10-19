import React from "react";
import { navigate } from "gatsby";
import { Image, ImageFit } from "office-ui-fabric-react/lib/Image";
import { Text } from "office-ui-fabric-react/lib/Text";
import { IconButton } from "office-ui-fabric-react/lib/Button";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import utils from "../utils";

export default function CreativeCard(props) {
    const { creative } = props;

    return (
        <div
            className="CreativeCard"
            onClick={e => {
                e.stopPropagation();
                navigate("/creative");
            }}
        >
            <Stack
                tokens={{
                    childrenGap: "8px"
                }}
            >
                <Image
                    className="CreativeCard-preview"
                    height={150}
                    fit={ImageFit.centerContain}
                    src={creative.preview.src}
                    width="100%"
                    alt="creative overview"
                />
                <Stack.Item verticalFill>
                    <Text className="CreativeCard-name" variant="mediumPlus">
                        {creative.name}
                    </Text>
                </Stack.Item>
                <Stack horizontal className="CreativeCard-footer">
                    <IconButton
                        iconProps={{ iconName: "FavoriteStar" }}
                        title="Favorite"
                        ariaLabel="Favorite"
                    />
                    <IconButton
                        iconProps={{ iconName: "Download" }}
                        title="Download"
                        ariaLabel="Download"
                    />
                    <Stack.Item grow={1}>
                        <span />
                    </Stack.Item>
                    <Stack.Item>
                        <Stack verticalAlign="center" verticalFill>
                            <Text title="Return on Investment (ROI)">
                                {utils.getRandomNumber(100)} %
                            </Text>
                        </Stack>
                    </Stack.Item>
                </Stack>
            </Stack>
        </div>
    );
}
