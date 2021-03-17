import "./App.css";
import Search from "./Search";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-wrapper">
          <Search defaultCity="Chicago" />
          <Forecast />
        </div>

        <Footer />
      </div>
    </div>
  );
}
