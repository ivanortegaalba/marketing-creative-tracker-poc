import React from "react";
import { navigate } from "gatsby"
import {
    DocumentCard,
    DocumentCardActivity,
    DocumentCardTitle,
    DocumentCardDetails,
    DocumentCardImage,
    DocumentCardActions
} from "office-ui-fabric-react/lib/DocumentCard";
import { ImageFit } from "office-ui-fabric-react/lib/Image";

export default function CreativeCard(props) {
    const { creative } = props;
    const { name, author, preview } = creative;

    return (
        <DocumentCard
            className="CreativeCard"
            onClick={e => {
                e.stopPropagation();
                navigate("/creative")
            }}
        >
            <DocumentCardImage
                height={150}
                imageFit={ImageFit.cover}
                imageSrc={preview.src}
            />
            <DocumentCardDetails>
                <DocumentCardTitle title={name} shouldTruncate />
            </DocumentCardDetails>
            <DocumentCardActivity
                activity="Modified March 13, 2018"
                people={[
                    { name: author.name, profileImageSrc: author.avatar },
                    { name: author.name, profileImageSrc: author.avatar }
                ]}
            />
            <DocumentCardActions
                actions={[
                    {
                        iconProps: { iconName: "AddFavorite" },
                        onClick: () => console.log({ ...arguments }),
                        ariaLabel: "favorite action"
                    },
                    {
                        iconProps: { iconName: "Share" },
                        onClick: () => console.log({ ...arguments }),
                        ariaLabel: "share action"
                    },
                    {
                        iconProps: { iconName: "Download" },
                        onClick: () => console.log({ ...arguments }),
                        ariaLabel: "download action"
                    }
                ]}
                views={parseInt(Math.random() * 100, 10)}
            />
        </DocumentCard>
    );
}
