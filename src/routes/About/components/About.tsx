import React from "react";
import FixMeFooter from "../../../components/FixMeFooter/FixMeFooter";
import FixMeMetas from "../../../components/FixMeMetas/FixMeMetas";
import FixMeNavbar from "../../../components/FixMeNavbar/FixMeNavbar";
import SectionThree from "./assets/section-three.svg";
import SectionTwo from "./assets/section-two.svg";
import SectionOne from "./assets/SectionOne.svg";

import "../../../styles/about.css";

export default class About extends React.PureComponent {


    public render() {
        return (
            <div className=" about-container">
                <FixMeMetas title="Fixme | About" description="FixMe is a platform that helps contributors find opensource projects that best fit their skills and abilities." />
                <section className=" container">
                    <FixMeNavbar white={true} />
                    <div className="container">
                        <div className="row mt-5">
                            <h2 className="about-title">About FixMe</h2>
                        </div>
                        <div className="row mb-5">
                            <p className="about-intro">FixMe is an opensource platform maintained by the Open Source Students Network affiliated to Mozilla</p>
                        </div>
                    </div>
                </section>
                <div className="about-body">
                    <section className=" container">
                        <div className="container">
                            <div className="row mt-5 mb-5">
                                <div className="col-md-6  my-auto">
                                    <h3 className="about-sub-headings">What does this platform do?</h3>
                                    <p className="mt-4">
                                        This platform helps contributors find open source projects that are a good fit for their skills and abilities, so that they can start contributing to open source. All of these projects have been vetted to ensure that they’re active, healthy, and ready for beginner contributions.
                            </p>
                                </div>
                                <div className="col-md-6 text-center">
                                    <img
                                        src={SectionOne}
                                        alt="sectionOne.svg"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="mid-section ">
                        <section className=" container">
                            <div className="container">
                                <div className="row ">
                                    <div className="col-md-6 mt-5 mb-5 text-center">
                                        <img
                                            src={SectionTwo}
                                            alt="sectionTwo.svg"
                                        />
                                    </div>
                                    <div className="col-md-6 mt-5 mb-5  my-auto">
                                        <h3 className="about-sub-headings">Why do you need the platform?</h3>
                                        <p className="mt-4">
                                            Our research found that while many people are interested in contributing to open source, one of the biggest barriers to getting started was difficulty in finding an appropriate project that was a match for their skills, and abilities. This platform acts as a filtering system to help people overcome that initial obstacle and find a project that is right for them.
                            </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section className=" container">
                        <div className="container">
                            <div className="row mt-5 mb-5">
                                <div className="col-md-6  my-auto">
                                    <h3 className="about-sub-headings">How to use the platform?</h3>
                                    <p className="mt-4">
                                        On the home page describe the programming languages you're comfortable using, once you put in a language, the site will ask you more about what kinds of issues you're looking for. It will then search the projects and surface issues that match your criteria. Give it a try!
                                </p>
                                </div>
                                <div className="col-md-6 text-center">
                                    <img
                                        src={SectionThree}
                                        alt="sectionThree.svg"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <FixMeFooter />
            </div>
        )
    }
}
