import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

// ApolloProvider - special type of React component that we'll use to provide data to all of the other components 
// ApolloClient - a constructor function that will help initialize the connection to the GraphQL API server
// InMemoryCache - enabled the Apollo Client instance to cache API response data so that we can perform requests more efficiently
// createHttpLink - allows us to control how the Apollo Client makes request (like middleware for outbound network requests)
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className='flex-column justify-flex-start min-100-vh'>
      <Header />
      <div className='container'>
        <Home />
      </div>
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;
