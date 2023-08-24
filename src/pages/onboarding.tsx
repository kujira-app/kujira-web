import { effect, useSignal } from "@preact/signals-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Components from "@/components";
import * as Constants from "@/constants";
import * as Helpers from "@/helpers";
import * as Redux from "@/redux";
import * as Sagas from "@/sagas";
import * as Types from "@/types";
import { NextPageWithLayout } from "./_app";

import Styles from "@/styles/onboarding.module.scss";
import dynamic from "next/dynamic";

function generatePurchasesForAPI(purchases: Types.PurchaseModel[]) {
  return purchases.map((purchase: Types.PurchaseModel) => {
    const { placement, category, description, cost } = purchase;
    return { placement, category, description, cost };
  });
}

function findEntryId(
  name: "Recurring" | "Incoming",
  entries: Types.NormalizedEntries
) {
  for (const entry of Object.values(entries)) {
    if (entry.name === name) return entry.id;
  }
}

const DynamicIncome = dynamic(() =>
  import("@/components/onboarding/onboarding-income").then(
    (mod) => mod.OnboardingIncome
  )
);

const DynamicSavings = dynamic(() =>
  import("@/components/onboarding/onboarding-savings").then(
    (mod) => mod.OnboardingSavings
  )
);

const DynamicRecurring = dynamic(() =>
  import("@/components/onboarding/onboarding-recurring").then(
    (mod) => mod.OnboardingRecurring
  )
);

const DynamicIncoming = dynamic(() =>
  import("@/components/onboarding/onboarding-incoming").then(
    (mod) => mod.OnboardingIncoming
  )
);

const DynamicFinal = dynamic(() =>
  import("@/components/onboarding/onboarding-final").then(
    (mod) => mod.OnboardingFinal
  )
);

const Onboarding: NextPageWithLayout = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { ClientRoutes } = Constants;
  const { currentUser, logbooks, overviews, entries } = useSelector(
    (state: Redux.ReduxStore) => state.entities
  );

  const page = useSignal(1);
  const remainingBudget = useSignal(0);
  const income = useSignal("");
  const savings = useSignal("");
  const recurringPurchases = useSignal<Types.PurchaseModel[]>([
    {
      id: 1,
      placement: 1,
      category: "monthly",
      description: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      entryId: 1,
    },
  ]);
  const incomingPurchases = useSignal<Types.PurchaseModel[]>([
    {
      id: 1,
      placement: 1,
      category: "monthly",
      description: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      entryId: 1,
    },
  ]);
  const buttonText = useSignal("Let's go!");
  const disabled = useSignal(true);

  effect(() => {
    if (page.value === 1) {
      buttonText.value = "Let's go!";
      disabled.value = false;
    } else if (page.value === 2) {
      buttonText.value = "Savings";
    } else if (page.value === 3) {
      buttonText.value = "Recurring Purchases";
    } else if (page.value === 4) {
      buttonText.value = "Incoming Purchases";
    } else if (page.value === 5) {
      buttonText.value = "Final Step";
    } else {
      buttonText.value = "I'm ready.";
      disabled.value = false;
    }

    remainingBudget.value =
      Number(income.value) -
      Helpers.calculateSavedIncome(
        Number(income.value),
        Number(savings.value)
      ) -
      Helpers.calculatePurchasesTotalCost(recurringPurchases.value);
  });

  function incrementPage(): void {
    if (page.value < 6 && !disabled.value) page.value += 1;
  }

  function completeOnboarding(): void {
    if (!disabled.value && entries) {
      const recurringEntryId = findEntryId("Recurring", entries);
      const incomingEntryId = findEntryId("Incoming", entries);

      console.log("Complete Onboarding");
      console.log("Income:", Number(income.value));
      console.log("Savings:", Number(savings.value));
      console.log(
        "Recurring Purchases:",
        generatePurchasesForAPI(recurringPurchases.value)
      );
      console.log(
        "Incoming Purchases:",
        generatePurchasesForAPI(incomingPurchases.value)
      );
      console.log("Recurring Entry Id:", recurringEntryId);
      console.log("Incoming Entry Id:", incomingEntryId);
    }
  }

  function nextPage(event: Types.OnSubmit): void {
    event.preventDefault();
    if (page.value < 6) {
      incrementPage();
    } else {
      completeOnboarding();
    }
    console.log("Next Page");
  }

  useEffect(() => {
    if (currentUser) {
      dispatch(Sagas.fetchUserLogbooksRequest({ userId: currentUser.id }));
      if (currentUser.onboarded) router.push(ClientRoutes.LOGBOOKS);
    } else {
      router.push(ClientRoutes.LOGIN);
    }
  }, [currentUser]);

  useEffect(() => {
    if (logbooks) {
      const logbook = Object.values(logbooks)[0];
      dispatch(
        Sagas.fetchLogbookOverviewRequest({
          logbookId: logbook.id,
          userId: Helpers.userId,
        })
      );
    }
  }, [logbooks]);

  useEffect(() => {
    if (overviews) {
      const overview = Object.values(overviews)[0];
      dispatch(
        Sagas.fetchOverviewEntriesRequest({
          overviewId: overview.id,
          userId: Helpers.userId,
        })
      );
    }
  }, [overviews]);

  return (
    <main className={Styles.container}>
      <form
        className={`${Styles.form} ${Helpers.setBackgroundLevel(2)}`}
        onSubmit={nextPage}
      >
        <Components.OnboardingHeader page={page} />

        {page.value > 1 && Number(income.value) >= 0 && (
          <p className={Styles.highlight}>
            ${Helpers.formatRoundedCost(remainingBudget.value)} remaining
          </p>
        )}

        {page.value === 1 ? (
          <Components.OnboardingWelcome />
        ) : page.value === 2 ? (
          <DynamicIncome income={income} disabled={disabled} />
        ) : page.value === 3 ? (
          <DynamicSavings
            income={income}
            savings={savings}
            disabled={disabled}
          />
        ) : page.value === 4 ? (
          <DynamicRecurring purchases={recurringPurchases} />
        ) : page.value === 5 ? (
          <DynamicIncoming purchases={incomingPurchases} />
        ) : (
          <DynamicFinal />
        )}

        <Components.Button
          text={buttonText.value}
          rightIcon={<Components.ArrowRight width={14} fill={12} />}
          disabled={disabled}
          centered
          primary
          submit
        />
      </form>
    </main>
  );
};

export default Onboarding;
