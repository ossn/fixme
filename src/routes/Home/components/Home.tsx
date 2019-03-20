import React from "react";
import { Link } from "react-router-dom";
import FixMeFooter from "../../../components/FixMeFooter/FixMeFooter";
import FixMeMetas from "../../../components/FixMeMetas/FixMeMetas";
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

public handleClick = () => {
  const scrolltoMid = document.getElementById('tellusaboutyou');
  if(!!scrolltoMid){
    scrolltoMid.scrollIntoView({ block: 'center',  behavior: 'smooth' });
    setTimeout(() => {
      this.setState(state => ({ focusSelect: !state.focusSelect }));
    }, 400);
  }
}

  public render(){
    const {projectLength} = this.props
  return (
    <div className="row home-container">
      <FixMeMetas title="Fixme" description="FixMe is a platform that helps contributors find opensource projects that best fit their skills and abilities."/>
      <section className="home-section container">
        <FixMeNavbar />
        <div className="row">
          <div className="col-md-4 d-flex flex-column justify-content-center align-middle">
            <h2 className="home-call-to-action-text mb-5">
              You are a <span className="extra-bold">coder</span>.
              Open-source projects need{" "}
              <span className="extra-bold">your skills</span>.
              <br /> <br />We’ll connect you with meaningful contribution opportunities!
            </h2>
            <button onClick={this.handleClick} className="btn btn-lg learn-more">LEARN MORE</button>
          </div>
          <div className="col-md-8">
            <img
              className="img-fluid home-illustration-img"
              src={Illustration}
              alt=""
            />
          </div>
        </div>
      </section>
      <section id="tellusaboutyou" className="home-section container-fluid home-about-you">
        <div className="container d-flex justify-content-center">
          <TellUsAboutYou focus={this.state.focusSelect}/>
        </div>
      </section>
      <section className="container-fluid home-project">
      <div className="container">
        <div className="d-flex row">
          <div className="col-md-6 col-12 d-flex">
            <h4 className="home-project-text py-5 m-auto">
                <Link to="/projects" className="home-project-link">{`${projectLength === 1 ? "1 project" :`${projectLength} projects`}`} </Link> on board <br /> <span>(and counting…)</span>
            </h4>
          </div>
          <div className="col-md-6 col-12 h-100">
            <img className="img-fluid home-project-img" src={GroupCopy} alt="projects" />
          </div>
        </div>
        </div>
      </section>
      <section className="home-section container-fluid home-twitter pb-3">
      <div className="row">
        <div className="container mb-4 mt-4">
          <div className="row">
            <div className="col-md-5 col-12 d-flex justify-content-center">
              <div className="justify-content-center d-flex mb-3 flex-column">
                <h2>@fixmeparser</h2>
                <span>our latest tweets</span>
              </div>
              <div className="justify-content-start">
              <img src={LoudSpeaker} alt="" className="img-fluid"/>
            </div></div>
            <div className="col-md-7 col-12" >
              <div className="home-twitter-tweet">Latest issue to fix for project Bootstrap! HELP! https://fixmeparser.com/issues#1825 </div>
            </div>
          </div></div>
        </div>
      </section>
      <FixMeFooter />
    </div>
  )
}}
