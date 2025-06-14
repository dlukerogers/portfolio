import React, { Component } from "react";
import Switch from "@brookr/react-switch";
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from "react-router-bootstrap";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles; //...map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo(() => {
      return this.titles
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ height: window.innerHeight - 100, display: 'block' }}>
        <Nav activeKey="/home" fill style={{ position: 'absolute', top: 10, right: 10 }}>
          <Nav.Item>
            <LinkContainer to="/">
              <Nav.Link className="nav-link" href="/">Home</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/about">
              <Nav.Link className="nav-link" eventKey="about">About</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <Switch
              checked={this.state.checked}
              onChange={this.onThemeSwitchChange}
              offColor="#2E4559"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:owl"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              id="icon-switch"
            />
          </Nav.Item>
        </Nav>
        <div className="row aligner" style={{ height: '100%' }}>
          <div className="col-md-12">
            <div>
              <img src="/images/portfolio-logo.svg" alt="LR logo" style={{ width: '200px' }}></img>
              <br />
              <h1 className="mb-0">
                {name}
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>

            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
