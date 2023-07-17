import { useObservable } from "@legendapp/state/react";

import * as Components from "@/components";
import { NextPageWithLayout } from "@/pages/_app";
import { signalsStore } from "@/signals/signals";

const Login: NextPageWithLayout = () => {

  const { authVerificationCodeSent } = signalsStore;

  const email = useObservable("");
  const agreementChecked = useObservable(false);

  return (
    <>
      <Components.PageHead title="Log In" />

      {authVerificationCodeSent.value ? (
        <Components.AuthVerification
          type="Log In"
          email={email.get()}
          authVerificationCodeSent={authVerificationCodeSent}
          agreementChecked={agreementChecked}
        />
      ) : (
        <Components.AuthForm
          type="Log In"
          email={email}
          authVerificationCodeSent={authVerificationCodeSent}
          agreementChecked={agreementChecked}
        />
      )}
    </>
  );
};

Login.getLayout = function getLayout(page: React.ReactElement) {
  return <Components.AuthLayout>{page}</Components.AuthLayout>;
};

export default Login;
