
import css from "./App.css";
import React, { Component } from "react";
import {
    Form,
    InputGroup,
    Navbar,
    Row,
    Col,
    Container,
    Button,
    FormControl
} from "react-bootstrap";


BASE_URL = `http://dev.virtualearth.net/REST/v1/Locations/${locationQuery}?includeNeighborhood=${includeNeighborhood}&maxResults=${maxResults}&include=${includeValue}&key=&{BingMapsAPIKey}`





class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            latitudeVal: "",
            longitudeVal: "",
            searchByCords: false,
            searchByPlace: false
        };
        this.checkboxByCords = React.createRef();
        this.handleSearchBYPlace = React.createRef();
        this.latitude = React.createRef();
        this.longitude = React.createRef();
    }


    handleSearchBYCords() {
        const cbStatus = this.checkboxByCords.current.value;
        this.setState({ searchByCords: cbStatus });
    }

    handleChangeLat() {
        const v1 = this.textInput1.current.value;
        this.setState({ latitudeVal: v1 });
    }


    handleSearchByCords = () => {

    }

    handleSearchByPlace = () => {

    }
    /*
    //
    My Plan was to add redux actions & reducer to hold an array with all the locations that been searched.
    then to have react-hooks component for representign the POlygon
    at last i was mentioned to have a small table on the buttom of the page for display all the latest history searches that been Done
    of course i would been separte the page to more components guidided by state manage by redux or local states
*plannig of the polygon : from the array in the state another array suppose to take the elements and sort them by closes locations
The it can be know which location to connect with the Polygon components,
The polygon component -  areeact hook component that taking as props 3 objects that represents the 3 locations that need to connect by polygon
Each polygon component style by red triangle fill with z-index red color.
    
    **/


    render() {
        // const renderFlag = this.state.tempMockCurrCondArr ? true : false
        return (
            <div className={"mainpage"}>
                <Container>
                    <Row>
                        <div className={"header"}>
                            <h1>Location App</h1>
                        </div>
                    </Row>
                    <Row>
                        <Col>
                            <div className={"formsection"}>
                                <div className={'checkboxs'}>
                                    <Form>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Add by cords" ref={this.checkboxByCords} onChange={() => this.handleSearchBYCords()} />
                                            <Form.Check type="checkbox" label="Add by place" ref={this.checkboxByPlace} onChange={() => this.handleSearchBYPlace()} />
                                        </Form.Group>

                                        {this.state.searchByCords &&
                                            <div className={"cordssection"}>

                                                <InputGroup size="sm" className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text id="inputGroup-sizing-sm">
                                                            Enter Cords
                                                </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <div>
                                                        <FormControl
                                                            aria-label="Small"
                                                            aria-describedby="inputGroup-sizing-sm"
                                                            ref={this.latitude}
                                                            onChange={() => this.handleChangeLat()}
                                                            placeholder={"Enter Lat"}
                                                        />
                                                    </div>
                                                    <div>
                                                        <FormControl
                                                            aria-label="Small"
                                                            aria-describedby="inputGroup-sizing-sm"
                                                            ref={this.longitude}
                                                            onChange={() => this.handleChangeLon()}
                                                            placeholder={"Enter Lon"}
                                                        />
                                                    </div>
                                                    <Col sm={{ span: 10, offset: 2 }}>
                                                        <Button type="submit" onClick={() => this.handleSearch()}>Sign in</Button>
                                                    </Col>
                                                </InputGroup>
                                            </div>
                                        }

                                        {this.state.searchByCords &&
                                            <div className={"cordssection"}>

                                                <InputGroup size="sm" className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text id="inputGroup-sizing-sm">
                                                            Enter Cords
                                                </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <div>
                                                        <FormControl
                                                            aria-label="Small"
                                                            aria-describedby="inputGroup-sizing-sm"
                                                            ref={this.latitude}
                                                            onChange={() => this.handleChangeLat()}
                                                            placeholder={"Enter Lat"}
                                                        />
                                                    </div>
                                                    <div>
                                                        <FormControl
                                                            aria-label="Small"
                                                            aria-describedby="inputGroup-sizing-sm"
                                                            ref={this.longitude}
                                                            onChange={() => this.handleChangeLon()}
                                                            placeholder={"Enter Lon"}
                                                        />
                                                    </div>
                                                    <Col sm={{ span: 10, offset: 2 }}>
                                                        <Button type="submit" onClick={() => this.handleSearch()}>Sign in</Button>
                                                    </Col>
                                                </InputGroup>
                                            </div>
                                        }
                                    </Form>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className={"mapsection"}>
                                <div>
                                    <iframe width="500" height="400" frameborder="0" src="https://www.bing.com/maps/embed?h=400&w=500&cp=32.30847424788938~34.73895263671875&lvl=8&typ=d&sty=r&src=SHELL&FORM=MBEDV8" scrolling="no">
                                    </iframe>
                                    <div className={"map"}>
                                        <a id="largeMapLink" target="_blank" href="https://www.bing.com/maps?cp=32.30847424788938~34.73895263671875&amp;sty=r&amp;lvl=8&amp;FORM=MBEDLD">View Larger Map</a> &nbsp; | &nbsp;
                                     <a id="dirMapLink" target="_blank" href="https://www.bing.com/maps/directions?cp=32.30847424788938~34.73895263671875&amp;sty=r&amp;lvl=8&amp;rtp=~pos.32.30847424788938_34.73895263671875____&amp;FORM=MBEDLD">Get Directions</a>
                                    </div>
                                </div>
                            </div>


                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default App;


