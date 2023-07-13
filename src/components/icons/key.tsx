import { useSignal } from "@preact/signals-react";

import * as Helpers from "@/helpers";
import * as Types from "@/types";

export const Key = (props: Types.IconProps) => {
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
      onMouseEnter={() => props.addHover && (hovered.value = true)}
      onMouseLeave={() => props.addHover && (hovered.value = false)}
    >
      <path d="M22 18.2804C22 18.678 21.6776 19.0004 21.28 19.0004H16.72C16.3224 19.0004 16 18.678 16 18.2804V15.7204C16 15.3228 15.6776 15.0004 15.28 15.0004H13.7767C13.4979 15.0004 13.247 15.1631 13.1118 15.4069C11.898 17.5958 9.56455 19.0004 7.00001 19.0004C3.13999 19.0004 0 15.8604 0 12.0004C0 8.14039 3.13999 5.0004 7.00001 5.0004C9.56537 5.0004 11.8906 6.40587 13.1115 8.59596C13.2468 8.83872 13.4971 9.00041 13.775 9.00041H23.28C23.6777 9.00041 24 9.32275 24 9.72041V14.2804C24 14.678 23.6777 15.0004 23.28 15.0004H22.72C22.3224 15.0004 22 15.3228 22 15.7204V18.2804ZM18 16.2804C18 16.678 18.3223 17.0004 18.72 17.0004H19.28C19.6776 17.0004 20 16.678 20 16.2804V13.7204C20 13.3228 20.3224 13.0004 20.72 13.0004H21.28C21.6776 13.0004 22 12.678 22 12.2804V11.7204C22 11.3227 21.6776 11.0004 21.28 11.0004H12.4541C12.1465 11.0004 11.8729 10.8051 11.7731 10.5142L11.71 10.3304C11.01 8.34041 9.10999 7.0004 7.00001 7.0004C4.24001 7.0004 2 9.24041 2 12.0004C2 14.7604 4.24001 17.0004 7.00001 17.0004C9.10999 17.0004 11.01 15.6604 11.71 13.6704L11.7731 13.4866C11.8729 13.1958 12.1465 13.0004 12.4541 13.0004H17.28C17.6777 13.0004 18 13.3228 18 13.7204V16.2804ZM7.00001 15.0004C5.35001 15.0004 4.00001 13.6504 4.00001 12.0004C4.00001 10.3504 5.35001 9.00041 7.00001 9.00041C8.65001 9.00041 10 10.3504 10 12.0004C10 13.6504 8.65001 15.0004 7.00001 15.0004ZM7.00001 11.0004C6.45 11.0004 6 11.4504 6 12.0004C6 12.5504 6.45 13.0004 7.00001 13.0004C7.54999 13.0004 7.99999 12.5504 7.99999 12.0004C7.99999 11.4504 7.54999 11.0004 7.00001 11.0004Z" />
    </svg>
  );
};