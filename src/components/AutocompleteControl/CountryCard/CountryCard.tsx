import style from "./CountryCard.module.css";
import type { FC } from "react";

export type CountryCardProps = {
  name: string;
  fullName: string;
  flag: string;
  setNewValue: (v: string) => void;
};

export const CountryCard: FC<CountryCardProps> = ({
  name,
  fullName,
  flag,
  setNewValue,
}) => (
  <div className={style.container}>
    <div onClick={() => setNewValue(name)} className={style.name}>
      {name}
    </div>
    <div onClick={() => setNewValue(fullName)} className={style.fullName}>
      {fullName}
    </div>
    <div>
      <img src={flag} alt="flag" />
    </div>
  </div>
);
