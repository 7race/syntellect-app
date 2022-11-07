import { makeAutoObservable } from "mobx";
import { getCountryByName } from "../api/apiService";

export type Countries = {
  name: string;
  fullName: string;
  flag: string;
};

export class AutoCompleteControlStore {
  constructor() {
    makeAutoObservable(this);
  }

  getCountries = async (countryPart: string, maxNumber?: number) => {
    try {
      const res = await getCountryByName(countryPart);

      const uniqCountries = Array.from(
        new Set(res.map((c) => JSON.stringify(c)))
      ).map((c) => JSON.parse(c));

      const countries = uniqCountries.slice(0, maxNumber);

      return [...countries] as Countries[];
    } catch (err) {
      throw err;
    }
  };
}
