"use client";

import { Provider } from "react-redux";

import rootStore from "./store";

function StoreProvider(props: React.PropsWithChildren) {
  return <Provider store={rootStore}>{props?.children}</Provider>;
}

export default StoreProvider;
