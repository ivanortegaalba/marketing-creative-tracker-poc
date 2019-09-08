import React, { Fragment } from "react";
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import { CreativeCard, Grid } from "..";
import { creative } from "../../data";

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
        onClick: () => console.log("Sort")
    },
    {
        key: "tile",
        name: "Grid view",
        ariaLabel: "Grid view",
        iconProps: {
            iconName: "Tiles"
        },
        iconOnly: true,
        onClick: () => console.log("Tiles")
    },
    {
        key: "help",
        name: "Help",
        ariaLabel: "Help",
        iconProps: {
            iconName: "Info"
        },
        iconOnly: true,
        onClick: () => console.log("Help clicked!")
    }
];

const creatives = Array.from(new Array(30)).map(creative);

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

            <Grid>
                {creatives.map((creative, idx) => (
                    <CreativeCard key={idx} creative={creative} />
                ))}
            </Grid>
        </Fragment>
    );
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
