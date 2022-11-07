import id from "uniqid";
import { observer } from "mobx-react-lite";
import { ChangeEventHandler, useContext, useState } from "react";
import { useDebounce } from "../../hooks";
import { CountryCard } from "./CountryCard";
import { StoreContext } from "../../store/store.context";
import { Countries } from "../../store/AutoCompleteControl.store";
import style from "./AutocompleteControl.module.css";
import type { FC } from "react";

type AutocompleteControlProps = {
  maxNumber?: number;
};

export const AutocompleteControl: FC<AutocompleteControlProps> = observer(
  ({ maxNumber }) => {
    const [value, setValue] = useState("");
    const { autoCompleteControlStore } = useContext(StoreContext);
    const [countries, setCountries] = useState<Countries[]>([]);
    const { getCountries } = autoCompleteControlStore;

    const showCountries = useDebounce(
      async (value: string, maxNumber?: number) => {
        const countries = await getCountries(value, maxNumber);
        setCountries(countries);
      }
    );

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      setValue(e.target.value);
      showCountries(e.target.value, maxNumber);
    };

    const setNewValue = (str: string) => {
      setValue(str);
      showCountries(str, maxNumber);
    };

    return (
      <div className={style.countainer}>
        <input value={value} onChange={(e) => onChange(e)} />
        {!!countries.length &&
          countries.map(({ name, fullName, flag }) => (
            <CountryCard
              name={name}
              fullName={fullName}
              flag={flag}
              key={id()}
              setNewValue={setNewValue}
            />
          ))}
      </div>
    );
  }
);
