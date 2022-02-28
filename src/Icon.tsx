import React from "react";
import "./styles/Icon.scss";
import UserIcon from "./icons/user.svg";

type SvgReactComponent = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string;
  }
>;

/** Renders an SVG icon. */
export const Icon = (props: { className: string }) => {
  return (
    <SvgComponent
      className={`${name.toLowerCase()}-icon icon ${size ? size : ""} ${
        className ? className : ""
      }`}
    />
  );
};
