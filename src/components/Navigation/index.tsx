import NavLink from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import styles from "./Navigation.module.scss";

interface Link {
  text: string;
  url: string;
}

interface Props {
  links?: Link[];
}

export const isActive = (currentPath: string, authoredPath: string) => {
  if (!currentPath || !authoredPath) {
    return false;
  }

  if (currentPath === "/") {
    return currentPath === authoredPath;
  }

  return authoredPath.indexOf(currentPath) > -1;
};

export const NavigationLink = (props: Link) => {
  const { text, url } = props;
  const { asPath } = useRouter();

  const classes = classNames({
    [styles.link]: true,
    [styles["link-active"]]: isActive(asPath, url),
  });

  return (
    <NavLink href={url} className={classes}>
      {text}
    </NavLink>
  );
};

const Navigation = (props: Props) => {
  const { asPath } = useRouter();

  if (!Array.isArray(props.links)) {
    return null;
  }

  return (
    <div className={styles.container}>
      {props.links.map((link) => (
        <NavigationLink
          key={link.url + asPath}
          text={link.text}
          url={link.url}
        />
      ))}
    </div>
  );
};

export default Navigation;
