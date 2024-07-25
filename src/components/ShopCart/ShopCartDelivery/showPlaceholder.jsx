import { components } from "react-select";
import { Fragment } from "react";

export function SingleValue(props) {
  const { children, ...rest } = props;
  const { selectProps } = props;
  let contents = children;
  if (selectProps.menuIsOpen) {
    contents = selectProps.placeholder ? (
      <div style={{ color: "#999" }}>{selectProps.placeholder}</div>
    ) : (
      <Fragment></Fragment>
    );
  }
  return <components.SingleValue {...rest}>{contents}</components.SingleValue>;
}
