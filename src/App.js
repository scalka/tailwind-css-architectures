import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import UtilityFirst from "./utility-first-css";

function App() {
  return (
    <main>
      <h1>FED Guild cookbook</h1>
      <BrowserRouter>
        <div>
          <nav>
            <ol className="menu">
              <li>
                <Link to="/utility-first">Utility-first-CSS</Link>

                <div class="p-2 flex items-center justify-center">
                  <div class="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-teal text-sm">
                    <span class="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center">
                      Pink
                    </span>
                    <span class="inline-flex px-2">
                      {" "}
                      Why are you all wearing a cap!{" "}
                    </span>
                  </div>
                </div>

                <div class="flex items-center justify-center relative p-2">
                  <div class="rounded-full py-3 px-16 bg-pink-600 absolute top-0 left-200"></div>
                  <div class="rounded-full h-24 w-24 flex items-center justify-center bg-pink-600">
                    &nbsp;
                  </div>
                </div>
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
