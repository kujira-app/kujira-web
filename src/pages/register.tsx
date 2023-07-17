import { useObservable } from "@legendapp/state/react";

import * as Components from "@/components";
import { NextPageWithLayout } from "@/pages/_app";
import { signalsStore } from "@/signals/signals";

const Register: NextPageWithLayout = () => {
  const { authVerificationCodeSent } = signalsStore;

  const email = useObservable("");
  const agreementChecked = useObservable(false);

  return (
    <>
      <Components.PageHead title="Register" />

      {authVerificationCodeSent.value ? (
        <Components.AuthVerification
          type="Register"
          email={email.get()}
          authVerificationCodeSent={authVerificationCodeSent}
          agreementChecked={agreementChecked}
        />
      ) : (
        <Components.AuthForm
          type="Register"
          email={email}
          authVerificationCodeSent={authVerificationCodeSent}
          agreementChecked={agreementChecked}
        />
      )}
    </>
  );
};

Register.getLayout = function getLayout(page: React.ReactElement) {
  return <Components.AuthLayout>{page}</Components.AuthLayout>;
};

export default Register;
