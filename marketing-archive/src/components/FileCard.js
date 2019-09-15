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

const PREVIEW_WIDTH = 300;
const PREVIEW_HEIGHT = 200;

export default function FileCard(props) {
    const { onClick, onClickInfo, file } = props;
    const previewProps = {
        previewImages: [
            {
                name: file.name,
                imageFit: ImageFit.cover,
                previewImageSrc: file.preview.src,
                width: PREVIEW_WIDTH,
                height: PREVIEW_HEIGHT,
                iconSrc: file.fileType.icon.medium
            }
        ]
    };

    return (
        <DocumentCard
            className={props.className}
            onClick={ev => {
                onClick(ev);
            }}
        >
            <DocumentCardPreview {...previewProps} />
            <DocumentCardTitle title={file.name} />
            <DocumentCardActivity
                activity="Created a few minutes ago"
                people={file.authors.map(author => ({
                    name: author.name,
                    profileImageSrc: author.avatar
                }))}
            />
            <DocumentCardLocation
                location={`Version ${parseInt(Math.random() * 10)}`}
                locationHref="#"
                ariaLabel="Version"
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
                        iconProps: { iconName: "Info" },
                        ariaLabel: "Image Info",
                        onClick: e => {
                            e.stopPropagation();
                            onClickInfo(e);
                        }
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
