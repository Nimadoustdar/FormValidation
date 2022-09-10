import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login';
import SingUp from './SingUp';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/singup' component={SingUp}/>
        <Redirect from='/*' to='/singup'/>
      </Switch>
    </div>
  );
}

export default App;
