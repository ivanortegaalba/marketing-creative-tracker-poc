import React from "react";
import { Navbar } from "react-bootstrap";
import { Text } from "office-ui-fabric-react/lib/Text";
import {
    Icon,
    Link,
    getTheme,
    IconButton,
    Persona,
    PersonaSize,
    PersonaPresence,
    Stack
} from "office-ui-fabric-react";
import { withPrefix } from "gatsby";
import { currentUser } from "../data";

export default function NavBar() {
    const theme = getTheme();
    const user = currentUser();

    return (
        <Navbar
            className="Navbar"
            expand
            style={{ backgroundColor: theme.palette.black }}
        >
            <Navbar.Brand className="Navbar-brand">
                <Link
                    href={withPrefix("/")}
                    styles={{
                        root: {
                            color: "white",
                            selectors: {
                                ":hover": {
                                    color: theme.palette.white
                                }
                            }
                        }
                    }}
                >
                    <Text
                        variant="mediumPlus"
                        styles={{
                            root: {
                                display: "flex",
                                alignItems: "center"
                            }
                        }}
                    >
                        <Icon
                            iconName={"WebAppBuilderFragment"}
                            styles={{
                                root: {
                                    marginRight: "8px",
                                    fontSize: "20px"
                                }
                            }}
                        />
                        Plural Engine
                    </Text>
                </Link>
            </Navbar.Brand>
            <Stack
                horizontal
                className="Navbar-tools"
                horizontalAlign="end"
                tokens={{ childrenGap: "0 8px" }}
                verticalAlign="center"
            >
                <IconButton
                    styles={{
                        root: {
                            color: "white"
                        }
                    }}
                    iconProps={{ iconName: "Search" }}
                    title="Global search"
                    ariaLabel="Global search"
                />
                <IconButton
                    styles={{
                        root: {
                            color: "white"
                        }
                    }}
                    iconProps={{ iconName: "Inbox" }}
                    title="Notification center"
                    ariaLabel="Notification center"
                />
                <Persona
                    size={PersonaSize.size24}
                    presence={PersonaPresence.online}
                    imageUrl={user.avatar}
                    imageAlt={user.name}
                ></Persona>
            </Stack>
        </Navbar>
    );
}
