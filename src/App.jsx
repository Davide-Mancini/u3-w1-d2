import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CollapsibleExample from "./components/MyNav";
import HeaderAndFooterExample from "./components/MyFooter";
import AdditionalContentExample from "./components/MyWelcome";
import AllBooks from "./components/AllTheBooks";
import librifantasy from "./data/fantasy.json";
import BookList from "./components/BookList";
import libriscifi from "./data/scifi.json";
function App() {
  return (
    <>
      <CollapsibleExample />

      <BookList prop={(libriscifi, librifantasy)} />
      <h2>LA TUA LIBRERIA!</h2>
      <AdditionalContentExample />
      <AllBooks />
      <HeaderAndFooterExample />
    </>
  );
}

export default App;
