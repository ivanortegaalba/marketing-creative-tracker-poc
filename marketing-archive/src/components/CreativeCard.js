import React from "react";
import { navigate, withPrefix } from "gatsby";
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

    return (
        <DocumentCard
            className="CreativeCard"
            onClick={e => {
                e.stopPropagation();
                navigate("/creative");
            }}
        >
            <DocumentCardImage
                height={150}
                imageFit={ImageFit.cover}
                imageSrc={creative.preview.src}
            />
            <DocumentCardDetails>
                <DocumentCardTitle title={creative.name} shouldTruncate />
            </DocumentCardDetails>
            <DocumentCardActivity
                activity={creative.updatedAt}
                people={creative.authors.map(author => {
                    return {
                        name: author.name,
                        profileImageSrc: withPrefix(author.avatar)
                    };
                })}
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
