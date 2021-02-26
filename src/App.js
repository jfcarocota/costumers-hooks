import './App.css';
import LoginForm from './components/LoginForm';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <LoginForm/>
    </ApolloProvider>
  );
}

export default App;
