import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import * as Constants from "@/constants";
import * as Redux from "@/redux";

type Props = {
  children: React.ReactNode;
};

export const DashboardLayout = (props: Props) => {
  const router = useRouter();

  const { ClientRoutes } = Constants;
  const { currentUser } = useSelector(
    (state: Redux.ReduxStore) => state.entities
  );

  useEffect(() => {
    if (currentUser) {
      if (!currentUser.onboarded) router.push(ClientRoutes.ONBOARDING);
    } else {
      router.push(ClientRoutes.LOGIN);
    }
  }, [currentUser]);

  return <>Dashboard Layout {props.children}</>;
};
