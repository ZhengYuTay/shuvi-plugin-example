import { Models } from "@rematch/core";

export type SharksState = number;

export const sharks = {
  state: 0,
  reducers: {
    increment: (state: SharksState, payload: number): SharksState =>
      state + payload,
  },
};

export const models = { sharks };
export interface RootModel extends Models {
  sharks: typeof sharks;
}
