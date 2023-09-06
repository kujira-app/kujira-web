import { createSelector } from "@reduxjs/toolkit";

import { ReduxStore } from "@/redux";

export const fetchEntryPurchases = createSelector(
  (state: ReduxStore) => state.entities.purchases,
  (state: ReduxStore, purchaseIds?: { id: number }[]) => purchaseIds,
  (purchases, purchaseIds) => {
    if (purchases && purchaseIds) {
      return purchaseIds.map(({ id: purchaseId }: { id: number }) => {
        if (purchases[purchaseId]) return purchases[purchaseId];
      });
    }
  }
);
