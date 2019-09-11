import React, { Fragment, useState, useEffect } from "react";
import {
    Pivot,
    PivotItem,
    PivotLinkSize,
    PivotLinkFormat
} from "office-ui-fabric-react/lib/Pivot";
import { Text } from "office-ui-fabric-react/lib/Text";
import { Persona, PersonaSize } from "office-ui-fabric-react/lib/Persona";
import { ActivityItem } from "office-ui-fabric-react/lib/ActivityItem";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import { Image, ImageFit } from "office-ui-fabric-react/lib/Image";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { Stack, Label, Link, getTheme } from "office-ui-fabric-react";
import { TagList } from ".";
import { Button } from "react-bootstrap";

export default function FileOverview(props) {
    const { isOpen, onDismiss, file, creative, changeFile } = props;
    const theme = getTheme();
    const currentIndexFile = creative.files.findIndex(
        file => file.name === file.name
    );

    const [cursor, moveCursor] = useState(currentIndexFile);

    useEffect(() => {
        document.body.addEventListener("keydown", keyDown);

        // returned function will be called on component unmount
        return () => {
            document.body.removeEventListener("keydown", keyDown);
        };
    });

    function keyDown(e) {
        switch (e.key) {
            case "ArrowRight":
                nextFile();
                break;
            case "ArrowLeft":
                prevFile();
                break;
        }
    }

    function nextFile() {
        const nextCursor = cursor + 1;

        if (nextCursor > creative.files.length - 1) {
            return;
        }

        moveCursor(nextCursor);
        return changeFile(creative.files[nextCursor]);
    }

    function prevFile() {
        const prevCursor = cursor - 1;

        if (prevCursor < 0) {
            return;
        }

        moveCursor(prevCursor);
        return changeFile(creative.files[prevCursor]);
    }

    return (
        <Panel
            isOpen={isOpen}
            onDismiss={onDismiss}
            type={PanelType.smallFluid}
            closeButtonAriaLabel="Close"
        >
            {isOpen ? (
                <div className="FileOverview">
                    <div className="FileOverview-preview">
                        <Stack
                            horizontal
                            verticalFill
                            verticalAlign="center"
                            horizontalAlign="space-around"
                        >
                            <Stack.Item>
                                <Button
                                    disabled={cursor <= 0}
                                    onClick={prevFile}
                                >
                                    {"<"}
                                </Button>
                            </Stack.Item>
                            <Stack.Item
                                styles={{
                                    root: {
                                        flexBasis: "90%",
                                        height: "100%",
                                        backgroundColor:
                                            theme.palette.neutralLighterAlt
                                    }
                                }}
                            >
                                <Image
                                    styles={{
                                        root: {
                                            height: "100%"
                                        }
                                    }}
                                    src={file.preview.src}
                                    imageFit={ImageFit.contain}
                                />
                            </Stack.Item>
                            <Stack.Item>
                                <Button
                                    onClick={nextFile}
                                    disabled={
                                        cursor >= creative.files.length - 1
                                    }
                                >
                                    {">"}
                                </Button>
                            </Stack.Item>
                        </Stack>
                    </div>
                    <aside className="FileOverview-sidebar">
                        <Stack verticalFill>
                            <Text variant="large">{file.name}</Text>
                            <Text variant="medium">{`${file.fileType.name}`}</Text>
                            <Text variant="medium">{`${file.dimensions.width}x${file.dimensions.height}`}</Text>
                            <Text variant="mediumPlus">
                                <Link href="#">Version 2</Link>
                            </Text>
                            <Stack.Item grow disableShrink>
                                <Pivot
                                    styles={{
                                        root: { display: "flex" },
                                        link: {
                                            flex: 1
                                        },
                                        linkIsSelected: {
                                            flex: 1
                                        },
                                        linkContent: {
                                            overflow: "scroll"
                                        }
                                    }}
                                    linkFormat={PivotLinkFormat.links}
                                    linkSize={PivotLinkSize.large}
                                >
                                    <PivotItem headerText="Info">
                                        <FileInfo
                                            file={file}
                                            creative={creative}
                                        />
                                    </PivotItem>
                                    <PivotItem headerText="History">
                                        <History file={file} />
                                    </PivotItem>
                                    <PivotItem headerText="Comments">
                                        <Comments file={file} />
                                    </PivotItem>
                                </Pivot>
                            </Stack.Item>
                        </Stack>
                    </aside>
                </div>
            ) : null}
        </Panel>
    );
}

function FileInfo({ file, creative }) {
    return (
        <Stack
            verticalAlign="space-between"
            verticalFill
            grow
            tokens={{
                padding: "8px",
                childrenGap: "16px"
            }}
        >
            <Stack.Item>
                <Label>Author</Label>
                <Persona
                    imageUrl={file.authors[0].avatar}
                    imageInitials={file.authors[0].name
                        .split(" ")
                        .map(s => s[0].toUpperCase())}
                    text={file.authors[0].name}
                    secondaryText={file.createdAt}
                    size={PersonaSize.size40}
                />
            </Stack.Item>
            <Stack.Item>
                <Label>Size</Label>
                <Text>{file.size}</Text>
            </Stack.Item>
            <Stack.Item>
                <Label>Extension</Label>
                <Text>{file.fileType.extension}</Text>
            </Stack.Item>
            <Stack.Item>
                <Label>JIRA ticket</Label>
                <Text>
                    <Link href="#">
                        MKT-250 Banner test for summer campaign
                    </Link>
                </Text>
            </Stack.Item>
            <Stack.Item>
                <Label>Creative Type</Label>
                <Text>{creative.type.name}</Text>
            </Stack.Item>
            <Stack.Item>
                <Label>Project</Label>
                <Text>{creative.project.name}</Text>
            </Stack.Item>
            <Stack.Item>
                <Label>Tags</Label>
                <TagList tags={file.tags} />
            </Stack.Item>
        </Stack>
    );
}

function History({ file }) {
    return (
        <Stack
            verticalAlign="space-between"
            verticalFill
            grow
            tokens={{
                padding: "16px 8px",
                childrenGap: "16px"
            }}
        >
            <ActivityItem
                activityDescription={
                    <Fragment>
                        <Link>{file.authors[0].name}</Link>
                        <span> created the </span>
                        <Link>version 2</Link> of
                        <Link> {file.name}</Link>
                    </Fragment>
                }
                activityPersonas={[
                    { imageUrl: file.fileType.icon.small },
                    { imageUrl: file.authors[1].avatar }
                ]}
                comments={
                    <Fragment>
                        <span style={{ fontStyle: "italic" }}>
                            Upload the first stable version of the banner with
                            the product requirement
                        </span>
                    </Fragment>
                }
                timeStamp="23m ago"
            />
            <ActivityItem
                activityDescription={
                    <Fragment>
                        <Link>{file.authors[0].name}</Link>
                        <span> renamed </span>
                        <Link>first_upload.png</Link> to{" "}
                        <Link> {file.name}</Link>
                    </Fragment>
                }
                activityPersonas={[{ imageUrl: file.authors[0].avatar }]}
                timeStamp="1h ago"
            />
            <ActivityItem
                activityDescription={
                    <Fragment>
                        <Link>{file.authors[0].name}</Link>
                        <span> created the </span>
                        <Link>version 1</Link> of
                        <Link> first_upload.png</Link>
                    </Fragment>
                }
                activityPersonas={[
                    { imageUrl: file.fileType.icon.small },
                    { imageUrl: file.authors[0].avatar }
                ]}
                timeStamp="2 days ago"
            />
        </Stack>
    );
}

function Comments({ file }) {
    return (
        <Stack
            verticalAlign="space-between"
            verticalFill
            grow
            tokens={{
                padding: "16px 8px",
                childrenGap: "16px"
            }}
        >
            <Stack.Item>
                <Stack
                    verticalAlign="space-between"
                    verticalFill
                    grow
                    tokens={{
                        padding: "16px 8px",
                        childrenGap: "16px"
                    }}
                >
                    <ActivityItem
                        activityDescription={
                            <Fragment>
                                <Link>{file.authors[0].name}</Link>
                            </Fragment>
                        }
                        activityPersonas={[
                            { imageUrl: file.authors[1].avatar }
                        ]}
                        comments={
                            <Fragment>
                                <span style={{ fontStyle: "italic" }}>
                                    Upload the first stable version of the
                                    banner with the product requirement
                                </span>
                            </Fragment>
                        }
                        timeStamp="23m ago"
                    />
                    <ActivityItem
                        activityDescription={
                            <Fragment>
                                <Link>{file.authors[0].name}</Link>
                            </Fragment>
                        }
                        activityPersonas={[
                            { imageUrl: file.authors[0].avatar }
                        ]}
                        comments={
                            <Fragment>
                                <span style={{ fontStyle: "italic" }}>
                                    Upload the first stable version of the
                                    banner with the product requirement
                                </span>
                            </Fragment>
                        }
                        timeStamp="1h ago"
                    />
                    <ActivityItem
                        activityDescription={
                            <Fragment>
                                <Link>{file.authors[0].name}</Link>
                            </Fragment>
                        }
                        activityPersonas={[
                            { imageUrl: file.authors[0].avatar }
                        ]}
                        comments={
                            <Fragment>
                                <span style={{ fontStyle: "italic" }}>
                                    Upload the first stable version of the
                                    banner with the product requirement
                                </span>
                            </Fragment>
                        }
                        timeStamp="2 days ago"
                    />
                </Stack>
            </Stack.Item>
            <Stack.Item>
                <TextField label="New comment" multiline resizable={false} />
                <Button variant="light">Enviar</Button>
            </Stack.Item>
        </Stack>
    );
}
