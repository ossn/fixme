import React from "react";
import { OutboundLink } from "react-ga";
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarToggler, NavItem } from "reactstrap";
import Logo from "./logo-fixme.svg";

export interface IFixMeNavbarState {
  readonly isOpen: boolean;
}

export default class FixMeNavbar extends React.Component<
  { white?: boolean },
  IFixMeNavbarState
  > {
  public readonly state = {
    isOpen: false
  };

  public toggleNavbar = () => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  };
  public render() {
    const { white } = this.props;
    return (
      <div>
        <Navbar expand="md" light={white} dark={!white}>
          <NavLink className="mr-auto navbar-brand" to="/">
            <img src={Logo} className="d-inline-block align-top" alt="FixMe" />
          </NavLink>
          <NavbarToggler aria-label="Navigation Toggler" onClick={this.toggleNavbar} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              <NavItem>
                <NavLink className="nav-link" to="/issues">
                  Issues
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/projects">
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </NavItem>

              <NavItem>
                <OutboundLink
                  aria-label="fixme's facebook"
                  className="nav-link"
                  target="_blank"
                  to="#"
                  eventLabel="Facebook on menu clicked"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </OutboundLink>
              </NavItem>

              <NavItem>
                <OutboundLink
                  aria-label="fixme's twitter"
                  className="nav-link"
                  target="_blank"
                  to="https://twitter.com/fixmeparser"
                  eventLabel="Twitter on menu clicked"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </OutboundLink>
              </NavItem>

              <NavItem>
                <OutboundLink
                  aria-label="fixme's github"
                  className="nav-link"
                  target="_blank"
                  to="https://github.com/ossn"
                  eventLabel="Github on menu clicked"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </OutboundLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
