import styles from "./Heading.module.scss";
import classNames from "classnames";

interface Props {
  heading: string;
  category: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  colour: "primary" | "secondary" | "blue" | "purple" | "white";
  noBottomMargin: boolean;
}

const Heading = (props: Props) => {
  const { heading, category, noBottomMargin, colour } = props;

  if (!heading) {
    return null;
  }

  const HeadingTag: any = category ? category : "h1";

  return (
    <div
      data-colour={colour}
      className={classNames("container", styles.container, {
        [styles["container--no-margin"]]: noBottomMargin,
      })}
    >
      <HeadingTag>{heading}</HeadingTag>
    </div>
  );
};

export default Heading;
