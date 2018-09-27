import * as React from "react";
import { OutboundLink } from "react-ga";
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
    const fill = white ? "#282a3a" : "#FAFAFA";
    return (
      <div>
        <Navbar expand="md" light={white} dark={!white}>
          <NavLink className="mr-auto navbar-brand" to="/">
            <img src={Logo} className="d-inline-block align-top" alt="FixMe" />
          </NavLink>
          <NavbarToggler onClick={this.toggleNavbar} />
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
              {/* facebook
               <NavItem>
                <a className="nav-link" target="_blank" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path
                      fill={fill}
                      fillRule="evenodd"
                      d="M15.99 0H2.01C1.452 0 .977.198.587.595A1.95 1.95 0 0 0 0 2.011v13.998c0 .546.195 1.015.586 1.405.39.39.865.586 1.425.586H9v-6.99H7.009V8.532H9v-2.05c0-1.08.31-1.965.927-2.655.619-.69 1.565-1.034 2.84-1.034h1.797v2.616h-1.19c-.495 0-.847.153-1.055.459a1.69 1.69 0 0 0-.312.966v1.698h2.557l-.566 2.48h-1.991V18h3.982a1.94 1.94 0 0 0 1.425-.586c.39-.39.586-.859.586-1.405V2.01a1.95 1.95 0 0 0-.586-1.416A1.924 1.924 0 0 0 15.99 0z"
                    />
                  </svg>
                </a>
              </NavItem>
             */}
              <NavItem>
                <OutboundLink
                  className="nav-link"
                  target="_blank"
                  to="https://twitter.com/fixmeparser"
                  eventLabel="Twitter on menu clicked"
                  rel="noopener"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                  >
                    <path
                      fill={fill}
                      fillRule="evenodd"
                      d="M17.064 4.213v.489c0 1.254-.242 2.52-.726 3.8a10.83 10.83 0 0 1-2.128 3.465c-.935 1.032-2.091 1.874-3.47 2.526-1.378.653-2.968.98-4.77.98-1.102 0-2.158-.15-3.166-.45A11.486 11.486 0 0 1 0 13.768l.454.04a7.816 7.816 0 0 0 3.076-.411A8.136 8.136 0 0 0 5.769 12.2a3.836 3.836 0 0 1-2.27-.754 3.661 3.661 0 0 1-1.361-1.87c.108.026.225.043.353.05.128.006.252.01.373.01.175 0 .35-.01.525-.03.174-.02.342-.05.504-.088a3.918 3.918 0 0 1-2.229-1.312 3.57 3.57 0 0 1-.898-2.409v-.03-.01c.256.131.535.239.838.324.302.085.608.134.917.147a3.829 3.829 0 0 1-1.26-1.342 3.598 3.598 0 0 1-.474-1.811 3.47 3.47 0 0 1 .545-1.9 9.906 9.906 0 0 0 1.603 1.557A12.07 12.07 0 0 0 4.85 3.948c.679.346 1.398.62 2.158.823.76.202 1.543.323 2.35.362a2.427 2.427 0 0 1-.08-.43 4.619 4.619 0 0 1-.021-.431c0-.523.1-1.015.303-1.479.201-.463.48-.865.837-1.204.356-.34.77-.61 1.24-.813.47-.202.975-.303 1.513-.303.565 0 1.092.107 1.583.323.49.215.911.506 1.26.871a7.237 7.237 0 0 0 1.292-.352 8.91 8.91 0 0 0 1.19-.549 3.876 3.876 0 0 1-1.714 2.076c.39-.04.772-.108 1.149-.206.376-.097.74-.225 1.089-.381a7.505 7.505 0 0 1-1.936 1.958z"
                    />
                  </svg>
                </OutboundLink>
              </NavItem>
              {/* github
              <NavItem>
                <a className="nav-link" target="_blank" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                  >
                    <path
                      fill={fill}
                      fillRule="evenodd"
                      d="M10.5.976c-1.45 0-2.81.267-4.081.802a10.525 10.525 0 0 0-3.353 2.194c-.95.929-1.699 2.02-2.246 3.277A9.789 9.789 0 0 0 0 11.237a9.87 9.87 0 0 0 .533 3.246A10.239 10.239 0 0 0 2.02 17.3a10.165 10.165 0 0 0 2.287 2.214 10.728 10.728 0 0 0 2.87 1.463c.26.04.445 0 .554-.12a.56.56 0 0 0 .165-.38v-.722c0-.36-.007-.755-.021-1.183-1.45.308-2.4.184-2.85-.37l-.677-.832c-.246-.601-.503-1.002-.77-1.202l-.4-.301c-.478-.32-.584-.504-.317-.551l.4-.07c.52.027.916.207 1.19.54l.41.502c.464.788 1.014 1.162 1.65 1.122.636-.04 1.104-.127 1.405-.26.055-.334.144-.615.267-.842a1.97 1.97 0 0 1 .41-.541 8.74 8.74 0 0 1-1.743-.34 4.45 4.45 0 0 1-1.538-.812c-.452-.368-.814-.866-1.087-1.493-.288-.628-.431-1.437-.431-2.425 0-.561.096-1.07.287-1.523.191-.455.458-.862.8-1.223-.055-.133-.123-.444-.205-.932-.082-.487.02-1.085.307-1.793l.687.03c.458.02 1.193.364 2.205 1.032.41-.12.837-.207 1.282-.26a11.24 11.24 0 0 1 2.686 0c.445.053.872.14 1.282.26.998-.668 1.73-1.012 2.194-1.032l.698-.03c.287.708.39 1.306.307 1.793-.082.488-.15.799-.205.932.342.36.609.768.8 1.223.191.454.287.962.287 1.523 0 .988-.143 1.797-.43 2.425-.274.627-.64 1.125-1.098 1.493a4.559 4.559 0 0 1-1.548.811c-.56.16-1.135.274-1.723.34.192.161.36.398.503.712.143.314.215.712.215 1.193 0 .681-.003 1.279-.01 1.793-.007.515-.01.852-.01 1.012 0 .134.054.264.164.391.109.127.293.164.553.11a11.06 11.06 0 0 0 2.892-1.463 10.239 10.239 0 0 0 3.753-5.03A9.87 9.87 0 0 0 21 11.237a9.789 9.789 0 0 0-.82-3.988 10.255 10.255 0 0 0-2.246-3.277 10.525 10.525 0 0 0-3.353-2.194A10.424 10.424 0 0 0 10.5.976z"
                    />
                  </svg>
                </a>
              </NavItem>
             */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
