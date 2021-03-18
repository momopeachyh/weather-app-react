import "./App.css";
import SearchWeather from "./SearchWeather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-wrapper">
          <SearchWeather defaultCity="Chicago" />
          <Forecast />
        </div>

        <Footer />
      </div>
    </div>
  );
}
