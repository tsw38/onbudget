import React from "react";
import { TextInput } from "carbon-components-react";

const SignInForm = ({ error, formValues, setState, toggleForm, formTypes }) => {
  const hasRequestedAccess = !!localStorage.getItem("hasRequestedAccess");
  return (
    <>
      <div className="form">
        <TextInput
          id="email"
          labelText="Email"
          value={formValues.email}
          onChange={setState("email")}
        />
        <TextInput
          id="password"
          type="password"
          labelText="Password"
          value={formValues.password}
          onChange={setState("password")}
        />
      </div>

      {error && (
        <div className="ErrorWrapper">
          <p className="bx--label error">{error}</p>
        </div>
      )}

      <div className="actions">
        {!hasRequestedAccess && (
          <div className="buttonWrapper">
            <button
              className="TextButton"
              onClick={toggleForm(formTypes.request)}
            >
              Request Access
            </button>
          </div>
        )}

        <div className="buttonWrapper">
          <button className="TextButton" onClick={toggleForm(formTypes.forgot)}>
            Forgot Password?
          </button>
        </div>
      </div>
    </>
  );
};

export default SignInForm;