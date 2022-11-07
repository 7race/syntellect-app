import { createContext } from "react";
import { AutoCompleteControlStore } from "./AutoCompleteControl.store";

type StoreContextProps = {
  autoCompleteControlStore: AutoCompleteControlStore;
};

const autoCompleteControlStore = new AutoCompleteControlStore();

export const StoreContext = createContext<StoreContextProps>({
  autoCompleteControlStore,
});
