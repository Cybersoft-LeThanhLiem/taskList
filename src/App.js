import {BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import taskList from './Pages/taskList';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={taskList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
