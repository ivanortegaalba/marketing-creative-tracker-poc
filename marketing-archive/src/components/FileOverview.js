import React, { Fragment, useState, useEffect } from "react";
import {
    Pivot,
    PivotItem,
    PivotLinkFormat
} from "office-ui-fabric-react/lib/Pivot";
import { Text } from "office-ui-fabric-react/lib/Text";
import { Persona, PersonaSize } from "office-ui-fabric-react/lib/Persona";
import { ActivityItem } from "office-ui-fabric-react/lib/ActivityItem";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import Annotation from "react-image-annotation";
import { PointSelector } from "react-image-annotation/lib/selectors";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import {
    Stack,
    Label,
    Link,
    getTheme,
    IconButton,
    ActionButton
} from "office-ui-fabric-react";
import { TagList } from ".";
import { author, createdAt, AUTHOR } from "../data";

const DEFAULT_COMMENTS = [
    {
        author: author(),
        message: "lore ipsum lorem",
        createdAt: createdAt(),
        annotation: null
    },
    {
        author: author(),
        message: "lore ipsum lorem",
        createdAt: createdAt(),
        annotation: null
    },
    {
        author: author(),
        message: "lore ipsum lorem",
        createdAt: createdAt(),
        annotation: null
    }
];

function currentUser() {
    return AUTHOR;
}

export default function FileOverview(props) {
    const { isOpen, onDismiss, file, creative, changeFile } = props;
    const theme = getTheme();
    const currentIndexFile = file
        ? creative.files.findIndex(f => f.name === file.name)
        : null;

    const [cursor, moveCursor] = useState(currentIndexFile);
    const [annotations, setAnnotations] = useState([]);
    const [comments, setComments] = useState(DEFAULT_COMMENTS);
    const [activeAnnotation, setActiveAnnotation] = useState(null);

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
            default:
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

    function addComment(comment) {
        setComments([...comments, comment]);
    }

    function addAnnotation(annotation) {
        const commentAsAnnotation = {
            author: currentUser(),
            message: annotation.data.text,
            createdAt: createdAt(),
            annotation
        };
        setAnnotations([...annotations, annotation]);
        console.log(">>>", commentAsAnnotation);
        addComment(commentAsAnnotation);
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
                                <IconButton
                                    iconProps={{ iconName: "ChevronLeft" }}
                                    disabled={cursor <= 0}
                                    onClick={prevFile}
                                    title="Previous file"
                                    ariaLabel="Previous file"
                                />
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
                                <ImageEditor
                                    image={file.preview.src}
                                    addAnnotation={addAnnotation}
                                    annotations={annotations}
                                    activeAnnotation={activeAnnotation}
                                />
                            </Stack.Item>
                            <Stack.Item>
                                <IconButton
                                    iconProps={{ iconName: "ChevronRight" }}
                                    onClick={nextFile}
                                    disabled={
                                        cursor >= creative.files.length - 1
                                    }
                                    title="Next file"
                                    ariaLabel="Next file"
                                />
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
                            <Stack.Item verticalFill>
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
                                        <Comments
                                            activeAnnotation={activeAnnotation}
                                            setActiveAnnotation={
                                                setActiveAnnotation
                                            }
                                            comments={comments}
                                            onSubmit={addComment}
                                        />
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

function ImageEditor({ image, annotations, addAnnotation, activeAnnotation }) {
    const TYPE = PointSelector.TYPE;
    const [annotation, changeCurrentAnnotation] = useState({});

    function onSubmit(annotation) {
        const { geometry, data } = annotation;
        console.log(annotation);
        const newAnnotation = {
            geometry,
            data: {
                ...data,
                id: Math.random()
            }
        };

        changeCurrentAnnotation({});
        addAnnotation(newAnnotation);
    }

    return (
        <Annotation
            style={{
                height: "100%"
            }}
            src={image}
            alt="Two pebbles anthropomorphized holding hands"
            annotations={annotations}
            activeAnnotationComparator={(a, b) => {
                console.log("COMPARATOR", a, b);
                return a.data.id === b;
            }}
            activeAnnotations={activeAnnotation ? [activeAnnotation] : null}
            type={TYPE}
            value={annotation}
            onChange={changeCurrentAnnotation}
            onSubmit={onSubmit}
        />
    );
}

function Comments({
    comments,
    onSubmit,
    setActiveAnnotation,
    activeAnnotation
}) {
    const theme = getTheme();
    const [message, setMessage] = useState("");

    function send() {
        if (!message) {
            return;
        }

        onSubmit({
            author: currentUser(),
            message,
            createdAt: createdAt()
        });

        setMessage("");
    }

    return (
        <Stack
            verticalAlign="space-between"
            verticalFill
            grow
            tokens={{
                padding: "16px 0",
                childrenGap: "16px"
            }}
        >
            <Stack.Item>
                <Stack
                    verticalAlign="space-between"
                    verticalFill
                    grow
                    styles={{
                        root: {
                            border: `1px solid ${theme.semanticColors.bodyFrameDivider}`,
                            overflow: "scroll",
                            maxHeigh: "500px"
                        },
                        tokens: {
                            borderBottom: "1px solid red"
                        }
                    }}
                >
                    {comments.map((comment, idx) => {
                        if (comment.annotation) {
                            const annotation = comment.annotation;

                            return (
                                <div
                                    key={idx}
                                    onMouseEnter={() => {
                                        setActiveAnnotation(annotation.data.id);
                                    }}
                                    onMouseLeave={() => {
                                        setActiveAnnotation(null);
                                    }}
                                >
                                    <ActivityItem
                                        styles={{
                                            root: {
                                                backgroundColor:
                                                    theme.palette
                                                        .themeLighterAlt,
                                                padding: "8px",
                                                selectors: {
                                                    ":hover": {
                                                        backgroundColor:
                                                            theme.palette
                                                                .themeLighter
                                                    }
                                                }
                                            }
                                        }}
                                        activityDescription={
                                            <Fragment>
                                                <Link>
                                                    {comment.author.name}
                                                </Link>
                                                <span> added a note </span>
                                            </Fragment>
                                        }
                                        activityPersonas={[
                                            { imageUrl: comment.author.avatar }
                                        ]}
                                        comments={
                                            <Fragment>
                                                <span
                                                    style={{
                                                        fontStyle: "italic"
                                                    }}
                                                >
                                                    {comment.message}
                                                </span>
                                            </Fragment>
                                        }
                                        timeStamp={comment.createdAt}
                                    />
                                </div>
                            );
                        }

                        return (
                            <ActivityItem
                                key={idx}
                                styles={{
                                    root: {
                                        padding: "8px"
                                    }
                                }}
                                activityDescription={
                                    <Fragment>
                                        <Link>{comment.author.name}</Link>
                                    </Fragment>
                                }
                                activityPersonas={[
                                    { imageUrl: comment.author.avatar }
                                ]}
                                comments={
                                    <Fragment>
                                        <span style={{ fontStyle: "italic" }}>
                                            {comment.message}
                                        </span>
                                    </Fragment>
                                }
                                timeStamp={comment.createdAt}
                            />
                        );
                    })}
                </Stack>
            </Stack.Item>
            <Stack.Item>
                <TextField
                    label="New comment"
                    multiline
                    resizable={false}
                    onKeyDown={e => {
                        if (
                            message &&
                            e.key === "Enter" &&
                            (!e.shiftKey && !e.ctrlKey)
                        ) {
                            send();
                        }
                    }}
                    onChange={e => {
                        if (e.target.value === "\n") {
                            return;
                        }
                        setMessage(e.target.value);
                    }}
                    value={message}
                />
                <ActionButton iconProps={{ iconName: "Send" }} onClick={send}>
                    Send
                </ActionButton>
            </Stack.Item>
        </Stack>
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