import * as React from "react";
import FixMeFooter from "../../../components/FixMeFooter/FixMeFooter";
import FixMeNavbar from "../../../components/FixMeNavbar/FixMeNavbar";
import "../../../styles/home.css";
import GroupCopy from "./assets/group-copy@2x.png";
import LoudSpeaker from "./assets/icon-loudspeaker.svg"
import Illustration from "./assets/illustration.png";
import TellUsAboutYou from "./TellUsAboutYou";
interface IHomeProps {
  readonly languages: string;
}
export const Home: React.SFC<IHomeProps> = ({}) => {
  return (
    <div className="row home-container">
      <section className="container">
        <FixMeNavbar />
        <div className="row">
          <div className="col-4 d-flex flex-column justify-content-center align-middle">
            <h2 className="home-call-to-action-text mb-5">
              You are a <span className="extra-bold">code ninja</span>.
              Open-source projects need{" "}
              <span className="extra-bold">your skills</span>.
              <br /> <br />We’ll fix you up!
            </h2>
            <button className="btn btn-lg learn-more">LEARN MORE</button>
          </div>
          <div className="col-8">
            <img
              className="img-fluid home-illustration-img"
              src={Illustration}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="container-fluid home-about-you">
        <div className="container">
          <TellUsAboutYou />
        </div>
      </section>
      <section className="container-fluid home-project">
      <div className="container">
        <div className="d-flex row">
          <div className="col-6 d-flex">
            <h4 className="home-project-text m-auto">
              24 projects on board <br /> <span>(and counting…)</span>
            </h4>
          </div>
          <div className="col-6">
            <img className="img-fluid home-projects-img" src={GroupCopy} alt="projects" />
          </div>
        </div>
        </div>
      </section>
      <section className="container-fluid home-twitter pb-3">
        <div className="container mb-4 mt-4">
          <div className="row">
            <div className="col-5 d-flex justify-content-center">
              <div className="justify-content-center d-flex flex-column">
                <h2>@fixmeparser</h2>
                <span>our latest tweets</span>
              </div>
              <div className="justify-content-start">
              <img src={LoudSpeaker} alt="" className="img-fluid"/>
            </div></div>
            <div className="col-7" >
              <div className="home-twitter-tweet">Latest issue to fix for project Bootstrap! HELP! https://fixmeparser.com/issues#1825 </div>
            </div>
          </div>
        </div>
      </section>
      <FixMeFooter />
    </div>
  );
};
export default Home;
