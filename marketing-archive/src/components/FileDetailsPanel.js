import React from "react";
import { Text } from "office-ui-fabric-react/lib/Text";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import { Stack, Link } from "office-ui-fabric-react";
import { FileInfo } from ".";

export default function FileDetailsPanel(props) {
    const { isOpen, onDismiss, file, creative } = props;

    return (
        <Panel
            isOpen={isOpen}
            onDismiss={onDismiss}
            type={PanelType.smallFixedFar}
            closeButtonAriaLabel="Close"
        >
            {isOpen ? (
                <Stack
                    tokens={{
                        padding: "8px",
                        childrenGap: "16px"
                    }}
                >
                    {" "}
                    <Stack.Item>
                        <Stack
                            tokens={{
                                childrenGap: "8px"
                            }}
                        >
                            <Stack.Item>
                                <Stack>
                                    <Text variant="large">{file.name}</Text>
                                    <Text variant="medium">{`${file.fileType.name}`}</Text>
                                </Stack>
                            </Stack.Item>
                            <Stack.Item align="center">
                                <Text variant="mediumPlus">
                                    <Link href="#">Version 2</Link>
                                </Text>
                            </Stack.Item>
                        </Stack>
                    </Stack.Item>
                    <FileInfo file={file} creative={creative} />
                </Stack>
            ) : null}
        </Panel>
    );
}