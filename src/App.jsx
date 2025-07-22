import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CollapsibleExample from "./components/MyNav";
import HeaderAndFooterExample from "./components/MyFooter";
import AdditionalContentExample from "./components/MyWelcome";
import AllBooks from "./components/AllTheBooks";
function App() {
  return (
    <>
      <CollapsibleExample />
      <h2>LA TUA LIBRERIA!</h2>
      <AdditionalContentExample />
      <AllBooks />
      <HeaderAndFooterExample />
    </>
  );
}

export default App;
