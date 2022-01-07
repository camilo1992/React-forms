import useVerification from "../hooks/use-verification";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: nameValid,
    touched: nameIsTouched,
    hasError: invalidName,
    validClass: validNameClass,
    valueBlurHandler: nameBlurHandler,
    valueChangeHandler: nameValueChangeHandler,
  } = useVerification((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailValid,
    touched: emailIsTouched,
    hasError: invalidEmail,
    validClass: validEmailClass,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailValueChangeHandler,
  } = useVerification((value) => value.includes("@"));

  // Form validation ...........
  let formIsValid = false;
  emailValid && nameValid ? (formIsValid = true) : (formIsValid = false);

  const submitName = (e) => {
    e.preventDefault();
    nameValueChangeHandler("");
    emailValueChangeHandler("");
    nameIsTouched(false);
    emailIsTouched(false);
  };

  return (
    <form onSubmit={submitName}>
      <div className={validNameClass}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={nameValueChangeHandler}
          onBlur={nameBlurHandler}
        />
      </div>
      {invalidName && <p className="error-text">The input name is empty</p>}
      <div className={validEmailClass}>
        <label htmlFor="email">Your e-mail</label>
        <input
          value={enteredEmail}
          type="e-mail"
          id="e-mail"
          onChange={emailValueChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      {invalidEmail && (
        <p className="error-text">The input e-mail is invalid</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
