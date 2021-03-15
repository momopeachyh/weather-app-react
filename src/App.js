import "./App.css";
import Search from "./Search";
import City from "./City";
import Date from "./Date";
import Overview from "./Overview";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="app-wrapper">
          <Search />
          <div className="row heading">
            <div className="col-6">
              <City />
              <Date />
            </div>
          </div>

          <div className="overview">
            <Overview />
          </div>

          <Forecast />
        </div>

        <Footer />
      </div>
    </div>
  );
}
