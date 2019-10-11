import React from "react";
import cx from "classnames";
import { navigate } from "gatsby";
import {
    DocumentCard,
    DocumentCardTitle,
    DocumentCardDetails,
    DocumentCardImage
} from "office-ui-fabric-react/lib/DocumentCard";
import { ImageFit } from "office-ui-fabric-react/lib/Image";

export default function ProjectCard(props) {
    const { className, project } = props;

    return (
        <DocumentCard
            styles={{
                root: {
                    border: "none"
                }
            }}
            className={cx("ProjectCard", className)}
            onClick={e => {
                e.stopPropagation();
                navigate("/project");
            }}
        >
            <DocumentCardImage
                height={150}
                imageFit={ImageFit.center}
                imageSrc={project.icon}
                styles={{
                    root: {
                        selectors: {
                            img: {
                                borderRadius: "25%"
                            }
                        },
                        border: "none",
                        backgroundColor: "transparent"
                    }
                }}
            />
            <DocumentCardDetails styles={{ root: { border: "none" } }}>
                <DocumentCardTitle
                    title={project.name}
                    shouldTruncate
                    showAsSecondaryTitle
                    styles={{
                        root: {
                            textAlign: "center"
                        }
                    }}
                />
            </DocumentCardDetails>
        </DocumentCard>
    );
}
