import Typeahead from "./component/Typeahead";
import fruitList from "./fruitList";
function App() {
  return (
    <div className="container">
      <Typeahead fruitProps={fruitList} />
    </div>
  );
}

export default App;
