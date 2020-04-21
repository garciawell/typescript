import React from 'react';
import GlobalStyle from './styles/global';
import { SignIn, SignUp } from './pages';

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
