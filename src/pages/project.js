import React from "react";
import { CreativesView } from "../components/views";
import App from "../components/App";

const IndexPage = props => {
    return (
        <App>
            <CreativesView {...props} />
        </App>
    );
};

export default IndexPage;
