import useVerification from "../hooks/use-verification";

const BasicForm = (props) => {
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
    value: entered_2Name,
    isValid: _2NameValid,
    touched: _2nameIsTouched,
    hasError: invalid_2Name,
    validClass: valid_2NameClass,
    valueBlurHandler: _2nameBlurHandler,
    valueChangeHandler: _2nameValueChangeHandler,
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

  const submitForm = (e) => {
    e.preventDefault();
    nameIsTouched(false);
    _2nameIsTouched(false);
    emailIsTouched(false);
  };

  console.log(invalidName, invalid_2Name, invalidEmail);
  let formIsValid = false;
  console.log(formIsValid);

  if (emailValid && nameValid && _2NameValid) {
    formIsValid = true;
    console.log(formIsValid);
  }
  return (
    <form onSubmit={submitForm}>
      <div className="control-group">
        <div className={validNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameValueChangeHandler}
            onBlur={nameBlurHandler}
          />
          {invalidName && (
            <p className="error-text"> Please enter a valid first name.</p>
          )}
        </div>
        <div className={valid_2NameClass}>
          <label htmlFor="2name">Last Name</label>
          <input
            type="text"
            id="2name"
            value={entered_2Name}
            onChange={_2nameValueChangeHandler}
            onBlur={_2nameBlurHandler}
          />
          {invalid_2Name && (
            <p className="error-text"> Please enter a valid second name.</p>
          )}
        </div>
      </div>
      <div className={validEmailClass}>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailValueChangeHandler}
          onBlur={emailBlurHandler}
        />
        {invalidEmail && (
          <p className="error-text"> Please enter a valid e-mail adress.</p>
        )}
      </div>
      <div className="form-actions">
        {/* <button>Submit</button> */}
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
