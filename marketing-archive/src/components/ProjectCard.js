import React from "react";
import { navigate } from "gatsby";
import {
    DocumentCard,
    DocumentCardTitle,
    DocumentCardDetails,
    DocumentCardImage
} from "office-ui-fabric-react/lib/DocumentCard";
import { ImageFit } from "office-ui-fabric-react/lib/Image";

export default function ProjectCard(props) {
    const { project } = props;

    return (
        <DocumentCard
            className="ProjectCard"
            onClick={e => {
                e.stopPropagation();
                navigate("/project");
            }}
            styles={{
                root: {
                    width: "100px"
                }
            }}
        >
            <DocumentCardImage
                height={170}
                imageFit={ImageFit.center}
                imageSrc={project.icon}
                styles={{
                    root: {
                        selectors: {
                            img: {
                                borderRadius: "25%"
                            }
                        }
                    }
                }}
            />
            <DocumentCardDetails>
                <DocumentCardTitle title={project.name} shouldTruncate showAsSecondaryTitle/>
            </DocumentCardDetails>
        </DocumentCard>
    );
}
