import { Signal, useSignal } from "@preact/signals-react";
import { useRef } from "react";

import * as Components from "@/components";
import * as Helpers from "@/helpers";
import * as Types from "@/types";

import Styles from "./input.module.scss";
import Snippets from "@/styles/snippets.module.scss";

type UserInputType = "text" | "email" | "password";

type Props = {
  type: UserInputType;
  placeholder: string;
  userInput: Signal<string>;
  errorMessage: string;
  backgroundLevel?: number;
  password?: true;
  required?: true;
};

export const Input = (props: Props) => {
  const inputType = useSignal(props.type);
  const inputRef = useRef<any>(null);

  function setUserInput(event: Types.OnChange): void {
    const userInput = event.currentTarget.value;
    props.userInput.value = userInput;
  }

  function focusInput(): void {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }

  function togglePasswordInput(event: Types.OnClick<HTMLButtonElement>): void {
    Helpers.preventBubbling(event);
    if (props.password) {
      if (inputType.value === "password") inputType.value = "text";
      else inputType.value = "password";
    }
  }

  return (
    <article className={Styles.container}>
      {props.errorMessage && (
        <p className={Styles.error}>{props.errorMessage}</p>
      )}

      <div
        className={`
					${Styles.inputContainer}
					${Helpers.setBackgroundLevel(props.backgroundLevel)}
					${Helpers.setClickLevel(props.backgroundLevel)}
					${Helpers.setHoverLevel(props.backgroundLevel)}
				`}
        onClick={focusInput}
      >
        <input
          className={Styles.input}
          type={inputType.value}
          placeholder={props.placeholder}
          value={props.userInput.value}
          ref={inputRef}
          onChange={setUserInput}
          required={props.required}
        />

        {props.password && (
          <button
            className={Snippets.iconButton}
            onClick={togglePasswordInput}
            type="button"
          >
            <Components.EyeHidden width={14} fill={10} hoverFill={11} />
          </button>
        )}
      </div>
    </article>
  );
};
