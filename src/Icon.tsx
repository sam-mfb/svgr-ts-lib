import "./styles/Icon.scss";
import UserIcon from "./icons/user.svg";

/** Renders an SVG icon. */
export const Icon = (props: { className: string }) => {
  return <UserIcon className={`${props.className ?? ""}`} />;
};
