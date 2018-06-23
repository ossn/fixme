import * as React from "react";

import FixMeFooter from "../../../components/FixMeFooter/FixMeFooter";
import FixMeNavbar from "../../../components/FixMeNavbar/FixMeNavbar";
import { shade } from "../../../helpers/colors";
import "../../../styles/projects.css";

const gradient = (color: string) => ({
  background: `linear-gradient(to bottom, ${shade(
    color,
    0.4
  )} 0%,${color} 100%)`
});

export const Projects: React.SFC<{}> = ({}) => {
  return (
    <div className="row projects-container">
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
          {[
            {
              color: "#f52664",
              title: "Moz",
              issueCount: 150,
              setup: "20 min",
              tags: ["HTML", "Rust", "Some long shit"],
              logo:
                "https://upload.wikimedia.org/wikipedia/commons/d/d2/Firefox_Logo%2C_2017.png",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc et "
            },
            {
              color: "#f52664",
              title: "Moz",
              issueCount: 150,
              setup: "20 min",
              tags: ["HTML", "Rust", "Some long shit"],
              logo:
                "https://upload.wikimedia.org/wikipedia/commons/d/d2/Firefox_Logo%2C_2017.png",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc et "
            },
            {
              color: "#f52664",
              title: "Moz",
              issueCount: 150,
              setup: "20 min",
              tags: ["HTML", "Rust", "Some long shit"],
              logo:
                "https://upload.wikimedia.org/wikipedia/commons/d/d2/Firefox_Logo%2C_2017.png",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc et "
            },
            {
              color: "#f52664",
              title: "Moz",
              issueCount: 150,
              setup: "20 min",
              tags: ["HTML", "Rust", "Some long shit"],
              logo:
                "https://upload.wikimedia.org/wikipedia/commons/d/d2/Firefox_Logo%2C_2017.png",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc et "
            },
            {
              color: "#f52664",
              title: "Moz",
              issueCount: 150,
              setup: "20 min",
              tags: ["HTML", "Rust", "Some long shit"],
              logo:
                "https://upload.wikimedia.org/wikipedia/commons/d/d2/Firefox_Logo%2C_2017.png",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc et "
            },
            {
              color: "#f52664",
              title: "Moz",
              issueCount: 150,
              setup: "20 min",
              tags: ["HTML", "Rust", "Some long shit"],
              logo:
                "https://upload.wikimedia.org/wikipedia/commons/d/d2/Firefox_Logo%2C_2017.png",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc et "
            },
            {
              color: "#f52664",
              title: "Moz",
              issueCount: 150,
              setup: "20 min",
              tags: ["HTML", "Rust", "Some long shit"],
              logo:
                "https://upload.wikimedia.org/wikipedia/commons/d/d2/Firefox_Logo%2C_2017.png",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc et "
            },
            {
              color: "#f52664",
              title: "Moz",
              issueCount: 150,
              setup: "20 min",
              tags: ["HTML", "Rust", "Some long shit"],
              logo:
                "https://upload.wikimedia.org/wikipedia/commons/d/d2/Firefox_Logo%2C_2017.png",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc et "
            }
          ].map(
            ({ color, title, issueCount, setup, tags, logo, description }) => (
              <div className="col-12 col-md-6 col-lg-4" key={title}>
                <div
                  style={gradient(color)}
                  className="d-flex flex-column justify-content-between projects-tile-wrapper my-1"
                >
                  <div className="d-flex justify-content-between projects-tile-top-wrapper">
                    <h3>{title}</h3>
                    <div className="projects-tile-top-issues">
                      <span>
                        {issueCount} {issueCount > 0 ? "issues" : "issue"}
                      </span>
                      <br />
                      <span className="small">{setup} setup</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end projects-tile-bottom-wrapper">
                    <div className="projects-tile-tag-wrapper pb-2 ml-2">
                      {tags.map(tag => (
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
                  </div>
                  <div style={{ display: "none" }} className="hover">
                    {description}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
      <section className="container">
        <h3 className="mb-4 projects-include-title">
          Want to include your project here?
        </h3>
        <p className="text-justify">
          Great! Here’s what you need to know: lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nunc et tincidunt dui, ut egestas tortor.
          Vestibulum non ullamcorper lacus. Ut sed porttitor dolor. Fusce at
          interdum justo, vel lacinia sem. Ut accumsan pulvinar porttitor. Ut
          consequat sem vel molestie pellentesque. Duis id bibendum nisi, vitae
          vestibulum magna. Proin gravida sit amet diam lacinia faucibus.
          Praesent eu porttitor nibh. Praesent volutpat, tortor nec sollicitudin
          aliquam, lectus neque tempus leo, non ornare sem ex in dolor.
          <br />
          <br />
          Maecenas hendrerit enim sed tellus gravida gravida. Ut vitae est id
          sapien imperdiet tincidunt sit amet in purus. Proin convallis velit ut
          pellentesque dapibus. Nunc sit amet fringilla urna. Morbi vel justo
          mollis, auctor nisi eu, mattis nulla. Nam a libero a justo imperdiet
          ultrices sit amet lacinia nisl. Nam molestie ornare neque sit amet
          porttitor. Suspendisse mauris neque, volutpat ultricies malesuada in,
          euismod fringilla tellus. Donec lobortis varius eros et imperdiet. In
          a tortor nisl. Ut sollicitudin molestie massa, a vehicula diam
          volutpat id. Quisque ultricies velit quis tellus hendrerit, ac
          condimentum velit rutrum. Aenean elementum auctor consequat. Quisque
          dignissim arcu et risus efficitur egestas.{" "}
        </p>
      </section>
      <FixMeFooter />
    </div>
  );
};
export default Projects;
