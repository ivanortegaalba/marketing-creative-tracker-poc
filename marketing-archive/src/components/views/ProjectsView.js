import React, { Fragment } from "react";
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import { ProjectCard, Grid } from "..";
import { project } from "../../data";

const items = [
    {
        key: "newItem",
        name: "New",
        cacheKey: "myCacheKey", // changing this key will invalidate this items cache
        iconProps: {
            iconName: "Add"
        },
        ariaLabel: "New",
        subMenuProps: {
            items: [
                {
                    key: "newCollection",
                    name: "Collection",
                    iconProps: {
                        iconName: "AssetLibrary"
                    }
                },
                {
                    key: "teamProject",
                    name: "Project",
                    iconProps: {
                        iconName: "NewTeamProject"
                    }
                },
                {
                    key: "upload",
                    name: "Upload file",
                    iconProps: {
                        iconName: "Upload"
                    }
                },
                {
                    key: "upload",
                    name: "Upload folder",
                    iconProps: {
                        iconName: "BulkUpload"
                    }
                }
            ]
        }
    }
];

const overflowItems = [];

const farItems = [
    {
        key: "sort",
        name: "Sort",
        ariaLabel: "Sort",
        iconProps: {
            iconName: "SortLines"
        },
        subMenuProps: {
            items: [
                {
                    key: "Name",
                    name: "Name"
                },
                {
                    key: "Most popular",
                    name: "Most popular"
                },
                {
                    key: "Newest Updated",
                    name: "Newest Updated"
                },
                {
                    key: "Older Updated",
                    name: "Oldest Updated"
                },
                {
                    key: "Newest Created",
                    name: "Newest Created"
                },
                {
                    key: "Older Created",
                    name: "Oldest Created"
                }
            ]
        }
    },
    {
        key: "tile",
        name: "List view",
        ariaLabel: "List view",
        iconProps: {
            iconName: "Tiles"
        },
        iconOnly: true
    },
    {
        key: "help",
        name: "Help",
        ariaLabel: "Help",
        iconProps: {
            iconName: "Info"
        },
        iconOnly: true
    }
];

const projects = Array.from(new Array(30)).map(project);

export default function ListView() {
    return (
        <Fragment>
            <CommandBar
                items={items}
                overflowItems={overflowItems}
                overflowButtonProps={{ ariaLabel: "More" }}
                farItems={farItems}
                ariaLabel={
                    "Use left and right arrow keys to navigate between commands"
                }
            />

            <Grid colWidth={170}>
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))}
            </Grid>
        </Fragment>
    );
}