import React, { Fragment, useState } from "react";
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import { CreativeCard, Grid } from "..";
import { creative } from "../../data";

function getItems({ mode, setMode }) {
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
    if (mode === MODES.CREATIVES) {
        items.push({
            key: "projectAnalytics",
            name: "Analytics",
            cacheKey: "analytics", // changing this key will invalidate this items cache
            iconProps: {
                iconName: "Chart"
            },
            ariaLabel: "New",
            onClick: () => {
                setMode(MODES.ANALYTICS);
            }
        });
    } else {
        items.push({
            key: "creatives",
            name: "Creatives",
            cacheKey: "creatives", // changing this key will invalidate this items cache
            iconProps: {
                iconName: "StackIndicator"
            },
            ariaLabel: "New",
            onClick: () => {
                setMode(MODES.CREATIVES);
            }
        });
    }

    return items;
}

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

const creatives = Array.from(new Array(30)).map(creative);
const MODES = {
    ANALYTICS: "analytics",
    CREATIVES: "creatives"
};

export default function ListView() {
    const [mode, setMode] = useState(MODES.CREATIVES);
    const items = getItems({ mode, setMode });

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
