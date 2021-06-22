import {BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import TaskList from './Pages/TaskList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TaskList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
