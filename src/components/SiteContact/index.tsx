import styles from "./SiteContact.module.scss";
import * as IconList from "../Icons";
import Icon from "../Icon";

interface Contact {
  heading: string;
  subheading: string;
  icon: keyof typeof IconList;
}

interface Props {
  contacts?: Contact[];
}

const SiteContactItem = (props: Contact) => {
  const { heading, subheading, icon } = props;

  return (
    <div className={styles.item}>
      <Icon icon={icon} className={styles.icon} />
      <div className={styles.heading}>{heading}</div>
      <div className={styles.subheading}>{subheading}</div>
    </div>
  );
};

const SiteContact = (props: Props) => {
  if (!Array.isArray(props.contacts)) {
    return null;
  }

  return (
    <div className={styles.container}>
      {props.contacts.map((contact) => (
        <SiteContactItem
          key={contact.heading}
          heading={contact.heading}
          subheading={contact.subheading}
          icon={contact.icon}
        />
      ))}
    </div>
  );
};

export default SiteContact;
