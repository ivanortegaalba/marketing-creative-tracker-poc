import React from "react";
import { Stack, TagItem } from "office-ui-fabric-react";

export default function TagList({tags}) {
    return (
        <Stack horizontal wrap>
            {tags.map((tag, idx) => (
                <Tag key={idx}>{tag}</Tag>
            ))}
        </Stack>
    );
}

export function Tag(props) {
    return (
        <TagItem
            styles={{
                close: { display: "none" }
            }}
        >
            {props.children}
        </TagItem>
    );
}

TagList.Item = Tag;
