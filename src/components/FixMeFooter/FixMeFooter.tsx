import React from "react";
import Left from "./assets/illustration-footer-left.svg";
import Right from "./assets/illustration-footer-right.svg";
import Logo from "./assets/moz-logo-white.svg";
const FixMeFooter: React.SFC<{}> = () => (
  <section className="container-fluid fixme-footer">
    <div className="container d-flex">
      <img className="fixme-footer-left" src={Left} alt="" />
      <div className="d-flex flex-column justify-content-around m-auto">
        <div className="d-flex flex-column justify-content-center">
          <img src={Logo} alt="" />
          <span className="mt-2 small fixme-footer-moz-text">
            Mozilla is a global non-profit dedicated to putting you in control
            of your online experience and shaping the future of the web for the
            public good. Visit us at mozilla.org
          </span>
        </div>
      </div>
      <img src={Right} alt="mozilla" />
    </div>
  </section>
);

export default FixMeFooter;
