import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import UtilityFirst from "./utility-first-css";

function App() {
  return (
    <main>
      <h1>Styling in React</h1>
      <BrowserRouter>
        <div>
          <nav>
            <ol className="menu">
              <li>
                <Link to="/utility-first">Utility-first-CSS</Link>
              </li>
            </ol>
          </nav>
          <Switch>
            <Route path="/utility-first">
              {/* Utility-First-CSS: Tailwind CSS */}
              <UtilityFirst />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
