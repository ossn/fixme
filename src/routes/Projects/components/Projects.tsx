import * as React from "react";
import { Link } from "react-router-dom";
import FixMeFooter from "../../../components/FixMeFooter/FixMeFooter";
import FixMeNavbar from "../../../components/FixMeNavbar/FixMeNavbar";
import { shade } from "../../../helpers/colors";
import { customPageView } from "../../../helpers/helpers";
import "../../../styles/projects.css";
import { IProject } from "../modules/projectReducer";

const gradient = (firstColor: string, secondColor: string) => ({
  background: `linear-gradient(to bottom, ${
    secondColor ? firstColor : shade(firstColor, 0.4)
  } 0%,${secondColor ? secondColor : firstColor} 100%)`
});

interface IProjectProps {
  readonly projects: IProject[];
  readonly getProjects: () => any;
}

export default class Projects extends React.PureComponent<IProjectProps, {}> {
  public componentDidMount(): void {
    this.props.getProjects();
    customPageView(window.location.pathname + window.location.search);
  }
  public render() {
    const { projects } = this.props;
    return (
      <div className="projects-container">
        <section className="container">
          <FixMeNavbar white={true} />
          <div className="container">
            <div className="row my-5">
              <h2 className="projects-title">The Projects</h2>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row">
            {projects.map(
              ({
                id,
                first_color,
                second_color,
                display_name,
                issues_count,
                setup_duration,
                tags,
                logo,
                description
              }) => (
                <div className="col-12 col-md-6 col-lg-4" key={id}>
                  <Link to={`issues?project_id=${id}`}>
                    <div
                      style={gradient(first_color, second_color)}
                      className="d-flex flex-column justify-content-between projects-tile-wrapper my-1"
                    >
                      <div className="d-flex justify-content-between projects-tile-top-wrapper">
                        <h3>{display_name}</h3>
                        <div className="projects-tile-top-issues">
                          <span>
                            {issues_count}{" "}
                            {issues_count === 1 ? "issue" : "issues"}
                          </span>
                          <br />
                          <span className="small">{setup_duration} setup</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-end projects-tile-bottom-wrapper">
                        <div className="projects-tile-tag-wrapper pb-2 ml-2">
                          {(tags || []).map(tag => (
                            <span className="projects-tile-tag mr-1" key={tag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="projects-tile-logo-wrapper">
                          <img
                            className="img-fluid projects-tile-logo"
                            src={logo}
                            alt="logo"
                          />
                        </div>
                        <div className="projects-description">
                          <p className="projects-description-text">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            )}
            <div className="col-12 col-md-6 col-lg-4">
              <Link to="issues">
                <div
                  style={{
                    background:
                      "linear-gradient(to bottom,#A01B60 0%,#49294E 100%)"
                  }}
                  className="d-flex flex-column projects-tile-wrapper my-1"
                >
                  <div className="mx-auto mt-4">
                    <h4>Just wanna help?</h4>
                  </div>
                  <div className="m-auto">
                    <h2>All issues</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="container mt-5">
          <h3 className="mb-4 projects-include-title">
            Want to include your project here?
          </h3>
          <p className="text-justify pb-5 mb-5">
            Great! Here’s what you need to know: lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc et tincidunt dui, ut egestas
            tortor. Vestibulum non ullamcorper lacus. Ut sed porttitor dolor.
            Fusce at interdum justo, vel lacinia sem. Ut accumsan pulvinar
            porttitor. Ut consequat sem vel molestie pellentesque. Duis id
            bibendum nisi, vitae vestibulum magna. Proin gravida sit amet diam
            lacinia faucibus. Praesent eu porttitor nibh. Praesent volutpat,
            tortor nec sollicitudin aliquam, lectus neque tempus leo, non ornare
            sem ex in dolor.
            <br />
            <br />
            Maecenas hendrerit enim sed tellus gravida gravida. Ut vitae est id
            sapien imperdiet tincidunt sit amet in purus. Proin convallis velit
            ut pellentesque dapibus. Nunc sit amet fringilla urna. Morbi vel
            justo mollis, auctor nisi eu, mattis nulla. Nam a libero a justo
            imperdiet ultrices sit amet lacinia nisl. Nam molestie ornare neque
            sit amet porttitor. Suspendisse mauris neque, volutpat ultricies
            malesuada in, euismod fringilla tellus. Donec lobortis varius eros
            et imperdiet. In a tortor nisl. Ut sollicitudin molestie massa, a
            vehicula diam volutpat id. Quisque ultricies velit quis tellus
            hendrerit, ac condimentum velit rutrum. Aenean elementum auctor
            consequat. Quisque dignissim arcu et risus efficitur egestas.{" "}
          </p>
        </section>
        <FixMeFooter />
      </div>
    );
  }
}
