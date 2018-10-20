import * as React from "react";
import { Link } from "react-router-dom";
import FixMeFooter from "../../../components/FixMeFooter/FixMeFooter";
import FixMeNavbar from "../../../components/FixMeNavbar/FixMeNavbar";
import { customPageView } from '../../../helpers/helpers';
import "../../../styles/home.css";
import GroupCopy from "./assets/group-copy@2x.png";
import LoudSpeaker from "./assets/icon-loudspeaker.svg"
import Illustration from "./assets/illustration.png";
import TellUsAboutYou from "./TellUsAboutYou";
interface IHomeProps {
  readonly getProjects: () => any;
  readonly projectLength: number;
   readonly updateLanguage: (language: string[]) => any;
  readonly updateLevel: (level?:string) => any;
  readonly updateType: (type?: string) => any;

}
export default class Home extends React.PureComponent<IHomeProps,{
  readonly focusSelect: boolean;
}>{

  public  readonly state = { focusSelect: false }

  public componentDidMount(): void {
    this.props.getProjects()
    customPageView(window.location.pathname + window.location.search);

  }

  public componentWillUnmount() {
    this.props.updateLanguage([]);
    this.props.updateLevel();
    this.props.updateType();
  }

public onClick=()=> {
  this.setState(state => ({ focusSelect: !state.focusSelect}))
}

  public render(){
    const {projectLength} = this.props
  return (
    
   React.createElement(
  "div",
  { className: "row home-container" },
  React.createElement(
    "section",
    { className: "home-section container" },
    React.createElement(FixMeNavbar, null),
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-md-4 d-flex flex-column justify-content-center align-middle" },
        React.createElement(
          "h2",
          { className: "home-call-to-action-text mb-5" },
          " You are a ",
          React.createElement(
            "span",
            { className: "extra-bold" },
            "coder"
          ),
          ". Open-source projects need your skills. We\u2019ll connect you with meaningful contribution opportunities!>"
        ),
        React.createElement(
          "button",
          { onClick: this.onClick, className: "btn btn-lg learn-more" },
          "LEARN MORE"
        )
      ),
      React.createElement(
        "div",
        { className: "col-md-8" },
        React.createElement("img", { className: "img-fluid home-illustration-img", src: Illustration, alt: "" })
      )
    )
  )
);
    React.createElement(
  "div",
  { className: "row home-container" },
  React.createElement(
    "section",
    { className: "home-section container-fluid home-about-you" },
    React.createElement(
      "div",
      { className: "container d-flex justify-content-center" },
      React.createElement(TellUsAboutYou, { focus: this.state.focusSelect })
    )
  ),
  React.createElement(
    "section",
    { className: "container-fluid home-project" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "d-flex row" },
        React.createElement(
          "div",
          { className: "col-md-6 col-12 d-flex" },
          React.createElement(
            "h4",
            { className: "home-project-text py-5 m-auto" },
            React.createElement(
              Link,
              { to: "/projects", className: "home-project-link" },
              `${projectLength === 1 ? "1 project" : `${projectLength} projects`}`,
              " "
            ),
            " on board ",
            React.createElement("br", null),
            React.createElement(
              "span",
              null,
              "(and counting\u2026)"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "col-md-6 col-12 h-100" },
          React.createElement("img", { className: "img-fluid home-project-img", src: GroupCopy, alt: "projects" })
        )
      )
    )
  ),
  React.createElement(
    "section",
    { className: "home-section container-fluid home-twitter pb-3" },
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "container mb-4 mt-4" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-5 col-12 d-flex justify-content-center" },
            React.createElement(
              "div",
              { className: "justify-content-center d-flex mb-3 flex-column" },
              React.createElement(
                "h2",
                null,
                "@fixmeparser"
              ),
              React.createElement(
                "span",
                null,
                "our latest tweets"
              )
            ),
            React.createElement(
              "div",
              { className: "justify-content-start" },
              React.createElement("img", { src: LoudSpeaker, alt: "", className: "img-fluid" })
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-7 col-12" },
            React.createElement(
              "div",
              { className: "home-twitter-tweet" },
              "Latest issue to fix for project Bootstrap! HELP! https://fixmeparser.com/issues#1825 "
            )
          )
        )
      )
    )
  ),
  React.createElement(FixMeFooter, null)
);
