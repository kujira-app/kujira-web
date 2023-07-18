import { Signal } from "@preact/signals-react";
import { ObservablePrimitiveBaseFns } from "@legendapp/state";
import { observer, useObservable } from "@legendapp/state/react";
import { useDispatch } from "react-redux";

import * as Components from "@/components";
import * as Sagas from "@/sagas";
import * as Types from "@/types";

import { AuthFormHeader } from "./auth-form-header";
import { AuthFormInputs } from "./auth-form-inputs";
import { AuthFormAgreement } from "./auth-form-agreement";

import Styles from "./auth-form.module.scss";

type Props = {
  email: ObservablePrimitiveBaseFns<string>;
  authVerificationCodeSent: Signal<boolean>;
  agreementChecked: ObservablePrimitiveBaseFns<boolean>;
} & Types.AuthFormProps;

export const AuthForm = observer((props: Props) => {
  const dispatch = useDispatch();

  const username = useObservable("");
  const password = useObservable("");
  const confirmPassword = useObservable("");

  const emailError = useObservable("");
  const usernameError = useObservable("");
  const passwordError = useObservable("");
  const confirmPasswordError = useObservable("");

  function handleButtonDisable(): boolean {
    if (props.type === "Register") {
      return (
        props.email.get() === "" ||
        username.get() === "" ||
        password.get() === "" ||
        confirmPassword.get() === "" ||
        !!emailError.get() ||
        !!usernameError.get() ||
        !!passwordError.get() ||
        !!confirmPasswordError.get() ||
        !props.agreementChecked.get()
      );
    } else {
      return (
        props.email.get() === "" ||
        password.get() === "" ||
        !!emailError.get() ||
        !!passwordError.get()
      );
    }
  }

  function authInUser(event: Types.OnSubmit) {
    event.preventDefault();

    if (!handleButtonDisable()) {
      if (props.type === "Register") {
        dispatch(
          Sagas.registerRequest({
            email: props.email.get(),
            username: username.get(),
            password: password.get(),
          })
        );
      } else {
        dispatch(
          Sagas.loginRequest({
            email: props.email.get(),
            password: password.get(),
          })
        );
      }
    }
  }

  return (
    <form className={Styles.form} onSubmit={authInUser}>
      <AuthFormHeader type={props.type} />

      <AuthFormInputs
        email={props.email}
        username={username}
        password={password}
        confirmPassword={confirmPassword}
        emailError={emailError}
        usernameError={usernameError}
        passwordError={passwordError}
        confirmPasswordError={confirmPasswordError}
        type={props.type}
      />

      <AuthFormAgreement
        type={props.type}
        agreementChecked={props.agreementChecked}
      />

      <Components.Button
        type="submit"
        text={props.type}
        disabled={handleButtonDisable()}
        centerContents
        addClick
        primary
      />
    </form>
  );
});
