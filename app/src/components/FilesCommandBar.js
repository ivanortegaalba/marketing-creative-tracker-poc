import React from "react";
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";


const items = [
    {
        key: "1",
        name: "Resources",
        cacheKey: "myCacheKey1", // changing this key will invalidate this items cache
        iconProps: {
            iconName: "FabricAssetLibrary"
        },
        ariaLabel: "Resources"
    },
    {
        key: "2",
        name: "Pending to review",
        cacheKey: "myCacheKey1", // changing this key will invalidate this items cache
        iconProps: {
            iconName: "ReviewRequestSolid"
        },
        ariaLabel: "Pending to review"
    },
    {
        key: "3",
        name: "Final",
        cacheKey: "myCacheKey1", // changing this key will invalidate this items cache
        iconProps: {
            iconName: "CheckboxComposite"
        },
        ariaLabel: "Pending to review"
    },
    {
        key: "4",
        name: "New Folder",
        cacheKey: "myCacheKey1", // changing this key will invalidate this items cache
        iconProps: {
            iconName: "FabricNewFolder"
        },
        ariaLabel: "New"
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


export default function FilesCommandBar() {
    return (
        <CommandBar
            items={items}
            overflowItems={overflowItems}
            overflowButtonProps={{ ariaLabel: "More" }}
            farItems={farItems}
            ariaLabel={
                "Use left and right arrow keys to navigate between commands"
            }
        />
    );
}
