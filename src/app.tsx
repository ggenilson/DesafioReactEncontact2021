import { FC } from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Footer from './components/Footer';

import TodosProvider from './contexts/todosContext';

const App: FC = () => (
  <TodosProvider>
    <Router history={history}>
      <GlobalStyle />

      <Header />

      <Routes />

      <Footer />
    </Router>
  </TodosProvider>
);

export default App;
