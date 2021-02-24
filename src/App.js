import MainPage from "./components/MainPage";
import PageLoader from "./components/PageLoader"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>

    <Router>
    <Switch>
    <Route path="/" exact component={PageLoader}/>
    <Route path="/main" component={MainPage}/>
    </Switch>
    </Router>
  </>

  );

}

export default App;
