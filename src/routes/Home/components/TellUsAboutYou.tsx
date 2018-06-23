import { stringify } from "querystring";
import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import { multiFilter } from "../../../helpers/helpers";
import {
  issuesListMockData,
  issueType,
  technologies
} from "../../../helpers/mockData";
import { lvlOfDifficulty } from "../../../helpers/mockData";
import { IRootState } from "../../../store/reducers";
import {
  updateLanguage,
  updateLevel,
  updateType
} from "../modules/homeReducer";
import { customStyles } from "./customStyles";

interface ITellUsAboutYou {
  updateLanguage: (language: string[]) => any;
  updateLevel: (level: string) => any;
  updateType: (type: string) => any;
  showMore: boolean;
  languages: string[];
  type: string;
  level: string;
  listing: typeof issuesListMockData;
}

const getResults = (listing: typeof issuesListMockData, filter: any) => {
  const length = multiFilter(listing, filter).length;

  return (
    <React.Fragment>
      <h6 className="home-about-you-title mt-5">
        {length > 0
          ? "BECAUSE WE HAVE JUST FOR YOU"
          : " WE COULDN'T FIND ANY ISSUES BUT YOU CAN"}
      </h6>
      <Link
        to={`/issues?${length > 0 ? stringify(filter) : ""}`}
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
};

class TellUsAboutYou extends React.Component<ITellUsAboutYou, {}> {
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
    const { languages, type, listing, level } = this.props;
    const filter: {
      language: string[];
      label_type?: string;
      experience_needed?: string;
    } = { language: languages };
    if (type) {
      filter.label_type = type;
    }

    if (level) {
      filter.experience_needed = level;
    }
    return (
      <div className="pb-5">
        <h6 className="home-about-you-title mb-2">
          TELL US A BIT ABOUT YOURSELF
        </h6>
        <div className="home-about-you-magic mt-4 d-flex flex-column">
          <div>
            <p className="h2">I do my magic in</p>
            <Select
              options={technologies}
              isMulti={true}
              placeholder="type in your favorite languages"
              defaultValue={
                languages &&
                technologies.filter(tech => languages.includes(tech.value))
              }
              styles={customStyles(false)}
              onChange={this.handleLanguageChange}
            />
          </div>
          <br />
          {this.props.showMore && (
            <div>
              <p className="h2">and I’m looking for issues that are</p>
              <div className="d-inline-block">
                <Select
                  options={lvlOfDifficulty}
                  defaultValue={lvlOfDifficulty.find(
                    lvl => lvl.value === level
                  )}
                  styles={customStyles(true)}
                  onChange={this.handleLvlChange}
                />
                <span className="h2">&</span>
                <Select
                  options={issueType}
                  defaultValue={issueType.find(issue => issue.value === type)}
                  styles={customStyles(true)}
                  onChange={this.handleTypeChange}
                />
              </div>
              {getResults(listing, filter)}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    showMore: state.home.showMore,
    languages: state.home.languages,
    type: state.home.type,
    level: state.home.level,
    listing: state.issues.issuesList
  };
};

const mapDispatchToProps = {
  updateLanguage,
  updateType,
  updateLevel
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TellUsAboutYou);
