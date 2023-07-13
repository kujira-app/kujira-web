import * as Saga from "redux-saga/effects";
import axios from "axios";
import Cookies from "js-cookie";

import * as Constants from "@/constants";
import * as Redux from "@/redux";
import * as Types from "@/types";
import { signalsStore } from "@/signals/signals";

enum AuthActions {
  REGISTER = "REGISTER",
  VERIFY_REGISTRATION = "VERIFY_REGISTRATION",
  LOGIN = "LOGIN",
  VERIFY_LOGIN = "VERIFY_LOGIN",
  SEND_NEW_VERIFICATION_CODE = "SEND_NEW_VERIFICATION_CODE",
  LOGOUT = "LOGOUT",
}

// ========================================================================================= //
// [ ACTIONS ] ============================================================================= //
// ========================================================================================= //

export function registerRequest(
  payload: Types.RegistrationPayload
): Types.SagaPayload<Types.RegistrationPayload> {
  return {
    type: AuthActions.REGISTER,
    payload,
  };
}

export function verifyRegistrationRequest(
  payload: Types.AuthVerificationPayload
): Types.SagaPayload<Types.AuthVerificationPayload> {
  return {
    type: AuthActions.VERIFY_REGISTRATION,
    payload,
  };
}

export function loginRequest(
  payload: Types.LoginPayload
): Types.SagaPayload<Types.LoginPayload> {
  return {
    type: AuthActions.LOGIN,
    payload,
  };
}

export function verifyLoginRequest(
  payload: Types.AuthVerificationPayload
): Types.SagaPayload<Types.AuthVerificationPayload> {
  return {
    type: AuthActions.VERIFY_LOGIN,
    payload,
  };
}

export function sendNewVerificationCodeRequest(
  payload: Types.SendNewVerificationCodePayload
): Types.SagaPayload<Types.SendNewVerificationCodePayload> {
  return {
    type: AuthActions.SEND_NEW_VERIFICATION_CODE,
    payload,
  };
}

export function logoutRequest(
  payload: Types.LogoutPayload
): Types.SagaPayload<Types.LogoutPayload> {
  return {
    type: AuthActions.LOGOUT,
    payload,
  };
}

// ========================================================================================= //
// [ SAGAS ] =============================================================================== //
// ========================================================================================= //

function* register(action: Types.SagaPayload<Types.RegistrationPayload>) {
  try {
    const endpoint = Constants.APIRoutes.AUTH + "/register";
    const { data } = yield Saga.call(axios.post, endpoint, action.payload);

    signalsStore.authVerificationCodeSent.value = true;

    console.log("Register Data:", data);
  } catch (error) {
    console.error(error);
    alert(error);
  }
}

function* verifyRegistration(
  action: Types.SagaPayload<Types.AuthVerificationPayload>
) {
  try {
    const endpoint = Constants.APIRoutes.AUTH + `/verify-registration`;
    const { data } = yield Saga.call(axios.post, endpoint, action.payload);
    yield Saga.put(Redux.entitiesActions.loginUser(data.response.safeUser));

    Cookies.set("userId", data.response.safeUser.id);
    signalsStore.authVerificationCodeSent.value = false;

    console.log("Verify Registration Data:", data);
  } catch (error) {
    console.error(error);
    alert(error);
  }
}

function* login(action: Types.SagaPayload<Types.LoginPayload>) {
  try {
    const endpoint = Constants.APIRoutes.AUTH + `/login`;
    const { data } = yield Saga.call(axios.post, endpoint, action.payload);

    signalsStore.authVerificationCodeSent.value = true;

    console.log("Login Data:", data);
  } catch (error: any) {
    console.error(error);
    alert(error.response.data.body);
    alert(error.response.data.caption);
  }
}

function* verifyLogin(
  action: Types.SagaPayload<Types.AuthVerificationPayload>
) {
  try {
    const endpoint = Constants.APIRoutes.AUTH + `/verify-login`;
    const { data } = yield Saga.call(axios.post, endpoint, action.payload);
    yield Saga.put(Redux.entitiesActions.loginUser(data.response.safeUser));

    Cookies.set("userId", data.response.safeUser.id);
    signalsStore.authVerificationCodeSent.value = false;

    console.log("Verify Login Data:", data);
  } catch (error: any) {
    console.error(error);
    alert(error.response.data.body);
    alert(error.response.data.caption);
  }
}

function* sendNewVerificationCode(
  action: Types.SagaPayload<Types.SendNewVerificationCodePayload>
) {
  try {
    const endpoint = Constants.APIRoutes.AUTH + `/send-new-verification-code`;
    const { data } = yield Saga.call(axios.post, endpoint, action.payload);

    alert(data.body);
  } catch (error: any) {
    console.error(error);
    alert(error.response.data.body);
    alert(error.response.data.caption);
  }
}

function* logout(action: Types.SagaPayload<Types.LogoutPayload>) {
  try {
    const endpoint = Constants.APIRoutes.AUTH + `/logout`;
    const { data } = yield Saga.call(axios.patch, endpoint, action.payload);
    yield Saga.put(Redux.entitiesActions.logoutUser);

    Cookies.remove("userId");

    console.log("Logout Data:", data.body);
  } catch (error) {
    console.error(error);
    alert(error);
  }
}

export default function* authSaga() {
  yield Saga.all([
    Saga.takeEvery("REGISTER", register),
    Saga.takeEvery("VERIFY_REGISTRATION", verifyRegistration),
    Saga.takeEvery("LOGIN", login),
    Saga.takeEvery("VERIFY_LOGIN", verifyLogin),
    Saga.takeEvery("SEND_NEW_VERIFICATION_CODE", sendNewVerificationCode),
    Saga.takeEvery("LOGOUT", logout),
  ]);
}
