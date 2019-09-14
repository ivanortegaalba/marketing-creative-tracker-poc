import React from "react";
import { Navbar } from "react-bootstrap";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import { Text } from "office-ui-fabric-react/lib/Text";
import { Icon, Link } from "office-ui-fabric-react";
import { withPrefix } from "gatsby";

export default function NavBar() {
    return (
        <Navbar className="Navbar justify-content-between" expand="lg">
            <Navbar.Brand className="Navbar-brand">
                <Link href={withPrefix("/")}>
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
                        Creative Archive > Game 1
                    </Text>
                </Link>
            </Navbar.Brand>
            <SearchBox
                underlined
                placeholder="Search"
                iconProps={{ iconName: "Search" }}
            />
        </Navbar>
    );
}
