import React from "react";
import { Navbar } from "react-bootstrap";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import { Text } from "office-ui-fabric-react/lib/Text";
import { Icon } from "office-ui-fabric-react";

export default function NavBar() {
    return (
        <Navbar className="Navbar justify-content-between" expand="lg">
            <Navbar.Brand className="Navbar-brand">
                <Text
                    variant="xLarge"
                    styles={{
                        root: {
                            color: "white",
                            display: "flex",
                            alignItems: "center"
                        }
                    }}
                >
                    <Icon
                        iconName={"WebAppBuilderFragment"}
                        styles={{
                            root: { marginRight: "8px", fontSize: "24px" }
                        }}
                    />
                    <span>Creative Archive > Game 1</span>
                </Text>
            </Navbar.Brand>
            <SearchBox
                underlined
                placeholder="Search"
                iconProps={{ iconName: "Search" }}
            />
        </Navbar>
    );
}
