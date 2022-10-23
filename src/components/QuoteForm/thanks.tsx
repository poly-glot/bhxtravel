import styles from "./QuoteForm.module.scss";

interface Props {
  message: string;
  onClose: any;
}

const Thanks = ({ onClose, message }: Props) => {
  return (
    <div className={styles.thanks} data-testid="success">
      <svg viewBox="0 0 128 128" width={128} height={128}>
        <g>
          <circle fill="#31AF91" cx="64" cy="64" r="64" />
          <path
            fill="#FFFFFF"
            d="M54.3,97.2L24.8,67.7c-0.4-0.4-0.4-1,0-1.4l8.5-8.5c0.4-0.4,1-0.4,1.4,0L55,78.1l38.2-38.2   c0.4-0.4,1-0.4,1.4,0l8.5,8.5c0.4,0.4,0.4,1,0,1.4L55.7,97.2C55.3,97.6,54.7,97.6,54.3,97.2z"
          />
        </g>
      </svg>

      <p
        className={styles.thanksMessage}
        dangerouslySetInnerHTML={{ __html: message }}
      />

      <button className={styles.close} onClick={onClose}>
        Click here to close
      </button>
    </div>
  );
};

export default Thanks;
