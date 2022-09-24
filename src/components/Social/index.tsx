import styles from "./Social.module.scss";
import * as IconList from "../Icons";
import Icon from "../Icon";

interface Social {
  link: string;
  icon: keyof typeof IconList;
}

interface Props {
  sociallinks?: Social[];
}

const SocialItem = (props: Social) => {
  const { link, icon } = props;

  return (
    <a className={styles.item} href={link}>
      <Icon icon={icon} className={styles.icon} />
    </a>
  );
};

const Social = (props: Props) => {
  if (!Array.isArray(props.sociallinks)) {
    return null;
  }

  return (
    <div className={styles.container}>
      {props.sociallinks.map((sociallink) => (
        <SocialItem
          key={sociallink.icon}
          link={sociallink.link}
          icon={sociallink.icon}
        />
      ))}
    </div>
  );
};

export default Social;
