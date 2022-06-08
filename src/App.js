import { ValueProvider } from "./components/Context";
import Header from "./components/Header";
import Numbers from "./components/Numbers";
import Operations from "./components/Operations";
import './app.css'

function App() {
  return (
    <div className="App">
      <ValueProvider>
        <div className="container">
          <Header></Header>
          <div className="content">
          <Numbers></Numbers>
          <Operations></Operations>
          </div>
          </div>
      </ValueProvider>
    </div>
  );
}

//arrumar erro de calculo com virgula

export default App;
