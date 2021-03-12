import React from "react";
import "./App.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              placeholder="Enter a city"
              autoFocus="on"
              autoComplete="off"
              className="search-bar form-control shadow-sm"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="btn form-control shadow-sm search"
            />
          </div>
          <div className="col-2">
            <button type="button" className="btn form-control shadow-sm">
              <i className="fas fa-location-arrow"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
