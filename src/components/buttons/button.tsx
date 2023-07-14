import * as Components from "@/components";
import * as Helpers from "@/helpers";

import Styles from "./button.module.scss";

type Size = "Large" | "Medium" | "Default" | "Small" | "Smaller";

type Props = {
  type: "button" | "submit";
  size?: Size;
  text: string;
  disabled?: boolean;
  onClick?: () => void;

  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;

  borderRadius?: number;
  backgroundLevel?: number;
  centerContents?: true;
  primary?: true;
};

export const Button = (props: Props) => {
  function selectSize(size?: Size) {
    switch (size) {
      case "Large":
        return `${Styles.large}`;
      case "Medium":
        return `${Styles.medium}`;
      case "Small":
        return `${Styles.small}`;
      case "Smaller":
        return `${Styles.smaller}`;
      default:
        return `${Styles.default}`;
    }
  }

  return (
    <button
      aria-label={`${props.text} Button`}
      className={`
				${Styles.button}
				${props.disabled && Styles.disabled}
				${selectSize(props.size)}
				${props.centerContents && Styles.centerContents}
				${
          props.primary
            ? Styles.primary
            : Helpers.setBackgroundLevel(props.backgroundLevel || 1)
        }
			`}
      style={{ borderRadius: Helpers.setBorderRadius(props.borderRadius) }}
      type={props.type}
      onClick={props.onClick}
    >
      {props.leftIcon && (
        <Components.ButtonIcon>{props.leftIcon}</Components.ButtonIcon>
      )}

      {props.text}

      {props.rightIcon && (
        <Components.ButtonIcon>{props.rightIcon}</Components.ButtonIcon>
      )}
    </button>
  );
};
