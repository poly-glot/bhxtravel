import styles from "./List.module.scss";
import Icon from "../Icon";

interface Item {
  text: string;
}

interface Props {
  items?: Item[];
}

const HtmlText = (props: Item) => {
  const { text } = props;

  return (
    <li className={styles.item}>
      <Icon icon="CircleRightRegular" className={styles.icon} />
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
    </li>
  );
};

const List = (props: Props) => {
  if (!Array.isArray(props.items)) {
    return null;
  }

  return (
    <ul className={styles.container}>
      {props.items.map((item) => (
        <HtmlText key={item.text} text={item.text} />
      ))}
    </ul>
  );
};

export default List;
