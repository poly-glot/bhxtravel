import React from "react";
import styles from "./Cta.module.scss";

export interface ButtonProps {
  text?: string;
  link?: string;
  openLinkInNewTab?: boolean;
}

const Cta = (props: ButtonProps) => {
  const { link, text, openLinkInNewTab } = props;
  const Tag = link ? "a" : "span";

  return (
    <div>
      <Tag
        role="button"
        href={link}
        target={openLinkInNewTab ? "_blank" : undefined}
        className={styles.cta}
      >
        {text}
      </Tag>
    </div>
  );
};

export default Cta;
