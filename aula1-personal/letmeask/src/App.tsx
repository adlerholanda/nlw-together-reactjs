import { Button } from "./components/Button";
import { ButtonCounter } from "./components/ButtonCounter";

function App() {
  return (
    <div>
      <h1>Hello World!</h1> {/* JSX */}
      <Button text="Go!"/>
      <button>Clique Children</button>
      <Button number={333}/>
      <ButtonCounter />
      <Button />
    </div>
  );
}

export default App;
