import "./App.css";
import SearchWeather from "./SearchWeather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-wrapper">
          <SearchWeather defaultCity="Chicago" />
        </div>

        <Footer />
      </div>
    </div>
  );
}
