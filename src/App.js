import './App.css';
import 'semantic-ui-css/semantic.min.css'
import LoginForm from './components/LoginForm';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import MenuBar from './components/MenuBar';
import SearchCostumersView from "./components/costumers/SearchCostumersView";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";
import { tryLogin } from './redux';
import CostumerSelectedView from './components/costumers/CostumerSelectedView';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache()
});

const App = ()=> {

  const dispatch = useDispatch();
  const authenticated = useSelector(({auth}) => auth.authenticated);

  useEffect(() => {
		dispatch(tryLogin());
	}, [dispatch]);

  return (
    <ApolloProvider client={client}>
      <Router>
        {authenticated && <MenuBar/>}
        <Switch>
          {!authenticated ?
          <Route path="/" component={LoginForm} /> :
          <>
          <Route exact path="/" component={SearchCostumersView} />
          <Route path="/costumer" component={CostumerSelectedView} />
          </>}
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
