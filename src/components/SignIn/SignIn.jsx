import cn from "classnames";
import { connect } from "react-redux";
import React, { useState } from "react";
import { Modal } from "carbon-components-react";

import { loginAction } from "./SignInActions";

import { SignInForm } from "./Forms";

import "./SignIn.scss";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const formTypes = {
  signIn: "signIn",
};

const SignInModal = ({ login }) => {
  const [error, setError] = useState("");
  const [formType, setFormType] = useState(formTypes.signIn);
  const [formValues, setFormValues] = useState(initialFormState);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);

  const setState = (key) => (e) => {
    const nextState = {
      ...formValues,
      [key]: e.target.value,
    };

    setFormValues(nextState);
  };

  const handleClearForm = () => {
    setFormValues(initialFormState);
    setError("");
  };

  const handleSubmitForm = () => {
    const action = login;

    const values = { email: formValues.email, password: formValues.password };

    action(values)
      .then((resp) => {
        setError("");
        setSubmittedSuccessfully(true);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const toggleForm = (toggle) => () => {
    setFormType(toggle);
  };

  const Form = SignInForm;

  const modalHeading = "Sign In";

  const submitButton = "Sign In";

  return (
    <div
      className={cn("SignIn", `SignIn--${formType}`, {
        "Signin--submitted": submittedSuccessfully,
      })}
    >
      <Modal
        open
        hasForm
        size="sm"
        shouldSubmitOnEnter
        preventCloseOnClickOutside
        modalHeading={modalHeading}
        secondaryButtonText="Clear"
        primaryButtonText={submitButton}
        onRequestSubmit={handleSubmitForm}
        onSecondarySubmit={handleClearForm}
        aria-label={`${modalHeading} Modal`}
      >
        <Form
          error={error}
          setState={setState}
          formTypes={formTypes}
          formValues={formValues}
          toggleForm={toggleForm}
          submittedSuccessfully={submittedSuccessfully}
        />
      </Modal>
    </div>
  );
};

const mapDispatchToProps = {
  login: loginAction,
};

export default connect(null, mapDispatchToProps)(SignInModal);
