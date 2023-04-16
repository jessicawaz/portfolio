import React from "react";
import "./Section.css";
import classNames from "classnames";

export const Section = ({ sectionClass, children }) => {
  return (
    <div className={classNames("sectionWrapper", sectionClass)}>{children}</div>
  );
};
