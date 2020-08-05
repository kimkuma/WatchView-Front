import React from "react";
import Inputs from "../IndexSections/Inputs";
import classnames from "classnames";
// reactstrap components
import {
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

class WatchViewIndex extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }

    render() {
        return (
            <>
                <Inputs />
            </>
        );
    }

}

export default WatchViewIndex;