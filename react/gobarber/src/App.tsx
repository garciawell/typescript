import React from 'react';
import { AuthProvider } from 'hooks/AuthContext';
import { ToastContainer } from 'components';
import GlobalStyle from './styles/global';
import { SignIn, SignUp } from './pages';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
