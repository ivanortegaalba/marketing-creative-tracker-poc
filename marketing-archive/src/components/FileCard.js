import React from "react";
import { ImageFit } from "office-ui-fabric-react/lib/Image";

import {
    DocumentCard,
    DocumentCardActivity,
    DocumentCardTitle,
    DocumentCardType,
    DocumentCardDetails,
    DocumentCardLocation,
    DocumentCardPreview,
    DocumentCardActions
} from "office-ui-fabric-react/lib/DocumentCard";

const PREVIEW_WIDTH = 300;
const PREVIEW_HEIGHT = 200;

export default function FileCard({ className, onClick, onClickInfo, file }) {

    return (
        <DocumentCard
            className={className}
            onClick={ev => {
                onClick(ev);
            }}
        >
            <DocumentCardPreview
                previewImages={[
                    {
                        name: file.name,
                        imageFit: ImageFit.cover,
                        previewImageSrc: file.preview.src,
                        width: PREVIEW_WIDTH,
                        height: PREVIEW_HEIGHT,
                        iconSrc: file.fileType.icon.medium
                    }
                ]}
            />
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

export function CompactFileCard({ file, onClick, onClickInfo }) {
    return (
        <DocumentCard type={DocumentCardType.compact} onClick={onClick}>
            <DocumentCardPreview
                previewImages={[
                    {
                        name: file.name,
                        previewImageSrc: file.preview.src,
                        iconSrc: file.fileType.icon.small,
                        width: 144,
                        height: 106,
                        imageFit: ImageFit.cover
                    }
                ]}
            />
            <DocumentCardDetails>
                <DocumentCardTitle title={file.name} shouldTruncate={true} />
                <DocumentCardLocation location={`Version ${file.version}`} />
                <DocumentCardActivity
                    activity="Created a few minutes ago"
                    people={[
                        {
                            profileImageSrc: file.authors[0].avatar,
                            name: file.authors[0].name
                        }
                    ]}
                />
            </DocumentCardDetails>
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
