import React from "react";
import { ImageFit } from "office-ui-fabric-react/lib/Image";

import {
    DocumentCard,
    DocumentCardActivity,
    DocumentCardTitle,
    DocumentCardLocation,
    DocumentCardPreview,
    DocumentCardActions
} from "office-ui-fabric-react/lib/DocumentCard";

export default function FileCard(props) {
    const previewProps = {
        previewImages: [
            {
                name: "Revenue stream proposal fiscal year 2016 version02.pptx",
                imageFit: ImageFit.cover,
                previewImageSrc:
                    "https://source.unsplash.com/featured/?random=" +
                    Math.random(),
                width: 300,
                height: 200,
                iconSrc: `/icons/image/24.svg`,
            }
        ]
    };

    return (
        <DocumentCard className={props.className}>
            <DocumentCardPreview {...previewProps} />
            <DocumentCardTitle
                title={`Banner_test_${props.idx}.png`}
                shouldTruncate={true}
            />
            <DocumentCardActivity
                activity="Created a few minutes ago"
                people={[
                    {
                        name: "Marta Colombas",
                        profileImageSrc:
                            "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"
                    },
                    {
                        name: "Ivan Ortega",
                        profileImageSrc:
                            "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"
                    }
                ]}
            />
            <DocumentCardLocation
                location={`Version ${parseInt(Math.random() * 10) }`}
                locationHref="#"
                ariaLabel="Location, Marketing Documents"
            />
            <DocumentCardActions
                actions={[
                    {
                        iconProps: { iconName: "Download" },
                        primary: true,
                        ariaLabel: "donwload"
                    },
                    {
                        iconProps: { iconName: "Share" },

                        ariaLabel: "share action"
                    },
                    {
                        menuIconProps: {
                            iconName: "MoreVertical"
                        },
                        menuProps: {
                            items: [
                                {
                                    key: "calendarEvent",
                                    text: "Move to",
                                    iconProps: { iconName: "MoveToFolder" }
                                },
                                {
                                    key: "copy",
                                    text: "Copy to",
                                    iconProps: { iconName: "Copy" }
                                },
                                {
                                    key: "delete",
                                    text: "Delete",
                                    iconProps: { iconName: "Delete" }
                                }
                            ]
                        },
                        ariaLabel: "download action"
                    }
                ]}
            />
        </DocumentCard>
    );
}
