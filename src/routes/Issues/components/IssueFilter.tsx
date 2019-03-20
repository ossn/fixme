import React from "react";
import { IParams } from "./Issues";

interface IssueCardProps {
  options: Array<{ value: string; label: string }>;
  handleChange: (checked: boolean, value: string, filterType: string) => any;
  params: IParams;
  propKey: string | number;
  defaultValue: string;
}

const IssueFilter: React.SFC<IssueCardProps> = ({
  options,
  handleChange,
  params,
  propKey,
  defaultValue
}) => (
  <React.Fragment>
    {options.map(({ value, label }) => (
      <div
        key={value + propKey}
        className="form-check d-flex align-items-center align-content-center mb-2"
      >
        <input
          className="form-check-input"
          type="checkbox"
          defaultChecked={
            params[defaultValue] && Array.isArray(params[defaultValue])
              ? params[defaultValue].includes((value || "").toString())
              : params[defaultValue] === (value || "").toString()
          }
          // tslint:disable-next-line:jsx-no-lambda
          onChange={e =>
            handleChange(e.currentTarget.checked, value, defaultValue)
          }
          key={value}
          id={value + defaultValue}
        />
        <label
          className="form-check-label pl-4 mb-0"
          htmlFor={value + defaultValue}
        >
          {label}
        </label>
      </div>
    ))}
  </React.Fragment>
);

export default IssueFilter;
