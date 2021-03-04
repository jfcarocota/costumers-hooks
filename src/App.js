import './App.css';
import LoginForm from './components/LoginForm';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import MenuBar from './components/MenuBar'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

const App = ()=> {
  return (
    <ApolloProvider client={client}>
      <MenuBar/>
      <LoginForm/>
    </ApolloProvider>
  );
}

export default App;
