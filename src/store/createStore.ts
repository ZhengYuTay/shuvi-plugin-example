import { init, RematchRootState, RematchDispatch } from "@rematch/core";
import { models, RootModel } from "./models";

export type Dispatch = RematchDispatch<RootModel>;
export type iRootState = RematchRootState<RootModel>;

export const createStore = ({ initialState, ctx }: any) => {
  return init({
    models,
    redux: {
      initialState,
    },
  });
};
