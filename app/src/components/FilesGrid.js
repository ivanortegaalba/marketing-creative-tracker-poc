import React from "react";
import { ImageFit } from "office-ui-fabric-react/lib/Image";
import {
    DocumentCard,
    DocumentCardActivity,
    DocumentCardPreview,
    DocumentCardTitle
} from "office-ui-fabric-react/lib/DocumentCard";

export default function FilesGrid() {
    return (
        <div className="FilesGrid">
            <FileCard className="FilesGrid-item" />
            <FileCard className="FilesGrid-item" />
            <FileCard className="FilesGrid-item" />
            <FileCard className="FilesGrid-item" />
            <FileCard className="FilesGrid-item" />
        </div>
    );
}

function FileCard(props) {
    const previewProps = {
        previewImages: [
            {
                name: "Revenue stream proposal fiscal year 2016 version02.pptx",
                imageFit: ImageFit.cover,
                imageSrc: "https://source.unsplash.com/featured/?games,cartoon",
                width: 200,
                height: 200
            }
        ]
    };

    return (
        <DocumentCard className={props.className}>
            <DocumentCardPreview {...previewProps} />
            <DocumentCardTitle
                title="DragonCity_icon.png"
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
        </DocumentCard>
    );
}
