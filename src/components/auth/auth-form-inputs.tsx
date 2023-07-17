import { ObservablePrimitiveBaseFns } from "@legendapp/state";
import { effect } from "@preact/signals-react";

import * as Components from "@/components";
import * as Helpers from "@/helpers";
import * as Types from "@/types";

import Styles from "./auth-form-inputs.module.scss";
import TextStyles from "@/styles/texts.module.scss";

type Props = {
  email: ObservablePrimitiveBaseFns<string>;
  username: ObservablePrimitiveBaseFns<string>;
  password: ObservablePrimitiveBaseFns<string>;
  confirmPassword: ObservablePrimitiveBaseFns<string>;
  emailError: ObservablePrimitiveBaseFns<string>;
  usernameError: ObservablePrimitiveBaseFns<string>;
  passwordError: ObservablePrimitiveBaseFns<string>;
  confirmPasswordError: ObservablePrimitiveBaseFns<string>;
} & Types.AuthFormProps;

export const AuthFormInputs = (props: Props) => {

  function handleEmailErrors(): void {
    if (props.email.get().length === 0) {
      props.emailError.set("");
    } else {
      if (!props.email.get().includes("@")) {
        props.emailError.set('Please include "@"');
      } else if (!props.email.get().includes(".com")) {
        props.emailError.set('Please include ".com"');
      } else {
        props.emailError.set("");
      }
    }
  }

  function handleUsernameErrors(): void {
    if (props.username.get().length === 0) {
      props.usernameError.set("");
    } else {
      if (!Helpers.checkValidUsername(props.username.get())) {
        props.usernameError.set("Invalid username.");
      } else if (props.username.get().length > 14) {
        props.usernameError.set("Username too long.");
      } else {
        props.usernameError.set("");
      }
    }
  }

  function handlePasswordErrors(): void {
    if (props.password.get().length === 0) {
      props.passwordError.set("");
    } else {
      if (!Helpers.checkValidPassword(props.password.get())) {
        props.passwordError.set(
          "Password must contain at least one capital and lowercase letter and at least one of the following special characters: @, !, %, #."
        );
      } else if (props.password.get().length < 12) {
        props.passwordError.set("Password too short.");
      } else {
        props.passwordError.set("");
      }
    }
  }

  function handleConfirmPasswordErrors(): void {
    if (props.confirmPassword.get().length === 0) {
      props.confirmPasswordError.set("");
    } else {
      if (props.confirmPassword.get() !== props.password.get()) {
        props.confirmPasswordError.set("Passwords must match.");
      } else {
        props.confirmPasswordError.set("");
      }
    }
  }

  effect(() => {
    handleEmailErrors();
    if (props.type === "Register") {
      handleUsernameErrors();
      handlePasswordErrors();
      handleConfirmPasswordErrors();
    }
  });

  return (
    <article className={Styles.inputs}>
      {props.emailError.get() && (
        <span className={TextStyles.formError}>{props.emailError.get()}</span>
      )}
      <Components.Input
        key="Auth Form Email Input"
        type="email"
        userInput={props.email}
        placeholder="Email"
        leftIcon={<Components.Message width={16} fill={10} />}
        backgroundLevel={2}
        required
      />

      {props.type === "Register" && (
        <>
          {props.usernameError.get() && (
            <span className={TextStyles.formError}>
              {props.usernameError.get()}
            </span>
          )}
          <Components.Input
            key="Auth Form Username Input"
            type="text"
            userInput={props.username}
            placeholder="Username"
            leftIcon={<Components.User width={16} fill={10} />}
            backgroundLevel={2}
            required
          />
        </>
      )}

      {props.passwordError.get() && (
        <span className={TextStyles.formError}>
          {props.passwordError.get()}
        </span>
      )}
      <Components.Input
        key="Auth Form Password Input"
        type="password"
        userInput={props.password}
        placeholder="Password"
        leftIcon={<Components.Lock width={16} fill={10} />}
        backgroundLevel={2}
        isPassword
        required
      />

      {props.type === "Register" && (
        <>
          {props.confirmPasswordError.get() && (
            <span className={TextStyles.formError}>
              {props.confirmPasswordError.get()}
            </span>
          )}
          <Components.Input
            key="Auth Form Confirm Password Input"
            type="password"
            userInput={props.confirmPassword}
            placeholder="Confirm Password"
            leftIcon={<Components.Lock width={16} fill={10} />}
            backgroundLevel={2}
            isPassword
            required
          />
        </>
      )}
    </article>
  );
};
