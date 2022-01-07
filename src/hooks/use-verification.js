import { useReducer } from "react";

const defaultstate = {
  value: "",
  isTouched: false,
};
const reduceInput = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  return defaultstate;
};

const useVerification = (validationMethod) => {
  const [inputState, dispatch] = useReducer(reduceInput, defaultstate);

  const inputIsValid = validationMethod(inputState.value);
  const hasError = inputState.isTouched && !inputIsValid;

  const valueBlurHandler = (e) => {
    dispatch({ type: "BLUR" });
  };
  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const validInputClasses = hasError
    ? "form-control invalid "
    : "form-control ";

  return {
    value: inputState.value,
    isValid: inputIsValid,
    touched: inputState.isTouched,
    hasError,
    validClass: validInputClasses,
    valueBlurHandler,
    valueChangeHandler,
  };
};
export default useVerification;
