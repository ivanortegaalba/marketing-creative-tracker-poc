import React from "react";
import { Navbar } from "react-bootstrap";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
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
            expand="lg"
            style={{ backgroundColor: theme.palette.themePrimary }}
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
                        variant="large"
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
                                    fontSize: "24px"
                                }
                            }}
                        />
                        Creative Archive > Game 1
                    </Text>
                </Link>
            </Navbar.Brand>
            <Stack
                horizontal
                className="Navbar-tools"
                horizontalAlign="end"
                tokens={{ childrenGap: "0 8px" }}
            >
                <SearchBox
                    underlined
                    placeholder="Search"
                    iconProps={{ iconName: "Search" }}
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
                    size={PersonaSize.size32}
                    presence={PersonaPresence.online}
                    imageUrl={user.avatar}
                    imageAlt={user.name}
                ></Persona>
            </Stack>
        </Navbar>
    );
}
