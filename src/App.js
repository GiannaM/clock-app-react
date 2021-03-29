import './App.css';
import Quote from "./Components/Quote/Quote";
import Time from "./Components/Time/Time";
import Expand from "./Components/Expand/Expand";
import Greeting from "./Components/Greeting/Greeting";
import ContextProvider from "./Components/ContentProvider";



function App() {
  return (
    <ContextProvider>
      <div className="App">
          <Quote/>
          <Greeting/>
          <Time/>
          <Expand/>
      </div>
    </ContextProvider>
  );
}

export default App;
