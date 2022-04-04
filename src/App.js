import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QueryDetails from "./pages/QueryDetails";
import NewQuotes from "./pages/NewQuotes";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes/" />
      </Route>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QueryDetails />
      </Route>
      <Route path="/new-quote">
        <NewQuotes />
      </Route>
    </Switch>
  );
};

export default App;
