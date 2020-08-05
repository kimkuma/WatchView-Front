import React from "react";
import Inputs from "../IndexSections/Inputs";
class WatchViewIndex extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }

    render() {
        return (
            <>
                WatchView FrontEnd Start
                <Inputs />
            </>
        );
    }

}

export default WatchViewIndex;