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
    Col, Button, Card, CardBody, Badge, CardImg
} from "reactstrap";
import DemoNavbar from "../../components/Navbars/DemoNavbar";
import Download from "../IndexSections/Download";
import CardsFooter from "../../components/Footers/CardsFooter";

class WatchViewIndex extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }

    state = {};
    render() {
        return (
            <>
                <main ref="main">
                    <div className="position-relative">
                        {/* shape Hero */}
                        <section className="section section-lg section-shaped pb-250">
                            <Container className="mb-5">
                                <h3 className="h4 text-primary font-weight-bold mb-4">WatchView</h3>
                                <Row>
                                    <Col lg="100" sm="6">
                                        <FormGroup
                                            className={classnames({
                                                focused: this.state.searchFocused
                                            })}
                                        >
                                            <InputGroup className="mb-4">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="ni ni-zoom-split-in" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="영화를 검색해주세요."
                                                    type="text"
                                                    onFocus={e => this.setState({ searchFocused: true })}
                                                    onBlur={e => this.setState({ searchFocused: false })}
                                                />
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Container>

                            <div className="shape shape-style-1 shape-default">
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                        </section>
                    </div>

                    <section className="section section-lg pt-lg-0 mt--200">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg="12">
                                    <Row className="row-grid">
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                        <i className="ni ni-check-bold" />
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">
                                                        Download Argon
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Argon is a great free UI package based on Bootstrap
                                                        4 that includes the most important components and
                                                        features.
                                                    </p>
                                                    <div>
                                                        <Badge color="primary" pill className="mr-1">
                                                            design
                                                        </Badge>
                                                        <Badge color="primary" pill className="mr-1">
                                                            system
                                                        </Badge>
                                                        <Badge color="primary" pill className="mr-1">
                                                            creative
                                                        </Badge>
                                                    </div>
                                                    <Button
                                                        className="mt-4"
                                                        color="primary"
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Learn more
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                                        <i className="ni ni-istanbul" />
                                                    </div>
                                                    <h6 className="text-success text-uppercase">
                                                        Build Something
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Argon is a great free UI package based on Bootstrap
                                                        4 that includes the most important components and
                                                        features.
                                                    </p>
                                                    <div>
                                                        <Badge color="success" pill className="mr-1">
                                                            business
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            vision
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            success
                                                        </Badge>
                                                    </div>
                                                    <Button
                                                        className="mt-4"
                                                        color="success"
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Learn more
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                                        <i className="ni ni-planet" />
                                                    </div>
                                                    <h6 className="text-warning text-uppercase">
                                                        Prepare Launch
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Argon is a great free UI package based on Bootstrap
                                                        4 that includes the most important components and
                                                        features.
                                                    </p>
                                                    <div>
                                                        <Badge color="warning" pill className="mr-1">
                                                            marketing
                                                        </Badge>
                                                        <Badge color="warning" pill className="mr-1">
                                                            product
                                                        </Badge>
                                                        <Badge color="warning" pill className="mr-1">
                                                            launch
                                                        </Badge>
                                                    </div>
                                                    <Button
                                                        className="mt-4"
                                                        color="warning"
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Learn more
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section bg-secondary">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col md="6">
                                    <Card className="bg-default shadow border-0">
                                        <CardImg
                                            alt="..."
                                            src={require("assets/img/theme/img-1-1200x1000.jpg")}
                                            top
                                        />
                                        <blockquote className="card-blockquote">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="svg-bg"
                                                preserveAspectRatio="none"
                                                viewBox="0 0 583 95"
                                            >
                                                <polygon
                                                    className="fill-default"
                                                    points="0,52 583,95 0,95"
                                                />
                                                <polygon
                                                    className="fill-default"
                                                    opacity=".2"
                                                    points="0,42 583,95 683,0 0,95"
                                                />
                                            </svg>
                                            <h4 className="display-3 font-weight-bold text-white">
                                                Design System
                                            </h4>
                                            <p className="lead text-italic text-white">
                                                The Arctic Ocean freezes every winter and much of the
                                                sea-ice then thaws every summer, and that process will
                                                continue whatever happens.
                                            </p>
                                        </blockquote>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <div className="pl-md-5">
                                        <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                                            <i className="ni ni-settings" />
                                        </div>
                                        <h3>Our customers</h3>
                                        <p className="lead">
                                            Don't let your uses guess by attaching tooltips and
                                            popoves to any element. Just make sure you enable them
                                            first via JavaScript.
                                        </p>
                                        <p>
                                            The kit comes with three pre-built pages to help you get
                                            started faster. You can change the text and images and
                                            you're good to go.
                                        </p>
                                        <p>
                                            The kit comes with three pre-built pages to help you get
                                            started faster. You can change the text and images and
                                            you're good to go.
                                        </p>
                                        <a
                                            className="font-weight-bold text-warning mt-5"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            A beautiful UI Kit for impactful websites
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                </main>


                {/*<main className="profile-page" ref="main">*/}
                {/*    <section className="section pb-0 section-components">*/}
                {/*        <Container className="mb-5">*/}
                {/*            <h3 className="h4 text-primary font-weight-bold mb-4">WatchView</h3>*/}
                {/*            <Row>*/}
                {/*                <Col lg="100" sm="6">*/}
                {/*                    <FormGroup*/}
                {/*                        className={classnames({*/}
                {/*                            focused: this.state.searchFocused*/}
                {/*                        })}*/}
                {/*                    >*/}
                {/*                        <InputGroup className="mb-4">*/}
                {/*                            <InputGroupAddon addonType="prepend">*/}
                {/*                                <InputGroupText>*/}
                {/*                                    <i className="ni ni-zoom-split-in" />*/}
                {/*                                </InputGroupText>*/}
                {/*                            </InputGroupAddon>*/}
                {/*                            <Input*/}
                {/*                                placeholder="영화를 검색해주세요."*/}
                {/*                                type="text"*/}
                {/*                                onFocus={e => this.setState({ searchFocused: true })}*/}
                {/*                                onBlur={e => this.setState({ searchFocused: false })}*/}
                {/*                            />*/}
                {/*                        </InputGroup>*/}
                {/*                    </FormGroup>*/}
                {/*                </Col>*/}
                {/*            </Row>*/}
                {/*        </Container>*/}
                {/*    </section>*/}
                {/*</main>*/}
            </>
        );
    }

}

export default WatchViewIndex;