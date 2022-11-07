import { AutocompleteControl } from "./components/AutocompleteControl/AutocompleteControl";
import { ButtonControl } from "./components/ButtonControl";
import style from "./App.module.css";

function App() {
  const clear = () => "";

  const helloWorld = () => "hello world";

  const isNumber = (inputText: string) => {
    if (+inputText) alert(inputText);
    return inputText;
  };

  const alertText = (inputText: string) => {
    alert(inputText);
    return inputText;
  };

  return (
    <div className={style.container}>
      <div className={style.containerButtonControl}>
        <ButtonControl
          buttonsLeft={[{ text: "check number", callback: isNumber }]}
          buttonsRight={[{ text: "alert", callback: alertText }]}
        />
        <ButtonControl
          buttonsRight={[
            { text: "clean", callback: clear },
            { text: "hello world", callback: helloWorld },
          ]}
        />
      </div>
      <div className={style.containerAutocompleteControl}>
        <AutocompleteControl maxNumber={3} />
        <AutocompleteControl maxNumber={10} />
      </div>
    </div>
  );
}

export default App;
