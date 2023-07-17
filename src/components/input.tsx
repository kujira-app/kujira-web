import { ObservablePrimitiveBaseFns } from "@legendapp/state";
import { observer, useObservable } from "@legendapp/state/react";
import { useRef } from "react";

import * as Components from "@/components";
import * as Helpers from "@/helpers";
import * as Types from "@/types";

import Styles from "./input.module.scss";

type Props = {
  type: "text" | "email" | "password";
  userInput: ObservablePrimitiveBaseFns<string>;
  placeholder: string;

  leftIcon?: JSX.Element;

  borderRadius?: number;
  backgroundLevel?: number;
  isPassword?: true;
  required?: true;
  mini?: true;
};

export const Input = observer((props: Props) => {
  const inputRef = useRef<any>(null);
  const focused = useObservable(false);
  const inputType = useObservable(props.type);

  function setUserInput(event: Types.OnChange): void {
    props.userInput.set(event.currentTarget.value);
  }

  function setFocused(state: boolean): void {
    focused.set(state);
  }

  function focusInput(): void {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }

  function togglePasswordVisibility(): void {
    if (inputType.get() === "password") inputType.set("text");
    else inputType.set("password");
  }

  return (
    <article
      className={`
        ${Styles.size} ${props.mini ? Styles.mini : Styles.default}
        ${Helpers.setBackgroundLevel(props.backgroundLevel || 1, focused.get())}
        ${Helpers.setClickLevel(props.backgroundLevel || 1)}
        ${Helpers.setHoverLevel(props.backgroundLevel || 1)}
      `}
      style={{
        borderRadius: Helpers.setBorderRadius(props.borderRadius),
      }}
      tabIndex={-1}
      onClick={focusInput}
    >
      {props.leftIcon && (
        <Components.ButtonIcon>{props.leftIcon}</Components.ButtonIcon>
      )}

      <input
        className={Styles.input}
        type={inputType.get()}
        onChange={setUserInput}
        value={props.userInput.get()}
        placeholder={props.placeholder}
        ref={inputRef}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={!!props.required}
      />

      {props.isPassword && (
        <Components.ButtonIcon onClick={togglePasswordVisibility}>
          {inputType.get() === "password" ? (
            <Components.EyeHidden width={16} fill={8} hoverFill={11} addHover />
          ) : (
            <Components.EyeVisible
              width={16}
              fill={8}
              hoverFill={11}
              addHover
            />
          )}
        </Components.ButtonIcon>
      )}
    </article>
  );
});
