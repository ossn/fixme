import { stringify } from 'querystring';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import scrollIntoView from 'scroll-into-view-if-needed';
import smoothScrollIntoView from 'smooth-scroll-into-view-if-needed';

import { issueType, lvlOfDifficulty, technologies } from '../../../helpers/consts';
import { IRootState } from '../../../store/reducers';
import { countIssues } from '../../Issues/modules/issuesReducer';
import { updateLanguage, updateLevel, updateType } from '../modules/homeReducer';
import { customStyles } from './customStyles';

interface ITellUsAboutYou {
  readonly updateLanguage: (language: string[]) => any;
  readonly updateLevel: (level: string) => any;
  readonly updateType: (type: string) => any;
  readonly countIssues: (args: any) => any;
  readonly language: string[];
  readonly type: string;
  readonly experience_needed: string;
  readonly issuesLength: number;
  readonly home: any;
  readonly focus: boolean;
}

const scrollIntoViewSmoothly =
  document.documentElement && "scrollBehavior" in document.documentElement.style
    ? scrollIntoView
    : smoothScrollIntoView;

const getResults = (length: number, params: any) => (
  <React.Fragment>
    <h6 className="home-about-you-title mt-5">
      {length > 0
        ? "BECAUSE WE HAVE JUST FOR YOU"
        : " WE COULDN'T FIND ANY ISSUES BUT YOU CAN"}
    </h6>
    <Link
      to={`/issues?${length > 0 ? stringify(params) : ""}`}
      className="btn home-about-you-btn d-inline-flex"
    >
      <span className="p-1">
        {length === 0
          ? "Browse All Issues"
          : length === 1
            ? "1 issue"
            : `${length} issues`}
        <i className="arrow-right" />
      </span>
    </Link>
  </React.Fragment>
);

class TellUsAboutYou extends React.Component<ITellUsAboutYou, {}> {
  public selectRef = React.createRef();
  public componentDidUpdate(prevProps: ITellUsAboutYou): void {
    if (
      prevProps.home !== this.props.home &&
      (this.props.language || []).length > 0
    ) {
      this.props.countIssues(this.props.home);
    }
    if (prevProps.focus !== this.props.focus) {
      scrollIntoViewSmoothly(
        document.getElementById("language-select") as Element,
        {
          behavior: "smooth",
          inline: "center",
          block: "center"
        } as any
      );
      setTimeout(() => {
        (this.selectRef as any).focus();
      }, 350);
    }
  }

  public handleLanguageChange = (
    values: Array<{ value: string; label: string }>
  ) => {
    this.props.updateLanguage(values.map(value => value.value));
    if (values.length <= 0) {
      this.props.updateLevel("");
      this.props.updateType("");
    }
  };
  public handleTypeChange = (value: { value: string; label: string }) => {
    this.props.updateType(value.value);
  };
  public handleLvlChange = (value: { value: string; label: string }) => {
    this.props.updateLevel(value.value);
  };
  public render() {
    const {
      language,
      type,
      issuesLength,
      experience_needed,
      home
    } = this.props;

    return (
      <div className="d-flex justify-content-center flex-column">
        <h6 className="home-about-you-title mb-2">
          TELL US A BIT ABOUT YOURSELF
        </h6>
        <div className="home-about-you-magic mt-4 d-flex flex-column">
          <div>
            <p className="h2" id="magicLabel">I do my magic in</p>
            <Select
              ref={(ref: React.RefObject<{}>) => {
                this.selectRef = ref;
              }}
              id="language-select"
              options={technologies}
			        aria-labelledby="magicLabel"
              isMulti={true}
              placeholder="type in your favorite languages"
              defaultValue={
                language &&
                technologies.filter(tech => language.includes(tech.value))
              }
              styles={customStyles(false)}
              onChange={this.handleLanguageChange}
            />
          </div>
          <br />
          {(this.props.language || []).length > 0 && (
            <div>
              <p className="h2">and I’m looking for issues that are</p>
              <div className="d-inline-block">
                <Select
                  options={lvlOfDifficulty}
                  defaultValue={lvlOfDifficulty.find(
                    lvl =>
                      !!experience_needed &&
                      experience_needed.includes(lvl.value)
                  )}
                  styles={customStyles(true)}
                  onChange={this.handleLvlChange}
                />
                <span className="h2">&</span>
                <Select
                  options={issueType}
                  defaultValue={issueType.find(
                    issue => !!type && type.includes(issue.value)
                  )}
                  styles={customStyles(true)}
                  onChange={this.handleTypeChange}
                />
              </div>
              {getResults(issuesLength, home)}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    language: state.home.language,
    type: state.home.type,
    experience_needed: state.home.experience_needed,
    issuesLength: state.issues.issuesLength,
    home: state.home
  };
};

const mapDispatchToProps = {
  updateLanguage,
  updateType,
  countIssues,
  updateLevel
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TellUsAboutYou);
