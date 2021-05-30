//import logo from './logo.svg';
import "./App.css";
import AppHeader from "./components/AppHeader";
import values from "./components/TicTacToeGame";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <AppHeader />
      <values.TicTacToeGame />
    </div>
  );
}

export default App;
