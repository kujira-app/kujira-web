import { useSignal } from "@preact/signals-react";

import * as Helpers from "@/helpers";
import * as Types from "@/types";

export const Settings = (props: Types.IconProps) => {
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
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9957 2.24509C12.075 2.24483 12.1544 2.25297 12.2325 2.26955C12.3652 2.29779 12.5134 2.36835 13.2332 2.78388L19.3708 6.3275C20.0849 6.73974 20.2196 6.83251 20.3094 6.93213C20.4145 7.04915 20.4942 7.18706 20.5428 7.33656C20.5845 7.46474 20.5975 7.62843 20.5975 8.45599V15.5438C20.5975 16.3713 20.5845 16.5351 20.5428 16.6633C20.4943 16.8125 20.4149 16.9502 20.3094 17.0674C20.2183 17.1683 20.0825 17.2623 19.3634 17.6774L13.2343 21.216C13.0027 21.3497 12.8303 21.4477 12.6983 21.5202C12.4206 21.6724 12.3227 21.7113 12.2325 21.7304C12.0786 21.7631 11.9194 21.7631 11.7657 21.7304C11.6327 21.7022 11.4826 21.6311 10.7637 21.216L4.63458 17.6774C4.1724 17.4106 3.95109 17.2764 3.82777 17.1879C3.75925 17.1386 3.72103 17.1034 3.68856 17.0674C3.58332 16.9506 3.50385 16.8129 3.4552 16.6633C3.41327 16.5343 3.40025 16.37 3.40025 15.5387V8.46133C3.40025 7.63006 3.41327 7.4655 3.4552 7.33656C3.50385 7.18665 3.58346 7.0488 3.68856 6.93213C3.77912 6.83155 3.91437 6.73837 4.63348 6.32326L10.7637 2.78388C11.4824 2.36896 11.6326 2.29779 11.7657 2.26955C11.8414 2.25346 11.9186 2.2453 11.9957 2.24509ZM12.6993 0.0735825C12.2376 -0.0245275 11.7605 -0.0245275 11.2988 0.0735825C10.7709 0.185807 10.2937 0.46205 9.74947 0.777071L9.64122 0.839629L3.51097 4.37899L3.39806 4.44401C2.85667 4.75568 2.38037 5.02994 2.02013 5.42991C1.70415 5.78083 1.46572 6.19424 1.32006 6.6428C1.15372 7.15493 1.1544 7.7055 1.15509 8.33095L1.15522 8.46133V15.5387L1.15509 15.6692C1.1544 16.2946 1.15372 16.8449 1.32006 17.357C1.46586 17.8058 1.70442 18.2189 2.02013 18.5697C2.38078 18.9703 2.85776 19.2449 3.40107 19.5576L3.51207 19.6216L9.64122 23.1603L9.75016 23.2233C10.2939 23.538 10.771 23.8143 11.2988 23.9264C11.7605 24.0245 12.2376 24.0245 12.6993 23.9264C13.2271 23.8143 13.7041 23.538 14.248 23.2232L14.3568 23.1603L20.4859 19.6216L20.5958 19.5583C21.1399 19.2451 21.6169 18.9704 21.9776 18.5697C22.2932 18.2192 22.532 17.8062 22.678 17.357C22.8442 16.8457 22.8433 16.2961 22.8426 15.6736L22.8425 15.5438V8.45599L22.8426 8.32616V8.32369C22.8433 7.70228 22.8439 7.15342 22.678 6.6428C22.5322 6.1939 22.2934 5.78057 21.9776 5.42991C21.6183 5.03089 21.1429 4.75719 20.6055 4.44778L20.4933 4.38325L14.3558 0.839629L14.243 0.774401C13.7016 0.460954 13.226 0.185533 12.6993 0.0735825ZM9.75386 11.9999C9.75386 10.76 10.7589 9.75486 11.9989 9.75486C13.2389 9.75486 14.244 10.76 14.244 11.9999C14.244 13.2397 13.2389 14.245 11.9989 14.245C10.7589 14.245 9.75386 13.2397 9.75386 11.9999ZM11.9989 7.50983C9.51913 7.50983 7.50883 9.52013 7.50883 11.9999C7.50883 14.4797 9.51913 16.49 11.9989 16.49C14.4787 16.49 16.489 14.4797 16.489 11.9999C16.489 9.52013 14.4787 7.50983 11.9989 7.50983Z"
      />
    </svg>
  );
};
