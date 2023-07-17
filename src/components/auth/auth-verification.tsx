import { ObservablePrimitiveBaseFns } from "@legendapp/state";
import { useObservable } from "@legendapp/state/react";
import { Signal, effect } from "@preact/signals-react";
import { useDispatch } from "react-redux";

import * as Components from "@/components";
import * as Sagas from "@/sagas";
import * as Types from "@/types";

import Styles from "./auth-verification.module.scss";
import TextStyles from "@/styles/texts.module.scss";

type Props = {
  email: string;
  authVerificationCodeSent: Signal<boolean>;
  agreementChecked: ObservablePrimitiveBaseFns<boolean>;
} & Types.AuthFormProps;

export const AuthVerification = (props: Props) => {

  const dispatch = useDispatch();

  const verificationCode = useObservable("");
  const verificationCodeError = useObservable("");

  function goBack(): void {
    props.authVerificationCodeSent.value = false;
  }

  function resendCode(): void {
    dispatch(Sagas.sendNewVerificationCodeRequest({ email: props.email }));
  }

  function handleButtonDisable(): boolean {
    return verificationCode.get() === "" || !!verificationCodeError.get();
  }

  effect(() => {
    if (verificationCode.get().length === 0) {
      verificationCodeError.set("");
    } else {
      if (!Number(verificationCode.get())) {
        verificationCodeError.set("Must be a number.");
      } else {
        verificationCodeError.set("");
      }
    }
  });

  function verifyCode(event: Types.OnSubmit): void {
    event.preventDefault();

    if (!handleButtonDisable()) {
      if (props.type === "Register") {
        dispatch(
          Sagas.verifyRegistrationRequest({
            email: props.email,
            verificationCode: verificationCode.get(),
          })
        );
      } else {
        dispatch(
          Sagas.verifyLoginRequest({
            email: props.email,
            verificationCode: verificationCode.get(),
            thirtyDays: props.agreementChecked.get(),
          })
        );
      }
    }
  }

  return (
    <form className={Styles.form} onSubmit={verifyCode}>
      <header className={Styles.group}>
        <h1 className={TextStyles.titleText}>
          {props.type === "Register" ? "Verify Registration" : "Verify Login"}
        </h1>

        <button
          aria-label="Go Back Button"
          className={TextStyles.primaryLink}
          type="button"
          onClick={goBack}
          style={{ alignSelf: "flex-start" }}
        >
          Go back
        </button>

        <p className={Styles.caption}>
          Please enter the verification code sent to your email.
        </p>

        <p>
          {"Didn't receive a code? "}
          <button
            aria-label="Resend Code Button"
            className={TextStyles.primaryLink}
            type="button"
            onClick={resendCode}
          >
            Resend Code
          </button>
        </p>
      </header>

      <article className={Styles.group}>
        {verificationCodeError.get() && (
          <p className={TextStyles.formError}>{verificationCodeError.get()}</p>
        )}
        <Components.Input
          type="text"
          userInput={verificationCode}
          placeholder="Enter verification code here"
          leftIcon={<Components.Key width={16} fill={10} />}
          backgroundLevel={2}
          required
        />
        <Components.Button
          type="submit"
          text="Verify"
          disabled={handleButtonDisable()}
          centerContents
          addClick
          primary
        />
      </article>
    </form>
  );
};
