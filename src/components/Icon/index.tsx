import styles from "./Icon.module.scss";
import * as IconList from "../Icons";
import classNames from "classnames";

interface Props {
  icon?: keyof typeof IconList;
  width?: string;
  height?: string;
  className?: string;
}

const Icon = (props: Props) => {
  let { icon, width, height } = props;

  if (!icon) {
    return null;
  }

  const PossibleIcon = IconList[icon];
  if (!PossibleIcon) {
    return null;
  }

  width = width || "24px";
  height = height || "24px";

  return (
    <PossibleIcon
      className={classNames([styles.icon, props.className])}
      width={width}
      height={height}
    />
  );
};

export default Icon;
