import styles from "./QuoteForm.module.scss";
import ctaStyles from "../Cta/Cta.module.scss";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import classNames from "classnames";
import Thanks from "./thanks";
import { Quote } from "../../model";
import Loading from "./Loading";

const initialFormState: Quote = {
  pickup: "",
  departureDate: "",
  departureTime: "",
  returnDate: "",
  returnTime: "",
  dropOff: "",
  name: "",
  email: "",
  phone: "",
  luggage: "",
  numPassenger: "",
  reason: "",
  hearAboutUs: "",
  terms: false,
  doReturn: "one-way",
};

const QuoteForm = () => {
  const [disableSubmissions, setDisableSubmissions] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [submissons, setSubmissions] = useState<Quote>(initialFormState);

  const onSubmit = useCallback(
    (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      setSending(true);
      setSuccess(false);
      setError("");

      (async function () {
        try {
          const request = await fetch("/api/quote", {
            body: JSON.stringify(submissons),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });

          const { error } = await request.json();
          if (error) {
            setError(error);
            return;
          }

          setSuccess(true);
          setSubmissions(initialFormState);
        } catch (err) {
          // @ts-ignore
          setError(err.toString());
        } finally {
          setSending(false);
        }
      })();
    },
    [submissons]
  );

  const onChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const target = evt.target;
      const name = target.name;
      const value =
        target instanceof HTMLInputElement && target.type === "checkbox"
          ? target.checked
          : target.value;

      setSubmissions({
        ...submissons,
        [name]: value,
      });
    },
    [submissons]
  );

  const onThankYouClose = useCallback(() => {
    setSuccess(false);
  }, []);

  useEffect(() => {
    setDisableSubmissions(!submissons.terms);
  }, [submissons]);

  return (
    <div className={styles.container} aria-busy={sending}>
      <form
        method="POST"
        onSubmit={onSubmit}
        className={classNames({ form: true, [styles.form]: true })}
        data-testid="form"
      >
        {success && (
          <Thanks
            onClose={onThankYouClose}
            message="Thank you for your inquiry.<br />We will contact you shortly."
          />
        )}

        <div>
          <div className="form-row" data-testid="test">
            <div className={styles.field}>
              <label className={styles.label}>
                <span className={styles.labelText}>Nature of Enquiry *</span>
                <div>
                  <label>
                    <input
                      name="doReturn"
                      type="radio"
                      value="one-way"
                      checked={submissons.doReturn === "one-way"}
                      onChange={onChange}
                    />
                    One way
                  </label>

                  <label>
                    <input
                      name="doReturn"
                      type="radio"
                      value="return"
                      checked={submissons.doReturn === "return"}
                      onChange={onChange}
                    />
                    Return
                  </label>
                </div>
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className={styles.field}>
              <label className={styles.label}>
                <span className={styles.labelText}>
                  Pickup Point (Please provide full address and postcode) *
                </span>
                <input
                  name="pickup"
                  type="text"
                  value={submissons.pickup}
                  onChange={onChange}
                  autoComplete="postal-code"
                  required={true}
                  className="input-field"
                />
              </label>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>
                <span className={styles.labelText}>
                  Drop off point or destination *
                </span>
                <input
                  name="dropOff"
                  type="text"
                  value={submissons.dropOff}
                  onChange={onChange}
                  autoComplete="postal-code"
                  required={true}
                  className="input-field"
                />
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className={styles.field}>
              <label className={styles.label}>
                <span className={styles.labelText}>Departure Date *</span>
                <input
                  name="departureDate"
                  type="date"
                  value={submissons.departureDate}
                  onChange={onChange}
                  required={true}
                  className="input-field"
                />
              </label>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>
                <span className={styles.labelText}>Departure Time *</span>
                <input
                  name="departureTime"
                  type="time"
                  value={submissons.departureTime}
                  onChange={onChange}
                  required={true}
                  className="input-field"
                />
              </label>
            </div>
          </div>

          <div
            className={classNames({
              "form-row": true,
              "form-row--disabled": submissons.doReturn !== "return",
            })}
            aria-hidden={submissons.doReturn !== "return"}
          >
            <div className={styles.field}>
              <label className={styles.label}>
                <span className={styles.labelText}>Return Date *</span>
                <input
                  name="returnDate"
                  type="date"
                  value={submissons.returnDate}
                  onChange={onChange}
                  required={true}
                  className="input-field"
                  disabled={submissons.doReturn !== "return"}
                />
              </label>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>
                <span className={styles.labelText}>Return Time *</span>
                <input
                  name="returnTime"
                  type="time"
                  value={submissons.returnTime}
                  onChange={onChange}
                  required={true}
                  className="input-field"
                  disabled={submissons.doReturn !== "return"}
                />
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className={styles.field}>
              <label className={styles.label}>
                <span className={styles.labelText}>Name *</span>
                <input
                  name="name"
                  type="text"
                  value={submissons.name}
                  onChange={onChange}
                  required={true}
                  className="input-field"
                  autoComplete="name"
                />
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className={styles.field}>
              <label className={styles.label}>
                <span className={styles.labelText}>Email</span>
                <input
                  name="email"
                  type="email"
                  value={submissons.email}
                  onChange={onChange}
                  className="input-field"
                />
              </label>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>
                <span className={styles.labelText}>Phone *</span>
                <input
                  name="phone"
                  type="tel"
                  value={submissons.phone}
                  onChange={onChange}
                  required={true}
                  className="input-field"
                />
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className={styles.field}>
              <label className={styles.label}>
                <span className={styles.labelText}>Number Of Passenger *</span>
                <input
                  name="numPassenger"
                  type="number"
                  value={submissons.numPassenger}
                  onChange={onChange}
                  required={true}
                  className="input-field"
                />
              </label>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>
                <span className={styles.labelText}>Luggage *</span>
                <input
                  name="luggage"
                  type="number"
                  value={submissons.luggage}
                  onChange={onChange}
                  required={true}
                  className="input-field"
                />
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className={styles.field}>
              <label className={styles.label}>
                <span className={styles.labelText}>Reason for trip</span>
                <select
                  name="reason"
                  value={submissons.reason}
                  onChange={onChange}
                  className="select-field"
                >
                  <option value="" />
                  <option value="Airport">Airport</option>
                  <option value="Business/Corporate">Business/Corporate</option>
                  <option value="Day Trip">Day Trip</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Funeral">Funeral</option>
                  <option value="Stag Do">Stag Do</option>
                  <option value="Hen Do">Hen Do</option>
                  <option value="Night out">Night out</option>
                  <option value="Festival">Festival</option>
                  <option value="Football">Football</option>
                  <option value="Other Sport Event">Other Sport Event</option>
                  <option value="Theme Park">Theme Park</option>
                  <option value="Educational">Educational</option>
                  <option value="Charity">Charity</option>
                  <option value="Other">Other</option>
                </select>
              </label>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>
                <span className={styles.labelText}>
                  How did you hear about us?
                </span>
                <select
                  name="hearAboutUs"
                  value={submissons.hearAboutUs}
                  onChange={onChange}
                  className="select-field"
                >
                  <option value="" />
                  <option value="Bing">Bing</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Friend/Relative">Friend/Relative</option>
                  <option value="Google">Google</option>
                  <option value="Other">Other</option>
                  <option value="Other Search Engine">
                    Other Search Engine
                  </option>
                  <option value="Returning Customer">Returning Customer</option>
                  <option value="Twitter">Twitter</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        <div className={styles.terms}>
          <input
            type="checkbox"
            className="checkbox-field"
            name="terms"
            checked={submissons.terms}
            onChange={onChange}
            id="termsCheckbox"
          />
          <label className={styles.termsText} htmlFor="termsCheckbox">
            I have read and agree to the BHXTravel{" "}
            <a href="/terms-conditions" target="_blank">
              booking terms and conditions
            </a>
            .
          </label>
        </div>

        <div
          className={classNames([
            styles.instruction,
            { [styles.instructionError]: error },
          ])}
          role="status"
          aria-live="polite"
        >
          {error
            ? error
            : "Please check the form for errors before submitting your enquiry"}
        </div>

        <div className={styles.submit}>
          <button
            type="submit"
            disabled={disableSubmissions || sending}
            className={ctaStyles.cta}
          >
            Submit Enquiry
          </button>

          {sending && <Loading />}
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
