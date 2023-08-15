import { useSignal } from "@preact/signals-react";

import * as Helpers from "@/helpers";
import * as Types from "@/types";

export const CheckRounded = (props: Types.IconProps) => {
  const hovered = useSignal(false);

  return (
    <svg
      className={
        hovered.value
          ? Helpers.setIconFill(props.hoverFill)
          : Helpers.setIconFill(props.fill)
      }
      width={props.width}
      height={props.width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => props.hoverFill && (hovered.value = true)}
      onMouseLeave={() => props.hoverFill && (hovered.value = false)}
    >
      <rect width="24" height="24" fill="white" fill-opacity="0.01" />
      <path d="M23.1356 4.66511L11.1406 16.6691C10.6728 17.1373 9.91716 17.1373 9.44936 16.6691L6.05479 13.272C5.58698 12.8038 5.58698 12.0476 6.05479 11.5794C6.52259 11.1113 7.27827 11.1113 7.74607 11.5794L10.289 14.1243L21.4323 2.97255C21.9001 2.50439 22.6558 2.50439 23.1236 2.97255C23.6034 3.4407 23.6034 4.19696 23.1356 4.66511ZM16.5144 0.883851C14.4872 0.0555744 12.1842 -0.232522 9.78522 0.199623C4.90327 1.07592 1.00491 5.01323 0.177261 9.89886C-1.19016 18.0016 5.551 24.9399 13.5996 23.8955C18.3496 23.2833 22.3319 19.7422 23.5794 15.1206C24.0592 13.356 24.1072 11.6514 23.8313 10.0549C23.6754 9.09459 22.4879 8.72247 21.7922 9.4067C21.5163 9.68279 21.3963 10.0909 21.4683 10.4751C21.7322 12.0716 21.6122 13.7762 20.8446 15.5888C19.4531 18.8419 16.4304 21.2306 12.9159 21.5548C6.79847 22.1189 1.72461 16.9332 2.48029 10.7752C2.99607 6.52574 6.41464 3.06858 10.6489 2.48038C12.724 2.19229 14.6911 2.58842 16.3704 3.45271C16.8382 3.69279 17.402 3.60876 17.7739 3.23664C18.3496 2.66044 18.2057 1.68812 17.486 1.316C17.1621 1.17195 16.8382 1.0159 16.5144 0.883851Z" />
    </svg>
  );
};
